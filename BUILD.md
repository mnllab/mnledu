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
