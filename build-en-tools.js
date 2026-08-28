/**
 * build-en-tools.js
 * ---------------------------------------------------------------
 * 한국어 도구 페이지를 바탕으로 영문판 /en/<카테고리>/<파일> 을 만듭니다.
 *
 * 도구 하나마다 en-tools/<id>.js 에 아래를 적어둡니다.
 *   patches  : 코드나 기본값을 바꾸는 정확한 문자열 쌍 (먼저 적용)
 *   strings  : 화면 문구 번역 쌍 (긴 것부터 자동 정렬)
 *   guide    : 영문 안내문 (없으면 안내문 없이 생성)
 *
 * 사용법
 *   node build-en-tools.js            en-tools 에 있는 것 전부
 *   node build-en-tools.js lotto      특정 도구만
 *   node build-en-tools.js --list     준비된 것과 남은 것 확인
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://mnledu.com';
const ROOT = __dirname;
const MODDIR = path.join(ROOT, 'en-tools');

const SEO_START = '<!-- TOOLKIT:SEO_START · patch-tool-pages.js 가 관리합니다. 직접 고치지 마세요 -->';
const SEO_END = '<!-- TOOLKIT:SEO_END -->';
const GUIDE_START = '<!-- TOOLKIT:GUIDE_START · build-guides.js 가 관리합니다 -->';
const GUIDE_END = '<!-- TOOLKIT:GUIDE_END -->';

/* ── 자료 읽기 ───────────────────────────────────────────── */
function load(file, key) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window[key] || [];
}
const KO = load('tools-data.js', 'TOOLS_DATA');
const EN = load('tools-data-en.js', 'TOOLS_DATA');

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* ── 블록 제거 ───────────────────────────────────────────── */
function cut(html, start, end) {
  const s = html.indexOf(start);
  if (s === -1) return html;
  const e = html.indexOf(end);
  if (e === -1) return html;
  return html.slice(0, s) + html.slice(e + end.length);
}

/* ── 영문 head SEO 블록 ──────────────────────────────────── */
function seoBlock(ko, en) {
  const tags = (en.tags || []).slice(0, 2).map(t => t.replace(/^#/, ''));
  let title = en.title + (tags.length ? ' · ' + tags.join(' · ') : '');
  if (title.length > 48) title = en.title;
  title += ' | TOOLKIT';

  const tail = ' Runs in your browser with no install or sign up, and nothing you enter is sent to a server.';
  let desc = String(en.desc).trim();
  if (desc.length + tail.length > 158) desc = desc.slice(0, 158 - tail.length - 1).trim() + '…';
  desc += tail;

  const app = {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: en.title, description: en.desc, url: en.url,
    applicationCategory: 'UtilitiesApplication', operatingSystem: 'Web',
    inLanguage: 'en-US', isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Person', name: 'Janggil Kim', url: SITE + '/en/about.html' },
    isPartOf: { '@type': 'WebSite', name: 'TOOLKIT', url: SITE + '/en/' }
  };

  return [
    SEO_START,
    '<meta name="description" content="' + esc(desc) + '" />',
    '<meta name="author" content="Janggil Kim" />',
    '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
    '<link rel="canonical" href="' + esc(en.url) + '" />',
    '<link rel="alternate" hreflang="ko" href="' + esc(ko.url) + '" />',
    '<link rel="alternate" hreflang="en" href="' + esc(en.url) + '" />',
    '<link rel="alternate" hreflang="x-default" href="' + esc(ko.url) + '" />',
    '',
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="TOOLKIT" />',
    '<meta property="og:locale" content="en_US" />',
    '<meta property="og:url" content="' + esc(en.url) + '" />',
    '<meta property="og:title" content="' + esc(title) + '" />',
    '<meta property="og:description" content="' + esc(desc) + '" />',
    '<meta property="og:image" content="' + SITE + '/og-image.png" />',
    '',
    '<meta name="twitter:card" content="summary_large_image" />',
    '<meta name="twitter:title" content="' + esc(title) + '" />',
    '<meta name="twitter:description" content="' + esc(desc) + '" />',
    '',
    '<script type="application/ld+json">',
    JSON.stringify(app, null, 2),
    '</script>',
    SEO_END
  ].join('\n');
}

/* ── 영문 안내문 블록 ────────────────────────────────────── */
const CSS = `
<style>
.tk-guide{background:#f8fafc;color:#0f172a;border-top:1px solid #e2e8f0;
  font-family:'Pretendard Variable',Pretendard,system-ui,-apple-system,'Segoe UI',sans-serif;
  padding:56px 20px 64px;margin-top:48px;line-height:1.5;text-align:left}
.tk-guide *{box-sizing:border-box}
.tk-guide-inner{max-width:720px;margin:0 auto}
.tk-guide h2{font-size:19px;font-weight:800;letter-spacing:-.01em;color:#0f172a;margin:44px 0 0}
.tk-guide h2:first-of-type{margin-top:0}
.tk-guide p{font-size:14.5px;line-height:1.85;color:#475569;margin:14px 0 0}
.tk-guide ul,.tk-guide ol{margin:14px 0 0;padding-left:20px}
.tk-guide li{font-size:14.5px;line-height:1.8;color:#475569;margin-top:8px}
.tk-guide strong{font-weight:600;color:#1e293b}
.tk-guide dl{margin:14px 0 0;border-top:1px solid #e2e8f0}
.tk-guide dt{font-size:14.5px;font-weight:700;color:#0f172a;margin-top:18px}
.tk-guide dd{font-size:14.5px;line-height:1.8;color:#475569;margin:6px 0 18px;
  padding-bottom:18px;border-bottom:1px solid #e2e8f0}
.tk-guide-note{margin-top:44px;padding:16px 18px;background:#fff;border:1px solid #e2e8f0;
  border-radius:12px;font-size:13px;line-height:1.75;color:#64748b}
.tk-guide-more{margin-top:40px;padding-top:28px;border-top:1px solid #e2e8f0}
.tk-guide-more h2{margin-top:0}
.tk-guide-more ul{list-style:none;padding:0;margin-top:14px;display:grid;grid-template-columns:1fr;gap:8px}
@media(min-width:640px){.tk-guide-more ul{grid-template-columns:1fr 1fr}}
.tk-guide a{color:#2c6ba0;text-decoration:none}
.tk-guide a:hover{text-decoration:underline}
.tk-guide-home{display:inline-block;margin-top:28px;font-size:13px;font-weight:700;color:#2c6ba0}
</style>`;

function guideBlock(g, en, siblings) {
  const p = [];
  p.push('<h2>' + esc(g.intro.h) + '</h2>');
  g.intro.p.forEach(t => p.push('<p>' + t + '</p>'));

  p.push('<h2>When to use it</h2><dl>');
  g.uses.forEach(u => p.push('<dt>' + esc(u.t) + '</dt><dd>' + u.d + '</dd>'));
  p.push('</dl>');

  p.push('<h2>How to use it</h2><ol>');
  g.steps.forEach(s => p.push('<li>' + s + '</li>'));
  p.push('</ol>');

  if (g.options && g.options.length) {
    p.push('<h2>' + esc(g.optionsTitle || 'Settings') + '</h2><dl>');
    g.options.forEach(o => p.push('<dt>' + esc(o.t) + '</dt><dd>' + o.d + '</dd>'));
    p.push('</dl>');
  }

  p.push('<h2>Frequently asked questions</h2><dl>');
  g.faq.forEach(f => p.push('<dt>' + esc(f.q) + '</dt><dd>' + f.a + '</dd>'));
  p.push('</dl>');

  p.push('<p class="tk-guide-note">This tool runs entirely inside your browser. ' +
    'Nothing you enter is sent to a server or stored anywhere, and closing the page ' +
    'discards the working data.</p>');

  if (siblings.length) {
    p.push('<div class="tk-guide-more"><h2>Other tools in this category</h2><ul>');
    siblings.forEach(s => p.push('<li><a href="' + esc(s.url) + '">' + esc(s.title) + '</a></li>'));
    p.push('</ul></div>');
  }
  p.push('<a class="tk-guide-home" href="' + SITE + '/en/">See all tools →</a>');

  const faqLd = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: g.faq.map(f => ({
      '@type': 'Question', name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') }
    }))
  };

  return GUIDE_START + '\n' + CSS +
    '\n<section class="tk-guide"><div class="tk-guide-inner">\n' + p.join('\n') +
    '\n</div></section>\n<script type="application/ld+json">\n' +
    JSON.stringify(faqLd, null, 2) + '\n</script>\n' + GUIDE_END;
}

/* ── 도구 하나 생성 ──────────────────────────────────────── */
function buildTool(mod) {
  const ko = KO.find(t => t.id === mod.id);
  const en = EN.find(t => t.id === mod.id);
  if (!ko || !en) return { id: mod.id, status: 'tools-data 에 없음' };

  const rel = ko.url.replace(SITE + '/', '');
  const src = path.join(ROOT, rel);
  if (!fs.existsSync(src)) return { id: mod.id, status: '원본 없음' };

  let html = fs.readFileSync(src, 'utf8');

  // 한국어 SEO · 안내문 블록 제거
  html = cut(html, SEO_START, SEO_END);
  html = cut(html, GUIDE_START, GUIDE_END);

  // 코드 · 기본값 변경
  const failed = [];
  (mod.patches || []).forEach(([from, to]) => {
    if (html.indexOf(from) === -1) { failed.push(from.slice(0, 40)); return; }
    html = html.split(from).join(to);
  });

  // 화면 문구 번역 (긴 것부터)
  (mod.strings || []).slice().sort((a, b) => b[0].length - a[0].length)
    .forEach(([k, e]) => { html = html.split(k).join(e); });

  // 언어 · head
  html = html.replace(/<html lang="ko">/, '<html lang="en">');
  const headOpen = html.match(/<head[^>]*>/i);
  if (!headOpen) return { id: mod.id, status: 'head 없음' };

  const titleTag = '<title>' + esc(en.title + ' | TOOLKIT') + '</title>';
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, titleTag);
  } else {
    html = html.replace(headOpen[0], headOpen[0] + '\n' + titleTag);
  }
  html = html.replace(titleTag, titleTag + '\n\n' + seoBlock(ko, en) + '\n');

  // 안내문
  if (mod.guide) {
    const siblings = EN.filter(t => t.category === en.category && t.id !== en.id).slice(0, 6);
    const close = html.lastIndexOf('</body>');
    if (close !== -1) {
      html = html.slice(0, close) + '\n' + guideBlock(mod.guide, en, siblings) + '\n' + html.slice(close);
    }
  }

  const dest = path.join(ROOT, en.url.replace(SITE + '/', ''));
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html, 'utf8');

  // 남은 한글 확인
  let check = html.replace(/<!--[\s\S]*?-->/g, '')
                  .replace(/\/\*[\s\S]*?\*\//g, '')
                  .replace(/^[ \t]*\/\/.*$/gm, '');
  const left = Array.from(new Set(check.match(/[가-힣][가-힣 ·]{0,25}/g) || []));

  return {
    id: mod.id, status: '완료',
    out: en.url.replace(SITE + '/', ''),
    left: left, failed: failed
  };
}

/* ── 실행 ────────────────────────────────────────────────── */
const args = process.argv.slice(2);
const available = fs.existsSync(MODDIR)
  ? fs.readdirSync(MODDIR).filter(f => f.endsWith('.js')).map(f => f.replace(/\.js$/, ''))
  : [];

if (args.includes('--list')) {
  console.log('\n준비된 영문 도구 (' + available.length + '/' + KO.length + ')');
  available.forEach(id => console.log('  ✓ ' + id));
  const rest = KO.filter(t => available.indexOf(t.id) === -1);
  console.log('\n남은 도구 (' + rest.length + ')');
  rest.forEach(t => console.log('  · ' + t.id + '  ' + t.title));
  process.exit(0);
}

const targets = args.length ? args.filter(a => a[0] !== '-') : available;
if (!targets.length) { console.log('en-tools 폴더에 모듈이 없습니다.'); process.exit(0); }

let ok = 0;
targets.forEach(id => {
  const file = path.join(MODDIR, id + '.js');
  if (!fs.existsSync(file)) { console.log('  ✗ ' + id + ' : 모듈 없음'); return; }
  const r = buildTool(require(file));
  if (r.status !== '완료') { console.log('  ✗ ' + r.id + ' : ' + r.status); return; }
  ok++;
  console.log('  ✓ ' + r.out);
  if (r.failed.length) {
    console.log('      ⚠ 적용 안 된 patch ' + r.failed.length + '건');
    r.failed.forEach(f => console.log('        ' + f + '...'));
  }
  if (r.left.length) {
    console.log('      ⚠ 남은 한글 ' + r.left.length + '건 : ' + r.left.slice(0, 6).map(x => JSON.stringify(x)).join(', '));
  }
});

console.log('\n' + ok + '개 생성. 마지막에 node fix-paths.js 를 실행하세요.');
