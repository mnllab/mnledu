module.exports = {
  id: 'listformat',

  patches: [
    /* 예시 데이터를 영문 부품 목록으로 */
    ["      '스마트 그리퍼\\n' +", "      'Smart gripper\\n' +"],
    ["      '  서보 액추에이터  \\n' +", "      '  Servo actuator  \\n' +"],
    ["      '감속기 모듈\\n' +", "      'Gearbox module\\n' +"],
    ["      '하모닉 드라이브\\n' +", "      'Harmonic drive\\n' +"],
    ["      '감속기 모듈';", "      'Gearbox module';"],
    ["const name = '리스트_' + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) +",
     "const name = 'list_' + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) +"]
  ],

  strings: [
    ['줄 단위 목록을 다듬고 원하는 형태로 · 저장되지 않음',
     'Tidy a line by line list into the shape you need · nothing is stored'],
    ['여기에 텍스트를 줄바꿈하여 붙여넣으세요', 'Paste your list here, one item per line'],
    ['가공된 결과가 여기에 표시됩니다', 'The processed list appears here'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['옵션을 처음 상태로 되돌렸습니다', 'Options reset'],
    ['처리 중 오류가 발생했습니다 : ', 'Something went wrong: '],
    ['복사할 결과가 없습니다', 'Nothing to copy'],
    ['저장할 내용이 없습니다', 'Nothing to save'],
    ['알 수 없음', 'unknown'],
    ['스마트 리스트 포맷터', 'Smart List Formatter'],
    ['구분자 (한 줄로 합칠 때)', 'Separator (when joining)'],
    ['양쪽 공백 제거', 'Trim spaces'],
    ['오름차순 정렬', 'Sort ascending'],
    ['한 줄로 합치기', 'Join into one line'],
    ['번호 매기기', 'Add numbering'],
    ['번호 형식', 'Number style'],
    ['옵션 초기화', 'Reset options'],
    ['빈 줄 제거', 'Remove blank lines'],
    ['중복 제거', 'Remove duplicates'],
    ['복사 형식', 'Copy format'],
    ['복사·저장 형식', 'Copy and save format'],
    ['워드·한글용', 'For Word'],
    ['메모장용', 'Plain text'],
    ['결과 복사', 'Copy result'],
    ['접두사', 'Prefix'],
    ['접미사', 'Suffix'],
    ["'중복 ' + fmt(r.removed) + '건 제거'", "fmt(r.removed) + ' duplicates removed'"],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ['예시', 'Sample'],
    ['저장', 'Save'],
    ['지우기', 'Clear'],
    ['원본', 'Input'],
    ['결과', 'Result'],
    ['항목', 'Items'],
    ['글자', 'Characters'],
    ['줄 <b', 'Lines <b'],
    ['예) "', 'e.g. "']
  ],

  guide: {
    intro: {
      h: 'The time a list eats before you can use it',
      p: [
        'Lists arrive with stray spaces on the ends, duplicates from two different sources, and no particular order. Then you still need to number them, or join them with commas, or put quotes around every entry. That usually means opening a spreadsheet and writing a formula.',
        'This tool does all of it in one screen. Paste a list separated by line breaks and switch on whatever you need. The original stays on the left, so you can toggle options and compare results without losing anything.'
      ]
    },
    uses: [
      { t: 'Merging attendee lists', d: 'Combine lists from different sources, drop the duplicates and sort them alphabetically.' },
      { t: 'Numbered lists for documents', d: 'Add 1. 2. 3. or another numbering style to a set of items headed for a report.' },
      { t: 'Joining into one line', d: 'Turn a column of email addresses into a comma separated string for the recipient field.' },
      { t: 'Adding prefixes and suffixes', d: 'Put a path in front of every filename or quotes around every entry. Useful for code and config work.' }
    ],
    steps: [
      'Paste the list on the left, one item per line.',
      'Switch on the options you need. Several can run at once.',
      'Check the result on the right and use <strong>Copy result</strong>.'
    ],
    options: [
      { t: 'Remove duplicates, blank lines and trim spaces', d: 'The basic cleanup. Worth turning on first whenever a list came from more than one place.' },
      { t: 'Sort ascending', d: 'Alphabetical or numerical order.' },
      { t: 'Add numbering', d: 'Numbers each item. Several numbering styles are available.' },
      { t: 'Join into one line, with separator', d: 'Collapses everything into a single line joined by whatever you put in the separator field.' },
      { t: 'Prefix and suffix', d: 'Adds the same text to the front or back of every item.' }
    ],
    faq: [
      { q: 'In what order are the options applied', a: 'Cleanup first, then sorting, then prefix and suffix, then numbering, then joining. You can watch the result change as you toggle each one.' },
      { q: 'Does it change my original list', a: 'No. The left panel is left alone and the result is built separately, so you can compare different combinations freely.' },
      { q: 'How large a list can it handle', a: 'Everything runs in your browser, so very long lists depend on your device rather than a server limit. A few thousand lines is comfortable.' }
    ]
  }
};
