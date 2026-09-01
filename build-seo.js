/**
 * build-seo.js
 * ---------------------------------------------------------------
 * tools-data.js 를 읽어서 아래 세 가지를 만듭니다.
 *
 *   1. sitemap.xml            : 메인 + 정보 페이지 + 도구 전체
 *   2. index.html 도구 링크    : 크롤러가 따라갈 수 있는 <a> 목록
 *   3. index.html 구조화 데이터 : ItemList JSON-LD
 *
 * 사용법 :  node build-seo.js
 * 도구를 추가하거나 이름을 바꾼 뒤에 다시 실행하면 됩니다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* ── 설정 ────────────────────────────────────────────────── */

const SITE = 'https://mnledu.com';           // 끝에 슬래시 없이
const ROOT = __dirname;                      // 저장소 루트 기준으로 실행

// 도구 외에 사이트맵에 넣을 페이지
const STATIC_PAGES = [
  { loc: '/',             priority: '1.0', changefreq: 'weekly'  },
  { loc: '/about.html',   priority: '0.5', changefreq: 'yearly'  },
  { loc: '/contact.html', priority: '0.5', changefreq: 'yearly'  },
  { loc: '/privacy.html', priority: '0.3', changefreq: 'yearly'  },
  { loc: '/terms.html',   priority: '0.3', changefreq: 'yearly'  },
  { loc: '/en/',             priority: '0.9', changefreq: 'weekly' },
  { loc: '/en/about.html',   priority: '0.4', changefreq: 'yearly' },
  { loc: '/en/contact.html', priority: '0.4', changefreq: 'yearly' },
  { loc: '/en/privacy.html', priority: '0.3', changefreq: 'yearly' },
  { loc: '/en/terms.html',   priority: '0.3', changefreq: 'yearly' }
];

/* ── tools-data.js 읽기 ──────────────────────────────────── */

function loadToolsEn() {
  const file = path.join(ROOT, 'tools-data-en.js');
  if (!fs.existsSync(file)) return [];
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA || [];
}

function loadTools() {
  const file = path.join(ROOT, 'tools-data.js');
  if (!fs.existsSync(file)) {
    throw new Error('tools-data.js 를 찾을 수 없습니다. 저장소 루트에서 실행하세요.');
  }
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(file, 'utf8'), sandbox);

  const data = sandbox.window.TOOLS_DATA || sandbox.TOOLS_DATA;
  if (!Array.isArray(data) || !data.length) {
    throw new Error('TOOLS_DATA 배열을 읽지 못했습니다.');
  }
  return data;
}

/* ── 상대 경로를 절대 주소로 ─────────────────────────────── */

function absolute(url) {
  if (/^https?:\/\//i.test(url)) return url;
  let p = String(url).replace(/^\.\//, '').replace(/^\//, '');
  return SITE + '/' + p;
}

function xmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function htmlEscape(s) {
  return String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ── 1. sitemap.xml ──────────────────────────────────────── */

function altLinks(koUrl, enUrl) {
  return '    <xhtml:link rel="alternate" hreflang="ko" href="' + xmlEscape(koUrl) + '"/>\n' +
         '    <xhtml:link rel="alternate" hreflang="en" href="' + xmlEscape(enUrl) + '"/>\n' +
         '    <xhtml:link rel="alternate" hreflang="x-default" href="' + xmlEscape(koUrl) + '"/>\n';
}

function buildSitemap(tools, toolsEn) {
  const today = new Date().toISOString().slice(0, 10);
  const enById = {};
  toolsEn.forEach(t => { enById[t.id] = t; });

  const staticEntries = STATIC_PAGES.map(p =>
    '  <url>\n' +
    '    <loc>' + xmlEscape(SITE + p.loc) + '</loc>\n' +
    '    <lastmod>' + today + '</lastmod>\n' +
    '    <changefreq>' + p.changefreq + '</changefreq>\n' +
    '    <priority>' + p.priority + '</priority>\n' +
    '  </url>'
  );

  const toolEntries = [];
  tools.forEach(t => {
    const en = enById[t.id];
    const ko = absolute(t.url);
    const alt = en ? altLinks(ko, absolute(en.url)) : '';
    toolEntries.push('  <url>\n' +
      '    <loc>' + xmlEscape(ko) + '</loc>\n' + alt +
      '    <lastmod>' + today + '</lastmod>\n' +
      '    <changefreq>monthly</changefreq>\n' +
      '    <priority>0.8</priority>\n' +
      '  </url>');
    if (en) {
      toolEntries.push('  <url>\n' +
        '    <loc>' + xmlEscape(absolute(en.url)) + '</loc>\n' + altLinks(ko, absolute(en.url)) +
        '    <lastmod>' + today + '</lastmod>\n' +
        '    <changefreq>monthly</changefreq>\n' +
        '    <priority>0.8</priority>\n' +
        '  </url>');
    }
  });

  // 한국어판이 없는 영문 전용 도구 (예: pdf-to-markdown) — 위 루프는
  // 한국어 카탈로그를 기준으로 돌아서 이런 도구는 그냥 빠져 버린다.
  // 자기 자신만 가리키는 hreflang(en + x-default=en, ko 없음)으로 별도 추가.
  const koIds = {};
  tools.forEach(t => { koIds[t.id] = true; });
  toolsEn.forEach(t => {
    if (koIds[t.id]) return; // 이미 위에서 처리됨
    const enUrl = absolute(t.url);
    toolEntries.push('  <url>\n' +
      '    <loc>' + xmlEscape(enUrl) + '</loc>\n' +
      '    <xhtml:link rel="alternate" hreflang="en" href="' + xmlEscape(enUrl) + '"/>\n' +
      '    <xhtml:link rel="alternate" hreflang="x-default" href="' + xmlEscape(enUrl) + '"/>\n' +
      '    <lastmod>' + today + '</lastmod>\n' +
      '    <changefreq>monthly</changefreq>\n' +
      '    <priority>0.8</priority>\n' +
      '  </url>');
  });

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n' +
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    staticEntries.concat(toolEntries).join('\n') + '\n' +
    '</urlset>\n';

  fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml, 'utf8');
  return STATIC_PAGES.length + toolEntries.length;
}

/* ── 2·3. index.html 채우기 ──────────────────────────────── */

function fillBlock(html, startMark, endMark, content, label) {
  const start = html.indexOf(startMark);
  const end = html.indexOf(endMark);
  if (start === -1 || end === -1) {
    throw new Error(label + ' 표시 주석을 index.html 에서 찾지 못했습니다.');
  }
  return html.slice(0, start + startMark.length) + '\n' + content + '\n            ' + html.slice(end);
}

function buildIndex(tools, target) {
  const file = path.join(ROOT, target || 'index.html');
  if (!fs.existsSync(file)) return;
  let html = fs.readFileSync(file, 'utf8');

  /* 도구 링크 목록 */
  const links = tools.map(t =>
    '            <li>' +
    '<a href="' + htmlEscape(absolute(t.url)) + '" ' +
    'class="text-slate-600 hover:text-indigo-600 transition-colors">' +
    '<span class="font-semibold">' + htmlEscape(t.title) + '</span>' +
    '<span class="text-slate-400"> · ' + htmlEscape(t.desc) + '</span>' +
    '</a></li>'
  ).join('\n');

  html = fillBlock(html,
    '<!-- TOOLKIT:TOOL_LINKS_START -->',
    '<!-- TOOLKIT:TOOL_LINKS_END -->',
    links, '도구 링크');

  /* ItemList 구조화 데이터 */
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: (target && target.indexOf('en') === 0) ? 'TOOLKIT web tools' : 'TOOLKIT 웹 유틸리티 목록',
    numberOfItems: tools.length,
    itemListElement: tools.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: t.title,
        description: t.desc,
        url: absolute(t.url),
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        inLanguage: 'ko-KR',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' }
      }
    }))
  };

  const script =
    '<script type="application/ld+json">\n' +
    JSON.stringify(itemList, null, 2) +
    '\n</script>';

  html = fillBlock(html,
    '<!-- TOOLKIT:ITEMLIST_START -->',
    '<!-- TOOLKIT:ITEMLIST_END -->',
    script, '구조화 데이터');

  fs.writeFileSync(file, html, 'utf8');
}

/* ── 실행 ────────────────────────────────────────────────── */

try {
  const tools = loadTools();
  const toolsEn = loadToolsEn();
  const count = buildSitemap(tools, toolsEn);
  buildIndex(tools, 'index.html');
  if (toolsEn.length) buildIndex(toolsEn, path.join('en', 'index.html'));

  console.log('도구 ' + tools.length + '개 (영문 ' + toolsEn.length + '개) 를 읽었습니다.');
  console.log('sitemap.xml : 주소 ' + count + '개');
  console.log('index.html  : 도구 링크와 구조화 데이터를 채웠습니다.');
  if (toolsEn.length) console.log('en/index.html : 영문 도구 링크를 채웠습니다.');
} catch (e) {
  console.error('실패 : ' + e.message);
  process.exit(1);
}
