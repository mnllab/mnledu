module.exports = {
  id: 'date-calc',

  patches: [
    ["const DOW = ['일', '월', '화', '수', '목', '금', '토'];",
     "const DOW = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];"],
    ["function label(d) { return d.format('YYYY년 M월 D일') + ' (' + DOW[d.day()] + ')'; }",
     "function label(d) { return d.format('D MMMM YYYY') + ' (' + DOW[d.day()] + ')'; }"],

    /* 한국식 나이 두 종류는 설명을 붙여 유지 */
    ['<div class="stat"><div class="k">세는나이</div>', '<div class="stat"><div class="k">Korean age (KR)</div>'],
    ['<div class="stat"><div class="k">연나이</div>', '<div class="stat"><div class="k">Year age (KR)</div>'],
    ['<label class="opt"><input type="checkbox" id="dInc" checked>시작일 산입 (한국식 D-Day)</label>',
     '<label class="opt"><input type="checkbox" id="dInc" checked>Count the start day (Korean D-Day style)</label>']
  ],

  strings: [
    ["'일</div></div>'", "'</div></div>'"],
    ["'주</div></div>'", "'</div></div>'"],
    ["'세</div></div>'", "'</div></div>'"],
    ['>만 \' + years + \'세</p>', '>\' + years + \'</p>'],
    ['근속·경과 ', 'Service or elapsed '],
    ["years + '년 ' + months + '개월 ' + days + '일)'",
     "years + 'y ' + months + 'm ' + days + 'd)'"],
    ["years + '년 ' + months + '개월 ' + days + '일</p>'",
     "years + 'y ' + months + 'm ' + days + 'd</p>'"],
    ['만나이는 생일이 지났는지까지 따져 계산합니다. 근속은 같은 기준으로 년·월·일을 나눠 보여줍니다.',
     'Age accounts for whether the birthday has passed this year. Length of service is broken down the same way into years, months and days.'],
    ['기준일 포함(초일 산입)', 'Include the start day'],
    ['주말 제외하고 영업일만', 'Business days only, excluding weekends'],
    ['생년월일 또는 입사일', 'Date of birth or start date'],
    ['기준일이 시작일보다 앞섭니다', 'The reference date falls before the start date'],
    ['기준일과 일수를 입력해 주세요', 'Enter a date and a number of days'],
    ['두 날짜를 모두 입력해 주세요', 'Enter both dates'],
    ['날짜를 입력해 주세요', 'Enter a date'],
    ['다음 생일·기념일까지', 'Until the next anniversary'],
    ['오늘 날짜로 맞췄습니다', 'Set to today'],
    ['오늘로 되돌리기', 'Back to today'],
    ['복사할 결과가 없습니다', 'Nothing to copy'],
    ['만능 날짜 계산기', 'Date &amp; Age Calculator'],
    ['날짜 + 며칠', 'Add days'],
    ['두 날짜 차이', 'Between dates'],
    ['나이 · 연차', 'Age &amp; service'],
    ['일수 (음수면 이전)', 'Days (negative goes backwards)'],
    ['실제 경과 일수', 'Days elapsed'],
    ['앞뒤를 바꿔 계산', 'dates swapped'],
    ['결과 복사', 'Copy result'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ['복사되었습니다!', 'Copied'],
    ['기준일', 'Reference date'],
    ['시작일', 'Start date'],
    ['종료일', 'End date'],
    ['총 일수', 'Total days'],
    ['주 단위', 'Weeks'],
    ["' · 영업일 기준'", "' · business days'"],
    ["' · 초일 산입'", "' · start day counted'"],
    ["' 로부터 '", "' plus '"],
    ["raw + '일 뒤'", "raw + ' days'"],
    ["Math.abs(raw) + '일 전'", "Math.abs(raw) + ' days earlier'"],
    ["' 기준 ' + raw + '일 → '", "' plus ' + raw + ' days → '"],
    ["n(Math.abs(gap)) + '일</div>'", "n(Math.abs(gap)) + '</div>'"],
    ["(Math.abs(gap) / 7).toFixed(1) + '주</div>'", "(Math.abs(gap) / 7).toFixed(1) + '</div>'"],
    ["n(days) + '일</p>'", "n(days) + ' days</p>'"],
    ["years + '년 ' : ''", "years + 'y ' : ''"],
    ["months + '개월 ' : ''", "months + 'm ' : ''"],
    ["rest + '일' + '</p>'", "rest + 'd' + '</p>'"],
    ["rest + '일)'", "rest + 'd)'"],
    ["days + '일 ('", "days + ' days ('"],
    ["'만 ' + years + '세</p>'", "years + '</p>'"],
    ["'근속·경과 '", "'Service or elapsed '"],
    ["years + '년 ' + months + '개월 ' + days + '일</p>'",
     "years + 'y ' + months + 'm ' + days + 'd</p>'"],
    ["n(totalDays) + '일</div>'", "n(totalDays) + '</div>'"],
    ["toBirthday === 0 ? '오늘' : toBirthday + '일'", "toBirthday === 0 ? 'today' : toBirthday + ' days'"],
    ["korAge + '세</div>'", "korAge + '</div>'"],
    ["yearAge + '세</div>'", "yearAge + '</div>'"],
    ["' : 만 ' + years + '세 ('", "' : age ' + years + ' ('"],
    ["' 기준 · '", "' · as at '"],
    ["' 시점</p>'", "'</p>'"],
    ["<div class=\"k\">개월</div>", "<div class=\"k\">Months</div>"],
    ["<div class=\"k\">주</div>", "<div class=\"k\">Weeks</div>"],
    ["<div class=\"k\">시간</div>", "<div class=\"k\">Hours</div>"],
    ['+7일', '+7 days'],
    ['+30일', '+30 days'],
    ['+100일', '+100 days'],
    ['+365일', '+365 days'],
    ['-1일', '-1 day'],
    ['더하고 빼고 세는 날짜 계산을 한곳에서', 'Adding, subtracting and counting dates in one place']
  ],

  guide: {
    intro: {
      h: 'Where date arithmetic loses a day',
      p: [
        'A condition reading "within 30 days of the application date" leaves a real question: does the application date count as day one, or does counting start the next day? Contracts and legislation distinguish between the two, and the deadline shifts by a day depending on which applies.',
        'Age has the same problem in reverse. There are several conventions, and different documents ask for different ones. This tool lets you pick the basis rather than assuming one.'
      ]
    },
    uses: [
      { t: 'Working out a deadline', d: 'Turning "within 14 days of the notice" into an actual date.' },
      { t: 'Contract periods', d: 'Counting the days between a start and end date, with the option to include or exclude the first day.' },
      { t: 'Length of service', d: 'Years, months and days from a start date to a reference date.' },
      { t: 'Age eligibility', d: 'Checking a condition like "under 40". Several age conventions are shown side by side.' }
    ],
    steps: [
      'Pick a mode: add days, count between dates, or age and service.',
      'Enter the dates.',
      'Read the result and use <strong>Copy result</strong>.'
    ],
    options: [
      { t: 'Include the start day', d: 'Whether the first day counts. Legal periods often exclude it, but call documents vary, so follow the wording in front of you.' },
      { t: 'Business days only', d: 'Counts weekdays and skips weekends. Public holidays are not included, since they differ by country.' },
      { t: 'Age conventions', d: 'International age is shown alongside two Korean conventions, marked KR: <strong>Korean age</strong>, which starts at one and increments at new year, and <strong>year age</strong>, which is simply the current year minus the birth year.' }
    ],
    faq: [
      { q: 'Should I include the start day or not', a: 'Follow the wording of the contract or notice. "Within 30 days of" usually starts counting the following day, but exceptions are common. Where an explicit deadline date is given, that takes precedence.' },
      { q: 'Are public holidays taken into account', a: 'No. Business day counting excludes weekends only, because holiday calendars differ by country. Check separately if the deadline depends on them.' },
      { q: 'What are the Korean age conventions', a: 'Korea historically used two systems alongside international age. Korean age starts at one at birth and increases every new year; year age is the current year minus the birth year. They are included because forms in Korea sometimes still ask for them.' }
    ]
  }
};
