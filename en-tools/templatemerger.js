module.exports = {
  id: 'templatemerger',

  patches: [
    /* 입력 형식 안내 예시 3종 */
    ["'[제품명]\\n스마트 그리퍼\\n서보 액추에이터\\n\\n[가격]\\n1,200,000원\\n980,000원',",
     "'[Product]\\nSmart gripper\\nServo actuator\\n\\n[Price]\\n$1,200\\n$980',"],
    ["'제품명\\t가격\\t납기\\n스마트 그리퍼\\t1,200,000원\\t2주\\n서보 액추에이터\\t980,000원\\t3주\\n\\n(엑셀에서 범위를 복사해 그대로 붙여넣으면 됩니다)',",
     "'Product\\tPrice\\tLead time\\nSmart gripper\\t$1,200\\t2 weeks\\nServo actuator\\t$980\\t3 weeks\\n\\n(Copy a range straight out of a spreadsheet and paste it here)',"],
    ["'| 제품명 | 가격 | 납기 |\\n|---|---|---|\\n| 스마트 그리퍼 | 1,200,000원 | 2주 |\\n| 서보 액추에이터 | 980,000원 | 3주 |'",
     "'| Product | Price | Lead time |\\n|---|---|---|\\n| Smart gripper | $1,200 | 2 weeks |\\n| Servo actuator | $980 | 3 weeks |'"],

    /* 예시 데이터 */
    ["bracket: '[제품명]\\n스마트 그리퍼\\n서보 액추에이터\\n감속기 모듈\\n\\n[가격]\\n1,200,000원\\n980,000원\\n1,750,000원\\n\\n[납기]\\n2주\\n3주\\n4주',",
     "bracket: '[Product]\\nSmart gripper\\nServo actuator\\nGearbox module\\n\\n[Price]\\n$1,200\\n$980\\n$1,750\\n\\n[Lead time]\\n2 weeks\\n3 weeks\\n4 weeks',"],
    ["tsv: '제품명\\t가격\\t납기\\n스마트 그리퍼\\t1,200,000원\\t2주\\n서보 액추에이터\\t980,000원\\t3주\\n감속기 모듈\\t1,750,000원\\t4주',",
     "tsv: 'Product\\tPrice\\tLead time\\nSmart gripper\\t$1,200\\t2 weeks\\nServo actuator\\t$980\\t3 weeks\\nGearbox module\\t$1,750\\t4 weeks',"],

    ["tplEl.value = '안녕하세요. 문의하신 {제품명} 견적 안내드립니다.\\n공급가는 {가격}이며, 납기는 발주 후 {납기}입니다.';",
     "tplEl.value = 'Thank you for your enquiry about the {Product}.\\nOur price is {Price}, with a lead time of {Lead time} from order.';"],

    ["const name = '템플릿결과_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +",
     "const name = 'merged_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +"]
  ],

  strings: [
    ['| 제품명 | 가격 | 납기 |\\n|---|---|---|\\n| 스마트 그리퍼 | 1,200,000원 | 2주 |\\n| 서보 액추에이터 | 980,000원 | 3주 |\\n| 감속기 모듈 | 1,750,000',
     '| Product | Price | Lead time |\\n|---|---|---|\\n| Smart gripper | $1,200 | 2 weeks |\\n| Servo actuator | $980 | 3 weeks |\\n| Gearbox module | $1,750'],
    ['변수를 찾지 못했습니다. 선택한 입력 방식과 데이터 형식이 맞는지 확인해 주세요',
     'No fields found. Check that the input mode matches the shape of your data.'],
    ['데이터를 문장 틀에 끼워 한 번에 생성 · 저장되지 않음',
     'Drop your data into a sentence pattern and generate every line · nothing is stored'],
    ['변수 칩을 눌러 넣거나 {변수명} 형태로 직접 적으세요',
     'Click a field chip to insert it, or type {FieldName} yourself'],
    ['파일을 이 영역에 끌어다 놓아도 됩니다', 'You can also drop a file into this area'],
    ['데이터를 입력하면 변수 칩이 여기에 나타납니다', 'Field chips appear here once you paste data'],
    ['칩을 누르면 커서 위치에 들어갑니다', 'Clicking a chip inserts it at the cursor'],
    ['데이터를 입력하면 결과가 생성됩니다', 'Paste data and the results appear'],
    ['템플릿 문장을 적으면 결과가 생성됩니다', 'Write a template and the results appear'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['txt, csv, tsv, md 파일만 불러올 수 있습니다', 'Only txt, csv, tsv and md files can be loaded'],
    ['데이터를 읽지 못했습니다 : ', 'Could not read that data: '],
    ['파일을 읽지 못했습니다', 'The file could not be read'],
    ['형식 확인 필요', 'check the format'],
    ['올인원 템플릿 매칭기', 'All-in-One Template Merger'],
    ['엑셀·스프레드시트', 'Spreadsheet'],
    ['대괄호 리스트', 'Bracketed list'],
    ['마크다운 표', 'Markdown table'],
    ['1 · 데이터 입력', '1 · Data'],
    ['2 · 템플릿 작성', '2 · Template'],
    ['3 · 결과', '3 · Results'],
    ["'변수 ' + keys.length + '개 · 데이터 ' + rows.length + '세트'",
     "keys.length + ' fields · ' + rows.length + ' rows'"],
    ["'데이터에 없는 변수 : '", "'Not in your data: '"],
    ["lastResults.length + '건을 모두 복사했습니다!'", "'Copied all ' + lastResults.length + ' results'"],
    ["f.name + ' 을 불러왔습니다'", "f.name + ' loaded'"],
    ['전체 결과 복사', 'Copy all results'],
    ['개별 복사', 'Copy'],
    ['빈 줄로 구분', 'Separate with a blank line'],
    ['구분선으로 구분', 'Separate with a rule'],
    ['줄바꿈만', 'Line break only'],
    ['결과 구분자', 'Result separator'],
    ['복사·저장 형식', 'Copy and save format'],
    ['복사 형식', 'Copy format'],
    ['워드·한글용', 'For Word'],
    ['메모장용', 'Plain text'],
    ['복사할 내용이 없습니다', 'Nothing to copy'],
    ['저장할 결과가 없습니다', 'No results to save'],
    ['치환 실패', 'could not be filled'],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ['지우기', 'Clear'],
    ['예시', 'Sample'],
    ['저장', 'Save'],
    ['건</span>', '</span>'],
    ['건<', '<'],
    ['class="num ml-1 text-ink">0</b>건', 'class="num ml-1 text-ink">0</b>'],
    ['| Gearbox module | $1,750원 | 4주 |', '| Gearbox module | $1,750 | 4 weeks |']
  ],

  guide: {
    intro: {
      h: 'When the data arrives in a different shape every time',
      p: [
        'One list comes out of a spreadsheet, another is a bracketed block from a document, a third is a markdown table. The sentence you want to produce is identical each time, but the input shape keeps changing, so you end up reformatting by hand before you can start.',
        'This tool accepts all three. Paste whatever you have, write the sentence pattern once, and every row is filled in at the same time.'
      ]
    },
    uses: [
      { t: 'Letters to many recipients', d: 'The same notice going to different organisations, with only the name and contact changing.' },
      { t: 'Review comments', d: 'Documents where the headings are fixed and only the content varies. Faster to set the pattern and pour data into it.' },
      { t: 'Product descriptions in bulk', d: 'Catalogue copy where the structure is identical and only the model and specification change.' },
      { t: 'Generating SQL or config lines', d: 'Repeated code where only the values differ. Write one line with fields and get the whole set.' }
    ],
    steps: [
      'Paste your data. A bracketed list, a spreadsheet range or a markdown table all work.',
      'Write the sentence pattern. Click a field chip or type <strong>{FieldName}</strong> directly.',
      'The results build as you type. Use <strong>Copy all results</strong> to take them away.'
    ],
    options: [
      { t: 'Input mode', d: 'Tell the tool which shape your data is in. With a spreadsheet or markdown table the first row becomes the field names.' },
      { t: 'Result separator', d: 'Separate entries with a blank line, a plain line break or a horizontal rule. Blank lines suit documents, line breaks suit code.' },
      { t: 'Copy format', d: 'Plain text or a version that keeps formatting when pasted into a word processor.' }
    ],
    faq: [
      { q: 'Do I have to reformat my data first', a: 'No. Bracketed lists, spreadsheet ranges and markdown tables are all recognised. If the first row holds the column names, those become your fields.' },
      { q: 'How is this different from the bulk email generator', a: 'The email tool is built around a subject and body and handles Korean grammatical particles. This one is a general purpose text generator that does not care what shape your data arrives in.' },
      { q: 'Can I load a file instead of pasting', a: 'Yes. Drop a txt, csv, tsv or md file onto the data area. It is read in your browser and never uploaded.' }
    ]
  }
};
