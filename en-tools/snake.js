module.exports = {
  id: 'snake',

  patches: [
    ["reason + '\\n점수 ' + score.toLocaleString('ko-KR') + ' · 길이 ' + snake.length +",
     "reason + '\\nScore ' + score.toLocaleString('en-US') + ' · length ' + snake.length +"]
  ],

  strings: [
    ['스와이프를 고르면 화면 어디서나 밀어서 조작합니다', 'With swipe selected you can drag anywhere on screen'],
    ['화면을 손가락으로 밀어 방향을 바꿉니다', 'Swipe to change direction'],
    ['키보드 · 방향키 또는 WASD · Space 일시정지', 'Keyboard · arrow keys or WASD · Space to pause'],
    ['황금 사과 · 길이 감소 아이템 출현', 'Golden apples and shortening items appear'],
    ['끄면 벽에 닿을 때 게임 종료', 'Off means hitting a wall ends the game'],
    ['자기 몸에 부딪혔습니다', 'You ran into yourself'],
    ['벽에 부딪혔습니다', 'You hit the wall'],
    ['사과를 먹고 길어지세요', 'Eat apples and grow'],
    ['최고 점수 지우기', 'Clear best score'],
    ['새 게임 시작', 'New game'],
    ['게임 시작', 'Start'],
    ['게임 종료', 'Game over'],
    ['다시 하기', 'Play again'],
    ['설정 열기', 'Open settings'],
    ['돌아가기', 'Back'],
    ['일시정지', 'Paused'],
    ['이동 속도', 'Speed'],
    ['조작 방식', 'Controls'],
    ['특수 아이템', 'Special items'],
    ['벽 통과', 'Wrap at walls'],
    ['십자키', 'D-pad'],
    ['스와이프', 'Swipe'],
    ['스네이크', 'Snake'],
    ['최고 기록!', 'New best'],
    ['느림', 'Slow'],
    ['보통', 'Normal'],
    ['빠름', 'Fast'],
    ['효과음', 'Sound'],
    ['진동', 'Vibration'],
    ['설정', 'Settings']
  ],

  guide: {
    intro: {
      h: 'A game that gets harder the better you play',
      p: [
        'Every apple adds a segment. The longer you get, the less room there is to move, and running into your own body ends it. Success creates the difficulty, which is the whole design.',
        'With wrapping on, leaving one edge brings you back on the other. With it off, the wall is fatal and the game becomes much more careful.'
      ]
    },
    uses: [
      { t: 'A couple of minutes off', d: 'Simple enough to clear your head without demanding much of it.' },
      { t: 'On a phone', d: 'Swipe controls work one-handed.' }
    ],
    steps: [
      'Press <strong>Start</strong>.',
      'Steer with the arrow keys or by swiping.',
      'Eat apples to grow and keep out of your own way.'
    ],
    options: [
      { t: 'Speed', d: 'Slow, normal or fast.' },
      { t: 'Wrap at walls', d: 'On, the edges connect. Off, touching a wall ends the run.' },
      { t: 'Special items', d: 'Golden apples worth more, and items that shorten you again.' },
      { t: 'D-pad or swipe', d: 'Mobile control style.' }
    ],
    faq: [
      { q: 'The controls feel unreliable', a: 'If swipes are being missed, switch to the D-pad. Setting the speed to slow also gives you more time to react.' },
      { q: 'Is my score saved', a: 'Your best is kept in your browser and can be cleared from the settings.' }
    ]
  }
};
