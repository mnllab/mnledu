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
    id: 'text-batch-factory',
    title: '스마트 텍스트 가공 공장',
    category: 'PRODUCTIVITY',
    desc: '붙여 넣은 텍스트를 브라우저 안에서 즉시 정리합니다. 마크다운 제거, 자막 분할, 리스트 넘버링을 조합해서 씁니다.',
    url: 'https://mnledu.com/productivity/text-batch-factory.html',
    icon: 'factory',
    badge: 'NEW',
    tags: ['#텍스트정리', '#자막', '#리스트가공', '#자동화']
  },
  {
    id: 'data-slicer',
    title: '엑셀·CSV 원클릭 분할 압축기',
    category: 'PRODUCTIVITY',
    desc: '기준 열을 고르면 그 값별로 파일을 나눠 ZIP 하나로 내려받습니다. 지역별·부서별로 쪼개 보내는 일을 한 번에 끝냅니다.',
    url: 'https://mnledu.com/productivity/data-slicer.html',
    icon: 'scissors',
    badge: 'NEW',
    tags: ['#엑셀', '#CSV', '#파일분할', '#자동화']
  },
  {
    id: 'copy-desk',
    title: '원클릭 복붙 작업대',
    category: 'PRODUCTIVITY',
    desc: '작업 중인 프롬프트·대본·링크를 카드로 모아 두고 편집 모드와 복사 모드를 오가며 씁니다. 타이핑하면 바로 저장됩니다.',
    url: 'https://mnledu.com/productivity/copy-desk.html',
    icon: 'clipboard-list',
    badge: 'NEW',
    tags: ['#복사', '#메모', '#자동저장', '#프롬프트']
  },
  {
    id: 'receipt-to-excel',
    title: '영수증 지출결의서 변환기',
    category: 'PRODUCTIVITY',
    desc: '영수증 사진에서 날짜·금액·상호를 읽어 지출결의서 표로 만듭니다. 여러 장을 이어 붙이고 엑셀로 내려받습니다.',
    url: 'https://mnledu.com/productivity/receipt-to-excel.html',
    icon: 'receipt',
    badge: 'NEW',
    tags: ['#영수증', '#엑셀', '#지출결의서', '#OCR']
  },
  {
    id: 'roster-maker',
    title: '공평무사 당직표 생성기',
    category: 'PRODUCTIVITY',
    desc: '명단과 휴가만 넣으면 당직표를 자동으로 짭니다. 연속 당직을 막고, 끌어다 놓아 교대하며, 공지문으로 내보냅니다.',
    url: 'https://mnledu.com/productivity/roster-maker.html',
    icon: 'calendar-check',
    badge: 'NEW',
    tags: ['#당직표', '#근무표', '#자동배정', '#엑셀']
  },
  {
    id: 'sheet2memo',
    title: '시트 포스트잇 대시보드',
    category: 'PRODUCTIVITY',
    desc: '구글 시트나 엑셀 파일을 넣으면 각 행을 포스트잇 카드로 펼쳐 보여 줍니다. 검색·분류로 원하는 카드만 골라 봅니다.',
    url: 'https://mnledu.com/productivity/sheet2memo.html',
    icon: 'layout-grid',
    badge: 'NEW',
    tags: ['#스프레드시트', '#대시보드', '#정리', '#검색']
  },
  {
    id: 'smart-list',
    title: '스마트 리스트 변환기',
    category: 'PRODUCTIVITY',
    desc: '엑셀에서 복사한 세로 목록을 아웃룩·슬랙·SQL에 맞는 한 줄로 바꿉니다. 빈 줄과 중복을 자동으로 걸러 냅니다.',
    url: 'https://mnledu.com/productivity/smart-list.html',
    icon: 'list-ordered',
    badge: 'NEW',
    tags: ['#목록', '#자동정리', '#SQL', '#복사']
  },
  {
    id: 'text-diff',
    title: '문서·계약서 정밀 비교기',
    category: 'PRODUCTIVITY',
    desc: '원본과 수정본을 나란히 놓고 바뀐 곳만 찾아냅니다. 단어·글자 단위 비교와 공백·대소문자 무시를 고를 수 있습니다.',
    url: 'https://mnledu.com/productivity/text-diff.html',
    icon: 'diff',
    badge: 'NEW',
    tags: ['#계약서', '#비교', '#검수', '#문서']
  },
  {
    id: 'palette-picker',
    title: '브랜드 컬러 추출기',
    category: 'PRODUCTIVITY',
    desc: '로고나 사진을 올리면 대표 색과 팔레트를 뽑아 줍니다. 클릭 한 번으로 HEX·RGB·HSL 코드를 복사합니다.',
    url: 'https://mnledu.com/productivity/palette-picker.html',
    icon: 'palette',
    badge: 'NEW',
    tags: ['#컬러', '#디자인', '#팔레트', '#브랜드']
  },
  {
    id: 'asset-hub',
    title: '원클릭 에셋 허브',
    category: 'PRODUCTIVITY',
    desc: '자주 쓰는 문구·색상·로고·링크를 모아 두고 눌러서 복사합니다. 이미지도 클립보드에 담겨 문서에 바로 붙습니다.',
    url: 'https://mnledu.com/productivity/asset-hub.html',
    icon: 'clipboard-copy',
    badge: 'NEW',
    tags: ['#에셋', '#복사', '#브랜드', '#자동화']
  },
  {
    id: 'data-harvester',
    title: '스마트 데이터 수집·복원기',
    category: 'PRODUCTIVITY',
    desc: '폴더를 끌어다 놓아 파일 목록을 표로 만들고, 뒤섞인 글에서 링크·메일을 뽑고, 깨진 한글 주소를 되살립니다.',
    url: 'https://mnledu.com/productivity/data-harvester.html',
    icon: 'database',
    badge: 'NEW',
    tags: ['#데이터', '#링크추출', '#파일목록', '#복원']
  },
  {
    id: 'pdf-signature',
    title: 'PDF 서명 스탬프',
    category: 'PRODUCTIVITY',
    desc: '서명 사진의 흰 배경을 지우고 PDF 원하는 자리에 올려 저장합니다. 파일은 브라우저 밖으로 나가지 않습니다.',
    url: 'https://mnledu.com/productivity/pdf-signature.html',
    icon: 'signature',
    badge: 'NEW',
    tags: ['#PDF', '#서명', '#문서', '#이미지']
  },
  {
    id: 'qr-studio',
    title: '맞춤형 QR코드 생성기',
    category: 'PRODUCTIVITY',
    desc: '색과 크기를 정해 인쇄용 고화질 QR코드를 만듭니다. 투명 배경 PNG와 벡터 SVG로 저장됩니다.',
    url: 'https://mnledu.com/productivity/qr-studio.html',
    icon: 'qr-code',
    badge: 'NEW',
    tags: ['#QR', '#인쇄', '#디자인', '#오프라인']
  },
  {
    id: 'meeting-minutes',
    title: '스마트 회의록',
    category: 'PRODUCTIVITY',
    desc: '질문과 답변을 적으면 한글·워드·슬랙·노션 서식에 맞춰 복사합니다. 미결 항목은 따로 모아 보여줍니다.',
    url: 'https://mnledu.com/productivity/meeting-minutes.html',
    icon: 'clipboard-list',
    badge: 'NEW',
    tags: ['#회의', '#문서작성', '#복사', '#마크다운']
  },
  {
    id: 'slot-coordinator',
    title: '스마트 일정 코디네이터',
    category: 'PRODUCTIVITY',
    desc: '캘린더 캡처를 붙여넣으면 빈 시간을 뽑아 줍니다. 버퍼와 점심을 빼고 보낼 문장까지 만듭니다.',
    url: 'https://mnledu.com/productivity/slot-coordinator.html',
    icon: 'calendar-clock',
    badge: 'NEW',
    tags: ['#일정', '#미팅', '#시차', '#자동정리']
  },
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
    id: 'birth-chart',
    title: '탄생 천궁도 분석',
    category: 'LIFESTYLE',
    desc: '생년월일과 출생 시각, 출생지 좌표로 천체 배열을 역산합니다. 상승점과 중천점, 12하우스, 주요 각을 함께 봅니다.',
    url: 'https://mnledu.com/lifestyle/birth-chart.html',
    icon: 'orbit',
    badge: 'NEW',
    tags: ['#별자리', '#천궁도', '#성향', '#쉬는시간']
  },
  {
    id: 'biorhythm',
    title: '힐링 바이오리듬',
    category: 'LIFESTYLE',
    desc: '생년월일만 넣으면 오늘의 신체·감성·지성 리듬을 곡선으로 보여 줍니다. 흐름에 맞는 하루 보내는 법도 함께 안내합니다.',
    url: 'https://mnledu.com/lifestyle/biorhythm.html',
    icon: 'activity',
    badge: 'NEW',
    tags: ['#웰니스', '#컨디션', '#리듬', '#쉬는시간']
  },
  {
    id: 'food-picker',
    title: '오늘 뭐 먹지',
    category: 'LIFESTYLE',
    desc: '날씨와 컨디션, 함께 먹는 사람, 식사 뒤 일정을 넣으면 메뉴 224가지 중에서 일곱 가지를 골라 줍니다.',
    url: 'https://mnledu.com/lifestyle/food-picker.html',
    icon: 'utensils',
    badge: 'NEW',
    tags: ['#메뉴', '#추천', '#점심', '#쉬는시간']
  },
  {
    id: 'saju-studio',
    title: '강점으로 읽는 만세력',
    category: 'LIFESTYLE',
    desc: '생년월일과 태어난 시각으로 사주 여덟 글자를 뽑고, 타고난 기운을 강점 중심으로 풀어 줍니다.',
    url: 'https://mnledu.com/lifestyle/saju-studio.html',
    icon: 'compass',
    badge: 'NEW',
    tags: ['#사주', '#만세력', '#성향', '#쉬는시간']
  },
  {
    id: 'kstartup-board',
    title: '이번 주 창업지원사업',
    category: 'LIFESTYLE',
    desc: '이번 주 K-Startup 공고를 마감 임박순으로 모아 봅니다. 지역과 대상으로 걸러 필요한 것만 골라낼 수 있습니다.',
    url: 'https://mnledu.com/lifestyle/kstartup-board.html',
    icon: 'layout-dashboard',
    badge: 'PINNED',  // 카테고리와 무관하게 항상 그리드 맨 앞. index.html 의 PINNED_ID 참고
    tags: ['#창업', '#지원사업', '#공고', '#마감']
  },
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
    id: 'advanced-image-tailor',
    title: '스마트 이미지 재단기',
    category: 'DESIGN & MEDIA',
    desc: '여러 장의 이미지를 같은 캔버스 규격으로 한 번에 맞춥니다. 맞춤 방식과 9분할 앵커를 지정해 일괄 ZIP으로 내보냅니다.',
    url: 'https://mnledu.com/design-media/advanced-image-tailor.html',
    icon: 'crop',
    badge: 'NEW',
    tags: ['#이미지편집', '#자르기', '#일괄처리', '#썸네일']
  },
  {
    id: 'vocal-rhythm-master-studio',
    title: '보컬 & 리듬 마스터 스튜디오',
    category: 'DESIGN & MEDIA',
    desc: '마이크로 실시간 음정을 스캔하고 나만의 스트로크 패턴으로 메트로놈을 연습합니다. 보컬과 반주를 함께 녹음할 수 있습니다.',
    url: 'https://mnledu.com/design-media/vocal-rhythm-master-studio.html',
    icon: 'mic',
    badge: 'NEW',
    tags: ['#보컬연습', '#메트로놈', '#음정', '#녹음']
  },
  {
    id: 'thumb-mockup',
    title: '썸네일·쇼츠 미리보기 시뮬레이터',
    category: 'DESIGN & MEDIA',
    desc: '썸네일이 재생 시간 뱃지·진행률 바·쇼츠 아이콘 열에 어디가 가려지는지, 제목이 몇 줄에서 잘리는지 미리 봅니다.',
    url: 'https://mnledu.com/design-media/thumb-mockup.html',
    icon: 'monitor-play',
    badge: 'NEW',
    tags: ['#썸네일', '#유튜브', '#쇼츠', '#미리보기']
  },
  {
    id: 'uploader-toolkit',
    title: '업로드 스마트 템플릿',
    category: 'DESIGN & MEDIA',
    desc: '날짜를 고르면 제목과 파일명이 규칙대로 만들어지고, 자주 쓰는 문구 블록을 골라 더보기란을 조립합니다.',
    url: 'https://mnledu.com/design-media/uploader-toolkit.html',
    icon: 'upload',
    badge: 'NEW',
    tags: ['#업로드', '#유튜브', '#템플릿', '#자동화']
  },
  {
    id: 'image-studio',
    title: '스마트 올인원 사진 편집 스튜디오',
    category: 'PRODUCTIVITY',
    desc: '자르기·회전·크기 조절·배경 제거를 브라우저에서 처리합니다. 서명은 즉시, 복잡한 사진은 AI로 배경을 지웁니다.',
    url: 'https://mnledu.com/productivity/image-studio.html',
    icon: 'image',
    badge: 'NEW',
    tags: ['#이미지편집', '#배경제거', '#자르기', '#AI']
  },
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
    id: 'balance-game',
    title: '밸런스 게임 자판기',
    category: 'ENTERTAINMENT',
    desc: '둘 중 하나만 고르는 밸런스 게임을 뽑아 줍니다. 직접 만든 질문을 넣거나 AI로 뽑은 것을 붙여넣어 늘릴 수 있습니다.',
    url: 'https://mnledu.com/entertainment/balance-game.html',
    icon: 'scale',
    badge: 'NEW',
    tags: ['#밸런스게임', '#선택', '#모임', '#쉬는시간']
  },
  {
    id: 'fashion-detector',
    title: '패션 단속반',
    category: 'ENTERTAINMENT',
    desc: '전신 사진을 올리면 상의·하의·신발 색을 뽑아 색조합을 판정합니다. 50가지 장난스러운 판정이 나옵니다.',
    url: 'https://mnledu.com/entertainment/fashion-detector.html',
    icon: 'shirt',
    badge: 'NEW',
    tags: ['#패션', '#색조합', '#재미', '#쉬는시간']
  },
  {
    id: 'aggro-match',
    title: '어그로 매치',
    category: 'ENTERTAINMENT',
    desc: '고민 중인 제목 후보를 한 줄씩 넣으면 1대1로 붙여 최종 하나를 골라 줍니다. 여러 개보다 둘 중 하나가 쉽습니다.',
    url: 'https://mnledu.com/entertainment/aggro-match.html',
    icon: 'swords',
    badge: 'NEW',
    tags: ['#제목', '#이상형월드컵', '#선택', '#쉬는시간']
  },
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
