/**
 * inject-viewcount.js
 * ---------------------------------------------------------------
 * 각 도구 페이지에 방문자 수 집계 신호를 심습니다.
 *
 * 2026-08-31 : Cloudflare Workers + KV 로 자체 운영 전환.
 * (예전엔 countapi.mileshilliard.com 같은 남의 무료 서비스를 썼는데,
 * countapi.xyz 가 실제로 서비스 종료된 걸 겪은 뒤 자체 운영으로 바꿨다.
 * Worker 는 mnledu 소유 Cloudflare 계정 안에서 돌아가므로 남의 서비스가
 * 죽어서 카운터가 통째로 안 뜨는 일이 없다.)
 *
 * Worker 는 이 계정 전용이라 키 충돌 걱정이 없어, 예전에 쓰던 접두어
 * (mnledu-com-toolkit-v1-) 는 걷어내고 도구 id 를 그대로 key 로 쓴다.
 *
 * "조회수"가 아니라 "방문자 수" 다 — 같은 브라우저에서 새로고침하거나
 * 다시 열어도 두 번 세지 않는다. localStorage 에 "이미 방문함" 표시를
 * 남겨 두고, 그 표시가 없을 때만 카운트를 1 늘린다. 브라우저를 지우거나
 * 다른 기기·브라우저로 오면 새로운 방문자로 다시 세어진다(기기 단위
 * 근사치이며, 진짜 사람 수는 아니다).
 *
 * 한국어판·영문판이 같은 도구를 가리키므로, 같은 key 를 공유해
 * "이 도구가 언어와 무관하게 총 몇 명에게 보였는지"를 센다.
 *
 * 사용법
 *   node inject-viewcount.js            전체 도구
 *   node inject-viewcount.js lotto      하나만
 *
 * 위치 : TOOLKIT:GUIDE_END 바로 뒤, SHARE/VERSION 보다 앞.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const SITE = 'https://mnledu.com';
const COUNTER_ENDPOINT = 'https://toolkit-counter.mnl-laboratoire.workers.dev';
const START = '<!-- TOOLKIT:VIEWCOUNT_START · inject-viewcount.js 가 관리합니다 -->';
const END = '<!-- TOOLKIT:VIEWCOUNT_END -->';
const GUIDE_END = '<!-- TOOLKIT:GUIDE_END -->';

function loadCatalog(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA || [];
}

const koCatalog = loadCatalog('tools-data.js');
const enCatalog = loadCatalog('tools-data-en.js');

function widget(toolId) {
  return [
    START,
    '<script>',
    '(function(){',
    '  var flagKey = "mnledu_visited_" + ' + JSON.stringify(toolId) + ';',
    '  try { if (localStorage.getItem(flagKey)) return; localStorage.setItem(flagKey, "1"); } catch (e) { return; }',
    '  fetch(' + JSON.stringify(COUNTER_ENDPOINT) + ' + "/hit/" + ' + JSON.stringify(toolId) + ').catch(function(){});',
    '})();',
    '</script>',
    END
  ].join('\n');
}

function patchFile(rel, toolId) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return { rel: rel, status: '파일없음' };

  let html = fs.readFileSync(file, 'utf8');

  const s = html.indexOf(START);
  if (s !== -1) {
    const e = html.indexOf(END);
    if (e !== -1) html = html.slice(0, s) + html.slice(e + END.length);
  }

  const gi = html.indexOf(GUIDE_END);
  if (gi === -1) return { rel: rel, status: 'GUIDE_END 마커 없음' };
  const insertAt = gi + GUIDE_END.length;

  html = html.slice(0, insertAt) + '\n' + widget(toolId) + html.slice(insertAt);
  fs.writeFileSync(file, html, 'utf8');
  return { rel: rel, status: '완료' };
}

const target = process.argv[2];
const koTargets = target ? koCatalog.filter(t => t.id === target) : koCatalog;
const enTargets = target ? enCatalog.filter(t => t.id === target) : enCatalog;

let ok = 0, fail = 0;
koTargets.forEach(t => {
  const r = patchFile(t.url.replace(SITE + '/', ''), t.id);
  if (r.status === '완료') ok++; else { fail++; console.log('  ✗ ' + r.rel + ' : ' + r.status); }
});
enTargets.forEach(t => {
  const r = patchFile(t.url.replace(SITE + '/', ''), t.id);
  if (r.status === '완료') ok++; else { fail++; console.log('  ✗ ' + r.rel + ' : ' + r.status); }
});

console.log('\n방문자 수 집계 스크립트 반영 : ' + ok + '개 파일' + (fail ? (', 실패 ' + fail + '건') : ''));
