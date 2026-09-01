module.exports = {
  id: 'gov-fund-calc',

  patches: [
    /* 통화 표기는 원 유지 (한국 제도 전용 도구) · 영문 표기만 붙인다 */
    ["function won(v) { return Math.round(v).toLocaleString('ko-KR') + '원'; }",
     "function won(v) { return 'KRW ' + Math.round(v).toLocaleString('en-US'); }"],

    /* 단위 표기 */
    ["const UNIT = { '만원': 10000, '천원': 1000, '백원': 100, '십원': 10, '원': 1 };",
     "const UNIT = { '10,000 KRW': 10000, '1,000 KRW': 1000, '100 KRW': 100, '10 KRW': 10, '1 KRW': 1 };"],
    ['<option value="만원" selected>만원 단위</option>', '<option value="10,000 KRW" selected>10,000 KRW</option>'],
    ['<option value="천원">천원 단위</option>', '<option value="1,000 KRW">1,000 KRW</option>'],
    ['<option value="백원">백원 단위</option>', '<option value="100 KRW">100 KRW</option>'],
    ['<option value="십원">십원 단위</option>', '<option value="10 KRW">10 KRW</option>'],
    ['<option value="원">원 단위</option>', '<option value="1 KRW">1 KRW</option>'],

    /* 프로그램 유형 */
    ["{ id:'biz', nm:'사업화 계열',", "{ id:'biz', nm:'Commercialisation programmes',"],
    ["sub:'초기창업패키지 · 창업도약패키지 · 청년창업사관학교 · TIPS(비R&D)',",
     "sub:'Early Startup Package · Startup Leap Package · Youth Startup Academy · TIPS (non-R&D)',"],
    ["note:'정부 70% · 자부담 30% (총사업비 대비 현금 10% 이상, 현물 20% 이하)' },",
     "note:'70% government, 30% applicant (at least 10% cash and at most 20% in-kind, against total cost)' },"],
    ["{ id:'rnd', nm:'R&D 계열',", "{ id:'rnd', nm:'R&D programmes',"],
    ["sub:'디딤돌 R&D · TIPS(R&D) 등 중소기업 기술개발사업',",
     "sub:'Stepping Stone R&D · TIPS (R&D) and other SME technology development schemes',"],
    ["note:'정부 75% · 자부담 25% (자부담 중 현금 10% 이상)' },",
     "note:'75% government, 25% applicant (at least 10% of the applicant share in cash)' },"],
    ["{ id:'custom', nm:'직접 입력',", "{ id:'custom', nm:'Enter your own',"],
    ["sub:'공고문에 맞춰 비율을 직접 조절',", "sub:'Set the ratios to match your call document',"],
    ["note:'아래 슬라이더로 자유롭게 설정' }", "note:'Adjust freely with the sliders below' }"],

    ["const name = '사업비구성_' + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) + '.csv';",
     "const name = 'cost_share_' + d.getFullYear() + p2(d.getMonth() + 1) + p2(d.getDate()) + '.csv';"],

    /* 한국 전용임을 화면에도 명시 */
    ['<p class="mt-1 text-[12.5px]" style="color:var(--dim)">정부지원금·자부담 현금·현물을 역산해 예산안을 잡습니다</p>',
     '<p class="mt-1 text-[12.5px]" style="color:var(--dim)">Works back from the grant to the cash and in-kind contribution you need</p>\n      <p class="mt-2 text-[12px]" style="color:var(--dim); background:rgba(148,163,184,.12); border-radius:8px; padding:8px 11px; line-height:1.65">' +
     '<b>Korea-specific.</b> This tool follows the cost share rules used by Korean government startup and R&amp;D grant programmes. ' +
     'Figures are in Korean won and the preset ratios come from Korean call documents. It is unlikely to map onto grant schemes elsewhere.</p>']
  ],

  strings: [
    ['공고문이 「자부담 중 현금 30% 이상」처럼 쓰여 있으면 켜세요. 끄면 총사업비 대비입니다.',
     'Switch on when the call says something like "at least 30% of the applicant share in cash". Off means the ratio is against total project cost.'],
    ['단위가 클수록 숫자가 깔끔해지고, 작을수록 비율이 공고 기준에 더 가까워집니다',
     'A larger rounding unit gives tidier figures, a smaller one keeps the ratios closer to the published requirement'],
    ['정부지원금과 현금 비율의 합이 100%를 넘습니다. 비율을 조정해 주세요',
     'The grant and cash ratios add up to more than 100%. Adjust them.'],
    ['정부지원금 비율이 0%면 지원금 기준으로 계산할 수 없습니다',
     'With the grant ratio at 0% this mode cannot be calculated'],
    ['현금 비율이 0%면 보유 현금 기준으로 계산할 수 없습니다',
     'With the cash ratio at 0% this mode cannot be calculated'],
    ['현물 몫이 음수가 됩니다. 비율이나 최적화 단위를 조정해 주세요',
     'The in-kind share comes out negative. Adjust the ratios or the rounding unit.'],
    ['현물 몫이 0으로 계산됐습니다. 단위를 작게 잡거나 비율을 확인해 주세요',
     'The in-kind share came to zero. Try a smaller rounding unit or check the ratios.'],
    ['CSV에는 쉼표 없는 순수 숫자가 들어가 수식에 바로 쓸 수 있습니다',
     'The CSV contains plain numbers without separators so formulas work immediately'],
    ['공고문의 비율은 <b>「정부지원금 ○% 이내」, 「자부담 현금 ○% 이상」</b> 처럼',
     'Call documents write the ratios as <b>"grant no more than X%"</b> and <b>"applicant cash at least Y%"</b>, so'],
    ['한쪽은 한도이고 다른 쪽은 최소 기준입니다. 그래서 양쪽을 같은 방향으로 반올림하면',
     'one is a ceiling and the other a floor. Rounding both the same way pushes'],
    ['어느 한쪽이 기준을 벗어납니다.', 'one of them outside its limit.'],
    ['올림을 거치므로 실제 비율은 70.0%가 아니라 69.9%나 70.0% 부근으로 나옵니다.',
     'Because of the rounding, the actual ratio lands near 69.9% or 70.0% rather than exactly 70.0%.'],
    ['기준을 벗어나지 않으려면 이 방향이 맞기 때문에, 표의 비율은 소수점 첫째 자리까지만 보여줍니다.',
     'That is the correct direction for staying inside the limits, so the table shows one decimal place.'],
    ['단위를 <b>원</b>으로 좁힐수록 공고 비율에 더 가까워지고, <b>만원</b>으로 넓힐수록 금액이 깔끔해집니다.',
     'A unit of <b>1 KRW</b> tracks the published ratio most closely, while <b>10,000 KRW</b> gives rounder figures.'],
    ['총 사업비 = 정부지원금 ÷ 지원 비율 → <b>최적화 단위로 올림</b>',
     'Total project cost = grant ÷ grant ratio, <b>rounded up to the unit</b>'],
    ['정부지원금 = 총 사업비 × 지원 비율 → <b>최적화 단위로 내림</b> (한도 초과 방지)',
     'Grant = total cost × grant ratio, <b>rounded down to the unit</b> so the ceiling is not breached'],
    ['총 사업비 = 보유 현금 ÷ 현금 비율 → <b>최적화 단위로 내림</b> (현금 부족 방지)',
     'Total project cost = available cash ÷ cash ratio, <b>rounded down</b> so you are not short of cash'],
    ['자부담 현금 = 총 사업비 × 현금 비율 → <b>최적화 단위로 올림</b> (최소 기준 충족)',
     'Applicant cash = total cost × cash ratio, <b>rounded up</b> so the minimum is met'],
    ['자부담 현물 = 총 사업비 − 정부지원금 − 자부담 현금 (잔액)',
     'In-kind = total cost − grant − applicant cash (the remainder)'],
    ['자부담 합계 = 현금 + 현물', 'Applicant share = cash + in-kind'],
    ['비율이 딱 떨어지지 않는 이유 · 계산 방식', 'Why the ratios are not exact · how it is calculated'],
    ['현금·현물 비율을 자부담금 대비로 입력', 'Ratios are against the applicant share'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['자부담금 최적화 계산기', 'Korean Grant Cost Share Calculator'],
    ['사업계획서용 문장을 복사했습니다!', 'Copied as a sentence for your business plan'],
    ['탭 구분 표로 복사했습니다', 'Copied as a tab separated table'],
    ['표 서식 그대로 복사했습니다!', 'Copied with table formatting'],
    ['먼저 금액을 입력해 주세요', 'Enter an amount first'],
    ['금액을 입력해 주세요', 'Enter an amount'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ['사업계획서용 텍스트', 'Text for a business plan'],
    ['엑셀·한글용 표', 'Table for Excel or Word'],
    ['CSV 다운로드', 'Download CSV'],
    ['정부지원금 최대 기준', 'By maximum grant'],
    ['총 사업비 기준', 'By total project cost'],
    ['보유 현금 기준', 'By available cash'],
    ['동원 가능한 보유 현금', 'Cash you can commit'],
    ['희망 정부지원금', 'Grant you are applying for'],
    ['자부담 현물 (자동)', 'In-kind (calculated)'],
    ['자부담 현금 비율', 'Applicant cash ratio'],
    ['정부지원금 비율', 'Grant ratio'],
    ['자부담 합계', 'Applicant share'],
    ['자부담 현금', 'Applicant cash'],
    ['자부담 현물', 'In-kind'],
    ['정부지원금', 'Grant'],
    ['총 사업비', 'Total project cost'],
    ['필요 현금', 'Cash needed'],
    ['최적화 단위', 'Rounding unit'],
    ['지원금 기준', 'By grant'],
    ['사업비 기준', 'By cost'],
    ['현금 기준', 'By cash'],
    ['총사업비 − 정부지원금 − 현금', 'total − grant − cash'],
    ['현금 + 현물', 'cash + in-kind'],
    ['입력값 그대로', 'as entered'],
    ["'기준 ' + gTarget.toFixed(1) + '% 이내로 내림'", "'rounded down to stay within ' + gTarget.toFixed(1) + '%'"],
    ["'기준 ' + cTarget.toFixed(1) + '% 이상 되도록 올림'", "'rounded up to reach ' + cTarget.toFixed(1) + '%'"],
    ["' (총액 대비 '", "' (of total cost '"],
    ["r.unit + ' 단위로 최적화</span></td>'", "'rounded to ' + r.unit + '</span></td>'"],
    ["r.unit + ' 단위로 최적화</td>'", "'rounded to ' + r.unit + '</td>'"],
    ["'총 사업비: '", "'Total project cost: '"],
    ["' (정부지원금: '", "' (grant: '"],
    ["', 자부담 현금: '", "', applicant cash: '"],
    ["', 자부담 현물: '", "', in-kind: '"],
    ["['구분', '금액(원)', '비율(%)']", "['Item', 'Amount (KRW)', 'Share (%)']"],
    ["['구분,금액(원),비율(%)']", "['Item,Amount (KRW),Share (%)']"],
    ['<th>구분</th><th>금액</th><th>비율</th><th>비고</th>',
     '<th>Item</th><th>Amount</th><th>Share</th><th>Note</th>'],
    ['내보내기', 'Export'],
    ['저장되었습니다!', 'Saved'],
    ['다크', 'Dark'],
    ['라이트', 'Light']
  ],

  guide: {
    intro: {
      h: 'Korea-specific: how cost share works in Korean grants',
      p: [
        '<strong>This tool follows Korean government grant rules and is unlikely to apply elsewhere.</strong> Amounts are in Korean won, and the preset ratios come from Korean call documents. It is here for people working with the Korean startup and R&D funding system.',
        'A call saying "up to KRW 100 million, no more than 70% of total project cost" does not tell you directly what you have to put in. Total project cost has to be derived from the grant first. On top of that, the applicant share splits into cash and in-kind, and the minimum cash proportion differs by programme. In-kind covers things like founder salary time and equipment you already own, so it is not money you spend, but it still has to be evidenced.'
      ]
    },
    uses: [
      { t: 'Checking what you actually need', d: 'Reading a call and working out how much real cash has to be available.' },
      { t: 'Starting from the cash you have', d: 'When your available funds are fixed, work backwards to the total project cost and grant size that fit.' },
      { t: 'Writing the budget table', d: 'Export the result as a sentence for the narrative or as a table for the budget section.' },
      { t: 'Comparing programmes', d: 'Weighing schemes with different cost share requirements to see which is realistic.' }
    ],
    steps: [
      'Choose the programme type, or set the ratios yourself to match your call document.',
      'Enter the grant amount, the total project cost, or the cash you have available.',
      'Adjust the cash ratio and the in-kind figure follows automatically.',
      'Export as text for a business plan, a table, or CSV.'
    ],
    options: [
      { t: 'By grant, by total cost, by available cash', d: 'Three ways in. Starting from available cash is usually the realistic one when funds are fixed.' },
      { t: 'Rounding unit', d: 'From 1 KRW up to 10,000 KRW. Larger units give tidier numbers, smaller units track the published ratio more closely.' },
      { t: 'Ratios against the applicant share', d: 'Turn this on when the call expresses the cash minimum as a share of the applicant contribution rather than of total project cost. The wording matters and the two produce different figures.' }
    ],
    faq: [
      { q: 'Does this apply outside Korea', a: 'No. The ratios, the cash and in-kind split and the terminology all come from the Korean system. Grant schemes elsewhere use different structures, so use this only for Korean programmes.' },
      { q: 'What counts as in-kind', a: 'Typically founder and existing staff salary time, and sometimes owned equipment or office space. What is eligible varies by programme, so check the specific call and its administrative guidelines.' },
      { q: 'Why are the ratios not exact', a: 'One requirement is a ceiling and the other a floor, so the calculation rounds them in opposite directions to keep both satisfied. That is why 70% may show as 69.9%.' },
      { q: 'Can I submit these figures as they are', a: 'Treat them as a working estimate. Each programme has its own calculation method and eligible cost categories, so confirm the final numbers against the managing agency\'s guidance.' }
    ]
  }
};
