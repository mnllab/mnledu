module.exports = {
  id: 'timezone-dial',

  patches: [
    /* 도시 이름을 영문으로 · 순서를 미국·유럽 우선으로 */
    ["{ id: 'Asia/Seoul',          ko: '서울',        flag: '🇰🇷' },", "{ id: 'America/New_York',    ko: 'New York',     flag: '🇺🇸' },"],
    ["{ id: 'Asia/Tokyo',          ko: '도쿄',        flag: '🇯🇵' },", "{ id: 'America/Chicago',     ko: 'Chicago',      flag: '🇺🇸' },"],
    ["{ id: 'Asia/Shanghai',       ko: '베이징·상하이', flag: '🇨🇳' },", "{ id: 'America/Denver',      ko: 'Denver',       flag: '🇺🇸' },"],
    ["{ id: 'Asia/Hong_Kong',      ko: '홍콩',        flag: '🇭🇰' },", "{ id: 'America/Los_Angeles', ko: 'Los Angeles',  flag: '🇺🇸' },"],
    ["{ id: 'Asia/Singapore',      ko: '싱가포르',    flag: '🇸🇬' },", "{ id: 'Europe/London',       ko: 'London',       flag: '🇬🇧' },"],
    ["{ id: 'Asia/Bangkok',        ko: '방콕',        flag: '🇹🇭' },", "{ id: 'Europe/Paris',        ko: 'Paris',        flag: '🇫🇷' },"],
    ["{ id: 'Asia/Kolkata',        ko: '뉴델리',      flag: '🇮🇳' },", "{ id: 'Europe/Berlin',       ko: 'Berlin',       flag: '🇩🇪' },"],
    ["{ id: 'Asia/Dubai',          ko: '두바이',      flag: '🇦🇪' },", "{ id: 'Europe/Moscow',       ko: 'Moscow',       flag: '🇷🇺' },"],
    ["{ id: 'Europe/Moscow',       ko: '모스크바',    flag: '🇷🇺' },", "{ id: 'Asia/Dubai',          ko: 'Dubai',        flag: '🇦🇪' },"],
    ["{ id: 'Europe/Berlin',       ko: '베를린',      flag: '🇩🇪' },", "{ id: 'Asia/Kolkata',        ko: 'New Delhi',    flag: '🇮🇳' },"],
    ["{ id: 'Europe/Paris',        ko: '파리',        flag: '🇫🇷' },", "{ id: 'Asia/Singapore',      ko: 'Singapore',    flag: '🇸🇬' },"],
    ["{ id: 'Europe/London',       ko: '런던',        flag: '🇬🇧' },", "{ id: 'Asia/Hong_Kong',      ko: 'Hong Kong',    flag: '🇭🇰' },"],
    ["{ id: 'America/Sao_Paulo',   ko: '상파울루',    flag: '🇧🇷' },", "{ id: 'Asia/Shanghai',       ko: 'Shanghai',     flag: '🇨🇳' },"],
    ["{ id: 'America/New_York',    ko: '뉴욕',        flag: '🇺🇸' },", "{ id: 'Asia/Tokyo',          ko: 'Tokyo',        flag: '🇯🇵' },"],
    ["{ id: 'America/Chicago',     ko: '시카고',      flag: '🇺🇸' },", "{ id: 'Asia/Seoul',          ko: 'Seoul',        flag: '🇰🇷' },"],
    ["{ id: 'America/Denver',      ko: '덴버',        flag: '🇺🇸' },", "{ id: 'Asia/Bangkok',        ko: 'Bangkok',      flag: '🇹🇭' },"],
    ["{ id: 'America/Los_Angeles', ko: '로스앤젤레스', flag: '🇺🇸' },", "{ id: 'America/Sao_Paulo',   ko: 'São Paulo',    flag: '🇧🇷' },"],
    ["{ id: 'Pacific/Honolulu',    ko: '호놀룰루',    flag: '🇺🇸' },", "{ id: 'Pacific/Honolulu',    ko: 'Honolulu',     flag: '🇺🇸' },"],
    ["{ id: 'Australia/Sydney',    ko: '시드니',      flag: '🇦🇺' },", "{ id: 'Australia/Sydney',    ko: 'Sydney',       flag: '🇦🇺' },"],
    ["{ id: 'Pacific/Auckland',    ko: '오클랜드',    flag: '🇳🇿' }", "{ id: 'Pacific/Auckland',    ko: 'Auckland',     flag: '🇳🇿' }"],

    ["const DOW = ['일', '월', '화', '수', '목', '금', '토'];",
     "const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];"]
  ],

  strings: [
    ['시간대 라이브러리를 불러오지 못했습니다. 인터넷 연결을 확인한 뒤 새로고침해 주세요.',
     'The time zone library could not be loaded. Check your connection and reload.'],
    ['도시는 12개까지 넣을 수 있습니다', 'You can add up to 12 cities'],
    ['시간대 기능을 사용할 수 없습니다.', 'Time zone features are unavailable.'],
    ['이미 추가된 도시입니다', 'That city is already on the list'],
    ["' 을(를) 뺐습니다'", "' removed'"],
    ["' 을(를) 넣었습니다'", "' added'"],
    ['지금 시각으로 맞췄습니다', 'Set to the current time'],
    ["'지금 이 시각'", "'right now'"],
    ["h + '시간' + (m ? ' ' + m + '분' : '')", "h + 'h' + (m ? ' ' + m + 'm' : '')"],
    ["' 다음날'", "' next day'"],
    ["' 전날'", "' previous day'"],
    ["'시차 없음'", "'same time'"],
    ["+ '시간';", "+ 'h';"],
    ['슬라이더를 밀면 모든 도시의 시계가 함께 움직입니다',
     'Move the slider and every clock moves together'],
    ['도시를 추가하면 여기에 시계가 나열됩니다', 'Add a city and its clock appears here'],
    ['글로벌 시차 다이얼', 'Global Time Zone Dial'],
    ['지금 시각으로', 'Jump to now'],
    ['기준 시각', 'Reference time'],
    ['−24시간', '−24h'],
    ['+24시간', '+24h'],
    ['도시 추가', 'Add a city'],
    ['기준 · ', 'Base · '],
    ['지금</span>', 'now</span>'],
    ['삭제', 'Remove']
  ],

  guide: {
    intro: {
      h: 'Why time zone arithmetic keeps catching people out',
      p: [
        'Learning that New York is thirteen hours behind Seoul works until summer, when it becomes fourteen. Daylight saving shifts the gap, the start dates differ by country, and between March and November the arithmetic quietly stops matching.',
        'This tool sidesteps the calculation. Put the cities side by side and drag the dial: every clock moves together, so you read the answer instead of working it out.'
      ]
    },
    uses: [
      { t: 'Scheduling across time zones', d: 'Checking what time it is for the other side, and whether it falls inside their working day.' },
      { t: 'Joining an overseas event', d: 'Converting a webinar or conference start time into your local time.' },
      { t: 'Planning travel', d: 'Seeing departure and arrival times together while you build an itinerary.' },
      { t: 'Calling family abroad', d: 'A quick look before you dial.' }
    ],
    steps: [
      'Use <strong>Add a city</strong> to bring in the places you care about.',
      'Set a reference time, or press <strong>Jump to now</strong>.',
      'Drag the dial and every clock moves with it.'
    ],
    options: [
      { t: 'Reference time', d: 'Which city the dial is anchored to.' },
      { t: '±24 hours', d: 'Move forwards or backwards through the day to find a slot that is reasonable for everyone.' }
    ],
    faq: [
      { q: 'Is daylight saving handled', a: 'Each city follows its own time zone rules, including daylight saving. Rules do change occasionally, so confirm anything critical with the other party.' },
      { q: 'How should I write a time in an invitation', a: 'Give both sides, for example "3pm New York (8pm London)". Time zone abbreviations alone are ambiguous once daylight saving is in play.' },
      { q: 'Are my chosen cities remembered', a: 'They persist in your browser for the session. Nothing is sent to a server.' }
    ]
  }
};
