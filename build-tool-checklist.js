/**
 * build-tool-checklist.js
 * ---------------------------------------------------------------
 * tools-data.js 를 읽어 NEW-TOOL-CHECKLIST.md 를 다시 만든다.
 * 카테고리별 표는 매번 새로 생성하고, 규격 안내 부분은 고정 텍스트.
 *
 *   node build-tool-checklist.js
 *
 * 도구를 추가하거나 지울 때마다 표준 파이프라인 맨 끝에서 이것도
 * 한 번 돌려서 목록을 최신 상태로 유지한다.
 * ---------------------------------------------------------------
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = __dirname;

function loadCatalog(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), sandbox);
  return sandbox.window.TOOLS_DATA || [];
}

const ko = loadCatalog('tools-data.js');
const en = loadCatalog('tools-data-en.js');

const byCategory = {};
ko.forEach(t => { (byCategory[t.category] = byCategory[t.category] || []).push(t); });

const today = new Date().toISOString().slice(0, 10);
const enOnly = en.filter(t => !ko.find(k => k.id === t.id));

let md = '# TOOLKIT 신규 도구 개발 참고 목록\n\n';
md += '자동 생성됩니다. 손으로 고치지 말고 `node build-tool-checklist.js` 로 갱신하세요.\n\n';
md += '마지막 갱신: ' + today + ' · 현재 등록 ' + ko.length + '개';
md += (enOnly.length ? ' (영문 ' + en.length + '개, ' + enOnly.map(t => t.id).join(', ') + ' 은 영문 전용)' : ' (한국어·영문 모두)');
md += '\n\n';
md += '새 웹앱을 만들기 전에 이 문서를 먼저 봐 주세요. 목적 두 가지입니다.\n';
md += '1. **이미 있는 기능과 겹치지 않는지** 확인\n';
md += '2. mnledu.com 에 등록될 때 필요한 **최소 규격**을 미리 맞춰서, 통합 작업이 빨리 끝나게\n\n';
md += '---\n\n## 1. 지금 있는 도구 전체 목록\n\n';

Object.keys(byCategory).forEach(c => {
  md += '### ' + c + ' (' + byCategory[c].length + '개)\n\n';
  md += '| id | 이름 | 하는 일 |\n|---|---|---|\n';
  byCategory[c].forEach(t => {
    md += '| `' + t.id + '` | ' + t.title + ' | ' + t.desc + ' |\n';
  });
  md += '\n';
});

md += `---

## 2. 새 도구를 만들 때 지켜 주시면 좋은 것

**필수는 아닙니다.** 안 지키셔도 제가 받아서 다 맞춰 드리는데, 아래를
미리 맞춰서 주시면 통합 작업이 훨씬 빨리 끝납니다.

### 파일

- 한국어판·영문판 **두 벌**을 함께 주세요. 파일명은 뭐든 상관없습니다
  (제가 배치하면서 정리합니다).
- 단일 HTML 파일 하나로, 외부 CDN(Tailwind, 폰트, 필요한 라이브러리)
  정도만 쓰고 별도 서버·백엔드가 필요 없는 구조로 부탁드립니다.
  이 사이트의 모든 도구가 "브라우저 안에서만 동작, 서버로 전송 안 함"
  원칙을 지키고 있습니다.

### 카테고리

다섯 개 중 하나로 분류됩니다. 애매하면 제가 판단해서 넣습니다.

- **PRODUCTIVITY** — 문서·텍스트·이미지 가공, 변환기, 생성기
- **DATA & ANALYTICS** — 계산기, OCR, 데이터 추출
- **LIFESTYLE** — 날짜·시간, 웰니스, 개인 취향, 정보 대시보드
- **DESIGN & MEDIA** — 이미지·영상 편집, 프롬프터, 썸네일
- **ENTERTAINMENT** — 게임, 추첨기, 재미용 도구

### 안내문 (선택)

있으면 좋지만 없어도 됩니다 — 없으면 제가 씁니다. 있다면 이 구조를
따라 주시면 그대로 씁니다.

- 배경 설명 (왜 이 도구가 필요한지, 1~2문단)
- 활용 예시 (3~4개)
- 사용 방법 (단계별)
- 옵션 설명 (있다면)
- FAQ (3~6개)
- "모든 계산은 브라우저 안에서 처리되며 서버로 전송되지 않습니다" 류의
  안내 문구

### 온디바이스 AI를 쓰신다면

최근 도구들(receipt-to-excel, ocrextract, voicenote, pdf-to-markdown)이
전부 이 패턴입니다.

- 기본 기능은 AI 없이도 동작해야 합니다. AI는 **선택적으로 켜는 보강**
  기능으로 두세요.
- 처음 쓸 때만 모델을 내려받고, 이후엔 브라우저 캐시에서 즉시 로드되게
  해 주세요.
- 모델 용량과 무엇이 좋아지는지를 화면에 간단히 안내해 주시면 좋습니다.

### 하지 않아도 되는 것

아래는 전부 제가 등록하면서 자동으로 붙여 드립니다. 미리 안 넣으셔도
됩니다.

- SEO 메타 태그(title, description, canonical, hreflang, OG, 구조화 데이터)
- 공유 버튼 (오른쪽 아래 플로팅 버튼)
- 방문자 수 카운터
- 버전 배지 (페이지 하단에 뜨는 v1.0 · 날짜)
- 사이트맵·메인페이지 카드 등록

---

## 3. 참고 — 사이트 전체 구조

\`\`\`
mnledu.com/kr/<category>/<id>_kr.html   한국어판
mnledu.com/en/<category>/<id>_en.html   영문판
\`\`\`

카테고리 폴더명: productivity, data-analytics, lifestyle, design-media,
entertainment (소문자, 하이픈)

id 는 영문 소문자와 하이픈만 씁니다. 예: receipt-to-excel, wealth-dashboard
`;

fs.writeFileSync(path.join(ROOT, 'NEW-TOOL-CHECKLIST.md'), md, 'utf8');
console.log('NEW-TOOL-CHECKLIST.md 갱신 완료 (' + ko.length + '개 도구, ' + Object.keys(byCategory).length + '개 카테고리)');
