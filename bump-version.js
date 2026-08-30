/**
 * bump-version.js
 * ---------------------------------------------------------------
 * 도구를 고칠 때마다 이걸로 버전을 기록합니다.
 *
 *   node bump-version.js <도구id> <버전> "<한 줄 메모>"
 *
 * 예
 *   node bump-version.js lotto 1.1 "메가밀리언 규칙을 최신 배당표로 갱신"
 *   node bump-version.js notepad 2.0 "글자 수 세기 방식을 바이트 기준으로 전면 개편"
 *
 * 오늘 날짜(시스템 날짜)로 기록하고, VERSIONS.json 을 갱신한 뒤
 * CHANGELOG.md 를 자동으로 다시 만듭니다.
 *
 * 버전 번호 규칙 (권장, 강제하지 않음)
 *   x.1  →  x.2   문구·스타일 손질, 버그 수정
 *   1.x  →  2.0   기능이 실질적으로 달라짐 (규칙 변경, 새 옵션 체계 등)
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = __dirname;
const [id, version, note] = process.argv.slice(2);

if (!id || !version || !note) {
  console.log('사용법 : node bump-version.js <도구id> <버전> "<한 줄 메모>"');
  console.log('예     : node bump-version.js lotto 1.1 "파워볼 배당표 갱신"');
  process.exit(1);
}

const versionsPath = path.join(ROOT, 'VERSIONS.json');
const versions = JSON.parse(fs.readFileSync(versionsPath, 'utf8'));

const today = new Date().toISOString().slice(0, 10);

if (!versions[id]) {
  versions[id] = { version, addedDate: today, history: [] };
  console.log('새 도구로 등록합니다 : ' + id);
} else if (versions[id].addedDate === 'untracked-baseline') {
  // 최초 제작일은 여전히 모르므로 addedDate 는 그대로 두고,
  // 오늘 손댄 기록만 history 에 남긴다.
  console.log('baseline 도구입니다. 최초 제작일은 그대로 두고 오늘 기록만 추가합니다.');
} 

versions[id].version = version;
versions[id].history = versions[id].history || [];
versions[id].history.push({ version, date: today, note });

fs.writeFileSync(versionsPath, JSON.stringify(versions, null, 2) + '\n', 'utf8');
console.log('VERSIONS.json 갱신 : ' + id + ' → v' + version + ' (' + today + ')');

execFileSync('node', ['build-changelog.js'], { cwd: ROOT, stdio: 'inherit' });
execFileSync('node', ['inject-version.js', id], { cwd: ROOT, stdio: 'inherit' });
