module.exports = {
  id: 'textclean',

  patches: [
    /* 특수문자 유지 범위 : 한글 조건은 그대로 두되 라벨만 영문화 */
    ["const LABEL = { A: '줄바꿈', B: '공백', C: '태그', D: '특수문자' };",
     "const LABEL = { A: 'line breaks', B: 'spaces', C: 'tags', D: 'special characters' };"],
    ["cnt.textContent = LABEL[key] + ' ' + fmt(n) + '건 처리';",
     "cnt.textContent = fmt(n) + ' ' + LABEL[key] + ' handled';"],

    /* 예시 텍스트를 영문 공고문 느낌으로 */
    [`      '<p class="lead">본  사업은   지역   창업기업의</p>\\n' +`,
     `      '<p class="lead">This   programme   supports   regional</p>\\n' +`],
    ["      '<span>스케일업을 지원하기 위한 프로그램임 ※ 붙임 참조</span>\\n\\n' +",
     "      '<span>startups through their scale-up stage ※ see attachment</span>\\n\\n' +"],
    ["      '□ 지원규모 : 최대 5천만원   /   ○ 신청기간 : 2026. 9. 1. ~ 9. 30.';",
     "      '□ Funding : up to $40,000   /   ○ Applications : 1 Sep 2026 - 30 Sep 2026';"]
  ],

  strings: [
    ['붙여넣은 텍스트를 실시간으로 정리 · 저장되지 않음',
     'Cleans pasted text as you type · nothing is stored'],
    ['한글·영문·숫자·마침표·쉼표·공백만 유지',
     'Keeps letters, numbers, full stops, commas and spaces'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['정제된 결과가 여기에 표시됩니다', 'The cleaned text appears here'],
    ['2칸 이상 공백을 1칸으로 통일', 'Collapses runs of spaces into one'],
    ['엔터를 공백 1칸으로 치환', 'Replaces each line break with a single space'],
    ['꺾쇠 안의 태그를 모두 삭제', 'Deletes anything inside angle brackets'],
    ['정제할 텍스트를 입력하세요', 'Paste the text you want cleaned'],
    ['복사할 결과가 없습니다', 'Nothing to copy'],
    ['모든 줄바꿈 제거', 'Remove all line breaks'],
    ['연속된 공백 압축', 'Collapse repeated spaces'],
    ['HTML 태그 제거', 'Strip HTML tags'],
    ['특수문자 제거', 'Remove special characters'],
    ['텍스트 정제 툴', 'Text Cleaner'],
    ['공백 포함', 'with spaces'],
    ['공백 제외', 'without spaces'],
    ['결과 복사', 'Copy result'],
    ['복사 완료!', 'Copied'],
    ['지우기', 'Clear'],
    ['예시', 'Sample'],
    ['원본', 'Input'],
    ['결과', 'Result']
  ],

  guide: {
    intro: {
      h: 'Why copied text arrives dirty',
      p: [
        'Text copied from a web page, a PDF or a word processor brings invisible passengers with it: runs of spaces used for alignment, line breaks from inside table cells, fragments of HTML markup.',
        'Paste it into a document and you get gaps in the middle of sentences, or one sentence spread across four lines. This tool strips those traces out and shows the result beside the original so you can see exactly what changed.'
      ]
    },
    uses: [
      { t: 'Tidying up official notices', d: 'Text copied out of a funding call or tender document often arrives as blocks of spacing, because it was laid out as a table.' },
      { t: 'Quoting from the web', d: 'Moving a paragraph out of an article or blog. Stray HTML tags break the formatting once pasted into a document.' },
      { t: 'Preparing input for AI', d: 'Extra spaces and line breaks consume tokens. Cleaning a long document first leaves more room for the actual question.' },
      { t: 'Data preparation', d: 'Stripping leftover whitespace from values before they go into a spreadsheet or a database.' }
    ],
    steps: [
      'Paste the text into the left panel.',
      'Switch on the cleanup options you want. The result updates immediately.',
      'Copy the result from the right panel.'
    ],
    options: [
      { t: 'Collapse repeated spaces', d: 'Turns two or more spaces into one. This makes the biggest difference to text copied out of tables.' },
      { t: 'Remove all line breaks', d: 'Joins everything into a continuous run of text. Use it when you want one block rather than paragraphs.' },
      { t: 'Strip HTML tags', d: 'Deletes anything inside angle brackets, which is what usually comes along when copying from a web page.' },
      { t: 'Remove special characters', d: 'Keeps letters, numbers, full stops, commas and spaces, and drops the rest. Useful before importing into a system that rejects symbols.' }
    ],
    faq: [
      { q: 'How is this different from the PDF line break fixer', a: 'The PDF tool works out where paragraphs actually ended and rebuilds them. This one is a general cleaner for spacing, tags and stray characters. Running one after the other is fine.' },
      { q: 'Will removing line breaks destroy my paragraphs', a: 'Yes, that option deliberately joins everything. If you need paragraph structure preserved, use the PDF line break fixer instead.' },
      { q: 'Is my text uploaded anywhere', a: 'No. Everything happens in your browser and nothing is transmitted.' }
    ]
  }
};
