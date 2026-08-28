module.exports = {
  id: 'horse-race',

  patches: [
    ["const HORSE_NAMES = ['적토마','번개호','청풍','폭풍우','흑진주','천리마','설월','금강','비호','한라'];",
     "const HORSE_NAMES = ['Red Hare','Thunderbolt','Blue Wind','Tempest','Black Pearl','Comet','Snow Moon','Ironclad','Nightjar','Summit'];"],
    ["function wonOf(v) { return Math.round(v).toLocaleString('ko-KR') + '원'; }",
     "function wonOf(v) { return '$' + Math.round(v).toLocaleString('en-US'); }"],
    ["const ml = { odds: '배당형 (3 : 2 : 1.4 : 0.6)', top3: '상위 3두 독식 (3 : 2 : 1)', winner: '1등 싹쓸이' }[mode];",
     "const ml = { odds: 'weighted odds (3 : 2 : 1.4 : 0.6)', top3: 'top three only (3 : 2 : 1)', winner: 'winner takes all' }[mode];"],
    ["odds: '말 순위 가중치 3 : 2 : 1.4 : 0.6 으로 판돈을 나눕니다. 4등 이하에 걸어도 일부를 돌려받습니다.',",
     "odds: 'The pot is split by finishing position at 3 : 2 : 1.4 : 0.6, so backing a horse outside the top three still returns something.',"],
    ["top3: '상위 3두에 건 사람만 3 : 2 : 1 로 나눠 갖습니다. 4등 이하에 건 돈은 모두 잃습니다.',",
     "top3: 'Only backers of the first three share the pot, at 3 : 2 : 1. Anything on a horse below third is lost.',"],
    ["winner: '1등 말에 건 사람들이 판돈 전액을 베팅 비율대로 나눠 갖습니다.'",
     "winner: 'Everyone who backed the winner shares the entire pot in proportion to their stake.'"],
    ['<button data-unit="man" class="on" style="min-width:0; flex:1">만원</button>',
     '<button data-unit="man" class="on" style="min-width:0; flex:1">Thousands</button>'],
    ['<button data-unit="won" style="min-width:0; flex:1">원</button>',
     '<button data-unit="won" style="min-width:0; flex:1">Units</button>']
  ],

  strings: [
    ['각자 한 마리에 걸고, 말의 순위로 배당을 나눕니다',
     'Everyone backs a horse and the pot is split by where they finish'],
    ['이 말의 행운의 번호만 다시 뽑기', 'Redraw this horse\'s lucky number'],
    ['참가자는 1명 이상이어야 합니다', 'You need at least one participant'],
    ['모두 같은 금액으로 맞췄습니다', 'Everyone set to the same stake'],
    ['말이 2마리 이상이어야 합니다', 'You need at least two horses'],
    ['참가자는 20명까지입니다', 'Up to 20 participants'],
    ['행운의 번호를 새로 뽑았습니다', 'New lucky numbers drawn'],
    ['이 말에 건 사람 없음', 'nobody backed this horse'],
    ['총 판돈 (베팅 합계)', 'Total pot'],
    ['상위 3두 독식', 'Top three only'],
    ['1등 싹쓸이', 'Winner takes all'],
    ['결과 텍스트 복사', 'Copy the result'],
    ['행운의 번호 경마', 'Lucky Number Horse Race'],
    ['🏁 경기 시작', '🏁 Start the race'],
    ['🎲 번호 랜덤', '🎲 Random numbers'],
    ['💰 정산 방식', '💰 Payout'],
    ['🐎 경주마', '🐎 Horses'],
    ['👥 참가자', '👥 Participants'],
    ['경주마 이름', 'Horse name'],
    ['행운의 번호', 'Lucky number'],
    ['베팅할 말', 'Backing'],
    ['배당형', 'Weighted odds'],
    ['베팅 없음', 'no bets'],
    ['초기화', 'Reset'],
    ['시점', 'View'],
    ['균등', 'Even'],
    ['이름', 'Name'],
    ['금액', 'Stake'],
    ['닫기', 'Close'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ['font-weight:700">0원</span>', 'font-weight:700">0</span>'],
    ["' · ' + (rank + 1) + '등</span></span>'", "' · position ' + (rank + 1) + '</span></span>'"],
    ["x.odds.toFixed(2) + '배)</span>'", "x.odds.toFixed(2) + '×)</span>'"],
    ['복사되었습니다!', 'Copied'],
    ["'참가자 ' + (i + 1)", "'Player ' + (i + 1)"],
    ["('참가자' + (i + 1))", "('Player ' + (i + 1))"],
    ["'행운의 번호 ' + horses.map", "'Lucky numbers ' + horses.map"],
    ["' · 시작하면 시드가 생성됩니다'", "' · a seed is created when you start'"],
    ["'번호 ' + nums + ' · ' + stamp + ' · 시드 '", "'numbers ' + nums + ' · ' + stamp + ' · seed '"],
    ["'판돈 ' + wonOf(totalPot()) + ' · 말 ' + horses.length + '두 · 참가 ' + bettors.length + '명 · '",
     "'Pot ' + wonOf(totalPot()) + ' · ' + horses.length + ' horses · ' + bettors.length + ' players · '"],
    ["(rank + 1) + '위</span>'", "(rank + 1) + '</span>'"],
    ["'행운의 번호 #' + h.lucky + ' · ' + (rank + 1) + '등</span>'",
     "'lucky #' + h.lucky + ' · position ' + (rank + 1) + '</span>'"],
    ["(rank + 1) + '등 ' + h.name", "(rank + 1) + '. ' + h.name"],
    ["' — 베팅 없음'", "' — no bets'"],
    ["x.odds.toFixed(2) + '배)'", "x.odds.toFixed(2) + '×)'"],
    ["'±0원'", "'±0'"],
    ["unit === 'man' ? '만원' : '원'", "unit === 'man' ? 'k' : ''"]
  ],

  guide: {
    intro: {
      h: 'Adding a few seconds of suspense to a draw',
      p: [
        'Pull a name out of a hat and you get the result with nothing around it. Run it as a race and there are a few seconds of watching, which in a group is where the fun actually is.',
        'Each participant gets a horse. The finishing order is random, and the result can be copied out as text to share.'
      ]
    },
    uses: [
      { t: 'Deciding an order', d: 'Presentation order, or who goes first at anything.' },
      { t: 'Splitting a bill', d: 'Weighted odds, top three only, or winner takes all.' },
      { t: 'Running a group session', d: 'A short piece of theatre to lift the mood.' }
    ],
    steps: [
      'Name the horses, or draw random numbers for them.',
      'Add participants and which horse each is backing, with stakes.',
      'Choose a payout method and start the race.',
      'Copy the result to share it.'
    ],
    options: [
      { t: 'Weighted odds', d: 'Splits by finishing position at 3 : 2 : 1.4 : 0.6, so a poor finish still returns something.' },
      { t: 'Top three only', d: 'Only the first three positions pay out.' },
      { t: 'Winner takes all', d: 'Everything goes to whoever backed the winner.' },
      { t: 'Even', d: 'Sets every stake to the same amount in one click.' }
    ],
    faq: [
      { q: 'Is the race fixed', a: 'No, the finishing order is random. The order you enter the horses makes no difference.' },
      { q: 'Can I use this for actual gambling', a: 'It is built for settling an order or splitting a bill among friends. Please treat it as entertainment.' },
      { q: 'How many people can play', a: 'Up to 20 participants and 10 horses.' }
    ]
  }
};
