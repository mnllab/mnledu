module.exports = {
  id: 'pdftxt',

  patches: [
    /* 예시 텍스트 : 줄이 끊긴 논문 초록 + 개조식 목록 */
    ["      '본 연구는 정밀 이송계의 열변형 보상 기법을 다룬다. 측정된 온도\\n' +",
     "      'This study addresses thermal deformation compensation in precision\\n' +"],
    ["      '분포를 기반으로 실시간 보정값을 산출하며, 기존 방식 대비 위치\\n' +",
     "      'stages. Correction values are derived in real time from the measured\\n' +"],
    ["      '오차를 유의미하게 줄였다.\\n' +",
     "      'temperature field, reducing positioning error against prior methods.\\n' +"],
    ["      '□ 지원규모 : 최대 5천만원\\n' +",
     "      '□ Funding : up to $40,000\\n' +"],
    ["      '○ 신청기간 : 2026. 9. 1. ~ 9. 30.\\n' +",
     "      '○ Applications : 1 Sep 2026 - 30 Sep 2026\\n' +"],
    ["      '① 사업계획서 ② 사업자등록증';",
     "      '① Business plan ② Certificate of registration';"],

    /* 한글 전용 옵션의 라벨을 영문 맥락에 맞게 */
    ['<label class="opt"><input type="checkbox" id="optKo" checked>한글 줄은 공백 없이 잇기</label>',
     '<label class="opt"><input type="checkbox" id="optKo" checked>Join CJK lines without a space</label>']
  ],

  strings: [
    ['PDF에서 끊긴 줄을 문단 단위로 되돌립니다 · 저장되지 않음',
     'Rebuilds broken PDF lines back into paragraphs · nothing is stored'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['목록·번호 줄은 줄바꿈 유지', 'Keep line breaks on list and numbered lines'],
    ['PDF에서 복사한 텍스트를 붙여넣으세요', 'Paste the text you copied from a PDF'],
    ['복원된 텍스트가 여기에 표시됩니다', 'The rebuilt text appears here'],
    ['깔끔하게 복사되었습니다!', 'Copied, cleanly'],
    ['복사할 결과가 없습니다', 'Nothing to copy'],
    ['문단 사이 빈 줄 유지', 'Keep a blank line between paragraphs'],
    ['빈 줄 없이 문단만 구분', 'Paragraphs, no blank lines'],
    ['전체를 한 문단으로', 'Everything as one paragraph'],
    ['PDF 줄바꿈 복원기', 'PDF Line Break Fixer'],
    ["'줄 잇기 ' + fmt(r.stats.joined)", "fmt(r.stats.joined) + ' lines joined'"],
    ["'하이픈 ' + fmt(r.stats.hyphen)", "fmt(r.stats.hyphen) + ' hyphens merged'"],
    ['복사 형식', 'Copy format'],
    ['복원 결과', 'Result'],
    ['결과 복사', 'Copy result'],
    ['복사하기', 'Copy'],
    ['초기화', 'Reset'],
    ['지우기', 'Clear'],
    ['예시', 'Sample'],
    ['원본', 'Input'],
    ['글자', 'Characters'],
    ['문단', 'Paragraphs'],
    ['줄 <b', 'Lines <b']
  ],

  guide: {
    intro: {
      h: 'Why copying from a PDF breaks every line',
      p: [
        'A PDF does not store sentences the way a word processor does. It places each visible line of glyphs at a set of coordinates on the page. What looks like a flowing paragraph is, inside the file, a stack of separate lines.',
        'So when you copy and paste, the line breaks you could see come with it. Pull a paragraph out of a paper or a report and it arrives split across four or five lines, and often with words hyphenated across the break.'
      ]
    },
    uses: [
      { t: 'Quoting papers and reports', d: 'Moving a passage from a PDF into a document. Cleaning up the breaks by hand takes longer than the quote itself.' },
      { t: 'Feeding text to an AI model', d: 'Line breaks waste tokens and fragment the context. A clean paragraph gets a better answer.' },
      { t: 'Extracting from funding calls', d: 'Pulling eligibility criteria or funding details out of a PDF notice and into a table or a note.' },
      { t: 'Machine translation', d: 'Translation engines treat a line break as the end of a sentence. Fragmented input produces noticeably worse output.' }
    ],
    steps: [
      'Copy the section you want from the PDF and paste it into <strong>Input</strong>.',
      'The rebuilt paragraphs appear on the right straight away.',
      'Pick a copy format and press <strong>Copy</strong>.'
    ],
    options: [
      { t: 'Join CJK lines without a space', d: 'English needs a space between words, but Chinese, Japanese and Korean do not. With this on, CJK lines are joined directly instead of gaining a gap in the middle of a word.' },
      { t: 'Keep line breaks on list and numbered lines', d: 'Lines starting with a bullet, a number or a marker carry meaning in their line break, so they are left alone.' },
      { t: 'Copy format', d: 'Choose whether to keep a blank line between paragraphs, separate them without blank lines, or collapse everything into a single paragraph.' }
    ],
    faq: [
      { q: 'Is anything uploaded', a: 'No. The text you paste is handled inside your browser and is never transmitted.' },
      { q: 'What about tables', a: 'In a table the line breaks are the data structure, so this tool is the wrong fit. Use it for body text.' },
      { q: 'Can I drop in a PDF file directly', a: 'This tool works on text you have already copied. For a scanned PDF where the text cannot be selected, use the image to text tool instead.' },
      { q: 'What happens to hyphenated words', a: 'Words broken across a line with a hyphen are rejoined, and the count of merged hyphens is shown so you can spot anything that was joined incorrectly.' }
    ]
  }
};
