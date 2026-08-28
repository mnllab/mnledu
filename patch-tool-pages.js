/**
 * patch-tool-pages.js
 * ---------------------------------------------------------------
 * tools-data.js 를 읽어서 31개 도구 페이지의 <head> 에
 * 페이지마다 다른 SEO 정보를 넣습니다.
 *
 *   · <title>           도구 이름 + 검색 키워드
 *   · meta description  도구 설명 기반 (페이지마다 전부 다름)
 *   · canonical
 *   · Open Graph · 트위터 카드
 *   · SoftwareApplication · BreadcrumbList 구조화 데이터
 *
 * 사용법
 *   node patch-tool-pages.js --dry-run   변경 내용만 확인
 *   node patch-tool-pages.js             실제 적용 (.bak 백업 생성)
 *   node patch-tool-pages.js --no-backup 백업 없이 적용
 *
 * 여러 번 실행해도 안전합니다. 표시 주석 사이 내용만 새로 씁니다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://mnledu.com';
const ROOT = __dirname;

const DRY = process.argv.includes('--dry-run');
const NO_BACKUP = process.argv.includes('--no-backup');

const START = '<!-- TOOLKIT:SEO_START · patch-tool-pages.js 가 관리합니다. 직접 고치지 마세요 -->';
const END = '<!-- TOOLKIT:SEO_END -->';

/* ── tools-data.js 읽기 ──────────────────────────────────── */

const EN_BY_ID = (function () {
  const file = path.join(ROOT, 'tools-data-en.js');
  const map = {};
  if (!fs.existsSync(file)) return map;
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);
  (sandbox.window.TOOLS_DATA || []).forEach(function (t) { map[t.id] = t; });
  return map;
})();

function loadTools() {
  const file = path.join(ROOT, 'tools-data.js');
  if (!fs.existsSync(file)) throw new Error('tools-data.js 를 찾을 수 없습니다.');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);
  const data = sandbox.window.TOOLS_DATA;
  if (!Array.isArray(data) || !data.length) throw new Error('TOOLS_DATA 를 읽지 못했습니다.');
  return data;
}

/* ── 문자열 도구 ─────────────────────────────────────────── */

function esc(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// 해시태그를 검색어처럼 다듬습니다  '#글자수' → '글자 수 세기' 같은 사전 매핑 우선
const TAG_WORD = {
  '#글자수': '글자 수 세기',
  '#문서작성': '문서 작성',
  '#자동정리': '자동 정리',
  '#대량처리': '대량 처리',
  '#개인정보': '개인정보 비식별화',
  '#쉬는시간': '심심풀이 게임'
};

function keywordFrom(tool) {
  const tags = Array.isArray(tool.tags) ? tool.tags : [];
  const words = tags.slice(0, 2).map(t => TAG_WORD[t] || t.replace(/^#/, ''));
  return words.join(' · ');
}

function buildTitle(tool) {
  const kw = keywordFrom(tool);
  const base = kw ? tool.title + ' · ' + kw : tool.title;
  // 검색 결과에서 잘리지 않게 대략 42자로 제한한 뒤 브랜드를 붙입니다
  const trimmed = base.length > 42 ? tool.title : base;
  return trimmed + ' | TOOLKIT';
}

function buildDescription(tool) {
  const tail = ' 설치와 로그인 없이 브라우저에서 바로 실행되며, 입력한 내용은 서버로 전송되지 않습니다.';
  let d = String(tool.desc || '').trim();
  if (d.length + tail.length > 158) d = d.slice(0, 158 - tail.length - 1).trim() + '…';
  return d + tail;
}

function categoryFolder(url) {
  const m = String(url).replace(SITE + '/', '').split('/');
  return m.length > 1 ? m[0] : '';
}

/* ── SEO 블록 만들기 ─────────────────────────────────────── */

function buildBlock(tool) {
  const enUrl = (EN_BY_ID[tool.id] || {}).url || '';
  const url = tool.url;
  const title = buildTitle(tool);
  const desc = buildDescription(tool);
  const folder = categoryFolder(url);

  const app = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.title,
    description: tool.desc,
    url: url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    inLanguage: 'ko-KR',
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
    author: { '@type': 'Person', name: '김장길', url: SITE + '/about.html' },
    publisher: { '@type': 'Person', name: '김장길', url: SITE + '/about.html' },
    isPartOf: { '@type': 'WebSite', name: 'TOOLKIT', url: SITE + '/' }
  };

  const crumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'TOOLKIT', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: tool.category, item: SITE + '/#' + folder },
      { '@type': 'ListItem', position: 3, name: tool.title, item: url }
    ]
  };

  return [
    START,
    '<meta name="description" content="' + esc(desc) + '" />',
    '<meta name="author" content="Janggil Kim" />',
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    '<link rel="canonical" href="' + esc(url) + '" />',
    (enUrl ? '<link rel="alternate" hreflang="ko" href="' + esc(url) + '" />' : ''),
    (enUrl ? '<link rel="alternate" hreflang="en" href="' + esc(enUrl) + '" />' : ''),
    (enUrl ? '<link rel="alternate" hreflang="x-default" href="' + esc(url) + '" />' : ''),
    '',
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="TOOLKIT" />',
    '<meta property="og:locale" content="ko_KR" />',
    '<meta property="og:url" content="' + esc(url) + '" />',
    '<meta property="og:title" content="' + esc(title) + '" />',
    '<meta property="og:description" content="' + esc(desc) + '" />',
    '<meta property="og:image" content="' + SITE + '/og-image.png" />',
    '',
    '<meta name="twitter:card" content="summary_large_image" />',
    '<meta name="twitter:title" content="' + esc(title) + '" />',
    '<meta name="twitter:description" content="' + esc(desc) + '" />',
    '<meta name="twitter:image" content="' + SITE + '/og-image.png" />',
    '',
    '<script type="application/ld+json">',
    JSON.stringify(app, null, 2),
    '</script>',
    '<script type="application/ld+json">',
    JSON.stringify(crumb, null, 2),
    '</script>',
    END
  ].join('\n');
}

/* ── 기존 태그 정리 ──────────────────────────────────────── */
// 관리 블록 밖에 남아 있는 중복 태그를 지웁니다
const STRIP_PATTERNS = [
  /^[ \t]*<meta\s+name=["']description["'][^>]*>\s*$/gim,
  /^[ \t]*<meta\s+name=["']keywords["'][^>]*>\s*$/gim,
  /^[ \t]*<meta\s+name=["']robots["'][^>]*>\s*$/gim,
  /^[ \t]*<link\s+rel=["']canonical["'][^>]*>\s*$/gim,
  /^[ \t]*<meta\s+property=["']og:[^"']*["'][^>]*>\s*$/gim,
  /^[ \t]*<meta\s+name=["']twitter:[^"']*["'][^>]*>\s*$/gim
];

function stripOld(head) {
  let out = head;
  STRIP_PATTERNS.forEach(re => { out = out.replace(re, ''); });
  return out.replace(/\n{3,}/g, '\n\n');
}

/* ── 페이지 하나 처리 ────────────────────────────────────── */

function patch(tool) {
  const rel = String(tool.url).replace(SITE + '/', '');
  const file = path.join(ROOT, rel);

  if (!fs.existsSync(file)) return { id: tool.id, status: '없음', file: rel };

  const original = fs.readFileSync(file, 'utf8');
  let html = original;

  // 이미 넣었던 블록은 통째로 제거
  const s = html.indexOf(START);
  if (s !== -1) {
    const e = html.indexOf(END);
    if (e !== -1) html = html.slice(0, s) + html.slice(e + END.length);
  }

  const headStart = html.search(/<head[^>]*>/i);
  const headEnd = html.search(/<\/head>/i);
  if (headStart === -1 || headEnd === -1) return { id: tool.id, status: '헤드없음', file: rel };

  const openLen = html.match(/<head[^>]*>/i)[0].length;
  let head = html.slice(headStart + openLen, headEnd);
  const before = html.slice(0, headStart + openLen);
  const after = html.slice(headEnd);

  head = stripOld(head);

  // <title> 교체 (없으면 새로 넣습니다)
  const newTitle = '<title>' + esc(buildTitle(tool)) + '</title>';
  if (/<title>[\s\S]*?<\/title>/i.test(head)) {
    head = head.replace(/<title>[\s\S]*?<\/title>/i, newTitle);
  } else {
    head = '\n' + newTitle + head;
  }

  // title 바로 뒤에 SEO 블록 삽입
  head = head.replace(newTitle, newTitle + '\n\n' + buildBlock(tool) + '\n');

  const result = before + head + after;

  if (result === original) return { id: tool.id, status: '변경없음', file: rel };

  if (!DRY) {
    if (!NO_BACKUP) fs.writeFileSync(file + '.bak', original, 'utf8');
    fs.writeFileSync(file, result, 'utf8');
  }
  return { id: tool.id, status: DRY ? '변경예정' : '완료', file: rel, title: buildTitle(tool) };
}

/* ── 실행 ────────────────────────────────────────────────── */

try {
  const tools = loadTools();
  const rows = tools.map(patch);

  const done = rows.filter(r => r.status === '완료' || r.status === '변경예정');
  const missing = rows.filter(r => r.status === '없음');
  const noHead = rows.filter(r => r.status === '헤드없음');

  console.log((DRY ? '[미리보기] ' : '') + '도구 ' + tools.length + '개 중 ' + done.length + '개 처리\n');
  done.forEach(r => console.log('  ' + r.file + '\n    → ' + r.title));

  if (missing.length) {
    console.log('\n파일을 찾지 못했습니다 (' + missing.length + '개)');
    missing.forEach(r => console.log('  ' + r.file));
  }
  if (noHead.length) {
    console.log('\n<head> 를 찾지 못했습니다 (' + noHead.length + '개)');
    noHead.forEach(r => console.log('  ' + r.file));
  }
  if (!DRY && !NO_BACKUP && done.length) {
    console.log('\n원본은 같은 위치에 .bak 으로 남겼습니다.');
    console.log('확인 후 지우려면 : find . -name "*.html.bak" -delete');
  }
} catch (e) {
  console.error('실패 : ' + e.message);
  process.exit(1);
}
