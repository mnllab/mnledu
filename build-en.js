/**
 * build-en.js
 * ---------------------------------------------------------------
 * 한국어판을 바탕으로 영문판 /en/ 을 만듭니다.
 *
 *   · /en/index.html                한국어 index.html 을 번역해 생성
 *   · /en/about|contact|privacy|terms.html
 *   · 양쪽 헤더에 언어 전환 버튼 삽입
 *   · hreflang 상호 연결
 *
 * 사용법 :  node build-en.js
 *
 * 한국어 index.html 을 고친 뒤 다시 실행하면 영문판에 반영됩니다.
 * 번역 문구를 바꾸려면 아래 STR 표를 고치세요.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');

const SITE = 'https://mnledu.com';
const ROOT = __dirname;

/* ── 화면에 보이는 문자열 대응표 ───────────────────────── */
/* 긴 문장부터 먼저 치환해야 짧은 조각이 먼저 걸리지 않습니다 */
const STR = [
  /* head */
  ['TOOLKIT · 설치 없이 바로 쓰는 무료 웹 도구 모음',
   'TOOLKIT · Free Browser Tools, No Install, No Sign Up'],
  ['PDF 정리, 계산, 변환, 텍스트 처리까지 브라우저에서 바로 실행되는 무료 웹 유틸리티 모음. 설치와 로그인이 필요 없고 모든 연산은 사용자 기기 안에서 처리됩니다.',
   'A collection of free browser tools for PDFs, calculations, conversions and text cleanup. Nothing to install, no account needed, and every calculation runs on your own device.'],
  ['PDF 정리, 계산, 변환, 텍스트 처리까지 브라우저에서 바로 실행되는 무료 웹 유틸리티 모음. 설치와 로그인이 필요 없습니다.',
   'Free browser tools for PDFs, calculations, conversions and text cleanup. Nothing to install, no account needed.'],
  ['브라우저에서 바로 실행되는 무료 웹 유틸리티 모음. 설치와 로그인이 필요 없습니다.',
   'Free browser tools that run instantly. Nothing to install, no account needed.'],
  ['설치 없이 브라우저에서 바로 실행되는 무료 웹 유틸리티 모음',
   'Free browser tools that run instantly, with no installation'],
  ['무료 웹 유틸리티 모음', 'Free browser tools'],
  ['김장길', 'Janggil Kim'],

  /* hero */
  ['설치 없이 바로 쓰는<br class="sm:hidden" /> 무료 웹 도구 모음',
   'Free browser tools,<br class="sm:hidden" /> nothing to install'],
  ['설치 없이 바로 쓰는', 'No install needed,'],
  ['무료 웹 도구 모음', 'free browser tools'],
  ['Super Thanks</span>나', 'Super Thanks</span> or'],
  ['클릭 한 번으로 열리는', 'Every tool you need,'],
  ['나만의 도구함', 'one click away'],
  ['로그인이나 설치 없이 브라우저에서 바로 실행하세요.',
   'Open any tool straight in your browser, with no sign up or install.'],
  ['모든 데이터는 사용자 기기 내에서 안전하게 처리됩니다.',
   'Everything is processed safely on your own device.'],
  ['도구 이름, 기능 설명, #해시태그 검색...', 'Search by name, function or #tag...'],
  ['도구 검색', 'Search tools'],

  /* 화면 각부 */
  ['카테고리 필터', 'Category filter'],
  ['해시태그 필터를 해제하거나 다른 카테고리를 선택해 보세요.',
   'Try clearing the tag filter or picking another category.'],
  ['해시태그 필터', 'Tag filter'],
  ['검색어를 지우거나 다른 카테고리를 선택해 보세요.',
   'Try clearing your search or picking another category.'],
  ['자주 사용하는 도구 우측 상단의 별표를 눌러 보관함에 담아보세요.',
   'Tap the star on a card to keep your favourites here.'],
  ['즐겨찾기가 비어 있습니다', 'No favourites yet'],
  ['조건에 맞는 도구가 없습니다', 'No tools match those filters'],
  ['검색 결과가 없습니다', 'No results'],
  ['태그에 해당하는 도구가 없습니다', ' has no tools'],
  ['모바일 내비게이션', 'Mobile navigation'],
  ['도구 실행 화면', 'Tool view'],
  ['실행 화면', ' view'],
  ['새 탭', 'New tab'],
  ['즐겨찾기', 'Favourite'],
  ['실행', 'Open'],
  ['처음 화면으로', 'Back to start'],
  ['처음 화면', 'Home'],
  ['도구', 'Tool'],

  /* 후원 */
  ['여기 있는 도구는 모두 무료입니다', 'Every tool here is free'],
  ['로그인도, 설치도, 결제도 없습니다. 앞으로도 그럴 예정입니다.',
   'No sign up, no install, no payment. That is not going to change.'],
  ['그래도 도움이 되셨다면 유튜브 채널에서', 'If these tools saved you time, you can support the channel on YouTube with'],
  ['도움이 되셨다면 유튜브 채널에서', 'If these tools saved you time, you can support the channel on YouTube with'],
  ['으로 응원해 주세요. 다음 도구를 만드는 데 씁니다.',
   '. It goes straight into building the next one.'],
  ['으로 응원해 주세요.', '.'],
  ['받은 응원은 다음 도구를 만드는 데 씁니다.',
   'Support goes straight into building the next tool.'],
  ['멤버십', 'membership'],
  ['유튜브 채널로 이동', 'Go to the YouTube channel'],
  ['유튜브에서 응원하기', 'Support on YouTube'],
  ['다음에 할게요', 'Maybe later'],
  ['응원하기', 'Support'],
  ['닫기', 'Close'],

  /* 푸터 */
  ['모든 데이터 연산은 사용자의 브라우저 내에서 안전하게 처리됩니다.',
   'Every calculation runs inside your browser.'],
  ['무단 복제 및 재배포를 금지합니다', 'Unauthorised copying and redistribution prohibited'],
  ['사이트 정보', 'Site information'],
  ['개인정보처리방침', 'Privacy Policy'],
  ['이용약관', 'Terms of Use'],
  ['자주 묻는 질문', 'FAQ'],
  ['문의하기', 'Contact'],
  ['소개', 'About'],
  ['전체 도구 목록', 'All tools']
];

/* ── 영문 소개 · FAQ 본문 ───────────────────────────────── */
const ABOUT_EN = `
    <section id="about" class="mt-16 sm:mt-24 border-t border-slate-200/70 pt-12 sm:pt-16">
      <div class="mx-auto max-w-3xl">

        <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 break-keep">What is TOOLKIT</h2>

        <div class="mt-5 space-y-4 text-[14px] sm:text-[15px] leading-[1.8] text-slate-600 break-keep">
          <p>
            TOOLKIT is a collection of small browser tools for the jobs that come up in the middle of
            other work: cleaning up text copied out of a PDF, working out a growth rate, merging a few
            pages, converting a unit. There is nothing to download and no account to create. Open the
            page and the tool is running.
          </p>
          <p>
            Every tool is <strong>client side</strong>. Whatever you type or drop in is processed inside
            your own browser and never sent to a server. That matters when the file is a contract, an
            invoice or anything else you would rather not upload to a site you do not know.
          </p>
          <p>
            Tools are grouped by category and tagged, and the search box at the top matches on names,
            descriptions and tags. Star the ones you use often and they will sit at the top next time
            you visit.
          </p>
        </div>

        <h2 class="mt-12 text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 break-keep">Frequently asked questions</h2>

        <dl class="mt-5 divide-y divide-slate-200/70 border-y border-slate-200/70">
          <div class="py-5">
            <dt class="text-[15px] font-bold text-slate-900 break-keep">Is there a charge for any of this</dt>
            <dd class="mt-2 text-[14px] leading-[1.8] text-slate-600 break-keep">
              No. Every tool is free, there is no usage limit and no paid tier is planned. If a tool
              saved you time you are welcome to support the YouTube channel, and that funding goes into
              building the next one.
            </dd>
          </div>
          <div class="py-5">
            <dt class="text-[15px] font-bold text-slate-900 break-keep">Do I need an account</dt>
            <dd class="mt-2 text-[14px] leading-[1.8] text-slate-600 break-keep">
              There are no accounts at all. Your favourites are stored in your own browser rather than on
              a server, so clearing your browser data clears them too.
            </dd>
          </div>
          <div class="py-5">
            <dt class="text-[15px] font-bold text-slate-900 break-keep">Are my files or data stored anywhere</dt>
            <dd class="mt-2 text-[14px] leading-[1.8] text-slate-600 break-keep">
              No. Everything is computed inside your browser and nothing you enter leaves your device.
              Close the page and the working data goes with it.
            </dd>
          </div>
          <div class="py-5">
            <dt class="text-[15px] font-bold text-slate-900 break-keep">Does this work on a phone</dt>
            <dd class="mt-2 text-[14px] leading-[1.8] text-slate-600 break-keep">
              Yes. Every screen adapts to mobile, and you can add the site to your home screen to launch
              it like an app. A few tools that handle large files behave better on a desktop.
            </dd>
          </div>
          <div class="py-5">
            <dt class="text-[15px] font-bold text-slate-900 break-keep">Some tools mention Korean rules. Why</dt>
            <dd class="mt-2 text-[14px] leading-[1.8] text-slate-600 break-keep">
              This site started in Korea, so a few tools are built around Korean government or tax rules.
              Those are labelled <strong>Korea-specific</strong> in their description. Everything else is
              either region neutral or has settings you can change, such as the tax rate in the margin
              calculator.
            </dd>
          </div>
          <div class="py-5">
            <dt class="text-[15px] font-bold text-slate-900 break-keep">Can I request a tool</dt>
            <dd class="mt-2 text-[14px] leading-[1.8] text-slate-600 break-keep">
              Please do. Tell me which part of your work is tedious, either through the contact page or a
              comment on the YouTube channel, and I will look at whether it can run in a browser.
            </dd>
          </div>
        </dl>

        <nav id="tool-index" aria-label="All tools" class="mt-12">
          <h2 class="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-900 break-keep">All tools</h2>
          <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[13.5px] leading-relaxed">
            <!-- TOOLKIT:TOOL_LINKS_START -->
            <!-- TOOLKIT:TOOL_LINKS_END -->
          </ul>
        </nav>

      </div>
    </section>
`;

const FAQ_LD_EN = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['Is there a charge for any of this',
     'No. Every tool is free, there is no usage limit and no paid tier is planned.'],
    ['Do I need an account',
     'There are no accounts. Favourites are stored in your own browser rather than on a server.'],
    ['Are my files or data stored anywhere',
     'No. Everything is computed inside your browser and nothing you enter leaves your device.'],
    ['Does this work on a phone',
     'Yes. Every screen adapts to mobile and you can add the site to your home screen.'],
    ['Some tools mention Korean rules. Why',
     'A few tools are built around Korean government or tax rules and are labelled Korea-specific. Everything else is region neutral or configurable.'],
    ['Can I request a tool',
     'Yes. Use the contact page or leave a comment on the YouTube channel.']
  ].map(([q, a]) => ({
    '@type': 'Question', name: q,
    acceptedAnswer: { '@type': 'Answer', text: a }
  }))
};

/* ── 언어 전환 버튼 ─────────────────────────────────────── */
function langButton(target, label, title) {
  return '\n          <a href="' + target + '" title="' + title + '" hreflang="' +
    (target.indexOf('/en/') === 0 ? 'en' : 'ko') + '"\n' +
    '            class="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200/80 bg-white px-2.5 py-1.5 font-mono text-[11px] font-bold tracking-wider text-slate-600 hover:border-indigo-300 hover:text-indigo-600 active:scale-95 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">\n' +
    '            <i data-lucide="languages" class="h-3.5 w-3.5"></i><span>' + label + '</span>\n' +
    '          </a>\n        ';
}

const LANG_MARK_START = '<!-- TOOLKIT:LANG_START -->';
const LANG_MARK_END = '<!-- TOOLKIT:LANG_END -->';

function insertLangButton(html, target, label, title) {
  // 기존 버튼 제거
  const s = html.indexOf(LANG_MARK_START);
  if (s !== -1) {
    const e = html.indexOf(LANG_MARK_END);
    if (e !== -1) html = html.slice(0, s) + html.slice(e + LANG_MARK_END.length);
  }
  const anchor = '<button id="support-btn"';
  const at = html.indexOf(anchor);
  if (at === -1) return html;
  const block = LANG_MARK_START + langButton(target, label, title) + LANG_MARK_END + '\n\n          ';
  return html.slice(0, at) + block + html.slice(at);
}

/* ── 영문 index.html 생성 ───────────────────────────────── */
function buildIndex() {
  let html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

  // 생성 블록 비우기
  html = html.replace(
    /<!-- TOOLKIT:TOOL_LINKS_START -->[\s\S]*?<!-- TOOLKIT:TOOL_LINKS_END -->/,
    '<!-- TOOLKIT:TOOL_LINKS_START -->\n            <!-- TOOLKIT:TOOL_LINKS_END -->');
  html = html.replace(
    /<!-- TOOLKIT:ITEMLIST_START -->[\s\S]*?<!-- TOOLKIT:ITEMLIST_END -->/,
    '<!-- TOOLKIT:ITEMLIST_START -->\n<!-- TOOLKIT:ITEMLIST_END -->');

  // 소개 · FAQ 영역 통째 교체
  html = html.replace(
    /\n    <!-- ============ 소개[\s\S]*?<\/section>\n\n  <\/main>/,
    '\n' + ABOUT_EN + '\n  </main>');

  // FAQ 구조화 데이터 교체
  html = html.replace(
    /<!-- 구조화 데이터 : 자주 묻는 질문 -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/,
    '<!-- FAQ structured data -->\n<script type="application/ld+json">\n' +
    JSON.stringify(FAQ_LD_EN, null, 2) + '\n</script>');

  // 짧은 단어가 먼저 걸려 긴 문장을 깨뜨리지 않도록 길이순으로 적용합니다
  STR.slice().sort((a, b) => b[0].length - a[0].length)
     .forEach(([ko, en]) => { html = html.split(ko).join(en); });

  // 언어 · 주소
  html = html.replace('<html lang="ko">', '<html lang="en">');
  html = html.split('content="ko_KR"').join('content="en_US"');
  html = html.split('"inLanguage": "ko-KR"').join('"inLanguage": "en-US"');
  html = html.split('href="' + SITE + '/"').join('href="' + SITE + '/en/"');
  html = html.replace('<link rel="canonical" href="' + SITE + '/en/" />',
    '<link rel="canonical" href="' + SITE + '/en/" />\n' +
    '<link rel="alternate" hreflang="ko" href="' + SITE + '/" />\n' +
    '<link rel="alternate" hreflang="en" href="' + SITE + '/en/" />\n' +
    '<link rel="alternate" hreflang="x-default" href="' + SITE + '/" />');
  html = html.split('content="' + SITE + '/"').join('content="' + SITE + '/en/"');
  html = html.split('"url": "' + SITE + '/"').join('"url": "' + SITE + '/en/"');
  html = html.split('"@id": "' + SITE + '/#website"').join('"@id": "' + SITE + '/en/#website"');

  // 검증 코드는 루트 전용이므로 제거
  html = html.replace(/^.*google-site-verification.*\n/m, '');
  html = html.replace(/^.*naver-site-verification.*\n/m, '');

  // 자료 파일과 내부 링크
  html = html.replace('src="./tools-data.js"', 'src="../tools-data-en.js"');
  html = html.split('href="/about.html"').join('href="/en/about.html"');
  html = html.split('href="/contact.html"').join('href="/en/contact.html"');
  html = html.split('href="/privacy.html"').join('href="/en/privacy.html"');
  html = html.split('href="/terms.html"').join('href="/en/terms.html"');

  html = insertLangButton(html, '/', '한국어', '한국어로 보기');

  fs.mkdirSync(path.join(ROOT, 'en'), { recursive: true });
  fs.writeFileSync(path.join(ROOT, 'en', 'index.html'), html, 'utf8');
  return true;
}

/* ── 한국어 index 에 언어 버튼 넣기 ────────────────────── */
function patchKoIndex() {
  const p = path.join(ROOT, 'index.html');
  let html = fs.readFileSync(p, 'utf8');
  const before = html;

  html = insertLangButton(html, '/en/', 'EN', 'View in English');

  if (html.indexOf('hreflang="x-default"') === -1) {
    html = html.replace('<link rel="canonical" href="' + SITE + '/" />',
      '<link rel="canonical" href="' + SITE + '/" />\n' +
      '<link rel="alternate" hreflang="ko" href="' + SITE + '/" />\n' +
      '<link rel="alternate" hreflang="en" href="' + SITE + '/en/" />\n' +
      '<link rel="alternate" hreflang="x-default" href="' + SITE + '/" />');
  }

  if (html !== before) fs.writeFileSync(p, html, 'utf8');
  return html !== before;
}

/* ── 영문 정보 페이지 ──────────────────────────────────── */
function buildInfoPages() {
  const pages = require('./en-pages.js');
  const tpl = fs.readFileSync(path.join(ROOT, 'en-template.html'), 'utf8');
  fs.mkdirSync(path.join(ROOT, 'en'), { recursive: true });
  pages.forEach(p => {
    let out = tpl;
    Object.keys(p).forEach(k => { out = out.split('{{' + k.toUpperCase() + '}}').join(p[k]); });
    fs.writeFileSync(path.join(ROOT, 'en', p.slug + '.html'), out, 'utf8');
  });
  return pages.length;
}

try {
  buildIndex();
  console.log('  en/index.html 생성');
  const n = buildInfoPages();
  console.log('  영문 정보 페이지 ' + n + '개 생성');
  const changed = patchKoIndex();
  console.log('  한국어 index.html ' + (changed ? '언어 버튼 추가' : '변경 없음'));
  console.log('\n  다음으로 node build-seo.js 를 실행해 사이트맵과 도구 링크를 채우세요.');
} catch (e) {
  console.error('실패 : ' + e.message);
  process.exit(1);
}
