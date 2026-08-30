/**
 * inject-share.js
 * ---------------------------------------------------------------
 * 각 도구 페이지에 "링크 공유하기" 플로팅 버튼을 심습니다.
 *
 *   · 모바일 등 Web Share API 를 지원하는 브라우저 → OS 공유 시트가 뜬다
 *   · 지원하지 않으면 → 주소가 든 입력창 + 복사 버튼 팝업이 뜬다
 *
 * 버전 배지와 같은 이유로, 이 도구 페이지 파일 하나만 따로 올려도
 * 정상 작동하도록 자기 URL을 실행 시점에 다른 파일 없이 그 자리에서
 * 정적으로 굳혀 넣습니다.
 *
 * 사용법
 *   node inject-share.js            전체 도구
 *   node inject-share.js lotto      하나만
 *
 * 위치 : TOOLKIT:GUIDE_END 마커 바로 뒤 (VERSION 블록보다 앞).
 * position:fixed 라 문서 안 순서와 무관하게 항상 화면 오른쪽 아래에 뜬다.
 * 그래도 build-guides.js 를 다시 돌린 뒤에는 문서 순서 정리를 위해
 * inject-version.js 처럼 전체(node inject-share.js)를 한 번 더 돌린다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const SITE = 'https://mnledu.com';
const START = '<!-- TOOLKIT:SHARE_START · inject-share.js 가 관리합니다 -->';
const END = '<!-- TOOLKIT:SHARE_END -->';
const GUIDE_END = '<!-- TOOLKIT:GUIDE_END -->';

function loadCatalog(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA || [];
}

const koCatalog = loadCatalog('tools-data.js');
const enCatalog = loadCatalog('tools-data-en.js');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function widget(tool, lang) {
  const url = tool.url;
  const title = tool.title;
  const isKo = lang !== 'en';

  const L = isKo ? {
    label: '공유',
    heading: '이 도구 공유하기',
    copy: '링크 복사',
    copied: '복사됨',
    blocked: '복사가 막혔습니다. 직접 선택해 복사하세요',
    close: '닫기'
  } : {
    label: 'Share',
    heading: 'Share this tool',
    copy: 'Copy link',
    copied: 'Copied',
    blocked: 'Copy was blocked. Select the text instead',
    close: 'Close'
  };

  return [
    START,
    '<style>',
    '.tk-share-fab{position:fixed;right:18px;bottom:18px;z-index:2147483000;',
    '  display:inline-flex;align-items:center;gap:7px;padding:11px 16px;border-radius:999px;',
    '  font-family:\'Pretendard Variable\',Pretendard,system-ui,-apple-system,sans-serif;',
    '  font-size:13px;font-weight:700;color:#1e293b;cursor:pointer;',
    '  background:#ffffff;border:1px solid #e2e8f0;',
    '  box-shadow:0 2px 4px rgba(15,23,42,.06),0 8px 20px rgba(15,23,42,.10);',
    '  transition:transform .12s ease, box-shadow .12s ease;}',
    '.tk-share-fab:hover{transform:translateY(-1px);box-shadow:0 4px 8px rgba(15,23,42,.08),0 12px 26px rgba(15,23,42,.13);}',
    '.tk-share-fab:active{transform:translateY(0);}',
    '.tk-share-fab svg{width:16px;height:16px;flex:none;}',
    '.tk-share-backdrop{position:fixed;inset:0;z-index:2147483001;background:rgba(15,23,42,.35);',
    '  display:none;align-items:flex-end;justify-content:center;',
    '  font-family:\'Pretendard Variable\',Pretendard,system-ui,-apple-system,sans-serif;}',
    '@media(min-width:640px){.tk-share-backdrop{align-items:center;}}',
    '.tk-share-backdrop.open{display:flex;}',
    '.tk-share-card{width:100%;max-width:420px;background:#fff;border-radius:16px 16px 0 0;',
    '  padding:20px 20px calc(20px + env(safe-area-inset-bottom,0px));box-shadow:0 -8px 30px rgba(15,23,42,.18);}',
    '@media(min-width:640px){.tk-share-card{border-radius:16px;padding:22px;box-shadow:0 20px 50px rgba(15,23,42,.20);}}',
    '.tk-share-title{font-size:15px;font-weight:800;color:#0f172a;margin:0 0 12px;}',
    '.tk-share-row{display:flex;gap:8px;}',
    '.tk-share-input{flex:1;min-width:0;font-size:13px;color:#334155;background:#f8fafc;',
    '  border:1px solid #e2e8f0;border-radius:10px;padding:10px 12px;',
    '  font-family:ui-monospace,monospace;}',
    '.tk-share-copy{flex:none;font-size:13px;font-weight:700;color:#fff;background:#0f172a;',
    '  border:none;border-radius:10px;padding:10px 16px;cursor:pointer;white-space:nowrap;}',
    '.tk-share-copy:active{transform:scale(.97);}',
    '.tk-share-close{display:block;width:100%;margin-top:12px;text-align:center;',
    '  font-size:12.5px;color:#94a3b8;background:none;border:none;cursor:pointer;padding:6px;}',
    '</style>',
    '<button type="button" class="tk-share-fab" id="tkShareFab" aria-label="' + L.label + '">',
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.6" y1="10.6" x2="15.4" y2="6.4"/><line x1="8.6" y1="13.4" x2="15.4" y2="17.6"/></svg>',
    L.label,
    '</button>',
    '<div class="tk-share-backdrop" id="tkShareBackdrop">',
    '<div class="tk-share-card">',
    '<p class="tk-share-title">' + L.heading + '</p>',
    '<div class="tk-share-row">',
    '<input class="tk-share-input" id="tkShareInput" type="text" readonly value="' + esc(url) + '" onclick="this.select()" />',
    '<button type="button" class="tk-share-copy" id="tkShareCopy">' + L.copy + '</button>',
    '</div>',
    '<button type="button" class="tk-share-close" id="tkShareClose">' + L.close + '</button>',
    '</div>',
    '</div>',
    '<script>',
    '(function(){',
    '  var TK_SHARE_URL = ' + JSON.stringify(url) + ';',
    '  var TK_SHARE_TITLE = ' + JSON.stringify(title) + ';',
    '  var fab = document.getElementById("tkShareFab");',
    '  var backdrop = document.getElementById("tkShareBackdrop");',
    '  var input = document.getElementById("tkShareInput");',
    '  var copyBtn = document.getElementById("tkShareCopy");',
    '  var closeBtn = document.getElementById("tkShareClose");',
    '  var copyLabel = ' + JSON.stringify(L.copy) + ';',
    '  var copiedLabel = ' + JSON.stringify(L.copied) + ';',
    '  var blockedLabel = ' + JSON.stringify(L.blocked) + ';',
    '  function openPopup(){ backdrop.classList.add("open"); setTimeout(function(){ input.focus(); input.select(); }, 50); }',
    '  function closePopup(){ backdrop.classList.remove("open"); }',
    '  fab.addEventListener("click", function(){',
    '    if (navigator.share) {',
    '      navigator.share({ title: TK_SHARE_TITLE, url: TK_SHARE_URL }).catch(function(){});',
    '    } else {',
    '      openPopup();',
    '    }',
    '  });',
    '  closeBtn.addEventListener("click", closePopup);',
    '  backdrop.addEventListener("click", function(e){ if (e.target === backdrop) closePopup(); });',
    '  copyBtn.addEventListener("click", function(){',
    '    function done(ok){',
    '      copyBtn.textContent = ok ? copiedLabel : blockedLabel;',
    '      setTimeout(function(){ copyBtn.textContent = copyLabel; }, 1600);',
    '    }',
    '    if (navigator.clipboard && navigator.clipboard.writeText) {',
    '      navigator.clipboard.writeText(TK_SHARE_URL).then(function(){ done(true); }).catch(function(){ done(false); });',
    '    } else {',
    '      input.select();',
    '      try { done(document.execCommand("copy")); } catch (e) { done(false); }',
    '    }',
    '  });',
    '})();',
    '</script>',
    END
  ].join('\n');
}

function patchFile(rel, tool, lang) {
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

  html = html.slice(0, insertAt) + '\n' + widget(tool, lang) + html.slice(insertAt);
  fs.writeFileSync(file, html, 'utf8');
  return { rel: rel, status: '완료' };
}

const target = process.argv[2];
const koTargets = target ? koCatalog.filter(t => t.id === target) : koCatalog;
const enTargets = target ? enCatalog.filter(t => t.id === target) : enCatalog;

let ok = 0, fail = 0;
koTargets.forEach(t => {
  const r = patchFile(t.url.replace(SITE + '/', ''), t, 'ko');
  if (r.status === '완료') ok++; else { fail++; console.log('  ✗ ' + r.rel + ' : ' + r.status); }
});
enTargets.forEach(t => {
  const r = patchFile(t.url.replace(SITE + '/', ''), t, 'en');
  if (r.status === '완료') ok++; else { fail++; console.log('  ✗ ' + r.rel + ' : ' + r.status); }
});

console.log('\n공유 버튼 반영 : ' + ok + '개 파일' + (fail ? (', 실패 ' + fail + '건') : ''));
