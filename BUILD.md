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
