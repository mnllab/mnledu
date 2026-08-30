/**
 * inject-version.js
 * ---------------------------------------------------------------
 * VERSIONS.json 을 읽어 각 도구 페이지 "안에" 버전 배지와 히스토리를
 * 그 자리에서 구워 넣습니다. 저작권 증빙용으로 외부에 공개되는
 * 부분이라, 이 페이지 파일 하나만 따로 올려도 (사이트 전체를 같이
 * 안 올려도) 버전·날짜·히스토리가 그대로 보이도록 실행 시점에
 * 다른 파일을 불러오지 않고 값을 정적으로 박아 넣습니다.
 *
 * 사용법
 *   node inject-version.js            전체 도구
 *   node inject-version.js lotto       하나만
 *
 * bump-version.js 가 버전을 기록한 뒤 해당 도구에 대해 자동으로 이 스크립트를 부릅니다.
 * 새 도구를 추가해 build-guides.js 를 다시 돌린 뒤에는 위치가 밀릴 수 있으므로
 * (아래 "왜 GUIDE_END 뒤에 넣는가" 참고) 전체(node inject-version.js)를 한 번 더 돌립니다.
 *
 * 왜 GUIDE_END 바로 뒤에 넣는가
 *   build-guides.js 는 TOOLKIT:GUIDE_START~END 사이를 통째로 지우고
 *   </body> 바로 앞에 새로 만든 안내문을 다시 꽂는다. 버전 배지를
 *   안내문 "안"에 넣으면 build-guides.js 가 돌 때마다 같이 사라진다.
 *   그래서 안내문 "바깥", GUIDE_END 마커 바로 뒤에 별도 마커로 넣는다.
 *   이러면 build-guides.js 가 다시 돌아도(가끔 버전 배지가 안내문보다
 *   위로 밀릴 수 있음) 이 스크립트를 한 번 더 돌리면 다시 맨 끝으로
 *   정리된다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const SITE = 'https://mnledu.com';
const START = '<!-- TOOLKIT:VERSION_START · inject-version.js 가 관리합니다 -->';
const END = '<!-- TOOLKIT:VERSION_END -->';
const GUIDE_END = '<!-- TOOLKIT:GUIDE_END -->';

function loadCatalog(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA || [];
}

const versions = JSON.parse(fs.readFileSync(path.join(ROOT, 'VERSIONS.json'), 'utf8'));
const koCatalog = loadCatalog('tools-data.js');
const enCatalog = loadCatalog('tools-data-en.js');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function widget(v) {
  const hist = (v.history || []).slice().reverse(); // 최신이 위로
  const latest = hist[0];
  const badge = latest
    ? 'v' + esc(latest.version) + ' &middot; ' + esc(latest.date)
    : 'v' + esc(v.version) + ' &middot; 버전 기록 시작 전';

  const rows = hist.length
    ? hist.map(function (h) {
        return '<li><span class="tk-version-num">v' + esc(h.version) + '</span>' +
          '<span class="tk-version-date">' + esc(h.date) + '</span>' +
          '<span class="tk-version-note">' + esc(h.note) + '</span></li>';
      }).join('')
    : '<li class="tk-version-empty">이 도구는 아직 버전 기록이 없습니다.</li>';

  return [
    START,
    '<style>',
    '.tk-version{margin:22px auto 0;max-width:720px;padding:0 20px;',
    '  font-family:\'Pretendard Variable\',Pretendard,system-ui,-apple-system,sans-serif;text-align:left}',
    '.tk-version-toggle{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;',
    '  border-radius:999px;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;',
    '  font-size:12px;font-weight:600;cursor:pointer;transition:background .15s ease;',
    '  font-family:ui-monospace,monospace}',
    '.tk-version-toggle:hover{background:#f1f5f9;color:#334155}',
    '.tk-version-toggle .tk-v-arrow{font-size:9px;transition:transform .15s ease;font-family:inherit}',
    '.tk-version-toggle[aria-expanded="true"] .tk-v-arrow{transform:rotate(180deg)}',
    '.tk-version-history{list-style:none;margin:10px 0 0;padding:0;max-width:520px;',
    '  border-top:1px solid #e2e8f0}',
    '.tk-version-history li{display:flex;flex-wrap:wrap;gap:3px 10px;align-items:baseline;',
    '  padding:9px 0;border-bottom:1px solid #f1f5f9;font-size:12.5px;color:#64748b}',
    '.tk-version-num{font-family:ui-monospace,monospace;font-weight:700;color:#334155;min-width:36px}',
    '.tk-version-date{font-family:ui-monospace,monospace;color:#94a3b8}',
    '.tk-version-note{flex-basis:100%;color:#64748b;line-height:1.55}',
    '.tk-version-empty{padding:9px 0;font-size:12.5px;color:#94a3b8}',
    '</style>',
    '<div class="tk-version">',
    '<button type="button" class="tk-version-toggle" aria-expanded="false" ' +
      'onclick="var h=this.nextElementSibling,o=this.getAttribute(\'aria-expanded\')===\'true\';' +
      'this.setAttribute(\'aria-expanded\',String(!o));h.hidden=o;">' +
      '<span>' + badge + '</span><span class="tk-v-arrow">&#9662;</span>' +
    '</button>',
    '<ul class="tk-version-history" hidden>' + rows + '</ul>',
    '</div>',
    END
  ].join('\n');
}

function patchFile(rel, v) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return { rel: rel, status: '파일없음' };

  let html = fs.readFileSync(file, 'utf8');

  // 기존 버전 블록 제거 (있으면)
  const s = html.indexOf(START);
  if (s !== -1) {
    const e = html.indexOf(END);
    if (e !== -1) html = html.slice(0, s) + html.slice(e + END.length);
  }

  const gi = html.indexOf(GUIDE_END);
  if (gi === -1) return { rel: rel, status: 'GUIDE_END 마커 없음' };
  const insertAt = gi + GUIDE_END.length;

  html = html.slice(0, insertAt) + '\n' + widget(v) + html.slice(insertAt);
  fs.writeFileSync(file, html, 'utf8');
  return { rel: rel, status: '완료' };
}

const target = process.argv[2];
const ids = target ? [target] : Object.keys(versions).filter(function (k) { return k !== '_readme'; });

let ok = 0, fail = 0;
ids.forEach(function (id) {
  const v = versions[id];
  if (!v) { console.log('  ✗ ' + id + ' : VERSIONS.json 에 없음'); fail++; return; }

  const koTool = koCatalog.filter(function (t) { return t.id === id; })[0];
  const enTool = enCatalog.filter(function (t) { return t.id === id; })[0];

  [koTool, enTool].forEach(function (t) {
    if (!t) return;
    const rel = t.url.replace(SITE + '/', '');
    const r = patchFile(rel, v);
    if (r.status === '완료') { ok++; }
    else { fail++; console.log('  ✗ ' + r.rel + ' : ' + r.status); }
  });
});

console.log('\n버전 배지 반영 : ' + ok + '개 파일' + (fail ? (', 실패 ' + fail + '건') : ''));
