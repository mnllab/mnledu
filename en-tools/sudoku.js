module.exports = {
  id: 'sudoku',

  patches: [
    ["const LEVELS = { easy: { n: 45, label: '쉬움' }, normal: { n: 36, label: '보통' },",
     "const LEVELS = { easy: { n: 45, label: 'Easy' }, normal: { n: 36, label: 'Normal' },"],
    ["hard: { n: 30, label: '어려움' }, expert: { n: 26, label: '전문가' } };",
     "hard: { n: 30, label: 'Hard' }, expert: { n: 26, label: 'Expert' } };"]
  ],

  strings: [
    ['아쉽습니다. 다시 도전해 보세요.', 'So close. Give it another go.'],
    ['최고 기록을 세웠습니다', 'A new best time'],
    ['가로·세로·박스 강조', 'Highlight row, column and box'],
    ['실시간 오류 검사', 'Check for mistakes as I go'],
    ['같은 숫자 강조', 'Highlight matching numbers'],
    ['실수 3회 제한', 'Three mistakes and the game ends'],
    ['새 퍼즐 시작', 'New puzzle'],
    ['새 퍼즐', 'New puzzle'],
    ['이어 하기', 'Resume'],
    ['설정 열기', 'Open settings'],
    ['되돌리기', 'Undo'],
    ['지우개', 'Erase'],
    ['메모', 'Notes'],
    ['힌트', 'Hint'],
    ['난이도', 'Difficulty'],
    ['쉬움', 'Easy'],
    ['보통', 'Normal'],
    ['어려움', 'Hard'],
    ['전문가', 'Expert'],
    ['완성!', 'Solved'],
    ['실수 3회', 'Three mistakes'],
    ['스도쿠', 'Sudoku'],
    ['설정', 'Settings'],
    ['테마', 'Theme'],
    ["' · 실수 ' + mistakes + '회'", "' · ' + mistakes + ' mistakes'"],
    ['\\n최고 기록 ', '\\nbest '],
    ["'최고 기록  ' + lines.join('   ')", "'Best times  ' + lines.join('   ')"]
  ],

  guide: {
    intro: {
      h: 'One rule, and everything follows from it',
      p: [
        'Every row, every column and every three by three box contains the digits one to nine exactly once. That is the whole game. The interest lies in working out where to start.',
        'Difficulty is set by how many numbers you begin with. Easy fills in almost sequentially; expert requires holding several cells in mind at the same time.'
      ]
    },
    uses: [
      { t: 'Quiet concentration', d: 'Something to focus on with no sound and no time pressure.' },
      { t: 'Commuting', d: 'Stop and resume without losing your place.' },
      { t: 'Winding down', d: 'A dim screen and low stimulation, which makes it a reasonable last thing of the day.' }
    ],
    steps: [
      'Choose a difficulty and press <strong>New puzzle</strong>.',
      'Select an empty cell and enter a number.',
      'Fill the grid so every row, column and box holds one to nine.'
    ],
    options: [
      { t: 'Difficulty', d: 'Easy through expert, which changes how many numbers you start with.' },
      { t: 'Check for mistakes as I go', d: 'Flags a number that breaks the rules immediately. Turning it off makes the puzzle considerably harder.' },
      { t: 'Highlighting', d: 'Lights up the related row, column and box, or every instance of the selected number, to make scanning easier.' },
      { t: 'Three mistakes and the game ends', d: 'Adds pressure if you want it.' }
    ],
    faq: [
      { q: 'Do I lose progress if I stop', a: 'No. <strong>Resume</strong> picks up where you left off, since the state is kept in your browser.' },
      { q: 'Is every puzzle solvable', a: 'Yes, only solvable puzzles are generated. If you are stuck, there is a route you have not spotted yet.' },
      { q: 'What is the notes mode for', a: 'It lets you pencil in the candidates for a cell rather than committing to one. Essential at the harder levels.' }
    ]
  }
};
