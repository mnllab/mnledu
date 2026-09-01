# CHANGELOG

이 파일은 자동 생성됩니다. 손으로 고치지 말고 `node bump-version.js` 로 기록을 남기세요.
원본은 `VERSIONS.json` 입니다.

## 2026-09-01

- **템플릿 문서 일괄 생성기** (`document-mail-merge`) v1.0 — 최초 등록 (PRODUCTIVITY) — {{항목}} 자동 감지 메일머지, Excel/CSV 일괄 생성, DOCX·HWPX 원본 서식 유지 내보내기
- **템플릿 문서 일괄 생성기** (`document-mail-merge`) v1.1 — 디자인 개편 — 히어로 섹션·기능 배지 추가, 레이아웃 정리. 도구명을 '문서 메일머지 생성기'에서 '템플릿 문서 일괄 생성기'로 변경(기능 동일)
- **템플릿 문서 일괄 생성기** (`document-mail-merge`) v1.2 — 여러 건을 한 파일로 결합해서 내보내는 옵션 추가(DOCX·HWPX 한정) — 기존엔 건별 파일이 ZIP으로만 나왔는데, 이제 페이지로 이어진 문서 하나로도 받을 수 있음. 미리보기 이전/다음 넘기기 UI 추가
- **템플릿 문서 일괄 생성기** (`document-mail-merge`) v2.0 — 대폭 업데이트 — 기업 전용 템플릿 라이브러리(사전 등록 목록에서 바로 불러오기), 경량 AI 도우미(Excel 열 이름이 달라도 의미로 자동 매칭 + 빈 필드·형식 오류 최종 점검), 서식 포함 클립보드 복사, DOCX/HWPX 실제 서식(굵기·색상 등)을 반영하는 정밀 미리보기 추가. 입력 방식도 인라인·표·붙여넣기·파일 4가지로 확장
- **템플릿 문서 일괄 생성기** (`document-mail-merge`) v2.1 — 한국어 조사(은/는, 이/가, 을/를 등) 자동 처리 추가 — {{이름}}은 처럼 템플릿에 조사를 붙여 둬도 실제 값의 받침 유무에 맞춰 자동으로 골라줌. 판단 애매한 경우만 확인 요청

## 2026-08-31

- **탄생 천궁도 분석** (`birth-chart`) v1.1 — 안내문 하단 같은 분류 도구 링크 교정 — 존재하지 않는 구주소, 다른 카테고리(PRODUCTIVITY) 도구가 섞여 있던 문제 수정. LIFESTYLE 도구 6개로 정정
- **탄생 천궁도 분석** (`birth-chart`) v1.2 — TOOLKIT:GUIDE_END 마커가 원래부터 없었던 것을 발견 — 그 여파로 공유 버튼·방문자 카운터·버전 배지 세 기능이 이 도구에만 계속 빠져 있었음. 마커 복원 후 세 기능 전부 정상 반영
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.6 — 슬라이더 조작 중 실시간 미리보기 추가(원근·그림자·명암 보정을 축소본에 즉시 반영). 소수점 수량 인식 개선(56.383L 같은 값이 정수로 뭉개지던 문제 수정). 자간이 벌어진 OCR 라벨 인식 개선(부 가 세 → 부가세로 인식)
- **파이어족 복리 & 물타기 계산기** (`wealth-dashboard`) v1.0 — 최초 등록 (DATA & ANALYTICS) — FIRE 복리 시뮬레이터 + 물타기 평단가 계산기
- **부동산 대출 스트레스 테스트기** (`mortgage-stress-tester`) v1.0 — 최초 등록 (PRODUCTIVITY) — 금리 발작 슬라이더로 DSR·상환액 실시간 시뮬레이션
- **만능 표 데이터 허브** (`universal-table-data-hub`) v1.0 — 최초 등록 (PRODUCTIVITY) — 메모장·엑셀 표를 HWPX·DOCX·XLSX로 변환, 한글 최적화 옵션 포함
- **PDF 문서 변환기** (`pdf-to-text`) v1.0 — 최초 등록 (PRODUCTIVITY, 영문 전용 — 한국어판 없음)
- **PDF 문서 변환기** (`pdf-to-text`) v1.1 — 한국어판 신규 추가 — 그동안 영문 전용이었던 도구에 한국어판 제작. 안내문(표 감지 알고리즘, AI 정밀정리 등 상세 설명 포함)을 온전히 번역해 이식. 영문판의 가짜 사이드바 링크(실제 존재하지 않는 도구명)도 정정
- **PDF 문서 변환기** (`pdf-to-text`) v2.0 — pdf-to-markdown 에서 pdf-to-text 로 개명 — Markdown 단일 출력에서 HWPX·DOCX·TXT·MD 다중 포맷 내보내기로 기능 확장. 글자 크기·줄 간격·문단 간격·정렬 서식 옵션 추가

## 2026-08-30

- **음성 인식 노트패드** (`voicenote`) v2.0 — 고정밀 AI 재인식(Whisper-base q8) 옵션 추가 — 실시간 받아쓰기는 기존 Web Speech 그대로 쓰고, 사용자 동의 시 마지막 녹음 최대 3분을 별도 Worker에서 다시 인식해 텍스트를 교체. 약 100MB 모델을 브라우저에 캐시
- **OCR 텍스트 추출기** (`ocrextract`) v2.0 — 고정밀 온디바이스 AI OCR(PP-OCRv5) 옵션 추가 — 사용자 동의 시 약 30MB 모델을 받아 작은 글자·영수증·표·스캔 문서 인식률과 줄 위치 복원을 개선. 문서 레이아웃 AI(PP-DocLayout-S, 약 5MB)로 제목·본문·표·헤더·푸터 영역을 인식해 읽기 순서 복원. Markdown 내보내기 추가. 기본 OCR(Tesseract)은 동의 없이 그대로 유지
- **OCR 텍스트 추출기** (`ocrextract`) v2.1 — receipt-to-excel 에 먼저 적용된 그림자·조명 편차 보정(shadowNormalize) 기능 이식 — 적용 시 원본과 보정본 OCR 결과를 교차 확인해 더 나은 쪽 채택
- **이번 주 창업지원사업** (`kstartup-board`) v1.1 — 시작 페이지 최상단 고정(Pinned) 처리, 배지 NEW → BEST
- **이번 주 창업지원사업** (`kstartup-board`) v1.2 — 고정 방식 변경 — 별도 PINNED 섹션 제거, 대신 어느 카테고리 그리드에서든 맨 앞으로. 배지 BEST → PINNED. 영문판은 고정 기능 제외
- **PDF 서명 스탬프** (`pdf-signature`) v1.1 — 배경제거 감도 조절, 회전, 카메라 촬영 기능 추가. 모바일 UI 개선
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.0 — v12 대폭 개편 — 기능 확장 (기존 대비 파일 크기 2배 이상 증가)
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.1 — 일반형·간편형 두 가지 인식 모드로 개편, 품목 자동 묶음 처리(사진당 최대 10개), OCR 정확도 개선
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.2 — 자동 계정과목 분류 추가 — 업종별 키워드 사전으로 의료비·숙박비·차량유지비·소프트웨어 구독료 등 자동 추정. 날짜 다중 형식 인식과 금액·상호 오탐 방지 로직 개선
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.3 — 경량 온디바이스 AI(임베딩 모델)로 애매한 OCR 행을 의미 기반 재분류하는 보강 레이어 추가. 정규식만으로 판단하기 어려운 상호명·품목·합계 구분 정확도 개선
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.4 — 안정성·정확도 소폭 개선
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v2.5 — 그림자·조명 편차 보정(shadowNormalize) 옵션 추가 — 적용 시 원본 조명 결과와 교차 확인해 더 나은 쪽을 채택. 한 줄짜리 간이 영수증(바코드·상세행 없는 경우)을 위한 산술 기반 행 복구 로직 추가. 합계 라벨이 명확할 때 공급가액·부가세로 잘못 대체되지 않도록 최종 금액 판단 로직 개선
- **엑셀·CSV 원클릭 분할 압축기** (`data-slicer`) v1.0 — 최초 등록
- **원클릭 복붙 작업대** (`copy-desk`) v1.0 — 최초 등록
- **밸런스 게임 자판기** (`balance-game`) v1.0 — 최초 등록
- **패션 단속반** (`fashion-detector`) v1.0 — 최초 등록
- **스마트 이미지 재단기** (`advanced-image-tailor`) v1.0 — 최초 등록
- **보컬 & 리듬 마스터 스튜디오** (`vocal-rhythm-master-studio`) v1.0 — 최초 등록
- **보컬 & 리듬 마스터 스튜디오** (`vocal-rhythm-master-studio`) v1.1 — 쿼리 파라미터(?lang=en) 방식의 런타임 언어 전환 로직 제거 — 다른 도구와 동일하게 정적 KO/EN 파일로 완전히 분리. 일부 SEO 태그 중복 제거
- **스마트 텍스트 가공 공장** (`text-batch-factory`) v1.0 — 최초 등록

## 2026-08-29

- **힐링 바이오리듬** (`biorhythm`) v1.0 — 최초 등록 (LIFESTYLE 최상단)
- **오늘 뭐 먹지** (`food-picker`) v1.0 — 최초 등록 (LIFESTYLE 최상단)
- **강점으로 읽는 만세력** (`saju-studio`) v1.0 — 최초 등록 (LIFESTYLE 최상단)
- **탄생 천궁도 분석** (`birth-chart`) v1.0 — 최초 등록 (LIFESTYLE 최상단)
- **영수증 지출결의서 변환기** (`receipt-to-excel`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **공평무사 당직표 생성기** (`roster-maker`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **시트 포스트잇 대시보드** (`sheet2memo`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **스마트 리스트 변환기** (`smart-list`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **문서·계약서 정밀 비교기** (`text-diff`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **브랜드 컬러 추출기** (`palette-picker`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **원클릭 에셋 허브** (`asset-hub`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **스마트 데이터 수집·복원기** (`data-harvester`) v1.0 — 최초 등록 (PRODUCTIVITY), 영문판 초기 표시값 "0개"→"0" 수정
- **썸네일·쇼츠 미리보기 시뮬레이터** (`thumb-mockup`) v1.0 — 최초 등록 (DESIGN & MEDIA), 원본 canonical 오류(/creative/) 정정
- **업로드 스마트 템플릿** (`uploader-toolkit`) v1.0 — 최초 등록 (DESIGN & MEDIA), 원본 canonical 오류(/creative/) 정정
- **어그로 매치** (`aggro-match`) v1.0 — 최초 등록 (ENTERTAINMENT), 원본 canonical 오류(/creative/) 정정
- **스마트 올인원 사진 편집 스튜디오** (`image-studio`) v1.0 — 최초 등록. DESIGN & MEDIA로 잘못 배치했다가 원본 canonical 기준으로 PRODUCTIVITY 로 정정

## 2026-08-28

- **스마트 발표 타이머** (`presentation-timer`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **이번 주 창업지원사업** (`kstartup-board`) v1.0 — 최초 등록 (LIFESTYLE 최상단), 원본 canonical 오류(/productivity/) 정정
- **PDF 서명 스탬프** (`pdf-signature`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **맞춤형 QR코드 생성기** (`qr-studio`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **스마트 회의록** (`meeting-minutes`) v1.0 — 최초 등록 (PRODUCTIVITY)
- **스마트 일정 코디네이터** (`slot-coordinator`) v1.0 — 최초 등록 (PRODUCTIVITY)

## 버전 관리 시작 이전부터 있던 도구

아래는 버전 기록을 시작하기 전부터 이미 사이트에 있던 도구입니다.
최초 제작일이 남아 있지 않아 지어내지 않았습니다. v1.0 으로 표시하며,
앞으로 이 도구들을 고치면 정상적으로 날짜와 버전이 쌓입니다.

- 개인정보 자동 지우개 (`anonymizer`)
- CAGR 연도별 추정 계산기 (`cagrcal`)
- 스마트 수식 계산기 (`calculator`)
- 만능 날짜 계산기 (`date-calc`)
- 반복 이메일 생성기 (`emailgen`)
- 자부담금 최적화 계산기 (`gov-fund-calc`)
- 행운의 번호 경마 (`horse-race`)
- 스마트 리스트 포맷터 (`listformat`)
- 럭키 클로버 로또 추첨기 (`lotto`)
- 지뢰찾기 (`minesweeper`)
- 모자이크 & 형광펜 툴 (`mosaicmarker`)
- 네온 사다리 타기 (`neon-ladder`)
- 나만의 웹 메모장 (`notepad`)
- PDF 병합 · 추출기 (`pdfmerge`)
- PDF 줄바꿈 복원기 (`pdftxt`)
- 퍼센트 · 마진 계산기 (`percent-calc`)
- AI 프롬프트용 파일 병합기 (`promptmerger`)
- 러시안 룰렛 (`russian-roulette`)
- 1초 캡처 뷰티파이어 (`screendeco`)
- 스네이크 (`snake`)
- 스도쿠 (`sudoku`)
- 타로 카드 리딩 (`tarot`)
- 스마트 오토 프롬프터 (`teleprompter`)
- 올인원 템플릿 매칭기 (`templatemerger`)
- 테트리스 (`tetris`)
- 텍스트 정제 툴 (`textclean`)
- 글로벌 시차 다이얼 (`timezone-dial`)
- 유니버설 단위 변환기 (`unit-converter`)
- 단어장 & 퀴즈 (`vocab-quiz`)
- 유튜브 타임스탬프 노트 (`youtubenote`)

