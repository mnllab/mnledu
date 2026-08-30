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
