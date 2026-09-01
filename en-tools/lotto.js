module.exports = {
  id: 'lotto',

  /* ── 기본값 · 규칙 변경 ─────────────────────────────── */
  patches: [
    // 기본 복권을 파워볼로
    ["let game = 'kr';", "let game = 'pb';"],

    // 복권 목록을 미국 우선으로 재배치하고 영문 규칙으로 교체
    [`  const GAMES = {
    kr: { nm: '한국 로또 6/45', tag: '한국',
          main: { count: 6, min: 1, max: 45 }, bonus: null,
          rule: '1~45 중 서로 다른 6개를 뽑습니다' },
    pb: { nm: '미국 파워볼', tag: '미국',
          main: { count: 5, min: 1, max: 69 }, bonus: { nm: '파워볼', min: 1, max: 26 },
          rule: '1~69 중 5개 + 파워볼 1~26 중 1개' },
    mm: { nm: '미국 메가밀리언', tag: '미국',
          main: { count: 5, min: 1, max: 70 }, bonus: { nm: '메가볼', min: 1, max: 25 },
          rule: '1~70 중 5개 + 메가볼 1~25 중 1개' }
  };`,
     `  const GAMES = {
    pb: { nm: 'Powerball', tag: 'US',
          main: { count: 5, min: 1, max: 69 }, bonus: { nm: 'Powerball', min: 1, max: 26 },
          rule: '5 numbers from 1-69 plus 1 Powerball from 1-26' },
    mm: { nm: 'Mega Millions', tag: 'US',
          main: { count: 5, min: 1, max: 70 }, bonus: { nm: 'Mega Ball', min: 1, max: 25 },
          rule: '5 numbers from 1-70 plus 1 Mega Ball from 1-25' },
    kr: { nm: 'Korea Lotto 6/45', tag: 'KR',
          main: { count: 6, min: 1, max: 45 }, bonus: null,
          rule: '6 different numbers from 1-45' }
  };`]
  ],

  /* ── 화면 문구 ──────────────────────────────────────── */
  strings: [
    ['본 로또 번호 생성기는 사용자 시드 및 난수 알고리즘 기반 오락용 툴이며,',
     'This generator is an entertainment tool based on a user seed and a random number algorithm.'],
    ['실제 로또 당첨을 보장하지 않습니다. 과도한 복권 구매는 유해할 수 있습니다.',
     'It cannot improve your odds of winning. Please play responsibly.'],
    ["const gname = { kr: '한국로또', pb: '파워볼', mm: '메가밀리언' }[game];",
     "const gname = { kr: 'Korea Lotto', pb: 'Powerball', mm: 'Mega Millions' }[game];"],
    ["const lines = ['🍀 ' + g.nm + ' 5세트'];",
     "const lines = ['🍀 ' + g.nm + ' — 5 sets'];"],
    ["const nums = on.join(', ') + '번';", "const nums = on.join(', ');"],
    ["' 반영 · 한 세트는 <b>'", "' in play · one set with <b>'"],
    ['</span> 로또', '</span> Lottery'],
    ['행운의 번호와 지금 이 순간을 섞어 다섯 세트를 뽑습니다. 뺄 번호를 지정할 수 있습니다.',
     'Blends your own lucky numbers with the current moment to draw five sets. Numbers can be excluded.'],
    ['행운의 번호와 지금 이 순간을 섞어 5세트를 뽑습니다',
     'Five sets, drawn from your lucky numbers and this moment'],
    ['비워두면 100% 자동 추첨입니다 · 입력 가능 범위',
     'Leave blank for a fully automatic draw · valid range'],
    ['비워두면 100% 자동 추첨입니다', 'Leave blank for a fully automatic draw'],
    ['한 세트는 <b>전혀 없이</b>, 나머지 세 세트는 <b>최소 1개</b>씩',
     'one set with <b>none of them</b>, three sets with <b>at least one</b>'],
    ['아래 버튼을 눌러 5세트를 뽑아 보세요', 'Press the button below to draw five sets'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['먼저 번호를 뽑아 주세요', 'Draw some numbers first'],
    ['행운의 번호를 비웠습니다', 'Lucky numbers cleared'],
    ['🍀 우선순위 행운의 번호', '🍀 Priority lucky numbers'],
    ['🍀 행운의 번호 추첨하기', '🍀 Draw my numbers'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ['🇰🇷 한국 로또', '🇰🇷 Korea Lotto'],
    ['🇺🇸 메가밀리언', '🇺🇸 Mega Millions'],
    ['🇺🇸 파워볼', '🇺🇸 Powerball'],
    ['전체 번호 복사', 'Copy all numbers'],
    ['텍스트로 저장', 'Save as text'],
    ['한국 로또 6/45', 'Korea Lotto 6/45'],
    ['미국 메가밀리언', 'Mega Millions'],
    ['미국 파워볼', 'Powerball'],
    ['럭키 클로버 로또 추첨기', 'Lucky Clover Lottery Picker'],
    ['럭키 클로버', 'Lucky Clover'],
    ['행운의 번호 :', 'Lucky numbers:'],
    ['행운의 번호', 'Lucky numbers'],
    ['지정 번호 포함 방식', 'How lucky numbers are used'],
    ['제외 번호 설정', 'Excluded numbers'],
    ['제외 번호', 'Excluded'],
    ['복권 종류', 'Lottery'],
    ['전혀 없이', 'none'],
    ['최소 1개', 'at least one'],
    ['번호 뽑기', 'Draw'],
    ['개 모두', ' selected'],
    ['비우기', 'Clear'],
    ['1순위', '1st'],
    ['2순위', '2nd'],
    ['3순위', '3rd'],
    ['· 시드', '· seed'],
    ['[주의]', '[Note]'],
    ['비움', 'empty'],
    ['없음', 'None'],
    ['미국', 'US'],
    ['한국', 'KR']
  ],

  /* ── 영문 안내문 ────────────────────────────────────── */
  guide: {
    intro: {
      h: 'Picking numbers, without picking them yourself',
      p: [
        'Choosing lottery numbers by hand means thinking about it every week. Letting the terminal quick pick means you had no say at all. This tool sits between the two: keep the numbers that matter to you, exclude the ones you do not want, and let the rest be random.',
        'Powerball and Mega Millions are configured with their official rules — five main numbers from 1 to 69 plus a Powerball from 1 to 26, and five from 1 to 70 plus a Mega Ball from 1 to 25. Korea Lotto 6/45 is included as well.'
      ]
    },
    uses: [
      { t: 'A quick pick you still control', d: 'Get five sets at once without thinking about it, while keeping any numbers you always play.' },
      { t: 'Keeping meaningful numbers', d: 'Birthdays or anniversaries stay in every set while the remaining slots are filled at random.' },
      { t: 'Excluding numbers', d: 'Leave out numbers you would rather not see, for whatever reason.' },
      { t: 'Keeping a record', d: 'Save the sets as text so you can check them after the draw.' }
    ],
    steps: [
      'Choose <strong>Powerball</strong>, <strong>Mega Millions</strong> or <strong>Korea Lotto</strong> at the top.',
      'Enter any lucky numbers you want kept, or leave the fields blank for a fully automatic draw.',
      'Add any numbers to exclude.',
      'Draw, then use <strong>Copy all numbers</strong> or <strong>Save as text</strong>.'
    ],
    options: [
      { t: 'How lucky numbers are used', d: 'Choose whether one set is drawn with none of your numbers, or every set includes at least one of them. Mixing both spreads your picks across the five sets.' },
      { t: 'Excluded numbers', d: 'Numbers listed here never appear in any set.' },
      { t: 'Seed', d: 'Each draw shows the seed it used, so an identical seed reproduces the same numbers. It is there so you can verify the draw was not adjusted afterwards.' }
    ],
    faq: [
      { q: 'Does this improve my odds', d: '', a: 'No. Every combination has exactly the same probability however it was chosen. This tool only saves you the effort of picking.' },
      { q: 'Does it analyse past winning numbers', a: 'No. Each draw is independent, so previous results have no bearing on the next one. Patterns in past numbers are coincidence, not signal.' },
      { q: 'Why is Powerball the default', a: 'It is the most widely played of the three. You can switch to Mega Millions or Korea Lotto at the top and the rules change accordingly.' },
      { q: 'Are my numbers stored anywhere', a: 'No. Everything happens in your browser. Saving as text writes a file to your own device and nothing is sent to a server.' }
    ]
  }
};
