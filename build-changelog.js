/**
 * build-changelog.js
 * ---------------------------------------------------------------
 * VERSIONS.json 을 사람이 읽는 CHANGELOG.md 로 바꿉니다.
 *
 *   node build-changelog.js
 *
 * VERSIONS.json 을 손으로 고치지 마세요. 새 버전을 기록하려면
 * bump-version.js 를 쓰세요 — 그게 VERSIONS.json 을 갱신하고
 * 이 스크립트를 자동으로 다시 돌립니다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const versions = JSON.parse(fs.readFileSync(path.join(ROOT, 'VERSIONS.json'), 'utf8'));

function loadTitles() {
  const vm = require('vm');
  const titles = {};
  const file = path.join(ROOT, 'tools-data.js');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);
  (sandbox.window.TOOLS_DATA || []).forEach(t => { titles[t.id] = t.title; });
  return titles;
}

const TITLES = loadTitles();

// 날짜별로 묶는다. 'untracked-baseline' 은 맨 끝에 별도 섹션으로.
const byDate = {};
const baseline = [];

Object.keys(versions).forEach(id => {
  if (id === '_readme') return;
  const v = versions[id];
  const hist = v.history || [];
  if (v.addedDate === 'untracked-baseline' && hist.length === 0) {
    // 손댄 적 없는 baseline 도구 — 별도 섹션에만 표시
    baseline.push(id);
    return;
  }
  hist.forEach(h => {
    if (!byDate[h.date]) byDate[h.date] = [];
    byDate[h.date].push({ id, version: h.version, note: h.note });
  });
});

const dates = Object.keys(byDate).sort().reverse();

let out = '# CHANGELOG\n\n';
out += '이 파일은 자동 생성됩니다. 손으로 고치지 말고 `node bump-version.js` 로 기록을 남기세요.\n';
out += '원본은 `VERSIONS.json` 입니다.\n\n';

dates.forEach(date => {
  out += '## ' + date + '\n\n';
  byDate[date].forEach(e => {
    const title = TITLES[e.id] || e.id;
    out += '- **' + title + '** (`' + e.id + '`) v' + e.version + ' — ' + e.note + '\n';
  });
  out += '\n';
});

if (baseline.length) {
  out += '## 버전 관리 시작 이전부터 있던 도구\n\n';
  out += '아래는 버전 기록을 시작하기 전부터 이미 사이트에 있던 도구입니다.\n';
  out += '최초 제작일이 남아 있지 않아 지어내지 않았습니다. v1.0 으로 표시하며,\n';
  out += '앞으로 이 도구들을 고치면 정상적으로 날짜와 버전이 쌓입니다.\n\n';
  baseline.sort().forEach(id => {
    out += '- ' + (TITLES[id] || id) + ' (`' + id + '`)\n';
  });
  out += '\n';
}

fs.writeFileSync(path.join(ROOT, 'CHANGELOG.md'), out, 'utf8');
console.log('CHANGELOG.md 생성 완료 (' + dates.length + '개 날짜, baseline ' + baseline.length + '개)');
