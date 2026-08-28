module.exports = {
  id: 'pdfmerge',

  patches: [
    /* 빠른 범위 지정에서 '전체' 를 영문으로도 받게 */
    ["} else if (/^(전체|all)$/i.test(t)) {",
     "} else if (/^(all|전체)$/i.test(t)) {"]
  ],

  strings: [
    ['PDF 처리 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 새로고침해 주세요. (pdf-lib은 CDN에서 내려받습니다)',
     'The PDF library could not be loaded. Check your connection and reload. (pdf-lib is fetched from a CDN.)'],
    ['파일이 서버로 올라가지 않고 브라우저 안에서 처리됩니다 · 용량 제한 없음',
     'Files are handled inside your browser and never uploaded · no size limit'],
    ['합칠 PDF 파일들을 끌어다 놓거나 클릭해서 추가하세요',
     'Drop the PDFs you want to combine here, or click to add them'],
    ['페이지를 뽑아낼 PDF 하나를 넣어 주세요', 'Add the PDF you want to take pages from'],
    ['여러 개를 한 번에 넣을 수 있습니다', 'You can add several at once'],
    ['행을 끌거나 화살표로 순서를 바꿉니다', 'Drag a row or use the arrows to reorder'],
    ['다음 파일은 추가하지 못했습니다 : ', 'These files could not be added: '],
    ['파일이 하나뿐입니다. 그대로 저장할까요?', 'There is only one file. Save it as is?'],
    ['추가한 파일을 모두 비웁니다. 계속할까요?', 'This removes every file you added. Continue?'],
    ['추출할 페이지를 입력해 주세요', 'Enter the pages you want to extract'],
    ['PDF 파일만 넣을 수 있습니다.', 'Only PDF files can be added.'],
    ['범위마다 파일 나눠 저장', 'Save each range as a separate file'],
    ['추출할 페이지 범위', 'Pages to extract'],
    ['끌어다 놓거나 클릭해서 선택', 'Drop it here or click to choose'],
    ['합칠 파일을 넣어 주세요', 'Add the files you want to combine'],
    ['먼저 PDF를 넣어 주세요', 'Add a PDF first'],
    ['추출할 페이지가 없습니다', 'No pages selected'],
    ['PDF를 읽지 못했습니다 : ', 'Could not read that PDF: '],
    ['병합에 실패했습니다 : ', 'Merge failed: '],
    ['추출에 실패했습니다 : ', 'Extraction failed: '],
    ['알 수 없는 오류', 'unknown error'],
    ['PDF 병합 · 추출기', 'PDF Merge &amp; Split'],
    ['병합 및 다운로드', 'Merge and download'],
    ['추출 및 다운로드', 'Extract and download'],
    ['PDF 파일 추가', 'Add PDF files'],
    ['PDF 파일 선택', 'Choose a PDF file'],
    ['끌어서 순서 변경', 'Drag to reorder'],
    ['전체 비우기', 'Clear all'],
    ['PDF 병합', 'Merge'],
    ['PDF 추출', 'Extract'],
    ['(PDF가 아님)', '(not a PDF)'],
    ['읽기 실패', 'could not be read'],
    ["'인식 못한 표기 : '", "'Not understood: '"],
    ["'범위를 벗어난 값 : '", "'Out of range: '"],
    ["' (이 문서는 ' + splitDoc.pages + '쪽)'", "' (this document has ' + splitDoc.pages + ' pages)'"],
    ["'총 ' + r.pages.length + '쪽 추출'", "r.pages.length + ' pages selected'"],
    ["files.length + '개 파일을 합쳐 저장했습니다'", "'Merged ' + files.length + ' files'"],
    ["r.groups.length + '개 파일로 나눠 저장했습니다'", "'Saved as ' + r.groups.length + ' files'"],
    ["r.pages.length + '쪽을 추출해 저장했습니다'", "'Extracted ' + r.pages.length + ' pages'"],
    ["f.pages + '쪽 · ' + fmtSize(f.size)", "f.pages + ' pages · ' + fmtSize(f.size)"],
    ["info.pages + '쪽 · ' + fmtSize(f.size)", "info.pages + ' pages · ' + fmtSize(f.size)"],
    ['병합 중…', 'Merging…'],
    ['추출 중…', 'Extracting…'],
    ['예) 1-3, 5, 7-10', 'e.g. 1-3, 5, 7-10'],
    ['홀수쪽', 'Odd pages'],
    ['짝수쪽', 'Even pages'],
    ['앞 절반', 'First half'],
    ['뒤 절반', 'Second half'],
    ['위로', 'Move up'],
    ['아래로', 'Move down'],
    ['제거', 'Remove'],
    ['비우기', 'Clear'],
    ['전체</button>', 'All</button>'],
    ['개 · 전체 <b', ' · <b'],
    ['쪽</span>', ' pages</span>'],
    ['파일 <b', 'Files <b']
  ],

  guide: {
    intro: {
      h: 'Combining PDFs without installing anything',
      p: [
        'Applications usually want several supporting documents bundled into a single PDF. The reverse happens too: a long report where only a few pages need to go to someone else.',
        'The usual answers are a paid desktop application or an unfamiliar website that wants you to upload the file. That second option is worth pausing over, because these documents tend to be exactly the ones you would not want to hand over: bank details, registration certificates, signed contracts. This tool runs in your browser, so the file never leaves your machine.'
      ]
    },
    uses: [
      { t: 'Bundling application documents', d: 'Combining a registration certificate, bank details and other evidence into one submission file.' },
      { t: 'Pulling out a few pages', d: 'Sending one chapter of a long report rather than the whole thing.' },
      { t: 'Fixing duplex scans', d: 'When a double sided scan came out as separate odd and even files, the odd and even buttons sort it out.' },
      { t: 'Splitting for email', d: 'Halving a PDF that is over an attachment size limit.' }
    ],
    steps: [
      'Choose <strong>Merge</strong> or <strong>Extract</strong>.',
      'Drop your files in, or click to select them. For merging, drag the rows to set the order.',
      'For extraction, type the page range, for example <strong>1-3, 5, 7-10</strong>.',
      'Press the download button.'
    ],
    options: [
      { t: 'All, odd and even pages', d: 'One click shortcuts for common ranges. The odd and even buttons are what you want for a duplex scan that came out in two files.' },
      { t: 'First half and second half', d: 'Splits the document down the middle, usually because of an attachment size limit.' },
      { t: 'Save each range as a separate file', d: 'With several ranges entered, choose whether to get one combined file or one file per range.' }
    ],
    faq: [
      { q: 'Where do my files go', a: 'Nowhere. Your browser reads the file, does the work and hands you the result directly. Nothing is uploaded, which is the point when the document contains sensitive material.' },
      { q: 'Do password protected PDFs work', a: 'No. A file with an open password cannot be processed. Remove the password first.' },
      { q: 'How do I write a page range', a: 'Separate entries with commas and use a hyphen for a span. So 1-3, 5, 7-10 means pages 1, 2, 3, 5, 7, 8, 9 and 10.' },
      { q: 'Is there a file size limit', a: 'No fixed limit, since there is no upload. Very large files depend on the memory available to your browser.' }
    ]
  }
};
