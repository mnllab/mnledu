# 빌드 순서

```bash
node build-en.js       # 영문 포털 · 정보 페이지 생성, 언어 버튼 삽입
node build-seo.js      # 사이트맵(한·영 + hreflang), 양쪽 index 도구 링크
node patch-tool-pages.js
node build-guides.js
```

또는 `node build-all.js` (영문 도구 페이지 작업이 끝난 뒤 통합 예정)

## 현재 상태

- [x] 1차 뼈대 : /en/ 구조, 언어 토글, hreflang, 영문 메인 · 정보 페이지 4종
- [ ] 2차 : 영문 도구 페이지 32개 (/en/productivity/... 등)
- [ ] 3차 : 영문 안내문 32개 (guides-en-a.js, guides-en-b.js)

## 한국 전용 도구

`tools-data-en.js` 의 desc 첫머리에 `Korea-specific.` 을 붙입니다.
현재 해당 : gov-fund-calc

## 영문 도구 빌드

```bash
node build-en-tools.js --list     # 준비된 것 / 남은 것
node build-en-tools.js lotto      # 하나만
node build-en-tools.js            # 전부
node fix-paths.js                 # 마지막에 항상
```

도구 하나마다 `en-tools/<id>.js` 에 patches · strings · guide 를 적습니다.
빌드하면 남은 한글 개수를 알려주므로, 0이 될 때까지 strings 를 채우면 됩니다.

## 진행 상황 (PRODUCTIVITY 완료)

- [x] PRODUCTIVITY 10 : notepad, emailgen, templatemerger, promptmerger, listformat,
      textclean, anonymizer, pdftxt, pdfmerge, voicenote
- [x] lotto (파워볼 기본), percent-calc (세율 선택)
- [x] DATA & ANALYTICS 3 : cagrcal, ocrextract, gov-fund-calc (Korea-specific 명시)
- [x] LIFESTYLE 6 : calculator, unit-converter, timezone-dial, date-calc, vocab-quiz, youtubenote
- [x] DESIGN & MEDIA 3 : screendeco, mosaicmarker, teleprompter
- [x] ENTERTAINMENT 8 : tetris, sudoku, snake, minesweeper, tarot,
      neon-ladder, horse-race, russian-roulette

## 영문화 완료 (32/32)

의도적으로 남긴 한글
- 정규식 문자 범위  /[^가-힣ㄱ-ㅎ...]/   (textclean, pdftxt)
- 한국어 조사 처리  은|는|이|가         (emailgen, voicenote)
- 한국 단위 병기    자 근 관 평 되 말    (unit-converter)
- 페이지 범위 입력  /^(all|전체)$/       (pdfmerge)

기능이 바뀐 도구
- lotto           기본값 Powerball, Mega Millions 규칙 포함
- percent-calc    부가세 국가 프리셋 11종 + 직접 입력, 기본 US 0%, 통화 $
- gov-fund-calc   Korea-specific 안내 박스, 금액 KRW 표기
- timezone-dial   도시 20개 영문화, 미국 도시 우선
- unit-converter  미국 단위 우선, 한국 단위는 (KR) 표기
- date-calc       세는나이·연나이 (KR) 표기
- voicenote       인식 언어 기본값 English
- ocrextract      인식 언어 기본값 English
- tarot           메이저 아르카나 22장 영문 해석

### 문자열 작업 요령
- 짧은 단어 쌍(`원`, `마진`, `저장`)은 긴 문장을 깨뜨린다. 완전한 구절로 적을 것
- 통화·단위는 문자열 치환이 아니라 함수를 patch 로 교체 (`won()` 등)
- 코드 주석과 정규식 안의 한글은 그대로 두어도 된다


## presentation-timer (2026-08-28 추가)

한국어·영문 페이지를 완성본으로 직접 받아 배치한 도구.
안내문이 파일 안에 이미 들어 있어 `guides-b.js` / `en-tools` 에 항목이 없다.
`build-guides.js` 는 이 도구를 "안내문없음" 으로 건너뛰며, 그게 정상이다.
안내문을 고치려면 해당 HTML 의 TOOLKIT:GUIDE 마커 사이를 직접 수정한다.

`patch-tool-pages.js` 는 이제 한국어 도구 페이지에도 hreflang 을 넣는다
(tools-data-en.js 에 같은 id 가 있을 때만).


## kstartup-board (2026-08-28 추가)

LIFESTYLE 최상단. 한국어·영문 완성본을 직접 받아 배치했으므로
presentation-timer 와 마찬가지로 guides 항목이 없다.
원본 파일의 canonical 이 /productivity/ 였으나 카테고리에 맞춰 /lifestyle/ 로 정정.

## 카드 UI 변경 (2026-08-28)

- 카드 안 해시태그는 표시 전용 span 으로 바꿨다.
  모바일에서 태그를 누르면 카드 링크가 함께 눌리는 문제 때문.
  태그로 거르려면 목록 위쪽 TAGS 줄을 쓴다.
- 뷰어 iframe 은 열 때마다 새 요소로 교체한다 (swapFrame).
  같은 iframe 에 src 를 다시 넣으면 그 이동이 브라우저 기록에 쌓여
  뒤로 가기에서 빈 화면이 나왔다.
- 뒤로 가기 버튼은 목록을 거쳐 들어온 경우에만 history.back() 을 쓴다
  (openedFromList). 주소로 바로 들어오면 목록 주소로 바꾼다.


## 2026-08-28 추가 4종 (PRODUCTIVITY)

pdf-signature · qr-studio · meeting-minutes · slot-coordinator

완성본을 직접 받아 배치했으므로 guides 항목이 없다.
build-guides.js 는 "안내문없음" 으로 건너뛴다 (정상).
안내문을 고치려면 각 HTML 의 TOOLKIT:GUIDE 마커 사이를 직접 수정한다.

현재 guides 항목 없이 안내문이 파일에 박혀 있는 도구
  presentation-timer, kstartup-board,
  pdf-signature, qr-studio, meeting-minutes, slot-coordinator

## assets 폴더

kstartup-board 가 assets/01_엠엔엘뉴스.xlsx 를 참조한다.
파일명이 한글이므로 압축·해제 과정에서 깨지지 않는지 확인할 것.
HTML 안에서는 퍼센트 인코딩된 경로로 참조한다.


## 2026-08-28 추가 3종 (LIFESTYLE 상단)

biorhythm · food-picker · saju-studio

완성본을 직접 받아 배치. guides 항목 없음 (build-guides.js 가 건너뜀).

guides 항목 없이 안내문이 파일에 박혀 있는 도구 (총 9개)
  presentation-timer, kstartup-board,
  pdf-signature, qr-studio, meeting-minutes, slot-coordinator,
  biorhythm, food-picker, saju-studio

## 2026-08-29 birth-chart 추가 (LIFESTYLE 상단)

완성본 직접 배치. guides 항목 없음.

guides 항목 없이 안내문이 파일에 박혀 있는 도구 (총 10개)
  presentation-timer, kstartup-board,
  pdf-signature, qr-studio, meeting-minutes, slot-coordinator,
  biorhythm, food-picker, saju-studio, birth-chart


## 2026-08-29 대량 추가 12종 (54개 도달)

PRODUCTIVITY 8 : receipt-to-excel, roster-maker, sheet2memo, smart-list,
  text-diff, palette-picker, asset-hub, data-harvester
DESIGN & MEDIA 2 : thumb-mockup, uploader-toolkit
ENTERTAINMENT 1 : aggro-match
image-studio : 원본 canonical 이 /productivity/ 였으므로 PRODUCTIVITY 로 배치
  (design-media 아님 — 처음에 잘못 분류했다가 정정)

원본 파일들의 canonical 이 /creative/ 로 되어 있었는데, 실제 사이트에는
그런 카테고리·폴더가 없다. thumb-mockup·uploader-toolkit·aggro-match 는
각각 design-media·design-media·entertainment 폴더로 배치하고
canonical/og/ld+json 안의 /creative/ 를 실제 경로로 정정했다.
새 카테고리 폴더를 받으면 이 점을 먼저 확인할 것.

data-harvester 영문판의 정적 placeholder "0개" → "0" 로 수정
(리스트가 비어 있을 때 잠깐 보이는 초기값, JS가 이후 숫자로 덮어씀).

guides 항목 없이 안내문이 파일에 박혀 있는 도구 (총 22개)
  presentation-timer, kstartup-board, pdf-signature, qr-studio,
  meeting-minutes, slot-coordinator, biorhythm, food-picker, saju-studio,
  birth-chart, receipt-to-excel, roster-maker, sheet2memo, smart-list,
  text-diff, thumb-mockup, uploader-toolkit, palette-picker, aggro-match,
  asset-hub, data-harvester, image-studio

## 버전 히스토리 (2026-08-30 도입)

도구를 새로 만들거나 기존 도구를 고칠 때마다 아래로 기록을 남깁니다.

```bash
node bump-version.js <도구id> <버전> "<한 줄 메모>"
```

예:
```bash
node bump-version.js lotto 1.1 "메가밀리언 배당표를 최신 규정으로 갱신"
node bump-version.js notepad 2.0 "글자 수 세기 방식을 바이트 기준으로 개편"
```

버전 번호는 강제하지 않지만 이 정도 관례를 권합니다.
- `x.1 → x.2` : 문구·스타일 손질, 버그 수정
- `1.x → 2.0` : 기능이 실질적으로 달라짐 (규칙 변경, 옵션 체계 개편 등)

돌리면 `VERSIONS.json`에 기록이 쌓이고 `CHANGELOG.md`가 자동으로 다시 만들어집니다.
`VERSIONS.json`은 손으로 고치지 않습니다 — `bump-version.js`로만 갱신합니다.

### 파일 구성

- `VERSIONS.json` — 기계가 읽는 원본. 도구 id별 현재 버전과 history 배열.
- `CHANGELOG.md` — `VERSIONS.json`에서 자동 생성되는 사람이 읽는 버전. 날짜 역순.
- `build-changelog.js` — `VERSIONS.json` → `CHANGELOG.md` 변환기. `bump-version.js`가 알아서 호출하므로 따로 돌릴 일은 거의 없음.
- `bump-version.js` — 새 버전을 기록하는 실제 진입점. 도구를 고쳤으면 항상 이걸로 마무리.

### addedDate 가 "untracked-baseline" 인 도구

2026-08-30 버전 관리를 시작하기 전부터 이미 사이트에 있던 32개 도구입니다.
실제 최초 제작일이 남아 있지 않아 지어내지 않았습니다. 이 도구들을 앞으로
고치면 `bump-version.js`가 오늘 날짜로 첫 history 항목을 만들어 주고,
`addedDate`는 baseline 그대로 둡니다 (언제 처음 만들었는지는 여전히 모르므로).

### 새 도구를 추가할 때

`patch-tool-pages.js` · `build-guides.js` 등을 돌린 뒤, 마지막에 반드시:
```bash
node bump-version.js <새-도구-id> 1.0 "최초 등록 (카테고리)"
```
을 잊지 않고 실행합니다. 이번 54개 등록분은 이미 `VERSIONS.json`에 소급 기록해 두었습니다.

## 운영 방침 (2026-08-30)

사용자는 완성된 HTML 파일만 올린다. 배치·카탈로그 등록·SEO 빌드·
버전 기록까지 전부 Claude 가 알아서 처리하고 전체 zip 으로 돌려준다.
사용자에게 스크립트 실행이나 절차를 요구하지 않는다.

새 파일을 받으면 순서:
1. lang="ko"/"en" 과 canonical 로 언어·카테고리·id 파악
   (canonical 이 실제 카테고리와 다르면 정정 — 지금까지 /creative/, /productivity/
   같은 오기재가 반복됨. 원본 파일의 canonical 을 신뢰하되 실제 폴더 체계에는
   존재 확인 후 매핑)
2. 해당 카테고리 폴더(ko/en 양쪽)에 배치
3. 안내문이 파일 안에 이미 있으면 TOOLKIT:GUIDE 마커로 감싸기,
   없으면 guides-a.js/guides-b.js 에 추가하고 build-guides.js 실행
4. tools-data.js · tools-data-en.js 에 항목 추가 (보통 해당 카테고리 최상단,
   사용자가 다른 위치를 원하면 그에 따름)
5. build-seo.js → patch-tool-pages.js → fix-paths.js
6. bump-version.js 로 버전 기록 (신규는 1.0, 수정은 버전 올림)
7. 파일 수 KO/EN 대칭, canonical, hreflang, 영문판 한글 노출 0 을 전수 검증
8. 전체 저장소를 zip 으로 압축해 전달, 무엇이 바뀌었는지 간단히 보고

기존 파일을 다시 올리는 경우(동일 id) — 실제로 내용이 바뀐 부분만 골라
diff 로 확인한 뒤 교체하고, 바뀐 게 없으면 그렇다고 알려주고 넘어간다.

## 페이지 안 버전 배지 (2026-08-30 도입)

VERSIONS.json 의 내용을 각 도구 페이지 "안에" 정적으로 구워 넣습니다.
저작권 증빙용으로 방문자에게 공개되는 부분이라, 도구 파일 하나만
따로 다시 올려도(사이트 전체를 같이 안 올려도) 그 파일 자체에
버전·날짜·히스토리가 다 들어 있어 정상 표시됩니다. 실행 중에
다른 파일을 불러오지 않습니다.

위치 : 각 도구 페이지 하단, TOOLKIT:GUIDE_END 마커 바로 뒤.
모양 : "v1.0 · 2026-08-29" 배지를 누르면 과거 버전 목록이 펼쳐짐.

### ⚠️ 실행 순서를 반드시 지킬 것

build-guides.js 는 안내문(GUIDE_START~END)을 통째로 지우고 항상
</body> 바로 앞에 새로 꽂는다. 버전 배지가 그보다 먼저 있으면
순서가 밀려 배지가 안내문보다 위로 올라간다(내용은 안 깨지지만
보기에 어색함). 그래서:

```bash
node build-seo.js
node patch-tool-pages.js --no-backup
node build-guides.js        # ← 이게 실행되면 순서가 밀릴 수 있음
node fix-paths.js
node inject-version.js      # ← 반드시 build-guides.js 뒤, 맨 마지막에
```

새 도구를 추가하는 표준 파이프라인(위 BUILD.md 상단 "운영 방침"의
5번)이 끝나면 항상 `node inject-version.js` (인자 없이 전체)를
한 번 더 돌려서 54개 전체의 배지 위치를 맨 끝으로 정리한다.

기존 도구 하나만 고쳐서 `bump-version.js` 를 쓸 때는 신경 쓸 필요 없다 —
bump-version.js 가 마지막에 `inject-version.js <그 도구 id>` 를
자동으로 호출한다 (build-guides.js 를 다시 안 돌리는 경우이므로 순서
문제가 생기지 않음).

### 파일

- `inject-version.js` — 배지를 심는 스크립트. `node inject-version.js` (전체)
  또는 `node inject-version.js <id>` (하나만).
- `bump-version.js` 가 이제 VERSIONS.json 갱신 → CHANGELOG.md 재생성 →
  해당 도구 inject-version 까지 한 번에 처리한다.

### baseline 도구의 표시

`addedDate: "untracked-baseline"` 이고 history 가 비어 있는 도구는
배지에 "버전 기록 시작 전"이라고 정직하게 표시한다(가짜 날짜를
채우지 않음). 그 도구를 처음 고쳐서 bump-version.js 를 쓰면 그때부터
날짜가 붙기 시작한다.

## 전달 zip 파일명 규칙 (2026-08-30 도입, 2026-08-30 날짜·시간 추가)

사용자에게 전체 저장소 zip 을 전달할 때마다 파일명에
배포 번호 + 전달 시점(날짜·시간)을 붙인다.

```
mnledu-v1_2026-08-30_1420.zip
mnledu-v2_2026-09-02_0930.zip  ...
```

형식 : mnledu-v{번호}_{YYYY-MM-DD}_{HHMM}.zip
시각은 전달하는 그 시점의 시스템 날짜·시간(24시간제)을 쓴다.

이전 건(2026-08-30, 54개 도구 + 버전 배지 시스템 도입분)은 사용자가
직접 이름을 붙이기로 해서 번호를 매기지 않았다.
**다음 전달부터 v1 로 시작한다.**

전달할 때마다 이 섹션의 "다음 번호"를 갱신해 둔다 (쓰고 나면
바로 다음 값으로 고쳐 놓을 것 — 시각은 매번 그때 것을 새로 넣으므로
따로 기록해 둘 필요 없음).

다음 번호 : v1

이건 도구별 VERSIONS.json/CHANGELOG.md 와는 별개다 — 그쪽은 도구
하나하나의 버전이고, 이 번호는 "전체 저장소를 몇 번째로, 언제
전달했는가" 하는 배포 묶음 번호 + 시각이다.

## 전달 방식 — 업로드용 + 보관용 분리 (2026-08-30 도입)

매번 전체 저장소를 다시 올리면 시간도 걸리고 용량도 크다.
앞으로 사용자에게 전달할 때는 두 개를 함께 준다.

1. **업로드용** — 이번 작업에서 새로 만들었거나 내용이 바뀐 파일만,
   실제 폴더 구조 그대로 압축. 파일명 예 :
   `mnledu-upload-v1_2026-08-30_1420.zip`
   사용자는 이 안의 파일만 GitHub 해당 폴더에 그대로 덮어 올리면 된다.
   전체 재업로드가 필요 없다.

2. **보관용** — 지금까지처럼 저장소 전체를 압축한 것.
   파일명 예 : `mnledu-v1_2026-08-30_1420.zip`
   (앞서 정한 "전달 zip 파일명 규칙" 그대로)

### 업로드용을 만드는 방법

작업 시작 전에 현재 작업 디렉터리를 그대로 복사해 baseline 으로 남겨두고
(예: `cp -r mnledu-main /home/claude/_baseline_vN`), 작업이 끝나면
`diff -rq _baseline_vN mnledu-main` 로 실제 바뀐 파일·새 파일만 골라
그 파일들만 같은 폴더 구조로 담아 업로드용 zip 을 만든다.
삭제된 파일이 있으면 (드묾) 별도로 안내한다 — zip 만으로는 삭제가 안 되므로
"GitHub 에서 이 파일은 직접 지워주세요" 라고 짚어준다.

바뀐 파일이 하나도 없는 스크립트(빌드 도구 등)까지 매번 업로드용에
넣을 필요는 없다 — 실제로 내용이 달라진 것만.


## 2026-08-30 오후 추가분 (다른 제작 방식 도구 7종 + 업데이트 1건)

신규 등록 7개
- data-slicer, copy-desk → PRODUCTIVITY (완비된 채로 옴, /creative/ 오류 없음)
- balance-game, fashion-detector → ENTERTAINMENT
  (원본 canonical 이 각각 /creative/, /fun/ — 다시 등장한 문제, 정정함)
- advanced-image-tailor → DESIGN & MEDIA
  (SEO·안내문 전무하게 옴. 영문판에 약 60개 한글 UI 문자열 잔존 — 전부 번역.
   guides-b.js 에 안내문 새로 작성)
- text-batch-factory → PRODUCTIVITY
  (SEO·안내문 전무. 영문판에 약 40개 한글 잔존 — 전부 번역.
   guides-b.js 에 안내문 새로 작성)
- vocal-rhythm-master-studio → DESIGN & MEDIA
  (완전히 다른 i18n 방식 — 쿼리 파라미터 ?lang=en + 런타임 JS 로 문서 전체를
   번역하는 단일 파일 구조. 오디오 처리 로직은 건드리지 않고 englishMode 를
   파일별로 하드코딩(ko=false / en=true), 언어 토글은 쿼리 조작 대신 실제
   자매 URL 로 이동하도록 수정. 표준 SEO 헤더만 추가.
   ⚠️ 영문판 body 의 실제 텍스트 스왑은 런타임 JS 가 처리하므로, JS 를
   실행하지 않는 크롤러에게는 최초 HTML 이 한국어로 보일 수 있음.
   내부 번역 사전 + 완성된 영문 안내문이 이미 있어 기능은 정상 동작하나
   완전한 정적 프리렌더링은 하지 않았음 — 델리케이트한 WebAudio 코드를
   직접 수정하는 위험을 피하기 위한 판단.)

업데이트 1건
- receipt-to-excel v12 → v2.0 (기존 대비 대폭 개편, 파일 크기 2배 이상)


## kstartup-board 상단 고정 (2026-08-30)

index.html / en/index.html 에 PINNED SECTION 을 추가했다.
검색·카테고리·태그·즐겨찾기 상태와 완전히 무관하게 항상 시작 페이지
최상단(즐겨찾기 섹션보다도 위)에 kstartup-board 카드 하나를 고정 노출한다.

- `PINNED_ID = 'kstartup-board'` 상수로 지정 (index.html 스크립트 안)
- `renderPinned()` 함수가 render() 맨 앞에서 항상 호출됨
- 일반 그리드(visible 배열)에서는 이 도구를 제외해 중복 노출을 막는다
  (tools-data.js 상의 카테고리·개수 집계에는 그대로 포함되므로
  LIFESTYLE 탭 카운트가 그리드에 보이는 카드 수보다 1개 많게 보일 수
  있음 — 의도된 동작, 고정 슬롯에 있기 때문)
- 배지를 'NEW' → 'BEST' 로 변경
- **다른 고정 도구로 바꾸려면** index.html 과 en/index.html 양쪽에서
  `var PINNED_ID = '...'` 값만 바꾸면 된다. 두 파일 모두 고쳐야 한다 —
  en/index.html 은 build-en.js 로 자동 생성되지만, 이 로직 자체가
  한국어 원본(index.html)에서 그대로 복사되는 방식이므로 원본만 고치고
  build-en.js 를 다시 돌리면 영문판도 따라간다.


## 링크 공유하기 버튼 (2026-08-30)

`inject-share.js` 신규 제작. 모든 도구 페이지 오른쪽 아래에 뜨는
플로팅 공유 버튼. 버전 배지와 같은 원칙으로 자기 URL을 파일 안에
정적으로 굳혀 넣어서, 그 페이지 파일 하나만 따로 올려도 정상 작동한다.

- Web Share API 지원 브라우저(대부분 모바일) → OS 기본 공유 시트
- 미지원(대부분 데스크톱) → 주소 입력창 + 복사 버튼 팝업
- 한국어 "공유 · 이 도구 공유하기 · 링크 복사",
  영문 "Share · Share this tool · Copy link" 로 언어별 분리
- position:fixed 라 문서 안 삽입 위치와 무관하게 항상 화면에 뜬다

**위치 규칙** : TOOLKIT:GUIDE_END 바로 뒤, TOOLKIT:VERSION_START 보다 앞.
버전 배지와 마찬가지로 build-guides.js 를 다시 돌리면(baseline 32개 도구는
매번 안내문이 통째로 재생성되므로) 문서 안 순서가 밀릴 수 있다 —
그래서 표준 파이프라인 마지막에 inject-version.js 와 inject-share.js
둘 다 전체로 한 번 더 돌려 순서를 정리한다.

**사용법**
```bash
node inject-share.js            # 전체 도구
node inject-share.js lotto      # 하나만
```

**버전 기록 원칙** : 이 기능은 도구 자체의 변경이 아니라 모든 도구에
공통으로 씌우는 사이트 차원 UI 이므로, 버전 배지 시스템을 처음 넣었을
때와 같은 이유로 61개 도구 각각의 버전을 올리지 않았다. 이 섹션이
곧 그 기록이다.

## 표준 파이프라인 (2026-08-31 갱신 — inject-viewcount.js 추가)

새 도구를 추가하거나 여러 도구를 한꺼번에 고칠 때 마지막 순서:

```bash
node build-seo.js
node patch-tool-pages.js --no-backup
node build-guides.js
node fix-paths.js
node inject-version.js      # 전체 — build-guides.js 가 순서를 흩뜨렸을 수 있어 항상 마지막 근처
node inject-share.js        # 전체 — 위와 같은 이유
node inject-viewcount.js    # 전체 — 새 도구는 이게 없으면 방문자 수가 영영 안 뜬다
```

**⚠️ 새 도구를 추가할 때 inject-viewcount.js 를 빼먹지 말 것.** 다른
다섯 스크립트와 달리 이건 빠뜨려도 에러가 안 나고 그냥 조용히 그
도구만 방문자 수 집계가 안 된다 — 화면에 숫자가 안 뜨는 것도 아니고
그냥 계속 로딩 실패로 처리되어 눈에 잘 안 띈다. 새 도구를 추가하는
작업에서는 반드시 6개 스크립트를 전부 돌리고, 새로 추가한 도구
파일 안에 `TOOLKIT:VIEWCOUNT_START` 마커가 실제로 들어갔는지
직접 확인할 것.

기존 도구 하나만 고쳐서 `bump-version.js` 를 쓸 때는 그 스크립트가
해당 도구의 inject-version 만 자동으로 불러준다. inject-share.js ·
inject-viewcount.js 는 도구 자체가 아니라 사이트 공통 기능이라
도구 하나 고칠 때마다 다시 심을 필요가 없어 bump-version.js 에
연결하지 않았다(이미 있으면 건드리지 않는 멱등 스크립트이므로,
확실치 않으면 그냥 한 번 더 돌려도 무해함). **다만 신규 도구
추가일 때는 bump-version.js 만으로는 부족하니 위 6개를 전부
수동으로 돌려야 한다.**

## kstartup-board 고정 방식 재조정 (2026-08-30, 오후 2차)


별도 "PINNED SECTION" 헤더/구획을 없애고, 대신 카테고리·검색·태그 필터가
무엇이든 그 결과 그리드의 맨 앞에 이 도구가 오도록 바꿨다
(render() 안에서 visible.unshift(pinned)). 즐겨찾기 규칙과 동일하게,
이 도구를 즐겨찾기해도 즐겨찾기 섹션 + 메인 그리드 양쪽에 뜨는 기존
동작을 그대로 따른다(중복 방지 로직 없음, 사이트의 기존 즐겨찾기
표시 관례와 일치).

배지를 BEST → PINNED 로 변경(같은 앰버 스타일 재사용).

**영문판은 고정 기능을 아예 쓰지 않는다.** build-en.js 가 생성 시
`var PINNED_ID = 'kstartup-board';` 를 `var PINNED_ID = '';` 로 치환한다
(한국 정부지원사업 정보라 영어권에 홍보할 이유가 없음). 영문 카탈로그의
배지도 평범한 'NEW' 로 되돌렸다.

**다른 도구를 고정하려면** index.html 의 `var PINNED_ID = '...'` 만
바꾸면 된다. en/index.html 은 그대로 빈 값 유지(build-en.js 가 항상
비운다) — 영문판에 고정 기능을 쓰고 싶어지면 build-en.js 의 해당
치환 줄을 지워야 한다.

## pdf-signature · vocal-rhythm-master-studio 업데이트 (2026-08-30, 저녁)

**pdf-signature** — 배경제거 감도 조절, 회전, 카메라 촬영 기능 추가
(파일 크기 43KB → 67KB). catalog 설명 갱신, v1.1.

**vocal-rhythm-master-studio** — 쿼리 파라미터(?lang=en) + 런타임 JS
번역 방식을 완전히 제거하고 다른 도구와 동일하게 정적 KO/EN 파일로
분리 완료. v1.1.

⚠️ 작업 중 겪은 문제 — 업데이트 파일을 받아 기존 SEO/VERSION 블록을
마커 기준으로 벗겨낼 때, patch-tool-pages.js 는 **한국어 페이지만
재생성**하고 영문 페이지의 <head> 는 건드리지 않는다는 점을 놓쳐서
영문판 SEO가 통째로 빠질 뻔했다. 또한 마커 밖에 남아있던 진짜 중복
태그(canonical·hreflang·robots)를 지우다가 실수로 정상 태그까지
함께 지워 복구하는 과정이 있었다. 앞으로 업데이트 파일을 받으면:
1. 마커 안쪽만 벗기고 마커 밖 잔여물은 눈으로 직접 확인
2. 영문 페이지는 patch-tool-pages.js 가 자동 재생성하지 않으므로
   canonical/hreflang/OG 가 다 있는지 반드시 별도로 검증

## receipt-to-excel v15 업데이트 (2026-08-30, 밤)

일반형(품목별 OCR 표 인식)·간편형(총액만 빠르게 인식) 두 가지 모드로
개편. 품목명 아래 숫자만 있는 줄(제조사·분류 표기)은 바로 위 품목과
자동으로 묶어 한 행으로 처리, 사진당 최대 10개 품목. v2.1.

지난번 교훈(patch-tool-pages.js 는 KO만 재생성)을 반영해 이번엔
영문판 SEO 를 배치 직후 바로 손으로 재구성했고, 마커 밖 잔여물도
육안으로 먼저 확인한 뒤 진행해 이번엔 사고 없이 끝났다.

inject-share.js 를 이 도구 하나에 대해 개별 실행한 뒤 bump-version.js
(내부에서 inject-version.js 호출)를 실행하는 순서라, 결과 파일의
마커 순서가 GUIDE → VERSION → SHARE 가 되었다(원래 의도한
GUIDE → SHARE → VERSION 과 다름). SHARE 블록은 position:fixed 라
문서 순서와 무관하게 항상 같은 화면 위치에 뜨므로 실제 렌더링에는
영향이 없다. 순서를 하나로 통일하고 싶으면 두 스크립트를 항상
inject-share.js → inject-version.js 순서로 실행할 것.

## 대대적 구조 변경 — kr/en 폴더 + _kr/_en 파일명 (2026-08-30, 늦은 밤)

문제 : 한국어·영문 도구 파일명이 완전히 똑같아서(예: lotto.html 이
productivity/ 와 en/productivity/ 양쪽에 존재) 파일을 개별로 주고받을 때
헷갈림. 게다가 한국어는 루트에, 영문만 en/ 밑에 있어 비대칭.

### 구조 변경

```
이전 : mnledu.com/<category>/<id>.html          (한국어)
       mnledu.com/en/<category>/<id>.html       (영문)

이후 : mnledu.com/kr/<category>/<id>_kr.html    (한국어)
       mnledu.com/en/<category>/<id>_en.html    (영문)
```

**범위 제외** : 포털 자체(index.html)와 정보 페이지(about/contact/
privacy/terms)는 그대로 뒀다. GitHub Pages 가 루트에 index.html 을
요구하는 기술적 제약 때문이고, 애초에 파일명 혼동 문제도 61개 도구
파일 쪽에서만 실제로 겪은 문제였음. 필요해지면 이 부분도 나중에
같은 방식으로 옮길 수 있다.

기존 주소는 리다이렉트 없이 그냥 버림 (사용자 확인 — 색인 재수집
신경 안 씀).

### 실행 순서 (참고용 — 스크립트 자체는 일회성이라 삭제함)

1. `tools-data.js`/`tools-data-en.js` 의 `url:` 을 읽어 이전→새 경로
   매핑 122개를 만들고, 파일을 실제로 이동(rename)
2. 빈 카테고리 폴더(루트, en/ 밑) 정리
3. 매핑표를 저장해 두고, 저장소 전체 html/xml/js 파일 내용에서
   이전 URL 문자열을 새 URL 로 전부 치환 (canonical, hreflang, OG,
   공유버튼 자기URL, 안내문 안 "같은 분류 도구" 정적 링크까지 한 번에)
4. 표준 파이프라인 재실행 : build-seo → patch-tool-pages →
   build-guides → fix-paths → inject-version(전체) → inject-share(전체)
5. 전수 검증

### 검증 결과

- 파일 위치 : 카테고리별 kr/en 개수 정확히 일치, 옛 폴더·옛 파일 잔여 0
- canonical·공유버튼 자기URL : 122/122 카탈로그와 일치
- hreflang 상호 참조 : 정상
- 안내문 안 "같은 분류 도구" 링크 : baseline(build-guides.js 생성분)과
  직접 심은 안내문(image-studio 등) 모두 새 경로로 정상 치환
- sitemap.xml : 127개 도구 주소 + 정보페이지 5개, 옛 구조 잔여 0
- 스크립트 구문 : 무작위 8개 파일 샘플 전부 정상
- 스크립트 자체(build-seo.js 등)는 전부 `tool.url` 에서 경로를 파생하는
  구조라 하드코딩된 카테고리 경로가 없었고, 수정 없이 새 구조에 그대로
  대응함

### 부수 발견 및 수정

`advanced-image-tailor` · `text-batch-factory` 의 영문판이 애초부터
(이전 세션에서) SEO 블록(title/description/canonical/hreflang/OG)이
전혀 없었던 것을 이번 전수 검증 중 발견해서 새로 만들어 넣었다.
patch-tool-pages.js 가 한국어 파일만 처리한다는 걸 계속 놓치기 쉬우니,
새 도구를 영문으로 등록할 때는 항상 canonical 존재 여부를 직접
확인할 것.

## receipt-to-excel 자동 계정과목 분류 추가 (2026-08-30, 심야)

업종별 키워드 사전으로 계정과목을 자동 추정하는 기능 추가.
약국·제약사 → 의약품비, 병원 → 의료비, 호텔 → 숙박비, 주유·정비 →
차량유지비, 소프트웨어 서비스 → 구독료 등. 편의점·마트처럼 품목에
따라 달라지는 업종은 자동 분류하지 않고 표에서 직접 확인하도록 안내.

날짜 다중 형식 인식(2025-08-14 / 25/08/14 / 2025년 8월 14일)과
잘못된 날짜(13월, 2월 30일 등) 필터링, 금액 인식 시 승인번호·
사업자번호 오인식 방지 로직도 함께 개선. v2.1 → v2.2.

이번엔 지난번 마이그레이션(kr/en 구조 변경) 이후 첫 업데이트라
새 경로(kr/productivity/receipt-to-excel_kr.html,
en/productivity/receipt-to-excel_en.html)에 바로 배치했고,
canonical·hreflang 도 새 구조 기준으로 재구성. 마커 밖 잔여물
육안 확인 · 영문판 SEO 수동 재구성 절차를 그대로 따라 사고 없이 완료.

## receipt-to-excel 경량 온디바이스 AI 보강 (2026-08-30, 심야 2차)

Xenova/multilingual-e5-small(INT8 양자화) 임베딩 모델을 브라우저
안에서 워커로 돌려, 정규식·좌표 기반 판단만으로 애매한 OCR 행을
의미 기반으로 재분류하는 레이어 추가. merchant/item/maker/total/
subtotal/tax/payment/code/header/address 10개 라벨에 대해 문장
임베딩 유사도를 계산해 신뢰도 낮은 행을 보강한다.
"경량 AI · 애매한 OCR 행 의미 분류" 진행 표시가 뜨는 지점.

안내문 내용은 이번엔 변경 없음(기능이 내부 정확도 개선이라 catalog
설명도 그대로 둠). v2.2 → v2.3.

canonical 이 이미 새(kr/en) 구조를 정확히 가리키고 있어서 절차가
한결 수월했음 — 지난 마이그레이션 이후 이 파일을 기반으로 계속
작업해 주고 계신 것으로 보임.

## 온디바이스 AI 강화 3종 동시 업데이트 (2026-08-30, 심야 3차)

같은 흐름의 업데이트 세 개를 한 번에 받음. 사이트 전반에 걸쳐
"기본 기능은 그대로 두고, 사용자 동의 시에만 무거운 로컬 AI 모델을
받아 정확도를 높이는" 패턴이 자리잡는 중.

- **receipt-to-excel** v2.3 → v2.4 (안정성·정확도 소폭 개선)
- **ocrextract** v1.0(baseline) → v2.0
  고정밀 온디바이스 AI OCR(PP-OCRv5, 약 30MB) 옵션 추가.
  문서 레이아웃 AI(PP-DocLayout-S, 약 5MB)로 제목·본문·표·헤더·
  푸터 영역 인식 후 읽기 순서 복원. Markdown 내보내기 신규.
  기본 OCR(Tesseract)은 동의 없이 그대로 유지.
- **voicenote** v1.0(baseline) → v2.0
  고정밀 AI 재인식(Whisper-base q8, 약 100MB) 옵션 추가.
  실시간 받아쓰기는 기존 Web Speech 그대로, 동의 시에만 마지막
  녹음 최대 3분을 별도 Worker에서 재인식.

세 도구 모두 모델 캐시를 도메인 단위로 공유한다고 안내문에 명시
(receipt-to-excel 의 임베딩 모델과도 캐시 공유). 이 파일들은 실제로는
"TOOLKIT 전체가 공유하는 온디바이스 AI 인프라"를 구현 중인 것으로
보이며, 앞으로 다른 도구에도 비슷한 옵션이 추가될 가능성이 높음.

catalog 설명을 세 도구 모두 새 AI 옵션을 언급하도록 갱신.
절차(마커 밖 잔여물 육안 확인 → 영문판 SEO 수동 재구성 → 도구별
inject-share.js → bump-version.js)를 세 개 동시에 적용, 전수
검증에서 모두 통과.

## receipt-to-excel 그림자 보정 추가 (2026-08-30, 심야 4차)

- **그림자·조명 편차 보정(shadowNormalize)** : 박스 블러 기반으로 영수증
  사진의 조명 불균일을 분석해 보정. 켜져 있으면 보정 전/후 결과를
  교차 확인해 구조적으로 더 나은 쪽을 채택(mergeStructuredCandidates).
- **한 줄짜리 간이 영수증 산술 복구** : 바코드·상세행이 없는 단순
  영수증에서 OCR이 단가·수량·금액을 한 줄에 붙여 읽어도 숫자 그룹을
  분석해 항목을 복구(rowArithmeticRescue).
- **최종 금액 판단 로직 개선** : 합계·총액·결제금액이 명확히 있을 때
  공급가액이나 부가세로 잘못 대체되지 않도록 우선순위 명확화.
- 인식 언어 전환 시 캐시 공유 안내 문구 추가(같은 언어 파일은
  다시 안 받는다는 안내).

v2.4 → v2.5. 안내문 내용 변경 없어 catalog 설명 그대로 유지.
이번엔 zip 파일로 두 언어 파일을 함께 받음 — 앞으로도 이 형태로
올 수 있으니 압축 해제부터 하고 시작할 것.

## ocrextract 그림자 보정 이식 (2026-08-30, 심야 5차)

receipt-to-excel 에 먼저 들어간 그림자·조명 편차 보정(shadowNormalize)
기능이 ocrextract 에도 그대로 이식됨. 원본과 보정본 두 가지로 OCR을
돌려 더 나은 결과를 채택하는 방식도 동일. v2.0 → v2.1.

같은 기능이 도구 여러 개로 확산되는 패턴이 실제로 나타남 — 앞으로도
"OO 도구에 있던 기능을 XX에도" 식의 업데이트가 이어질 가능성이 높음.
안내문 변경 없어 catalog 설명 그대로 유지.

사용자가 이 건과 직전 receipt-to-excel v2.5 건을 "합쳐서 한 번에"
달라고 요청 — 두 업데이트를 하나의 zip/diff 로 묶어 전달.

## 도구별 조회수 표시 (2026-08-30, 심야 6차)

메인페이지(index.html · en/index.html)에 도구별 조회수를 카드마다
표시. 검색·필터·즐겨찾기 상태와 무관하게 항상 정확한 숫자가 뜨도록
설계.

### ⚠️ countapi.xyz 는 서비스 종료됨 — 대체 서비스 사용

처음 countapi.xyz 로 구현하려다, 실제로 붙이기 전에 검색해서
2024년에 SSL 인증서가 만료되고 서비스가 죽은 걸 확인했다(다행히
사전 확인함). 대신 `https://countapi.mileshilliard.com` 를 쓴다 —
같은 API 형태(REST, 가입 불필요)를 제공하는 개인 운영 대체 서비스.
공개 업타임 모니터링 페이지가 있어 최소한의 신뢰도는 확인했으나,
**개인이 운영하는 소규모 서비스라 countapi.xyz 처럼 언젠가 죽을
수 있다.** 만약 조회수가 전부 안 뜨면 이 서비스부터 의심할 것 —
inject-viewcount.js 의 URL 한 줄만 바꾸면 다른 서비스로 교체 가능.

### 구조

- `inject-viewcount.js` (신규) — 각 도구 페이지에 조회 신호 전송
  스크립트 삽입. `node inject-viewcount.js` (전체) 또는
  `node inject-viewcount.js <id>` (하나만). 위치는 GUIDE_END 바로
  뒤, SHARE/VERSION 보다 앞.
- key 형식 : `mnledu-com-toolkit-v1-<도구id>` — 이 서비스는
  namespace 가 없고 전역 공유 key 공간이라, 충돌 방지용 고유 접두어
  필수.
- **한국어판·영문판이 같은 key 를 공유** — "이 도구가 언어 무관하게
  총 몇 번 조회됐는가"를 센다. 도구 페이지 자체(kr/…, en/…) 어느 쪽을
  열어도 같은 카운터가 올라간다.
- 메인페이지는 `/api/v1/get/` (증가 없이 조회) 를 써서 카운트만
  읽어온다. 도구 페이지 자체는 `/api/v1/hit/` (조회 시 +1) 를 쓴다.
- 메인페이지 로직(index.html 안): 최초 렌더 시 전체 61개 값을 한 번에
  fetch 해서 캐시하고, 이후 필터가 바뀌어 카드가 다시 그려질 때는
  캐시에서 채운다(재요청 안 함). 만·천 단위 축약 표시(예: 1.2만).

### 이용약관·개인정보처리방침 갱신

privacy.html/en, terms.html/en 네 파일 모두에 조회수 집계 서비스
고지 문구 추가 — 온디바이스 AI 모델 다운로드 고지와 같은 문단에
자연스럽게 병기.

### 버전 기록

공유 버튼·버전 배지와 같은 이유로, 이건 도구 자체 기능이 아니라
메인페이지 차원 기능이라 61개 도구 개별 버전은 올리지 않았다.

## "조회수" → "방문자 수"로 전환, 홈페이지 자체 카운터 추가 (2026-08-30, 심야 7차)

사용자가 "조회수" 대신 "방문자 수"를 요청 — 새로고침·재방문으로 숫자가
부풀지 않게 **같은 브라우저에서는 한 번만 세는 방식**으로 바꿨다.

### 방문자 수 로직 (61개 도구 공통)

localStorage 에 도구별 `mnledu_visited_<id>` 플래그를 두고,
- 플래그가 없으면 → 카운트 서비스에 `hit`(+1) 신호 전송 + 플래그 저장
- 플래그가 있으면 → 아무 것도 안 보냄 (이미 센 브라우저)

기기 단위 근사치이며 진짜 사람 수는 아니다(브라우저를 지우거나 다른
기기로 오면 새 방문자로 다시 세어짐). `inject-viewcount.js` 를
이 로직으로 전면 수정하고 61개 전체 재적용.

### 홈페이지 자체 방문자 수 (신규)

index.html · en/index.html 푸터 저작권 줄 옆에 표시. **한국어·영문
합산** — 같은 도메인이라 localStorage 를 공유하므로, key
(`mnledu_visited_home`)와 카운터 항목(`site-home`)을 양쪽이 동일하게
써서 자연스럽게 합산된다. 로직은 도구별과 동일:
플래그 없으면 `hit`, 있으면 `get`.

### ⚠️ 재발 방지 — en/privacy.html · en/terms.html 을 직접 고치면 안 됨

지난 회차(조회수 최초 도입)에서 en/privacy.html · en/terms.html
파일을 직접 수정했었는데, 이번에 build-en.js 를 다시 돌리면서
그 수정이 전부 사라진 걸 뒤늦게 발견했다. 이 네 파일(about/contact/
privacy/terms 의 영문판)은 `en-pages.js` + `en-template.html` 에서
**매번 새로 생성**되며, 원본은 `en-pages.js` 다. **영문 정보 페이지를
고칠 때는 항상 en-pages.js 를 고치고 build-en.js 를 다시 돌릴 것.
en/privacy.html 등 결과물 파일을 직접 고치면 다음 build-en.js
실행 때 조용히 사라진다.**

이번에 en-pages.js 에 방문자 수 집계 서비스·온디바이스 AI 모델
고지를 정식으로 반영했으므로 이제는 재발하지 않는다.

### 이용약관·개인정보처리방침 문구 수정

"몇 번 조회되었는지" → "몇 명이 방문했는지", "방문 횟수 집계 서비스"
→ 새로고침·재방문으로 부풀지 않는다는 설명 추가. 브라우저 저장 정보
목록에 "방문 표시" 항목 추가. 4개 언어 파일(privacy/terms × ko/en)
전부 갱신.

## receipt-to-excel v2.6 (2026-08-31)

- **실시간 미리보기** : 원근·그림자·명암·흑백 보정 옵션을 켜거나
  슬라이더를 움직이는 중에도, 축소된 사본으로 즉시 "OCR이 실제로
  보게 될 화면"을 다시 그려 보여줌. 기존에는 OCR 버튼을 눌러야만
  보정 결과를 확인할 수 있었음.
- **소수점 수량 인식 개선** : 주유량 56.383L, 저울 kg 값처럼 소수점이
  있는 수량이 쉼표·마침표를 천 단위 구분자로 오인해 56383 으로
  뭉개지던 문제 수정. 정수로 보기 어려운 N.NNN 형태는 소수 수량으로
  그대로 유지.
- **자간 벌어진 라벨 인식** : 영수증 인쇄 특성상 "부 가 세", "합 계"처럼
  글자 사이가 벌어져 나올 때, 기존엔 "부가세" 같은 고정 키워드와
  매칭이 안 됐음. 키워드마다 글자 사이에 \s* 를 넣은 정규식으로
  재구성해 벌어진 라벨도 인식.

v2.5 → v2.6. 영문판 업로드 파일에 GUIDE_END 마커가 중복 삽입돼
있었음(단순 복붙 흔적으로 추정, 기능엔 영향 없음) — 배치 후 발견해서
정리. 업로드 폴더는 읽기 전용이라 원본 수정 시도는 실패했고, 저장소에
복사한 뒤 그 자리에서 정리하는 방식으로 처리.

## 방문자 카운터 — Cloudflare Workers + KV 로 자체 운영 전환 (2026-08-31)

countapi.mileshilliard.com (남의 무료 서비스) 을 Cloudflare Workers +
KV 로 교체. 사용자 본인 Cloudflare 계정 안에서 도는 자체 운영이라,
countapi.xyz 가 겪었던 것처럼 남의 서비스가 갑자기 죽어서 카운터가
통째로 안 뜨는 일이 없다. 무료 티어로 충분(일 10만 요청).

### Worker 설정 (사용자가 Cloudflare 대시보드에서 직접 진행)

- Worker 이름 : `toolkit-counter`
- 주소 : `https://toolkit-counter.mnl-laboratoire.workers.dev`
- KV 네임스페이스 : `toolkit-counters`, 바인딩 변수명 `COUNTER_KV`
- 엔드포인트 : `GET /hit/<key>` (조회 시 +1), `GET /get/<key>` (조회만)
- 응답 형식은 예전 countapi 와 동일하게 맞춤: `{"key":"...","value":N}`
  — 그래서 클라이언트 코드 쪽은 URL 만 바꾸면 됐고 파싱 로직은 그대로.
- key 형식 제한: `^[a-zA-Z0-9_-]{1,100}$` (Worker 코드 안에 검증 포함)

### 바뀐 파일

- `inject-viewcount.js` — COUNTER_ENDPOINT 를 새 Worker 주소로 변경.
  이 계정 전용 Worker 라 예전에 쓰던 키 충돌 방지용 접두어
  (`mnledu-com-toolkit-v1-`) 는 제거 — 도구 id 를 그대로 key 로 씀.
  61개 도구 전체 재적용.
- `index.html` (→ en/index.html 은 build-en.js 로 자동 반영) —
  `loadViewCounts()` · `loadSiteViewCount()` 의 fetch 대상을
  `COUNTER_ENDPOINT` 로 교체, `VIEWCOUNT_PREFIX` 변수 제거.

### ⚠️ key 가 예전 서비스와 다르다 — 카운트가 0부터 다시 시작됨

접두어를 없애면서 key 이름 자체가 달라졌고, 애초에 KV 저장소도
완전히 새 것이라 **지금까지 countapi.mileshilliard.com 에 쌓여 있던
방문자 수는 이어지지 않는다.** 전부 0부터 다시 세어진다. 데이터
손실이라기보다 새 시스템으로 넘어가며 생기는 자연스러운 리셋 —
사용자에게 미리 고지함.

## 대량 작업 : pdf-to-markdown 등록, wealth-dashboard 신규 제작, 사이드바 링크 전수조사, 개발 참고 목록 (2026-08-31)

### pdf-to-markdown

영문 전용 도구(한국어판 없음)로 등록. build-seo.js 의 사이트맵
생성 로직이 한국어 카탈로그를 기준으로 도는 구조라 EN-only 도구가
통째로 빠지는 걸 발견 — buildSitemap() 에 "한국어판이 없는 영문
전용 도구"를 자기 참조 hreflang(en + x-default=en)으로 별도 추가
하는 보강 로직을 넣었다. 원본 파일의 canonical·hreflang 이 마이그
레이션 이전 구주소를 가리키고 있어서 정정.

### wealth-dashboard (신규 제작)

사용자 스펙으로 처음부터 새로 만든 도구. 파이어족 복리 시뮬레이터
+ 물타기 평단가 계산기. DATA & ANALYTICS.

영문판 제작 중 문자열 치환 순서 문제로 텍스트가 뒤섞이는 사고가
있었음 — 원본에서 다시 시작해 **긴 문자열부터 치환**하는 방식으로
해결(예: "추가 매수 단가"를 "매수 단가"보다 먼저 치환해야
"추가 Purchase price" 같은 오염을 막을 수 있음). 영문판은 통화를
원(₩)→달러($), 축약 단위를 만/억→K/M/B, 예시 숫자도 달러 기준
현실적인 값으로 조정 — 단순 재라벨링이 아니라 실제로 쓸 수 있는
현지화를 목표로 함.

### 사이드바 "같은 분류 도구" 링크 전수조사

\`audit-siblings.js\` 신규 제작. 모든 도구의 안내문 하단 링크 섹션을
찾아 (1) 실존 파일인지 (2) 카탈로그 현재 주소와 일치하는지 (3) 자기
자신을 링크하지 않는지 (4) 같은 카테고리가 맞는지 검사하고,
\`--fix\` 옵션으로 자동 교정한다.

125개 파일 전수 검사 결과 **birth-chart 하나만** 문제 있었음 —
존재하지 않는 구주소, 다른 카테고리 도구가 섞임. \`--fix\` 로 교정.

### ⚠️ birth-chart 에서 발견한 더 큰 문제

sibling 링크를 고치던 중, birth-chart 에 **TOOLKIT:GUIDE_END 마커
자체가 원래부터 없었던 것**을 발견. 그 여파로 이 도구 하나만
공유 버튼·방문자 카운터·버전 배지 세 기능이 계속 빠져 있었다
(inject-*.js 스크립트들이 삽입 위치를 못 찾아 조용히 건너뜀 —
에러 없이 실패하는 방식이라 지금까지 아무도 눈치 못 챔).

GUIDE_END 를 정확한 위치(안내문 실제 종료 지점)에 복원한 뒤 세
스크립트를 다시 돌려 정상화. v1.2.

이 사고를 계기로 전체 62개(125개 파일) 대상 마커 전수 검사를
추가로 돌림 — SEO/GUIDE_START/GUIDE_END/SHARE/VIEWCOUNT/VERSION
6종 전부. birth-chart 제외 전부 정상 확인.

### 개발 참고 목록 신규 제작

\`build-tool-checklist.js\` — tools-data.js 를 읽어
\`NEW-TOOL-CHECKLIST.md\` 를 자동 생성한다. 카테고리별 전체 도구
표(중복 방지용) + 새 도구 제작 시 권장 규격(파일 형식, 카테고리
분류 기준, 안내문 구조, 온디바이스 AI 패턴, 자동으로 붙는 것 목록)
을 담는다. 도구를 추가·삭제할 때마다 표준 파이프라인 끝에서
한 번 더 돌려 최신 상태로 유지할 것.

## 표준 파이프라인 (2026-08-31 갱신 — 3개 스크립트 추가)

\`\`\`bash
node build-seo.js
node patch-tool-pages.js --no-backup
node build-guides.js
node fix-paths.js
node inject-version.js          # 전체
node inject-share.js            # 전체
node inject-viewcount.js        # 전체
node audit-siblings.js --fix    # 전체 — 사이드바 링크 정합성
node build-tool-checklist.js    # 참고 목록 갱신
\`\`\`

**신규 도구 추가 시 반드시 전부 돌리고, 특히 새로 만든 안내문에
TOOLKIT:GUIDE_START 뿐 아니라 GUIDE_END 도 실제로 있는지 직접
확인할 것** — birth-chart 사고가 정확히 이 실수였다.

## 신규 2종 등록 : mortgage-stress-tester, universal-table-data-hub (2026-08-31, 오후)

**부동산 대출 스트레스 테스트기** — 금리 발작 슬라이더로 상승 시나리오의
상환액·DSR을 즉시 계산. 원리금균등·원금균등 두 방식 지원.

**만능 표 데이터 허브** — 메모장 붙여넣기·엑셀 업로드 양쪽을 받아
HWPX·DOCX·XLSX·MD·CSV 로 내보냄. 한글(HWP) 최적화 옵션(글자처럼
취급, 줄 간격 등) 포함.

둘 다 PRODUCTIVITY. guides-b.js 에 항목 추가해 한국어는 자동
생성, 영문은 직접 작성. v1.0 씩 등록.

### 발견한 문제 두 가지

1. **영문 파일의 \`<html lang="ko">\` 오기재** — 내용은 완전히
   영어인데 lang 속성만 한국어로 되어 있었음(두 도구 모두). "en"으로
   정정.
2. **universal-table-data-hub 에 KO/EN 토글 버튼이 내장돼 있었음**
   — 헤더에 `<a>KO</a>` / `<a>EN</a>` 버튼이 있고, 마이그레이션
   이전 구주소(`/productivity/...html`, `/en/productivity/...html`)
   를 그대로 가리키고 있었음. 새 구조(`kr/.../..._kr.html`,
   `en/.../..._en.html`) 로 정정. mortgage-stress-tester 에는 이
   버튼이 없고 정적 한글 부제만 있어 해당 없음.

이걸로 봐서, 외부에서 만들어 오는 파일에 **자체적인 언어 전환
UI(버튼이든 JS 로직이든)가 종종 섞여 들어온다** — vocal-rhythm-
master-studio, 이번 universal-table-data-hub 두 번째 사례.
새 파일을 받으면 이런 요소가 있는지 먼저 확인하고, 있으면 새
URL 구조로 정정할 것.

두 도구 모두 SEO 블록 안 canonical/hreflang 이 마이그레이션 이전
구주소를 가리키고 있어 전부 새 구조로 재구성. 전수 검증(마커 6종,
canonical/공유 URL 일치, 사이드바 링크, 스크립트 구문) 전부 통과.

## pdf-to-markdown 한국어판 추가 (2026-08-31, 저녁)

영문 전용이었던 pdf-to-markdown 에 한국어판을 새로 만들어 채움.
이제 65:65 로 모든 도구가 양쪽 언어에 정확히 존재.

### ⚠️ 번역 작업 중 겪은 사고 — GUIDE 마커를 걷어내면서 안내문 내용까지 삭제

기존 패턴("SEO/VERSION/SHARE/VIEWCOUNT 마커 제거 후 재생성")을 그대로
적용하다가, **GUIDE_START~GUIDE_END 도 같이 제거**해 버려서 그 안에
있던 상세 안내문(표 감지 알고리즘, 줄바꿈 복원 로직, AI 모드 설명,
FAQ 등 수천 자 분량)이 통째로 사라졌다. 저장소의 원본 파일은
건드리지 않고 임시 작업 파일에서만 벌어진 일이라 다행히 원본에서
다시 시작해 복구.

**교훈** : 기존 도구를 "업데이트"할 때(안내문도 새로 옴)와, 기존
안내문을 "번역만" 할 때는 다르다. 번역만 할 때는 GUIDE_START/END
사이 내용을 지우면 안 되고, **그 안의 텍스트만 치환**해야 한다.

### 번역 중 겪은 두 번째 문제 — 여러 줄로 꺾인 문장이 단순 문자열 치환에 안 걸림

원문이 HTML 안에서 들여쓰기와 줄바꿈으로 꺾여 있어 (`"...the gap\n
      to the next..."`) 한 줄짜리 문자열로는 못 찾음. `<p>` 태그
경계를 찾아 문단 전체를 통째로 교체하는 방식으로 해결
(`replace_paragraph` 헬퍼 함수, 마커 문구로 해당 `<p>`를 찾아
여는 태그 뒤부터 `</p>` 앞까지 통째로 교체).

이 과정에서 인접한 `<textarea placeholder="...">` 속성값이 실수로
빈 문자열이 되는 부수 피해가 있어 발견 후 직접 복구.

### 영문판에서 발견한 문제 — 가짜 사이드바 링크

영문판 안내문 하단에 "Productivity tools that pair well with this
one" 섹션이 있었는데, **실제로 존재하지 않는 도구명**(Excel
Splitter, JSON ↔ CSV Converter 등)이 전부 `/en/productivity/`
(카테고리 목록 페이지, 특정 도구 아님)를 가리키고 있었다. 우리
표준 형식(`tk-guide-more` + 실제 카탈로그 링크)으로 교체.
`audit-siblings.js` 가 인식하지 못하는 비표준 클래스 구조였던
것도 원인 중 하나 — 이 스크립트는 정확히 `class="tk-guide-more"`
+ `<div class="tk-guide-more">...</div></div>` 구조만 인식한다는
점을 참고할 것.

### 마무리

hreflang 을 양방향으로 연결(전에는 EN-only 특수 처리였던 게 이제
일반 도구처럼 정상 페어링됨). sitemap 도 자동으로 정상 반영.
v1.0 → v1.1. 전체 130개 파일 재검증 통과.

## document-mail-merge 신규 + pdf-to-markdown → pdf-to-text 개명 (2026-09-01)

**문서 메일머지 생성기** — {{항목}} 자동 감지, Excel/CSV 일괄 생성,
DOCX·HWPX 원본 서식 유지 내보내기. PRODUCTIVITY, v1.0.

**pdf-to-markdown → pdf-to-text 개명** — Markdown 단일 출력에서
HWPX·DOCX·TXT·MD 다중 포맷 + 서식 옵션(글자 크기·줄 간격·정렬)으로
기능이 대폭 확장돼 이름 자체를 바꿈. id·파일명·URL·catalog 전부
변경. 버전 이력은 새 키로 이관하고 개명 사실을 이력에 남김
(v1.1 → v2.0). 옛 파일(kr/en 의 pdf-to-markdown_*.html)은 저장소에서
삭제 — GitHub 에서도 사용자가 직접 지워야 함.

### ⚠️⚠️ audit-siblings.js 자체의 심각한 버그를 발견 — 48개 파일 169건이 계속 숨어 있었음

개명 작업 검증 중 `mortgage-stress-tester`, `universal-table-data-hub`
영문판에 옛 pdf-to-markdown 링크가 남아있는 걸 발견했는데,
`node audit-siblings.js` 로는 안 잡혔다. 원인을 파헤쳐 보니
**audit-siblings.js 의 사이드바 종료 지점 탐지 로직 자체가
틀려 있었다** — `tk-guide-more` div 가 `</div></div>` (이중 닫힘)로
끝난다고 가정했는데, 실제로는 `</div>` 하나로만 끝나는 형식도
섞여 있어서, 그런 파일은 전부 "섹션 없음"으로 조용히 건너뛰고
있었다. 즉 지난 회차에 "0건 정상"이라고 보고했던 결과 자체가
**상당수 파일을 아예 검사하지 않고 통과시킨 거짓 양성**이었다.

`<div class="tk-guide-more">` 부터 실제로 div 열림/닫힘 개수를
세어 정확한 종료 지점을 찾는 방식으로 로직을 교체한 뒤 재검사하니,
**48개 파일에서 169건**이 쏟아져 나왔다 — 존재하지 않는 옛 파일
(date-calc.html, calculator.html, unit-converter.html, vocab-quiz.html
등 애초에 없었거나 훨씬 이전에 정리된 도구), `/en/creative/` 같은
없는 카테고리, 다른 카테고리 도구가 섞인 것 등. `--fix` 로 48개
전부 자동 교정, 재검사 0건 확인.

**이 발견이 중요한 이유** : 사용자가 여러 턴 전에 "함께쓰기 좋은
도구 링크가 다 꼬였다"고 지적했을 때, 당시 감사 결과는 문제가
거의 없다고 나왔었다(그때도 이 버그 때문에 대부분 검사가 스킵됨).
실제 문제 규모는 그보다 훨씬 컸고, 이번에 완전히 드러나서 고쳐졌다.

### 검증

66:66, 132개 파일 전체 마커 6종·canonical·공유URL·사이드바 링크
재검사 전부 통과. 스크립트 구문 전부 정상.

## document-mail-merge 디자인 개편 (2026-09-01)

히어로 섹션(그라디언트 배경, "DOCUMENT AUTOMATION" 배지, 기능 요약
배지 3개), 레이아웃 정리. 기능 자체는 변경 없음.

도구명이 "문서 메일머지 생성기" → "**템플릿 문서 일괄 생성기**"로
바뀜(영문도 Document Mail Merge Generator → Template Document
Batch Generator) — catalog title 갱신.

업로드 파일 자체에 `class="guide"`(우리 표준 `.tk-guide`와 다른
이름)로 짧은 사용법 안내가 포함돼 있었으나, 배경 설명·활용 사례·
FAQ 스키마를 갖춘 기존 guides-b.js 항목이 더 충실해서 인라인
안내문은 제거하고 기존 정식 안내문을 다시 씌움. v1.0 → v1.1.

## document-mail-merge v1.2 (2026-09-01)

**여러 건을 한 파일로 결합해서 내보내는 옵션 추가** (DOCX·HWPX 한정).
기존엔 건별 파일이 ZIP으로만 나왔는데, 이제 페이지로 이어진 문서
하나로도 받을 수 있음. 미리보기 이전/다음 넘기기 UI도 추가됨.

이번에도 업로드 파일에 `class="guide"` 인라인 안내문이 다시 포함돼
있었음 — 지난번과 같은 이유로 제거하고 기존 정식 안내문(guides-b.js)
쪽에 새 기능 FAQ 한 줄만 추가해서 유지. **이 도구는 업데이트 때마다
인라인 안내문이 계속 딸려 오는 패턴이 있으니, 다음에도 당연히
제거할 것으로 예상.**

v1.1 → v1.2.

## document-mail-merge v2.0 (2026-09-01, 대폭 업데이트)

- **기업 전용 템플릿 라이브러리** — `./templates/templates.json` 에
  사전 등록해 둔 DOCX·HWPX 목록을 화면에서 바로 골라 불러올 수 있음.
  등록된 게 없으면 이 영역 자체가 안 보임.
- **경량 AI 도우미** — (1) Excel 열 이름이 템플릿 항목과 정확히
  안 맞아도 의미로 자동 매칭, (2) 빈 필드·남은 태그·이메일/URL
  형식 오류·일괄 매핑 누락을 점검하는 최종 문서 점검. 둘 다
  브라우저 안에서만 처리.
- **서식 포함 클립보드 복사** 추가.
- **DOCX/HWPX 실제 서식을 반영한 정밀 미리보기** — 굵기·기울임·
  밑줄·색상 등 원본 run 단위 서식을 파싱해 미리보기에 그대로 반영.
- 입력 방식이 인라인·표·붙여넣기·파일 4가지로 확장.

v1.2 → v2.0 (기능 규모상 정수 버전 상승). 이번에도 인라인
`class="guide"` 안내문이 딸려 와서 제거하고, 기존 정식 안내문에
새 FAQ 두 개(AI 도우미, 기업 템플릿) 추가.

## document-mail-merge v2.1 (2026-09-01)

**한국어 조사(은/는, 이/가, 을/를 등) 자동 처리 추가.**
{{이름}}은 처럼 템플릿에 조사를 붙여 둬도, 실제로 들어갈 값의 받침
유무에 맞춰 은/는·이/가·을/를 등을 자동으로 골라 준다. 숫자로
끝나는 값처럼 판단이 애매한 경우만 화면에 확인 요청이 뜨고, 이
기능 자체는 언제든 끌 수 있다.

영문판에도 이 기능이 그대로 있는데, UI 문구가 "한국어 받침 여부를
판단할 수 없는 값만 표시됩니다"처럼 한국어 문서 작성 맥락임을
명시하고 있어 번역 문제로 보지 않고 그대로 반영.

v2.0 → v2.1. 이번에도 인라인 `class="guide"` 안내문이 딸려 와서
제거하고 정식 안내문에 새 FAQ 한 개 추가 — 이 도구는 매 업데이트마다
같은 패턴이 반복되는 게 이제 완전히 확립됨.
