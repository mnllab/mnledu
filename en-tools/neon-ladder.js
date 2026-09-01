module.exports = {
  id: 'neon-ladder',

  patches: [
    ['<input class="fld" id="names" value="철수, 영희, 민수, 지훈" autocomplete="off">',
     '<input class="fld" id="names" value="Alex, Sam, Jordan, Riley" autocomplete="off">'],
    ["function wonOf(k) { return k.toLocaleString('ko-KR') + '원'; }",
     "function wonOf(k) { return '$' + k.toLocaleString('en-US'); }"],
    ["return unit === 'man' && v % 10000 === 0 ? (v / 10000) + '만' : v.toLocaleString('ko-KR');",
     "return unit === 'man' && v % 10000 === 0 ? (v / 10000) + 'k' : v.toLocaleString('en-US');"],
    ["const label = { bomb: '몰아주기', percent: '퍼센트 분배', custom: '직접 입력' }[mode];",
     "const label = { bomb: 'winner pays all', percent: 'percentage split', custom: 'custom amounts' }[mode];"],
    ['<button data-unit="man" class="on" style="flex:1">만 원</button>', '<button data-unit="man" class="on" style="flex:1">Thousands</button>'],
    ['<button data-unit="won" style="flex:1">원</button>', '<button data-unit="won" style="flex:1">Units</button>']
  ],

  strings: [
    ['참가자 (쉼표 또는 줄바꿈 · 최대 8명)', 'Participants (commas or line breaks · up to 8)'],
    ['행운의 번호 · 이 숫자가 사다리를 결정합니다', 'Lucky numbers · these determine the ladder'],
    ['이름을 누르면 그 구슬만 단독으로 내려갑니다', 'Tap a name to send just that marble down'],
    ['참가자를 2명 이상 입력해 주세요', 'Enter at least two participants'],
    ['사다리를 새로 만들었습니다 · 시드 ', 'New ladder built · seed '],
    ['먼저 사다리를 만들어 주세요', 'Build a ladder first'],
    ['행운의 번호를 새로 뽑았습니다', 'New lucky numbers drawn'],
    ['결과 복사 (카톡 공유용)', 'Copy the result to share'],
    ['모두 동시에 출발하는 3D 사다리 레이싱', 'A 3D ladder race where everyone starts at once'],
    ['⚙️ 참가자 · 분배 설정', '⚙️ Participants and split'],
    ['🎲 번호 다시 뽑기', '🎲 Redraw numbers'],
    ['사다리 새로 만들기', 'Rebuild the ladder'],
    ['시점 눕히기 / 세우기', 'Lay flat / stand up'],
    ['🚀 전체 동시 출발', '🚀 Release everyone'],
    ['네온 사다리 타기', 'Neon Ladder Lottery'],
    ['몰아주기', 'Winner pays all'],
    ['퍼센트', 'Percentage'],
    ['직접 입력', 'Custom'],
    ['다시 하기', 'Again'],
    ['조회 중…', 'checking…'],
    ['기기 지문', 'device fingerprint'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ['복사되었습니다!', 'Copied'],
    ['닫기', 'Close'],
    ["'번호 <b", "'Numbers <b"],
    ["' &nbsp;·&nbsp; 시각 <b", "' &nbsp;·&nbsp; time <b"],
    ["'<br>→ 시드 <b", "'<br>→ seed <b"],
    ["names.length + '명 · ' + label", "names.length + ' players · ' + label"],
    ["'총 ' + wonOf(rawTotal())", "'total ' + wonOf(rawTotal())"],
    ["'비중 ' + (i + 1)", "'Share ' + (i + 1)"],
    ["'칸 ' + (i + 1)", "'Slot ' + (i + 1)"],
    ["'예) 커피 사기'", "'e.g. buys the coffee'"],
    ["'예) 통과'", "'e.g. off the hook'"],
    ['= 80,000원', '= 80,000']
  ],

  guide: {
    intro: {
      h: 'Drawing lots without arguing about the drawing',
      p: [
        'A ladder lottery, amidakuji in Japanese, settles who does what. Drawn on paper, whoever held the pen gets blamed for the outcome, and with a lot of people the lines are hard to follow.',
        'This builds the ladder at random and shows the result. It also displays the seed it used, so anyone can see the ladder was not adjusted after the fact.'
      ]
    },
    uses: [
      { t: 'Assigning roles', d: 'Presentation order, who takes the notes, who does the washing up.' },
      { t: 'Splitting a bill', d: 'Even shares, percentages, one person covering everything, or amounts you set yourself.' },
      { t: 'Seating and teams', d: 'Randomising an arrangement so nobody has to decide it.' },
      { t: 'Remote groups', d: 'Copy the result into a group chat so everyone sees the same outcome.' }
    ],
    steps: [
      'Enter the participants.',
      'Set the outcomes, and choose a split method if money is involved.',
      'Press <strong>Rebuild the ladder</strong> for a fresh random layout.',
      'Release everyone, then copy the result.'
    ],
    options: [
      { t: 'Winner pays all, percentage, custom', d: 'How an amount is distributed. Winner pays all puts the whole sum on one person.' },
      { t: 'Lay flat / stand up', d: 'Switches between a horizontal and vertical view, useful on a narrow screen.' },
      { t: 'Seed', d: 'The same seed rebuilds the same ladder, which is how anyone can verify the draw.' }
    ],
    faq: [
      { q: 'Is it genuinely random', a: 'Yes. The seed is shown alongside the result, and re-entering it reproduces the same ladder, so the draw can be checked.' },
      { q: 'How many people can take part', a: 'Up to eight. Use the flat view if the display gets crowded.' }
    ]
  }
};
