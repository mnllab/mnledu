module.exports = {
  id: 'ocrextract',

  patches: [
    /* 인식 언어 순서를 영어 우선으로 */
    ['<option value="kor+eng" selected>한국어 + 영어</option>',
     '<option value="eng" selected>English</option>'],
    ['<option value="kor">한국어 전용</option>',
     '<option value="kor+eng">English + Korean</option>'],
    ['<option value="eng">영어 전용</option>',
     '<option value="kor">Korean only</option>']
  ],

  strings: [
    ['OCR 엔진을 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 새로고침해 주세요. (Tesseract.js는 CDN에서 내려받습니다)',
     'The OCR engine could not be loaded. Check your connection and reload. (Tesseract.js is fetched from a CDN.)'],
    ['맥은 ⌘ + V · 끌어다 놓거나 클릭해서 열 수도 있습니다',
     'Use ⌘ + V on a Mac · you can also drop a file here or click to browse'],
    ['여기에 이미지를 붙여넣으세요 (Ctrl + V)', 'Paste an image here (Ctrl + V)'],
    ['이미지 속 글자를 텍스트로 · 이미지는 브라우저 밖으로 나가지 않음',
     'Turn characters in an image into text · the image never leaves your browser'],
    ['· 언어 데이터를 내려받지 못했을 수 있으니 연결 상태를 확인해 주세요.',
     '· the language data may not have downloaded, so check your connection.'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['인식이 끝난 뒤에 넣어 주세요', 'Wait until recognition has finished'],
    ['인식이 끝난 뒤에 눌러 주세요', 'Wait until recognition has finished'],
    ['이미지를 읽지 못했습니다', 'That image could not be read'],
    ['이미지 파일이 아닙니다', 'That is not an image file'],
    ['글자를 찾지 못했습니다', 'No text was found'],
    ['인식에 실패했습니다 : ', 'Recognition failed: '],
    ['알 수 없는 오류', 'unknown error'],
    ['복사할 결과가 없습니다', 'Nothing to copy'],
    ['저장할 내용이 없습니다', 'Nothing to save'],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ["'인식 신뢰도 ' + conf + '%'", "'confidence ' + conf + '%'"],
    ['추출이 끝났습니다', 'Extraction complete'],
    ['언어 데이터 내려받는 중', 'Downloading language data'],
    ['엔진 준비 중', 'Preparing engine'],
    ['엔진 시작 중', 'Starting engine'],
    ['인식기 준비 중', 'Initialising recogniser'],
    ['텍스트 추출 중', 'Extracting text'],
    ['처리 중', 'Working'],
    ['OCR 텍스트 추출기', 'Image to Text (OCR)'],
    ['이미지 붙여넣기', 'Paste an image'],
    ['인식 언어', 'Recognition language'],
    ["const name = 'OCR추출_' + d.getFullYear()", "const name = 'ocr_' + d.getFullYear()"],
    ['이미지를 넣으면 인식된 글자가 여기에 표시됩니다. 직접 고칠 수도 있습니다.',
     'Add an image and the recognised text appears here. You can edit it directly.'],
    ['결과 텍스트 전체 복사', 'Copy all recognised text'],
    ['한국어 + 영어', 'English + Korean'],
    ['한국어 전용', 'Korean only'],
    ['영어 전용', 'English'],
    ['다른 이미지', 'Another image'],
    ['다시 인식', 'Run again'],
    ['줄바꿈 정리', 'Tidy line breaks'],
    ['원본 이미지', 'Original image'],
    ['추출 결과', 'Result'],
    ['워드·한글용', 'For Word'],
    ['메모장용', 'Plain text'],
    ['준비 중…', 'Getting ready…'],
    ['저장', 'Save'],
    ['글자', 'Characters']
  ],

  guide: {
    intro: {
      h: 'Retyping text out of a picture',
      p: [
        'A screenshot where copying is disabled. A photograph of a form. A scanned document. Getting the words out means typing them again, and even a small table takes a surprising amount of time.',
        'OCR finds the characters in an image and converts them to text. This tool does that inside your browser, so the image is never uploaded. That matters for the things people usually need to transcribe: contracts, identity documents, invoices.'
      ]
    },
    uses: [
      { t: 'Text from a screenshot', d: 'When a page blocks selection, or the content is an image rather than text.' },
      { t: 'Scanned documents', d: 'Pulling the contents out of a paper form that was scanned or photographed.' },
      { t: 'Conference slides', d: 'Turning the photos you took of slides into notes you can search.' },
      { t: 'Receipts and statements', d: 'Getting figures off a photographed document and into a spreadsheet.' }
    ],
    steps: [
      'Add an image.',
      'Choose the recognition language. English, English with Korean, or Korean only.',
      'Correct anything that came out wrong directly in the result box.',
      'Use <strong>Copy all recognised text</strong>.'
    ],
    options: [
      { t: 'Recognition language', d: 'Narrowing the language improves accuracy. If the image is English only, choose English rather than a combined mode.' },
      { t: 'Tidy line breaks', d: 'Reflows the recognised text into paragraphs instead of the line by line output.' },
      { t: 'Run again', d: 'Re-runs recognition after you change the language or swap the image.' }
    ],
    faq: [
      { q: 'How do I get better results', a: 'Large, sharp characters help most. Crop and straighten a tilted photo, and retake anything with heavy shadow or glare. Handwriting is generally not recognised well.' },
      { q: 'Is my image uploaded', a: 'No. Recognition runs in your browser and the image never leaves your device.' },
      { q: 'Are tables preserved', a: 'The text is extracted but the row and column structure is not. You will need to rebuild the table after copying.' },
      { q: 'Why is the first run slow', a: 'The recognition model is downloaded on first use. After that it is cached and subsequent runs start straight away.' }
    ]
  }
};
