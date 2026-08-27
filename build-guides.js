/**
 * build-guides.js
 * ---------------------------------------------------------------
 * guides-a.js · guides-b.js 에 적어둔 도구별 안내문을
 * 각 도구 페이지 아래쪽에 넣습니다.
 *
 *   · 배경 설명 · 활용 예시 · 사용 방법 · 옵션 설명 · 자주 묻는 질문
 *   · FAQPage 구조화 데이터
 *   · 같은 카테고리 도구 링크 (내부 링크 보강)
 *
 * 사용법
 *   node build-guides.js --dry-run   확인만
 *   node build-guides.js             적용
 *
 * 여러 번 실행해도 안전합니다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://mnledu.com';
const ROOT = __dirname;
const DRY = process.argv.includes('--dry-run');

const START = '<!-- TOOLKIT:GUIDE_START · build-guides.js 가 관리합니다 -->';
const END = '<!-- TOOLKIT:GUIDE_END -->';

function loadTools() {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'tools-data.js'), 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA;
}

const GUIDES = Object.assign({},
  require('./guides-a.js'),
  require('./guides-b.js')
);

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/* 본문 안에서는 <strong> 같은 태그를 허용하므로 그대로 둡니다 */
function raw(s) { return String(s); }

const CSS = `
<style>
.tk-guide{background:#f8fafc;color:#0f172a;border-top:1px solid #e2e8f0;
  font-family:'Pretendard Variable',Pretendard,system-ui,-apple-system,'Malgun Gothic',sans-serif;
  padding:56px 20px 64px;margin-top:48px;line-height:1.5;text-align:left}
.tk-guide *{box-sizing:border-box}
.tk-guide-inner{max-width:720px;margin:0 auto}
.tk-guide h2{font-size:19px;font-weight:800;letter-spacing:-.01em;color:#0f172a;
  margin:44px 0 0;word-break:keep-all}
.tk-guide h2:first-of-type{margin-top:0}
.tk-guide p{font-size:14.5px;line-height:1.85;color:#475569;margin:14px 0 0;word-break:keep-all}
.tk-guide ul,.tk-guide ol{margin:14px 0 0;padding-left:20px}
.tk-guide li{font-size:14.5px;line-height:1.8;color:#475569;margin-top:8px;word-break:keep-all}
.tk-guide strong{font-weight:600;color:#1e293b}
.tk-guide dl{margin:14px 0 0;border-top:1px solid #e2e8f0}
.tk-guide dt{font-size:14.5px;font-weight:700;color:#0f172a;margin-top:18px;word-break:keep-all}
.tk-guide dd{font-size:14.5px;line-height:1.8;color:#475569;margin:6px 0 18px;
  padding-bottom:18px;border-bottom:1px solid #e2e8f0;word-break:keep-all}
.tk-guide-note{margin-top:44px;padding:16px 18px;background:#fff;border:1px solid #e2e8f0;
  border-radius:12px;font-size:13px;line-height:1.75;color:#64748b;word-break:keep-all}
.tk-guide-more{margin-top:40px;padding-top:28px;border-top:1px solid #e2e8f0}
.tk-guide-more h2{margin-top:0}
.tk-guide-more ul{list-style:none;padding:0;margin-top:14px;
  display:grid;grid-template-columns:1fr;gap:8px}
@media(min-width:640px){.tk-guide-more ul{grid-template-columns:1fr 1fr}}
.tk-guide a{color:#2c6ba0;text-decoration:none}
.tk-guide a:hover{text-decoration:underline}
.tk-guide-home{display:inline-block;margin-top:28px;font-size:13px;font-weight:700;color:#2c6ba0}
</style>`;

function render(tool, g, siblings) {
  const parts = [];

  parts.push('<h2>' + esc(g.intro.h) + '</h2>');
  g.intro.p.forEach(t => parts.push('<p>' + raw(t) + '</p>'));

  parts.push('<h2>이럴 때 씁니다</h2><dl>');
  g.uses.forEach(u => {
    parts.push('<dt>' + esc(u.t) + '</dt><dd>' + raw(u.d) + '</dd>');
  });
  parts.push('</dl>');

  parts.push('<h2>사용 방법</h2><ol>');
  g.steps.forEach(s => parts.push('<li>' + raw(s) + '</li>'));
  parts.push('</ol>');

  if (g.options && g.options.length) {
    parts.push('<h2>' + esc(g.optionsTitle || '옵션 설명') + '</h2><dl>');
    g.options.forEach(o => parts.push('<dt>' + esc(o.t) + '</dt><dd>' + raw(o.d) + '</dd>'));
    parts.push('</dl>');
  }

  parts.push('<h2>자주 묻는 질문</h2><dl>');
  g.faq.forEach(f => parts.push('<dt>' + esc(f.q) + '</dt><dd>' + raw(f.a) + '</dd>'));
  parts.push('</dl>');

  parts.push('<p class="tk-guide-note">이 도구는 사용자의 브라우저 안에서만 동작합니다. ' +
    '입력한 내용은 서버로 전송되지 않으며 어디에도 저장되지 않습니다. ' +
    '페이지를 닫으면 처리 중이던 내용도 함께 사라집니다.</p>');

  if (siblings.length) {
    parts.push('<div class="tk-guide-more"><h2>같은 분류의 다른 도구</h2><ul>');
    siblings.forEach(s => {
      parts.push('<li><a href="' + esc(s.url) + '">' + esc(s.title) + '</a></li>');
    });
    parts.push('</ul></div>');
  }

  parts.push('<a class="tk-guide-home" href="' + SITE + '/">전체 도구 목록 보기 →</a>');

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: g.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '') }
    }))
  };

  return START + '\n' + CSS +
    '\n<section class="tk-guide"><div class="tk-guide-inner">\n' +
    parts.join('\n') +
    '\n</div></section>\n<script type="application/ld+json">\n' +
    JSON.stringify(faqLd, null, 2) + '\n</script>\n' + END;
}

function patch(tool, all) {
  const g = GUIDES[tool.id];
  if (!g) return { id: tool.id, status: '안내문없음' };

  const rel = String(tool.url).replace(SITE + '/', '');
  const file = path.join(ROOT, rel);
  if (!fs.existsSync(file)) return { id: tool.id, status: '파일없음' };

  let html = fs.readFileSync(file, 'utf8');

  const s = html.indexOf(START);
  if (s !== -1) {
    const e = html.indexOf(END);
    if (e !== -1) html = html.slice(0, s) + html.slice(e + END.length);
  }

  const siblings = all
    .filter(t => t.category === tool.category && t.id !== tool.id)
    .slice(0, 6);

  const block = render(tool, g, siblings);

  const closeBody = html.lastIndexOf('</body>');
  if (closeBody === -1) return { id: tool.id, status: 'body없음' };

  html = html.slice(0, closeBody) + '\n' + block + '\n' + html.slice(closeBody);

  if (!DRY) fs.writeFileSync(file, html, 'utf8');
  return { id: tool.id, status: DRY ? '예정' : '완료', chars: block.length };
}

try {
  const tools = loadTools();
  const rows = tools.map(t => patch(t, tools));
  const ok = rows.filter(r => r.status === '완료' || r.status === '예정');
  const miss = rows.filter(r => r.status !== '완료' && r.status !== '예정');

  console.log((DRY ? '[미리보기] ' : '') + '도구 ' + tools.length + '개 중 ' + ok.length + '개 처리');
  if (miss.length) {
    console.log('\n처리하지 못함');
    miss.forEach(r => console.log('  ' + r.id + ' : ' + r.status));
  }
} catch (e) {
  console.error('실패 : ' + e.message);
  process.exit(1);
}
