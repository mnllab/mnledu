/**
 * ============================================================================
 * TOOLKIT · tools-data.js
 * ============================================================================
 * 포털 대문에 렌더링될 웹앱 데이터 모음입니다.
 *
 * [데이터 스키마 가이드]
 * @property {string} id       - 툴 고유 식별자 (파일명과 일치시킵니다)
 * @property {string} title    - 화면에 표시될 툴의 이름 (짧고 직관적으로)
 * @property {string} category - 카테고리 [ PRODUCTIVITY | DATA & ANALYTICS | LIFESTYLE | DESIGN & MEDIA | ENTERTAINMENT ]
 * @property {string} desc     - 툴에 대한 1~2줄 요약 설명 (UI 카드 크기 고려하여 간결하게)
 * @property {string} url      - 툴 실행 주소 (전체 주소로 적습니다)
 *                               https://mnledu.com/<카테고리폴더>/<id>.html
 * @property {string} icon     - Lucide 아이콘 이름 (kebab-case)
 * @property {string|null} badge - 강조 뱃지 [ 'HOT' | 'NEW' | 'BEST' | null ]
 * @property {string[]} tags   - 검색 및 필터링을 위한 해시태그 배열
 *
 * [서버 구조] mnledu.com 루트에 대문을, 그 아래 카테고리 폴더를 둡니다
 *   /index.html  ·  /tools-data.js  ·  /<카테고리폴더>/<id>.html
 *
 *   카테고리 → 폴더명 (공백과 & 는 주소에서 깨지므로 하이픈으로 대체)
 *     PRODUCTIVITY      → /productivity/
 *     DATA & ANALYTICS  → /data-analytics/
 *     LIFESTYLE         → /lifestyle/
 *     DESIGN & MEDIA    → /design-media/
 *     ENTERTAINMENT     → /entertainment/
 *
 *   ※ 도구의 category 를 바꾸면 url 의 폴더명도 함께 바꾸고 파일도 옮겨야 합니다
 * ============================================================================
 */

const TOOLS_DATA = [
  // ---------------------------------------------------------
  // 1. PRODUCTIVITY (업무 생산성)
  // ---------------------------------------------------------
  {
    id: 'notepad',
    title: '나만의 웹 메모장',
    category: 'PRODUCTIVITY',
    desc: '서식·특수기호를 갖춘 임시 작업대. 글자 수와 바이트를 세고 HTML·마크다운 소스로도 바로 확인합니다.',
    url: 'https://mnledu.com/productivity/notepad.html',
    icon: 'notebook-pen',
    badge: 'BEST',
    tags: ['#문서작성', '#글자수', '#복사', '#마크다운']
  },
  {
    id: 'emailgen',
    title: '반복 이메일 생성기',
    category: 'PRODUCTIVITY',
    desc: '템플릿 하나에 명단을 넣어 여러 통을 한 번에 생성합니다. 조사(은/는, 이/가)를 받침에 맞춰 자동 교정합니다.',
    url: 'https://mnledu.com/productivity/emailgen.html',
    icon: 'mail',
    badge: 'HOT',
    tags: ['#문서작성', '#템플릿', '#자동정리', '#대량처리']
  },
  {
    id: 'templatemerger',
    title: '올인원 템플릿 매칭기',
    category: 'PRODUCTIVITY',
    desc: '대괄호 목록·엑셀 표·마크다운 표 어느 형태로 넣어도 문장 틀에 끼워 여러 건을 한 번에 만들어 냅니다.',
    url: 'https://mnledu.com/productivity/templatemerger.html',
    icon: 'layout-template',
    badge: null,
    tags: ['#템플릿', '#엑셀', '#대량처리', '#자동정리']
  },
  {
    id: 'promptmerger',
    title: 'AI 프롬프트용 파일 병합기',
    category: 'PRODUCTIVITY',
    desc: '여러 텍스트 파일을 구분선이나 코드펜스로 묶어 한 덩어리 프롬프트로 만들고 토큰 수를 어림잡아 줍니다.',
    url: 'https://mnledu.com/productivity/promptmerger.html',
    icon: 'files',
    badge: 'NEW',
    tags: ['#AI', '#텍스트', '#복사', '#개발']
  },
  {
    id: 'listformat',
    title: '스마트 리스트 포맷터',
    category: 'PRODUCTIVITY',
    desc: '줄 단위 목록에서 빈 줄과 중복을 걷어내고 번호·접두사·구분자를 붙여 원하는 형태로 다듬습니다.',
    url: 'https://mnledu.com/productivity/listformat.html',
    icon: 'list-ordered',
    badge: null,
    tags: ['#텍스트', '#자동정리', '#목록', '#복사']
  },
  {
    id: 'textclean',
    title: '텍스트 정제 툴',
    category: 'PRODUCTIVITY',
    desc: '줄바꿈·연속 공백·HTML 태그·특수문자를 골라 지우고, 항목마다 몇 건이 처리됐는지 실시간으로 보여 줍니다.',
    url: 'https://mnledu.com/productivity/textclean.html',
    icon: 'eraser',
    badge: null,
    tags: ['#텍스트', '#자동정리', '#글자수']
  },
  {
    id: 'anonymizer',
    title: '개인정보 자동 지우개',
    category: 'PRODUCTIVITY',
    desc: '전화번호·이메일·주민번호·IP를 찾아 가려 줍니다. 항목별로 몇 건을 가렸는지 세어 보여 줍니다.',
    url: 'https://mnledu.com/productivity/anonymizer.html',
    icon: 'shield-check',
    badge: 'NEW',
    tags: ['#개인정보', '#텍스트', '#자동정리', '#보안']
  },
  {
    id: 'pdftxt',
    title: 'PDF 줄바꿈 복원기',
    category: 'PRODUCTIVITY',
    desc: 'PDF에서 복사해 토막 난 문장을 문단 단위로 되돌립니다. 목록 줄과 하이픈으로 잘린 영어 단어를 가려 처리합니다.',
    url: 'https://mnledu.com/productivity/pdftxt.html',
    icon: 'wrap-text',
    badge: null,
    tags: ['#PDF', '#텍스트', '#자동정리', '#논문']
  },
  {
    id: 'pdfmerge',
    title: 'PDF 병합 · 추출기',
    category: 'PRODUCTIVITY',
    desc: '여러 PDF를 순서대로 끌어 합치거나 원하는 페이지만 뽑아냅니다. 파일이 서버로 올라가지 않습니다.',
    url: 'https://mnledu.com/productivity/pdfmerge.html',
    icon: 'file-stack',
    badge: 'BEST',
    tags: ['#PDF', '#문서작성', '#오프라인']
  },
  {
    id: 'voicenote',
    title: '음성 인식 노트패드',
    category: 'PRODUCTIVITY',
    desc: '말한 내용을 받아 적고, 용어 사전에 등록한 고유명사로 오인식을 바로잡습니다. 온디바이스 인식도 지원합니다.',
    url: 'https://mnledu.com/productivity/voicenote.html',
    icon: 'mic',
    badge: 'NEW',
    tags: ['#음성', '#받아쓰기', '#회의', '#텍스트']
  },

  // ---------------------------------------------------------
  // 2. DATA & ANALYTICS (데이터 & 분석)
  // ---------------------------------------------------------
  {
    id: 'cagrcal',
    title: 'CAGR 연도별 추정 계산기',
    category: 'DATA & ANALYTICS',
    desc: '두 시점의 값으로 연평균성장률을 구해 연도별로 펼치고, 엑셀·워드에 표 서식 그대로 붙여넣게 내보냅니다.',
    url: 'https://mnledu.com/data-analytics/cagrcal.html',
    icon: 'trending-up',
    badge: 'HOT',
    tags: ['#계산', '#시장분석', '#엑셀', '#사업계획서']
  },
  {
    id: 'ocrextract',
    title: 'OCR 텍스트 추출기',
    category: 'DATA & ANALYTICS',
    desc: '이미지 속 한글과 영문을 텍스트로 뽑아냅니다. 인식 신뢰도를 함께 보여 주고 줄바꿈까지 정리해 줍니다.',
    url: 'https://mnledu.com/data-analytics/ocrextract.html',
    icon: 'scan-text',
    badge: null,
    tags: ['#OCR', '#이미지', '#텍스트', '#오프라인']
  },

  // ---------------------------------------------------------
  // 3. LIFESTYLE (라이프스타일)
  // ---------------------------------------------------------
  {
    id: 'youtubenote',
    title: '유튜브 타임스탬프 노트',
    category: 'LIFESTYLE',
    desc: '영상을 보며 시간이 박힌 메모를 남기고, 적어 둔 시간표를 누르면 그 장면으로 바로 돌아갑니다.',
    url: 'https://mnledu.com/lifestyle/youtubenote.html',
    icon: 'clapperboard',
    badge: 'NEW',
    tags: ['#영상', '#학습', '#메모', '#자동저장']
  },

  // ---------------------------------------------------------
  // 4. DESIGN & MEDIA (디자인 & 미디어)
  // ---------------------------------------------------------
  {
    id: 'screendeco',
    title: '1초 캡처 뷰티파이어',
    category: 'DESIGN & MEDIA',
    desc: '스크린샷에 여백과 그림자, 맥 창 헤더를 입혀 발표자료에 바로 쓸 목업 이미지로 만들어 줍니다.',
    url: 'https://mnledu.com/design-media/screendeco.html',
    icon: 'frame',
    badge: 'HOT',
    tags: ['#이미지', '#발표자료', '#목업', '#캡처']
  },
  {
    id: 'mosaicmarker',
    title: '모자이크 & 형광펜 툴',
    category: 'DESIGN & MEDIA',
    desc: '가릴 곳은 끌어서 뭉개고 강조할 곳은 형광펜으로 칠합니다. 개인정보를 지운 뒤 바로 복사할 수 있습니다.',
    url: 'https://mnledu.com/design-media/mosaicmarker.html',
    icon: 'highlighter',
    badge: null,
    tags: ['#이미지', '#개인정보', '#캡처', '#발표자료']
  },
  {
    id: 'teleprompter',
    title: '스마트 오토 프롬프터',
    category: 'DESIGN & MEDIA',
    desc: '마크다운 원고를 큰 글씨로 흘려 보냅니다. 속도·거울 반전·남은 시간을 조절하며 촬영과 발표에 씁니다.',
    url: 'https://mnledu.com/design-media/teleprompter.html',
    icon: 'scroll-text',
    badge: null,
    tags: ['#영상', '#발표자료', '#촬영', '#마크다운']
  },

  // ---------------------------------------------------------
  // 5. ENTERTAINMENT (오락 & 엔터테인먼트)
  // ---------------------------------------------------------
  {
    id: 'tetris',
    title: '테트리스',
    category: 'ENTERTAINMENT',
    desc: '홀드와 고스트 블록을 갖춘 정식 규칙 테트리스. 키보드와 화면 버튼 양쪽으로 조작하고 최고 점수를 남깁니다.',
    url: 'https://mnledu.com/entertainment/tetris.html',
    icon: 'gamepad-2',
    badge: 'NEW',
    tags: ['#게임', '#쉬는시간', '#오프라인']
  }
];

/* -----------------------------------------------------------
 * 글로벌 내보내기 (브라우저 & 모듈 환경 완벽 호환)
 * ----------------------------------------------------------- */
if (typeof window !== 'undefined') {
  window.TOOLS_DATA = TOOLS_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TOOLS_DATA;
}
