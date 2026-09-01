/**
 * audit-siblings.js
 * ---------------------------------------------------------------
 * 각 도구 안내문 하단의 "같은 분류의 다른 도구" / "Other tools in
 * this category" 링크를 전수 검사한다.
 *
 * 확인 항목 (도구 하나당)
 *   1. 그 섹션 안의 모든 href 가 실제로 존재하는 파일을 가리키는가
 *   2. href 가 카탈로그(tools-data.js/en) 의 현재 url 과 정확히 일치하는가
 *      (예전 kr/en 마이그레이션 이전 주소가 그대로 남아있는 경우를 잡는다)
 *   3. 자기 자신을 링크하고 있지 않은가
 *   4. 링크된 도구가 실제로 같은 카테고리인가
 *      (카테고리가 바뀐 도구의 옛 흔적을 잡는다)
 *
 * --fix 옵션을 주면, 문제가 있는 도구의 사이드바 섹션을 현재 카탈로그
 * 기준으로 다시 만들어 통째로 교체한다 (build-guides.js 가 baseline
 * 도구에게 하는 것과 같은 일을, 안내문이 파일에 박혀 있는 도구에도
 * 적용). 안내문 자체(설명·FAQ)는 건드리지 않고 "같은 분류 도구" 링크
 * 목록만 교체한다.
 *
 * 사용법
 *   node audit-siblings.js            읽기 전용 보고서만
 *   node audit-siblings.js --fix      문제 있는 것만 자동 교정
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;
const SITE = 'https://mnledu.com';
const FIX = process.argv.includes('--fix');

function loadCatalog(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA || [];
}

const koCatalog = loadCatalog('tools-data.js');
const enCatalog = loadCatalog('tools-data-en.js');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// "같은 분류의 다른 도구" 섹션을 찾는다. 두 가지 패턴이 있다:
//  A) build-guides.js 가 만든 것 : <div class="tk-guide-more">...</div>
//  B) 직접 심어 넣은 안내문 안의 비슷한 구획 (id/class 이름이 조금씩 다를 수 있음)
// 실제로는 전부 class="tk-guide-more" 로 통일돼 있으므로 이걸 기준으로 찾는다.
function findSiblingBlock(html) {
  const startTag = '<div class="tk-guide-more">';
  const s = html.indexOf(startTag);
  if (s === -1) return null;
  // <div 열림/</div> 닫힘 깊이를 실제로 세어 이 div 가 정확히 끝나는 지점을 찾는다.
  // (형식이 </div></div> 로 끝나는 파일도 있고 </div> 하나로 끝나는 파일도 있어
  // 고정 문자열로는 못 찾는다)
  let depth = 0;
  let i = s;
  const openRe = /<div\b/g;
  const tagRe = /<\/?div\b[^>]*>/g;
  tagRe.lastIndex = s;
  let m;
  let end = -1;
  while ((m = tagRe.exec(html))) {
    if (m[0][1] === '/') { // </div>
      depth--;
      if (depth === 0) { end = m.index + m[0].length; break; }
    } else { // <div ...>
      depth++;
    }
  }
  if (end === -1) return null;
  return { start: s, end };
}

function auditFile(rel, tool, catalogById, lang) {
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return { rel, issues: ['파일 자체가 없음'] };

  const html = fs.readFileSync(file, 'utf8');
  const block = findSiblingBlock(html);
  const issues = [];

  if (!block) {
    // 안내문이 아예 없거나(bare tool) 형식이 다른 경우 — 별도 표시만
    return { rel, issues: [], noBlock: true };
  }

  const section = html.slice(block.start, block.end);
  const hrefs = [...section.matchAll(/href="([^"]+)"/g)].map(m => m[1]);

  hrefs.forEach(href => {
    const relPath = href.replace(SITE + '/', '');
    if (!fs.existsSync(path.join(ROOT, relPath))) {
      issues.push('존재하지 않는 파일: ' + href);
      return;
    }
    // 이 href 가 카탈로그의 어떤 도구와 일치하는지 찾는다
    const match = Object.values(catalogById).find(t => t.url === href);
    if (!match) {
      issues.push('카탈로그에 없는 주소(구주소 추정): ' + href);
      return;
    }
    if (match.id === tool.id) {
      issues.push('자기 자신을 링크함: ' + href);
    }
    if (match.category !== tool.category) {
      issues.push('다른 카테고리 도구가 섞임: ' + href + ' (' + match.category + ')');
    }
  });

  return { rel, issues, block };
}

function buildSiblingBlockHtml(tool, catalog, lang) {
  const siblings = catalog.filter(t => t.category === tool.category && t.id !== tool.id).slice(0, 6);
  const heading = lang === 'en' ? 'Other tools in this category' : '같은 분류의 다른 도구';
  const items = siblings.map(s => '<li><a href="' + s.url + '">' + esc(s.title) + '</a></li>').join('');
  return '<div class="tk-guide-more"><h2>' + heading + '</h2><ul>' + items + '</ul></div>';
}

/* ── 실행 ──────────────────────────────────────────────────── */

const koById = {}; koCatalog.forEach(t => { koById[t.id] = t; });
const enById = {}; enCatalog.forEach(t => { enById[t.id] = t; });

let totalIssues = 0, filesWithIssues = 0, noBlockCount = 0, fixedCount = 0;

function run(catalog, byId, lang) {
  catalog.forEach(tool => {
    const rel = tool.url.replace(SITE + '/', '');
    const result = auditFile(rel, tool, byId, lang);

    if (result.noBlock) { noBlockCount++; return; }
    if (!result.issues || result.issues.length === 0) return;

    filesWithIssues++;
    totalIssues += result.issues.length;
    console.log('\n✗ ' + rel);
    result.issues.forEach(i => console.log('   - ' + i));

    if (FIX && result.block) {
      const file = path.join(ROOT, rel);
      let html = fs.readFileSync(file, 'utf8');
      const newBlock = buildSiblingBlockHtml(tool, catalog, lang);
      html = html.slice(0, result.block.start) + newBlock + html.slice(result.block.end);
      fs.writeFileSync(file, html, 'utf8');
      fixedCount++;
      console.log('   → 교정 완료');
    }
  });
}

run(koCatalog, koById, 'ko');
run(enCatalog, enById, 'en');

console.log('\n' + '='.repeat(50));
console.log('검사 대상 : ' + (koCatalog.length + enCatalog.length) + '개 파일');
console.log('링크 섹션 없음(제외) : ' + noBlockCount + '개');
console.log('문제 있는 파일 : ' + filesWithIssues + '개, 총 ' + totalIssues + '건');
if (FIX) console.log('교정 완료 : ' + fixedCount + '개 파일');
else if (filesWithIssues > 0) console.log('\n실제로 고치려면: node audit-siblings.js --fix');
