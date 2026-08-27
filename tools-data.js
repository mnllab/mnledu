/**
 * ============================================================================
 * TOOLKIT · tools-data.js
 * ============================================================================
 * 포털 대문에 렌더링될 웹앱 데이터 모음입니다.
 * 
 * [데이터 스키마 가이드]
 * @property {string} id       - 툴 고유 식별자 (폴더명/URL과 일치 권장)
 * @property {string} title    - 화면에 표시될 툴의 이름 (짧고 직관적으로)
 * @property {string} category - 카테고리 [ PRODUCTIVITY | DATA & ANALYTICS | DESIGN & MEDIA | ENTERTAINMENT | LIFESTYLE ]
 * @property {string} desc     - 툴에 대한 1~2줄 요약 설명 (UI 카드 크기 고려하여 간결하게)
 * @property {string} url      - 툴이 실행될 HTML 파일 경로
 * @property {string} icon     - Lucide 아이콘 이름 (kebab-case)
 * @property {string|null} badge - 강조 뱃지 [ 'HOT' | 'NEW' | 'BEST' | null ]
 * @property {string[]} tags   - 검색 및 필터링을 위한 해시태그 배열
 * ============================================================================
 */

const TOOLS_DATA = [
  // ---------------------------------------------------------
  // 1. PRODUCTIVITY (업무 생산성)
  // ---------------------------------------------------------
  {
    id: 'plan-outliner',
    title: '사업계획서 아웃라인 빌더',
    category: 'PRODUCTIVITY',
    desc: '문제·솔루션·시장·팀 4단 구조로 목차를 잡고, 개조식 문장으로 뼈대를 세워 초안을 빠르게 완성합니다.',
    url: './tools/plan-outliner/index.html',
    icon: 'file-text',
    badge: 'HOT',
    tags: ['#창업', '#문서작성', '#템플릿']
  },
  {
    id: 'meeting-minutes',
    title: '회의록 스마트 정리기',
    category: 'PRODUCTIVITY',
    desc: '녹취 텍스트를 넣으면 안건, 결정사항, 후속조치를 담당자와 기한이 포함된 표로 자동 분류합니다.',
    url: './tools/meeting-minutes/index.html',
    icon: 'clipboard-list',
    badge: 'NEW',
    tags: ['#문서작성', '#자동정리', '#텍스트']
  },

  // ---------------------------------------------------------
  // 2. DATA & ANALYTICS (데이터 & 분석)
  // ---------------------------------------------------------
  {
    id: 'kstartup-db',
    title: '창업지원사업 공고 DB',
    category: 'DATA & ANALYTICS',
    desc: '주간 공고를 지역/조건별로 필터링하고, 우선순위 등급을 매겨 엑셀(Excel)로 한 번에 다운로드합니다.',
    url: './tools/kstartup-db/index.html',
    icon: 'database',
    badge: 'BEST',
    tags: ['#창업', '#공고', '#엑셀', '#자동정리']
  },

  // ---------------------------------------------------------
  // 3. LIFESTYLE (라이프스타일)
  // ---------------------------------------------------------
  {
    id: 'deadline-timer',
    title: '프로젝트 D-Day 계산기',
    category: 'LIFESTYLE',
    desc: '중요한 공고나 프로젝트 마감일을 등록하면, 마감이 임박한 순서대로 남은 시간을 시각적으로 정렬해 줍니다.',
    url: './tools/deadline-timer/index.html',
    icon: 'calendar-clock',
    badge: null,
    tags: ['#공고', '#일정관리', '#마감']
  },

  // ---------------------------------------------------------
  // 4. DESIGN & MEDIA (디자인 & 미디어)
  // ---------------------------------------------------------
  {
    id: 'palette-lab',
    title: '발표자료 팔레트 랩',
    category: 'DESIGN & MEDIA',
    desc: '메인 컬러 하나로 완벽한 3색 조합을 뽑아내고, 대비율 검증 후 슬라이드용 HEX 코드를 바로 복사합니다.',
    url: './tools/palette-lab/index.html',
    icon: 'palette',
    badge: null,
    tags: ['#색상', '#발표자료', '#템플릿']
  },

  // ---------------------------------------------------------
  // 5. ENTERTAINMENT (오락 & 엔터테인먼트)
  // ---------------------------------------------------------
  {
    id: 'icebreak-roulette',
    title: '아이스브레이킹 룰렛',
    category: 'ENTERTAINMENT',
    desc: '어색한 모임 분위기를 띄우는 랜덤 질문을 뽑고, 전체 인원수에 맞춰 즉석에서 팀을 편성해 줍니다.',
    url: './tools/icebreak-roulette/index.html',
    icon: 'dices',
    badge: 'NEW',
    tags: ['#랜덤', '#모임', '#발표자료']
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
