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
    tags: ['#창업', '#스타트업', '#사업계획서', '#시장분석', '#엑셀']
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

  {
    id: 'gov-fund-calc',
    title: '자부담금 최적화 계산기',
    category: 'DATA & ANALYTICS',
    desc: '정부지원금 비율에 맞춰 자부담 현금·현물을 역산합니다. 총사업비 예산안을 잡아 엑셀·한글용 표로 내보냅니다.',
    url: 'https://mnledu.com/data-analytics/gov-fund-calc.html',
    icon: 'calculator',
    badge: 'HOT',
    tags: ['#창업', '#스타트업', '#사업계획서', '#정부지원', '#계산']
  },
  {
    id: 'percent-calc',
    title: '퍼센트 · 마진 계산기',
    category: 'DATA & ANALYTICS',
    desc: '비율·증감률·할인가·마진율을 빈칸만 채우면 계산합니다. 공식을 외울 필요가 없습니다.',
    url: 'https://mnledu.com/data-analytics/percent-calc.html',
    icon: 'percent',
    badge: null,
    tags: ['#계산', '#마진', '#할인']
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

  {
    id: 'date-calc',
    title: '만능 날짜 계산기',
    category: 'LIFESTYLE',
    desc: '날짜를 더하고 빼고 사이를 셉니다. 주말을 뺀 영업일과 만 나이·연차까지 한곳에서 봅니다.',
    url: 'https://mnledu.com/lifestyle/date-calc.html',
    icon: 'calendar-days',
    badge: 'NEW',
    tags: ['#날짜', '#계산', '#일정관리']
  },
  {
    id: 'unit-converter',
    title: '유니버설 단위 변환기',
    category: 'LIFESTYLE',
    desc: '길이·무게·넓이·부피·데이터를 한 번에 변환합니다. 평, 근, 되처럼 우리 단위도 함께 다룹니다.',
    url: 'https://mnledu.com/lifestyle/unit-converter.html',
    icon: 'ruler',
    badge: null,
    tags: ['#단위변환', '#계산', '#부동산']
  },
  {
    id: 'calculator',
    title: '스마트 수식 계산기',
    category: 'LIFESTYLE',
    desc: '괄호와 거듭제곱이 섞인 식을 그대로 계산합니다. 계산 기록을 눌러 다시 불러올 수 있습니다.',
    url: 'https://mnledu.com/lifestyle/calculator.html',
    icon: 'square-equal',
    badge: null,
    tags: ['#계산', '#수식', '#오프라인']
  },
  {
    id: 'timezone-dial',
    title: '글로벌 시차 다이얼',
    category: 'LIFESTYLE',
    desc: '슬라이더를 밀면 여러 도시의 시계가 함께 움직입니다. 해외 미팅 시간을 잡을 때 씁니다.',
    url: 'https://mnledu.com/lifestyle/timezone-dial.html',
    icon: 'globe',
    badge: 'NEW',
    tags: ['#시차', '#일정관리', '#해외']
  },

  {
    id: 'vocab-quiz',
    title: '단어장 & 퀴즈',
    category: 'LIFESTYLE',
    desc: '내 단어를 직접 넣거나 CSV로 불러와 객관식·주관식 퀴즈를 만듭니다. 틀린 문제는 오답 노트에 모입니다.',
    url: 'https://mnledu.com/lifestyle/vocab-quiz.html',
    icon: 'graduation-cap',
    badge: 'NEW',
    tags: ['#공부', '#자기계발', '#암기', '#시험준비']
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
  },
  {
    id: 'sudoku',
    title: '스도쿠',
    category: 'ENTERTAINMENT',
    desc: '난이도 세 단계에 메모·힌트·되돌리기를 갖춘 스도쿠. 실수 횟수와 최고 기록을 함께 남깁니다.',
    url: 'https://mnledu.com/entertainment/sudoku.html',
    icon: 'grid-3x3',
    badge: 'NEW',
    tags: ['#게임', '#퍼즐', '#쉬는시간', '#오프라인']
  },
  {
    id: 'snake',
    title: '스네이크',
    category: 'ENTERTAINMENT',
    desc: '키보드와 스와이프로 조작하는 뱀 게임. 벽 통과 여부와 속도를 고르고 최고 점수에 도전합니다.',
    url: 'https://mnledu.com/entertainment/snake.html',
    icon: 'worm',
    badge: 'NEW',
    tags: ['#게임', '#쉬는시간', '#오프라인', '#모바일']
  },
  {
    id: 'minesweeper',
    title: '지뢰찾기',
    category: 'ENTERTAINMENT',
    desc: '초급·중급·고급 난이도의 지뢰찾기. 깃발을 꽂아 표시하고 기록에 도전합니다.',
    url: 'https://mnledu.com/entertainment/minesweeper.html',
    icon: 'bomb',
    badge: 'NEW',
    tags: ['#게임', '#퍼즐', '#쉬는시간', '#오프라인']
  },
  {
    id: 'tarot',
    title: '타로 카드 리딩',
    category: 'ENTERTAINMENT',
    desc: '과거·현재·미래 세 장을 뽑아 카드의 뜻을 읽어 줍니다. 잠깐 쉬어 가며 생각을 정리할 때.',
    url: 'https://mnledu.com/entertainment/tarot.html',
    icon: 'sparkles',
    badge: 'NEW',
    tags: ['#운세', '#타로', '#쉬는시간']
  },
  {
    id: 'neon-ladder',
    title: '네온 사다리 타기',
    category: 'ENTERTAINMENT',
    desc: '참가자를 넣으면 모두 동시에 출발하는 사다리를 그립니다. 벌칙이나 순서를 정할 때 씁니다.',
    url: 'https://mnledu.com/entertainment/neon-ladder.html',
    icon: 'waypoints',
    badge: 'NEW',
    tags: ['#게임', '#모임', '#랜덤', '#사다리']
  },
  {
    id: 'horse-race',
    title: '행운의 번호 경마',
    category: 'ENTERTAINMENT',
    desc: '각자 말 한 마리를 골라 순위로 배당을 나눕니다. 회식 자리나 팀 모임에서 순서를 정할 때.',
    url: 'https://mnledu.com/entertainment/horse-race.html',
    icon: 'trophy',
    badge: 'NEW',
    tags: ['#게임', '#모임', '#랜덤', '#내기']
  },
  {
    id: 'lotto',
    title: '럭키 클로버 로또 추첨기',
    category: 'ENTERTAINMENT',
    desc: '행운의 번호와 지금 이 순간을 섞어 다섯 세트를 뽑습니다. 뺄 번호를 지정할 수 있습니다.',
    url: 'https://mnledu.com/entertainment/lotto.html',
    icon: 'clover',
    badge: 'NEW',
    tags: ['#랜덤', '#로또', '#쉬는시간']
  },
  {
    id: 'russian-roulette',
    title: '러시안 룰렛',
    category: 'ENTERTAINMENT',
    desc: '여섯 칸 중 단 하나. 벌칙이나 순서를 정할 때 긴장감을 더합니다.',
    url: 'https://mnledu.com/entertainment/russian-roulette.html',
    icon: 'dices',
    badge: 'NEW',
    tags: ['#게임', '#모임', '#랜덤', '#쉬는시간']
  },

  {
    id: 'presentation-timer',
    title: '스마트 발표 타이머',
    category: 'PRODUCTIVITY',
    desc: '발표와 Q&A를 이어서 재고 초과 시간을 세어 줍니다. 아젠다를 넣으면 남은 순서의 예상 시각을 다시 계산합니다.',
    url: 'https://mnledu.com/productivity/presentation-timer.html',
    icon: 'timer',
    badge: 'NEW',
    tags: ['#발표', '#타이머', '#회의', '#진행']
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
