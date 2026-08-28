module.exports = {
  id: 'cagrcal',

  patches: [
    ["unitEl.value = '억원';", "unitEl.value = '$M';"],
    ['<input id="unit" class="fld" type="text" placeholder="억원" autocomplete="off">',
     '<input id="unit" class="fld" type="text" placeholder="$M" autocomplete="off">'],
    ["const m = { round: '반올림', floor: '버림', ceil: '올림' }[mode()];",
     "const m = { round: 'rounded', floor: 'rounded down', ceil: 'rounded up' }[mode()];"]
  ],

  strings: [
    ['두 시점의 값으로 연평균성장률을 구하고 연도별로 펼칩니다 · 저장되지 않음',
     'Work out compound annual growth from two points and project it year by year · nothing is stored'],
    ['CSV와 엑셀 파일에는 쉼표 없는 순수 숫자가 들어갑니다. 표 계산에 바로 쓸 수 있도록 한 것입니다.',
     'CSV and spreadsheet exports contain plain numbers without separators, so formulas work immediately.'],
    ['표시 기간이 너무 길어 200년으로 줄였습니다', 'The projection was capped at 200 years'],
    ['끝 연도가 시작 연도보다 뒤여야 합니다', 'The end year must come after the start year'],
    ['기준 기간 + 5년으로 되돌리기', 'Reset to the base period plus five years'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['기준 연도를 먼저 입력해 주세요', 'Enter the base years first'],
    ['연도를 숫자로 입력해 주세요', 'Enter the years as numbers'],
    ['값을 숫자로 입력해 주세요', 'Enter the values as numbers'],
    ['시작 값은 0보다 커야 합니다', 'The starting value must be greater than zero'],
    ['끝 값은 0보다 커야 합니다', 'The ending value must be greater than zero'],
    ['CAGR 연도별 추정 계산기', 'CAGR Projection Calculator'],
    ['연평균성장률 (CAGR)', 'Compound annual growth rate'],
    ['엑셀·워드용 표 복사', 'Copy table for Excel or Word'],
    ['표 서식 그대로 복사했습니다! 엑셀에 바로 붙여넣으세요',
     'Copied with table formatting. Paste it straight into a spreadsheet.'],
    ['탭 구분 텍스트로 복사했습니다 (엑셀에 붙이면 칸이 나뉩니다)',
     'Copied as tab separated text, so it splits into columns in a spreadsheet'],
    ['탭 구분 텍스트로 복사했습니다!', 'Copied as tab separated text'],
    ['마크다운 표로 복사했습니다!', 'Copied as a markdown table'],
    ['내보낼 표가 없습니다', 'There is no table to export'],
    ['CSV 다운로드', 'Download CSV'],
    ['엑셀 다운로드', 'Download spreadsheet'],
    ['마크다운 복사', 'Copy markdown'],
    ['TXT 복사', 'Copy text'],
    ['전년 대비 증감', 'Change on the year'],
    ['화면에 천 단위 쉼표 표시', 'Show thousands separators on screen'],
    ['기준 데이터', 'Base figures'],
    ['표시 기간', 'Projection range'],
    ['수치 처리', 'Number handling'],
    ['처리 방식', 'Rounding'],
    ['소수점 자릿수', 'Decimal places'],
    ['단위 (선택)', 'Unit (optional)'],
    ['시작 연도', 'Start year'],
    ['종료 연도', 'End year'],
    ['끝 연도', 'End year'],
    ['시작 값', 'Start value'],
    ['끝 값', 'End value'],
    ['추정 값', 'Projected value'],
    ['총 증가율', 'Total growth'],
    ['성장률(%)', 'Growth (%)'],
    ['성장률', 'Growth'],
    ['내보내기', 'Export'],
    ['반올림', 'Round'],
    ['버림', 'Round down'],
    ['올림', 'Round up'],
    ['0자리 (정수)', '0 (whole numbers)'],
    ['1자리', '1'],
    ['2자리', '2'],
    ['3자리', '3'],
    ['예시 값을 넣었습니다', 'Sample values loaded'],
    ['저장되었습니다!', 'Saved'],
    ['예시', 'Sample'],
    ['배수', 'Multiple'],
    ['기간 <b', 'Period <b'],
    ['<th>연도</th>', '<th>Year</th>'],
    ["'연도', unit ?", "'Year', unit ?"],
    ["n + '년'", "n + ' years'"],
    ["(ev / sv).toFixed(2) + '배'", "(ev / sv).toFixed(2) + '×'"],
    ["r.year + '년'", "r.year"],
    ["tag.textContent = '기준';", "tag.textContent = 'base';"],
    ["rows.length + '개 연도'", "rows.length + ' years'"],
    ["sy + '년 ' + disp(shape(sv)) + ' → ' + ey + '년 ' + disp(shape(ev))",
     "sy + ' ' + disp(shape(sv)) + ' → ' + ey + ' ' + disp(shape(ev))"],
    ["' 기준';", "'';"],
    ["syEl.value + '년 ' + svEl.value + ' → ' + eyEl.value + '년 ' + evEl.value",
     "syEl.value + ' ' + svEl.value + ' → ' + eyEl.value + ' ' + evEl.value"],
    ["'처리 : ' + m + ' · 소수점 ' + dpEl.value + '자리'",
     "'Numbers ' + m + ' to ' + dpEl.value + ' decimal places'"]
  ],

  guide: {
    intro: {
      h: 'Why CAGR is not the average you first think of',
      p: [
        'If revenue went from $100M to $200M over three years, that is 100% total growth. Dividing by three to get 33% a year is wrong: growing 33% annually from $100M gives $236M after three years, not $200M.',
        'Compound annual growth rate works backwards from the two endpoints and asks what steady annual rate would produce that result. For the example above it is roughly 26%. This is the figure used in market sizing and revenue projections, because it compounds the way money actually does.'
      ]
    },
    uses: [
      { t: 'Market sizing in a business plan', d: 'Writing "the market grows at X% annually to $Y by 2030". Two data points from a source report are enough to derive the rate between them.' },
      { t: 'Revenue projections', d: 'Three to five year forecasts for a grant application or an investor deck. Set a defensible rate and get the year by year table.' },
      { t: 'Checking someone else\'s claim', d: 'Testing whether a growth rate quoted in a pitch deck matches the underlying numbers.' },
      { t: 'Comparing unlike businesses', d: 'Putting two operations of different sizes on the same footing by comparing rates rather than absolute figures.' }
    ],
    steps: [
      'Enter the start year and value, then the end year and value under <strong>Base figures</strong>.',
      'The growth rate, total growth and multiple appear immediately.',
      'Extend the <strong>projection range</strong> to build a year by year table on that rate.',
      'Export as text, markdown, a table for Word, CSV or a spreadsheet file.'
    ],
    options: [
      { t: 'Rounding and decimal places', d: 'Round, round down or round up, to your chosen precision. One decimal place usually reads best in a written document.' },
      { t: 'Unit', d: 'Enter something like $M and it appears in the table headers and exports.' },
      { t: 'Thousands separators', d: 'Affects the on-screen display only. CSV and spreadsheet exports always contain plain numbers so formulas keep working.' }
    ],
    faq: [
      { q: 'Does it handle a decline', a: 'Yes. A fall produces a negative rate, which is the correct way to express shrinkage on an annual basis.' },
      { q: 'How is the period counted', a: 'From 2020 to 2025 is five years. It is the interval between the two points, not the number of years listed.' },
      { q: 'Can I put this straight into a business plan', a: 'Use it as a starting point. Past growth does not guarantee future growth, and the first question a reviewer asks is why the rate should hold. Have the reasoning ready alongside the table.' }
    ]
  }
};
