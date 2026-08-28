module.exports = {
  id: 'tetris',

  patches: [
    ["'점수 ' + score.toLocaleString('ko-KR') + ' · ' + lines + '줄 · 레벨 ' + level +",
     "'Score ' + score.toLocaleString('en-US') + ' · ' + lines + ' lines · level ' + level +"]
  ],

  strings: [
    ['키보드 · ← → 이동 · ↓ 소프트드롭 · Space 하드드롭 · ↑ 또는 X 회전 · Z 역회전 · C 홀드 · P 일시정지',
     'Keyboard · ← → move · ↓ soft drop · Space hard drop · ↑ or X rotate · Z rotate back · C hold · P pause'],
    ['화면 아래 버튼이나 키보드로 조작합니다', 'Use the buttons below or your keyboard'],
    ['최고 점수 지우기', 'Clear best score'],
    ['새 게임 시작', 'New game'],
    ['게임 시작', 'Start'],
    ['게임 종료', 'Game over'],
    ['다시 하기', 'Play again'],
    ['설정 열기', 'Open settings'],
    ['돌아가기', 'Back'],
    ['일시정지', 'Paused'],
    ['시작 레벨', 'Starting level'],
    ['블록 테마', 'Block theme'],
    ['고스트 블록', 'Ghost piece'],
    ['테트리스', 'Block Stacker'],
    ['(최고 기록!)', '(new best)'],
    ['네온', 'Neon'],
    ['클래식', 'Classic'],
    ['흑백', 'Mono'],
    ['효과음', 'Sound'],
    ['진동', 'Vibration'],
    ['하드', 'Hard'],
    ['소프트', 'Soft'],
    ['설정', 'Settings']
  ],

  guide: {
    intro: {
      h: 'Stacking blocks in a browser tab',
      p: [
        'Rotate the falling pieces, fill a horizontal row, and the row clears. The rules take five seconds to learn, but the speed rises as you go and the thinking time shrinks with it.',
        'No install and no sign in. It is here for the few minutes when you need to look at something else.'
      ]
    },
    uses: [
      { t: 'A short break', d: 'A few minutes away when concentration has gone.' },
      { t: 'Waiting for something', d: 'Filling the gap while a build runs or a meeting starts.' },
      { t: 'On a phone', d: 'The same page works on mobile, with optional haptic feedback.' }
    ],
    steps: [
      'Press <strong>New game</strong>.',
      'Move and rotate the falling piece to fill a row.',
      'Complete a horizontal line and it clears, scoring points.'
    ],
    options: [
      { t: 'Ghost piece', d: 'Shows where the current piece will land. Worth leaving on while you are getting used to it.' },
      { t: 'Starting level', d: 'Begin at a higher speed if the early levels are too slow.' },
      { t: 'Block theme', d: 'Neon, classic or mono.' },
      { t: 'Sound and vibration', d: 'Audio feedback, and haptics on mobile when a piece lands.' }
    ],
    faq: [
      { q: 'Is my score saved', a: 'Your best score is kept in your browser. Nothing is sent to a server, and you can clear it in the settings.' },
      { q: 'Does it work on a phone', a: 'Yes. Use the on-screen buttons or swipe.' }
    ]
  }
};
