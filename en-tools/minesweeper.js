module.exports = {
  id: 'minesweeper',

  patches: [
    ["easy:   { w: 9,  h: 9,  m: 10, label: '초급' },", "easy:   { w: 9,  h: 9,  m: 10, label: 'Beginner' },"],
    ["normal: { w: 16, h: 16, m: 40, label: '중급' },", "normal: { w: 16, h: 16, m: 40, label: 'Intermediate' },"],
    ["hard:   { w: 30, h: 16, m: 99, label: '상급' },", "hard:   { w: 30, h: 16, m: 99, label: 'Expert' },"],
    ["custom: { w: 12, h: 12, m: 24, label: '사용자 지정' }", "custom: { w: 12, h: 12, m: 24, label: 'Custom' }"]
  ],

  strings: [
    ['길게 누르면 모드와 상관없이 깃발이 꽂힙니다 · 열린 숫자를 누르면 주변이 한 번에 열립니다',
     'Press and hold to place a flag whatever the mode · tap a revealed number to open its neighbours at once'],
    ['첫 번째로 여는 칸과 그 주변에는 지뢰가 놓이지 않습니다',
     'The first square you open, and everything around it, is always safe'],
    ['가로·세로·지뢰 수 직접 입력', 'Set the width, height and mine count yourself'],
    ["'지뢰는 최대 ' + maxM + '개까지 놓을 수 있습니다'", "'At most ' + maxM + ' mines will fit'"],
    ['숫자를 입력해 주세요', 'Enter a number'],
    ['최고 기록을 세웠습니다', 'A new best time'],
    ['지뢰를 밟았습니다', 'You hit a mine'],
    ['난이도 바꾸기', 'Change difficulty'],
    ['사용자 지정', 'Custom'],
    ['기록 지우기', 'Clear records'],
    ['− 축소', '− Zoom out'],
    ['+ 확대', '+ Zoom in'],
    ['화면맞춤', 'Fit'],
    ['깃발 모드', 'Flag mode'],
    ['파기 모드', 'Dig mode'],
    ['새 게임', 'New game'],
    ['다시 하기', 'Play again'],
    ['난이도', 'Difficulty'],
    ['초급', 'Beginner'],
    ['중급', 'Intermediate'],
    ['상급', 'Expert'],
    ['지뢰찾기', 'Minesweeper'],
    ['성공!', 'Cleared'],
    ['시작', 'Start'],
    ['닫기', 'Close'],
    ['가로', 'Width'],
    ['세로', 'Height'],
    ['지뢰', 'Mines'],
    ["' · ' + elapsed + '초'", "' · ' + elapsed + 's'"],
    ["'\\n최고 기록 ' + records[level] + '초'", "'\\nbest ' + records[level] + 's'"],
    ["'기록 ' + elapsed + '초 · 다시 도전해 보세요'", "elapsed + 's · try again'"],
    ["records[k] + '초'", "records[k] + 's'"]
  ],

  guide: {
    intro: {
      h: 'What the numbers are telling you',
      p: [
        'Open a square and a number appears. It counts the mines among the eight squares touching it. That single piece of information, repeated across the board, is enough to work out where every mine is.',
        'It is a deduction game rather than a guessing one, although the opening moves are necessarily blind until enough numbers are exposed to reason from.'
      ]
    },
    uses: [
      { t: 'A change of mental gear', d: 'Assembling clues into a conclusion is a different kind of thinking from most work.' },
      { t: 'Short rounds', d: 'A beginner board is over quickly, which suits a brief gap.' }
    ],
    steps: [
      'Choose a difficulty and press <strong>Start</strong>.',
      'Tap a square to open it and read the numbers.',
      'Flag the squares you believe hold mines.',
      'Open every safe square to win.'
    ],
    options: [
      { t: 'Difficulty', d: 'Beginner through expert, changing the board size and mine count.' },
      { t: 'Custom', d: 'Set the width, height and number of mines yourself.' },
      { t: 'Zoom', d: 'Scale the board to your screen, which matters for an expert board on a phone.' }
    ],
    faq: [
      { q: 'Can I lose on the first click', a: 'No. The first square you open and its neighbours are always clear, so the board is generated around your opening move.' },
      { q: 'Are my times saved', a: 'Best times per difficulty are kept in your browser and can be cleared in the settings.' },
      { q: 'What does tapping a number do', a: 'If you have flagged as many mines around it as the number says, tapping it opens all the remaining neighbours at once. It speeds things up considerably, and misplaces flags cost you.' }
    ]
  }
};
