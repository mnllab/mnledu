module.exports = {
  id: 'notepad',

  patches: [
    /* 한글 글꼴 → 영문 환경에 맞는 목록 */
    ["<option value=\"'Nanum Gothic'\">나눔고딕</option>",
     "<option value=\"Georgia, serif\">Georgia</option>"],
    ["<option value=\"'Malgun Gothic'\">맑은 고딕</option>",
     "<option value=\"'Times New Roman', serif\">Times New Roman</option>"],

    ["a.download = '메모_' + stamp() + '.' + ext;",
     "a.download = 'note_' + stamp() + '.' + ext;"],

    /* 바이트 안내 : 한글 기준 설명을 UTF-8 일반 설명으로 */
    ['<p class="mt-1.5 text-[11px] text-muted">글자 수는 줄바꿈을 제외하고 셉니다 · 바이트는 UTF-8 기준(한글 3, 영문·숫자·공백 1)</p>',
     '<p class="mt-1.5 text-[11px] text-muted">Line breaks are excluded from the character count · bytes are UTF-8, where Latin letters and digits are 1 byte and CJK characters are 3</p>']
  ],

  strings: [
    ['여기에 작성하세요. 아래쪽 테두리를 끌어 높이를 조절할 수 있습니다.',
     'Write here. Drag the bottom edge to change the height.'],
    ['브라우저가 막았습니다. Ctrl+A → Ctrl+C를 사용하세요',
     'The browser blocked copying. Use Ctrl+A then Ctrl+C.'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요',
     'The browser blocked copying. Select the text instead.'],
    ['작성한 내용을 모두 지웁니다. 계속할까요?', 'This clears everything you have written. Continue?'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['작성하고 복사하는 임시 작업대 · 저장되지 않음',
     'A scratch pad for writing and copying · nothing is stored'],
    ['서식 없이 복사되었습니다!', 'Copied as plain text'],
    ['워드용으로 복사되었습니다!', 'Copied for Word'],
    ['복사할 내용이 없습니다', 'Nothing to copy'],
    ['저장할 내용이 없습니다', 'Nothing to save'],
    ['나만의 웹 메모장', 'Rich Text Notepad'],
    ['메모 편집 영역', 'Note editor'],
    ['줄바꿈 삽입 (Shift+Enter)', 'Insert line break (Shift+Enter)'],
    ['서식만 지우기', 'Clear formatting only'],
    ['서식 지우기', 'Clear formatting'],
    ['굵게 (Ctrl+B)', 'Bold (Ctrl+B)'],
    ['기울임 (Ctrl+I)', 'Italic (Ctrl+I)'],
    ['문단 기호', 'Bulleted list'],
    ['문단 번호', 'Numbered list'],
    ['• 목록', '• List'],
    ['1. 번호', '1. Numbered'],
    ['↵ 줄바꿈', '↵ Break'],
    ['보기 모드', 'View mode'],
    ['서식 유지', 'Keep formatting'],
    ['순수 텍스트', 'Plain text'],
    ['워드·한글용', 'For Word'],
    ['한 문단으로', 'Single paragraph'],
    ['복사 형식', 'Copy format'],
    ['전체 복사', 'Copy all'],
    ['전체 지우기', 'Clear all'],
    ['줄 간격', 'Line spacing'],
    ['폰트 크기', 'Font size'],
    ['분량 기준', 'Count basis'],
    ['공백 포함', 'with spaces'],
    ['공백 제외', 'without spaces'],
    ['바이트', 'bytes'],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ['폰트', 'Font'],
    ['서식', 'Rich'],
    ['기호', 'Symbols'],
    ['저장', 'Save'],
    ['<span>자</span>', '<span>chars</span>']
  ],

  guide: {
    intro: {
      h: 'There are already notepads, so why another one',
      p: [
        'The system notepad has no formatting. A word processor takes a moment to open and wants a file. When all you need is to tidy a paragraph or check how long it is, both are more ceremony than the task deserves.',
        'This one aims for the space between. Open a tab and you have bold, italics and lists, with the character, word and byte counts updating as you type. Symbols that are awkward to reach on a keyboard are one click away.'
      ]
    },
    uses: [
      { t: 'Writing to a length limit', d: 'Applications that cap an answer at 500 characters, or a form with a byte limit. All three counts are visible while you write.' },
      { t: 'Cleaning up before pasting', d: 'Text copied from the web carries its original styling. Passing it through here lets you keep only the formatting you want.' },
      { t: 'Documents that need symbols', d: 'Marks like <strong>① ② ③ ○ □ ※ —</strong> are in the symbol panel rather than buried in a character map.' },
      { t: 'Checking markdown or HTML', d: 'See how your text comes out as markdown or HTML before moving it to a blog or documentation tool.' }
    ],
    options: [
      { t: 'Count basis', d: 'Choose whether the limit you are working to counts spaces, ignores them, or is measured in bytes. Some systems still impose byte limits, which is why it is shown separately.' },
      { t: 'Copy format', d: 'Keep formatting for a word processor, or take plain text for a form or a code field. Single paragraph joins everything into one block.' },
      { t: 'Font and line spacing', d: 'Preview roughly how the text will sit in the document it is heading for.' }
    ],
    steps: [
      'Write directly in the editor. Drag the bottom edge to resize it.',
      'Use the toolbar for bold, italics and lists.',
      'Insert symbols from the panel when you need them.',
      'Pick a copy format and take the text away.'
    ],
    faq: [
      { q: 'Is my writing saved', a: 'Not on any server. Close the page and it is gone, so copy anything you need to keep.' },
      { q: 'Why count bytes separately', a: 'A character can occupy one to four bytes depending on the script and encoding. Some systems limit input by bytes rather than characters, and the difference matters once you are near the limit.' },
      { q: 'Will formatting survive in Word', a: 'Copying with formatting carries bold and italics across in most cases. Font and size usually give way to the destination document\'s own styles.' }
    ]
  }
};
