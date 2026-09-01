module.exports = {
  id: 'percent-calc',

  /* ── 부가세를 고정 10%에서 세율 변수로 ───────────────── */
  patches: [

    /* 1) 상태 변수에 세율 추가 */
    ["let tab = 'net', vatOn = true, coupType = 'won', taxType = 'general';",
     "let tab = 'net', vatOn = true, coupType = 'won', taxType = 'general';\n  // 지역마다 부가세율이 다르므로 값으로 다룬다. 0.10 = 10%\n  let vatRate = 0;\n  function vatK() { return vatRate / (1 + vatRate); }"],

    /* 2) 판매가 탭 : 2지선다 → 국가 프리셋 + 직접 입력 */
    [`      <div class="field">
        <label class="lab">부가세 반영</label>
        <div class="seg" id="n_vatSeg">
          <button data-vat="1" class="on">일반과세 (10%)</button>
          <button data-vat="0">면세·간이 제외</button>
        </div>
      </div>`,
     `      <div class="field">
        <label class="lab" for="n_vatSel">Sales tax / VAT</label>
        <select class="fld" id="n_vatSel">
          <option value="0" selected>United States — no VAT, tax added at checkout</option>
          <option value="5">Canada — GST 5%</option>
          <option value="9">Singapore — GST 9%</option>
          <option value="10">Korea — VAT 10%</option>
          <option value="10">Japan — consumption tax 10%</option>
          <option value="10">Australia — GST 10%</option>
          <option value="19">Germany — VAT 19%</option>
          <option value="20">United Kingdom — VAT 20%</option>
          <option value="20">France — VAT 20%</option>
          <option value="22">Italy — VAT 22%</option>
          <option value="custom">Enter a rate</option>
        </select>
        <div class="inWrap" id="n_vatCustomWrap" style="display:none;margin-top:8px">
          <input class="fld" id="n_vatCustom" inputmode="decimal" value="10"><span class="unit">%</span>
        </div>
        <p class="sub2" style="margin-top:6px">US sellers usually add sales tax at checkout rather than building it into the price, so 0% is the normal setting there.</p>
      </div>`],

    /* 3) 판매가 계산식 */
    ["    const k = vatOn ? 1 / 11 : 0;              // 부가세 = (판매가 − 원가) ÷ 11",
     "    const k = vatK();              // tax share of the price, rate / (1 + rate)"],
    ["vat = vatOn ? (P - cost) / 11 : 0;",
     "vat = (P - cost) * vatK();"],

    /* 4) 세금 분리 탭 : 한국 과세 유형 → 세율 기반 */
    [`      <div class="field">
        <label class="lab">과세 유형</label>
        <div class="seg" id="t_typeSeg">
          <button data-type="general" class="on">일반과세자</button>
          <button data-type="simple">간이과세자</button>
        </div>
      </div>`,
     `      <div class="field">
        <label class="lab" for="t_vat">Sales tax / VAT rate</label>
        <div class="inWrap"><input class="fld" id="t_vat" inputmode="decimal" value="0"><span class="unit">%</span></div>
        <p class="sub2" style="margin-top:6px">Set 0% if you collect sales tax separately at checkout.</p>
      </div>`],

    ["    // 일반과세자는 매출의 1/11이 매출세액, 간이과세자는 업종 부가율을 반영해 약 2% 수준\n    const vat = taxType === 'general' ? income / 11 : income * 0.02;",
     "    // Tax already inside the gross amount : gross × rate / (1 + rate)\n    const tr = (parseFloat(($('t_vat') || {}).value) || 0) / 100;\n    const vat = income * (tr / (1 + tr));"],

    ["kv('부가세 (' + (taxType === 'general' ? '일반 · 매출÷11' : '간이 · 약 2%') + ')', '−' + won(vat)) +",
     "kv('Sales tax / VAT (' + (tr * 100).toFixed(tr * 100 % 1 ? 1 : 0) + '%)', '−' + won(vat)) +"],
    ["['부가세 (' + (taxType === 'general' ? '일반 · 매출÷11' : '간이 · 약 2%') + ')', '−' + won(vat)],",
     "['Sales tax / VAT (' + (tr * 100).toFixed(tr * 100 % 1 ? 1 : 0) + '%)', '−' + won(vat)],"],
    ["'오늘 입금 ' + won(income) + ' (' + (taxType === 'general' ? '일반과세' : '간이과세') + ')\\n' +",
     "'Received today ' + won(income) + ' (tax ' + (tr * 100) + '%)\\n' +"],

    /* 4-b) 통화 표기 : 원 → 달러 */
    ["function won(v) { return Math.round(v).toLocaleString('ko-KR') + '원'; }",
     "function won(v) { return '$' + Math.round(v).toLocaleString('en-US'); }"],

    /* 4-c) 끝자리 제안 : 900원 마감 → 달러 관행(.99, 5, 10 단위) */
    ["    // 900원 마감 : 바로 위 900원 자리를 찾는다\n    const up900 = function (v) {\n      const b = Math.floor(v / 1000) * 1000 + 900;\n      return b >= v ? b : b + 1000;\n    };\n    const cands = [\n      { nm: '최소 판매가', p: Math.ceil(min), note: '목표 마진 딱 맞춤' },\n      { nm: '900원 올림', p: up900(min), note: '가장 무난한 마케팅가' },\n      { nm: '900원 내림', p: up900(min) - 1000, note: '싸 보이지만 마진 감소' },\n      { nm: '500원 올림', p: Math.ceil(min / 500) * 500, note: '깔끔한 끝자리' },\n      { nm: '1,000원 올림', p: Math.ceil(min / 1000) * 1000, note: '가장 단순' }\n    ];",
     "    // Charm pricing : the next price ending in 9\n    const up9 = function (v) {\n      const b = Math.floor(v / 10) * 10 + 9;\n      return b >= v ? b : b + 10;\n    };\n    const cands = [\n      { nm: 'Exact minimum', p: Math.ceil(min), note: 'Meets the target margin exactly' },\n      { nm: 'Ends in 9', p: up9(min), note: 'The usual charm price' },\n      { nm: 'One below', p: up9(min) - 10, note: 'Looks cheaper, costs margin' },\n      { nm: 'Round up to 5', p: Math.ceil(min / 5) * 5, note: 'Clean ending' },\n      { nm: 'Round up to 10', p: Math.ceil(min / 10) * 10, note: 'Simplest' }\n    ];"],

    ["hot: c.nm === '900원 올림' };", "hot: c.nm === 'Ends in 9' };"],

    /* 4-d) 통화 단위 표기 */
    ["<span class=\"unit\">원</span>", "<span class=\"unit\">$</span>"],
    ["<span class=\"unit\">개</span>", "<span class=\"unit\">pcs</span>"],
    ["<span class=\"unit\" id=\"s_coupUnit\">원</span>", "<span class=\"unit\" id=\"s_coupUnit\">$</span>"],
    ["$('s_coupUnit').textContent = coupType === 'won' ? '원' : '%';",
     "$('s_coupUnit').textContent = coupType === 'won' ? '$' : '%';"],
    ["<button data-coup=\"won\" class=\"on\">원 단위</button>", "<button data-coup=\"won\" class=\"on\">Amount</button>"],
    ["<button data-coup=\"pct\">% 단위</button>", "<button data-coup=\"pct\">Percent</button>"],

    /* 5) 이벤트 : 세그먼트 → 셀렉트 */
    [`  document.querySelectorAll('#n_vatSeg button').forEach(function (b) {
    b.addEventListener('click', function () {
      vatOn = b.dataset.vat === '1';
      document.querySelectorAll('#n_vatSeg button').forEach(function (x) { x.classList.toggle('on', x === b); });
      render();
    });
  });`,
     `  (function () {
    const sel = $('n_vatSel'), wrap = $('n_vatCustomWrap'), cust = $('n_vatCustom');
    function apply() {
      if (sel.value === 'custom') {
        wrap.style.display = '';
        vatRate = (parseFloat(cust.value) || 0) / 100;
      } else {
        wrap.style.display = 'none';
        vatRate = (parseFloat(sel.value) || 0) / 100;
      }
      vatOn = vatRate > 0;
      render();
    }
    sel.addEventListener('change', apply);
    cust.addEventListener('input', apply);
    apply();
  })();`],

    [`  document.querySelectorAll('#t_typeSeg button').forEach(function (b) {
    b.addEventListener('click', function () {
      taxType = b.dataset.type;
      document.querySelectorAll('#t_typeSeg button').forEach(function (x) { x.classList.toggle('on', x === b); });
      render();
    });
  });`,
     `  (function () {
    const t = $('t_vat');
    if (t) t.addEventListener('input', render);
  })();`]
  ],

  /* ── 화면 문구 ──────────────────────────────────────── */
  strings: [
    ['💰 스마트 프라이싱 <span style="color:var(--dim); font-weight:500">&amp; 쇼핑 정산 엔진</span>',
     '💰 Smart Pricing <span style="color:var(--dim); font-weight:500">&amp; Settlement Engine</span>'],
    ['판매가 역산부터 할인 체감가, 가격 제안, 세금 분리까지 한 번에',
     'From reverse-calculating a price to discounts, offers and tax set-aside'],
    ['비율·증감률·할인가·마진율을 빈칸만 채우면 계산합니다. 공식을 외울 필요가 없습니다.',
     'Fill in the blanks for percentages, changes, discounts and margins. No formulas to remember.'],
    ['정가 → 기본할인 → 쿠폰 → 카드할인 → 포인트 순으로 계산합니다',
     'Applied in order: list price, base discount, coupon, card discount, then points'],
    ['목표 마진을 채우는 최소가를 구한 뒤 끝자리를 다듬어 제안합니다',
     'Finds the lowest price that meets your margin, then rounds it to a tidy figure'],
    ['받고 싶은 순수익을 넣으면 등록할 판매가를 거꾸로 계산합니다',
     'Enter the profit you want and it works back to the price to list'],
    ['오늘 들어온 돈에서 미리 떼어둘 금액을 알려줍니다',
     "Shows how much of today's takings belongs to the tax authority"],
    ['수수료와 광고비 합이 너무 커서 계산할 수 없습니다',
     'Fees and advertising add up to more than the price can carry'],
    ['🎯 내 통장 순수익 역산기', '🎯 Reverse from take-home profit'],
    ['원하는 내 통장 순수익', 'Profit you want to keep'],
    ['🛒 중복 할인 체감 단가', '🛒 Stacked discount, real unit price'],
    ['🛡️ 세금 방어 통장 분리기', '🛡️ Tax set-aside splitter'],
    ['🏷️ 목표 마진 900원 마감 제안', '🏷️ Rounded price that meets your margin'],
    ['부가세 (매출−매입)÷11', 'Sales tax on the margin'],
    ['오늘 통장에 온 돈 중 <b>', 'Of what arrived today, <b>'],
    ['</b> 은 건드리지 말고<br>세금 통장으로 바로 이체하세요.',
     '</b> is not yours to spend.<br>Move it to a separate tax account.'],
    ['이미지 생성에 실패했습니다', 'The image could not be created'],
    ['이미지 생성 중 문제가 발생했습니다', 'Something went wrong while making the image'],
    ['이미지 기능을 불러오지 못했습니다', 'The image feature could not be loaded'],
    ['이미지가 저장되었습니다!', 'Image saved'],
    ['이미지 만드는 중…', 'Creating image…'],
    ['공유 시트를 열었습니다', 'Share sheet opened'],
    ['먼저 값을 입력해 주세요', 'Enter some values first'],
    ['계산 결과가 없습니다', 'Nothing to copy yet'],
    ['복사되었습니다!', 'Copied'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ['마진율은 100% 미만이어야 합니다', 'Margin must be below 100%'],
    ['두 값의 합을 낮춰 주세요', 'Lower one of the two percentages'],
    ['계산기 · 실제와 차이가 있을 수 있음', 'Estimate · actual figures may differ'],
    ['목표 마진율 (판매가 대비)', 'Target margin (share of price)'],
    ['광고비 (매출 대비)', 'Advertising (share of revenue)'],
    ['배송비 (내가 부담)', 'Shipping you absorb'],
    ['오늘 총 입금 (매출)', 'Total received today'],
    ['등록해야 할 최종 판매가', 'Price to list'],
    ['내 통장에 남는 돈', 'What lands in your account'],
    ['종합소득세 적립률', 'Income tax set aside'],
    ['종합소득세 적립', 'Income tax reserve'],
    ['카드 청구할인', 'Card statement discount'],
    ['포인트 적립률', 'Points earned'],
    ['포인트 적립', 'Points earned'],
    ['플랫폼 수수료율', 'Platform fee'],
    ['플랫폼 수수료', 'Platform fee'],
    ['장바구니 쿠폰', 'Cart coupon'],
    ['제품 사입 원가', 'Unit cost'],
    ['세금 통장으로', 'To the tax account'],
    ['쓸 수 있는 돈', 'Free to spend'],
    ['실제 결제 금액', 'Amount actually charged'],
    ['🎯 판매가 역산', '🎯 Reverse pricing'],
    ['🛒 할인 계산', '🛒 Discount'],
    ['🛡️ 세금 방어', '🛡️ Tax set-aside'],
    ['할인 계산', 'Discount'],
    ['가격 제안', 'Price offer'],
    ['기본 할인율', 'Base discount'],
    ['기본 할인', 'Base discount'],
    ['총 할인율', 'Total discount'],
    ['순수익 역산', 'Reverse from profit'],
    ['세금 분리', 'Tax split'],
    ['목표 마진 딱 맞춤', 'Exactly on target'],
    ['가장 무난한 마케팅가', 'The safe marketing price'],
    ['싸 보이지만 마진 감소', 'Looks cheaper, costs margin'],
    ['깔끔한 끝자리', 'Clean ending'],
    ['가장 단순', 'Simplest'],
    ['최소가', 'Minimum'],
    ['900 올림', 'Round up to 900'],
    ['900 내림', 'Round down to 900'],
    ['500 올림', 'Round up to 500'],
    ['1,000 올림', 'Round up to 1,000'],
    ['정가 합계', 'List price total'],
    ['정가 (1개)', 'List price (each)'],
    ['포인트 차감 후', 'After points'],
    ["' + qty + '개)", "' + qty + ' pcs)"],
    ['스마트 프라이싱 &amp; 쇼핑 정산 엔진', 'Smart Pricing &amp; Settlement Engine'],
    ['최소 판매가', 'Minimum price'],
    ['수수료', 'Fee'],
    ['이익', 'profit'],
    ['마진', 'margin'],
    ['정가', 'List price'],
    ['실제 결제', 'Charged'],
    ['텍스트 복사', 'Copy as text'],
    ['📸 이미지 저장', '📸 Save image'],
    ['프라이싱 엔진', 'Pricing Engine'],
    ['목표 마진', 'Target margin'],
    ['순마진율', 'Net margin'],
    ['개당 이익', 'Profit each'],
    ['전체 입금', 'Total in'],
    ['내 통장', 'Take-home'],
    ['실수령', 'You keep'],
    ['소득세', 'Income tax'],
    ['부가세', 'Sales tax'],
    ['배송비', 'Shipping'],
    ['광고비', 'Advertising'],
    ['수량', 'Quantity'],
    ['사입 원가', 'Unit cost'],
    ['판매가', 'Price'],
    ['원가', 'Cost'],
    ['광고', 'Ads'],
    ['배송', 'Shipping'],
    ['체감', 'Effective'],
    ['기준', ''],
    ['1개당', 'each'],
    ['1당', 'each'],
    ['중 ', ' of '],
    ['를 떼어둔 금액', ' set aside']
  ],

  _unused: [
    ['수수료와 광고비 합이 너무 커서 계산할 수 없습니다',
     'Fees and advertising add up to more than the price can carry'],
    ['두 값의 합을 낮춰 주세요', 'Lower one of the two percentages'],
    ['등록해야 할 최종 판매가', 'Price to list'],
    ['내 통장에 남는 돈', 'What lands in your account'],
    ['목표 마진율 (판매가 대비)', 'Target margin (share of price)'],
    ['광고비 (매출 대비)', 'Advertising (share of revenue)'],
    ['배송비 (내가 부담)', 'Shipping you absorb'],
    ['오늘 총 입금 (매출)', 'Total received today'],
    ['종합소득세 적립률', 'Income tax set aside'],
    ['세금 통장으로', 'Move to the tax account'],
    ['쓸 수 있는 돈', 'Free to spend'],
    ['실제 결제 금액', 'Amount actually charged'],
    ['가격 제안', 'Suggested price'],
    ['기본 할인율', 'Base discount'],
    ['순수익 역산', 'Net profit'],
    ['세금 분리', 'Tax split'],
    ['사입 원가', 'Unit cost'],
    ['배송비', 'Shipping'],
    ['수량', 'Quantity'],
    ['텍스트 복사', 'Copy as text'],
    ['📸 이미지 저장', '📸 Save image'],
    ['부가세', 'Sales tax / VAT'],
    ['마진', 'Margin'],
    ['원', ''],
    ['개', '']
  ],

  /* ── 영문 안내문 ────────────────────────────────────── */
  guide: {
    intro: {
      h: 'Where margin maths usually goes wrong',
      p: [
        'Add 30% to a $10 cost and you get $13. That is 30% <strong>of cost</strong>. A 30% margin <strong>on the selling price</strong> is about $14.30. Which base you use changes the answer, and the two sides of a negotiation often mean different things by the same number.',
        'Then platform fees, advertising, shipping and tax come off the top. This tool works through those in order, so you can see the price to list and what actually reaches your account.'
      ]
    },
    uses: [
      { t: 'Setting a listing price', d: 'Start from the margin you want and work backwards to the price, with fees and tax already accounted for.' },
      { t: 'Checking what you keep', d: 'Enter what a marketplace paid out and see what remains once cost, fees and tax are removed.' },
      { t: 'Setting money aside for tax', d: 'Separate the tax portion of revenue so it is not spent before the filing date.' },
      { t: 'Testing a discount', d: 'See how far a promotion cuts into margin before you commit to it.' }
    ],
    steps: [
      'Enter your unit cost and quantity.',
      'Set the target margin, platform fee, advertising share and shipping.',
      'Choose your <strong>sales tax or VAT</strong> setting, or enter a rate directly.',
      'Read off the price to list and what lands in your account.'
    ],
    optionsTitle: 'Settings',
    options: [
      { t: 'Sales tax / VAT', d: 'Presets cover the common cases: the United States at 0%, since sales tax is normally added at checkout rather than built into the listed price, plus Canada, Singapore, Korea, Japan, Australia, Germany, the United Kingdom, France and Italy. <strong>Enter a rate</strong> handles anything else, including a state or provincial rate you want folded into the price.' },
      { t: 'Target margin (share of price)', d: 'Margin measured against the selling price, which is the convention in retail. If your supplier quotes markup on cost instead, the two numbers will not match.' },
      { t: 'Advertising (share of revenue)', d: 'Enter advertising as a percentage of revenue and it is deducted before the margin figure.' },
      { t: 'Move to the tax account', d: 'Shows the portion of revenue that belongs to the tax authority rather than to you. Setting it aside as it arrives avoids a shortfall at filing time.' }
    ],
    faq: [
      { q: 'Margin on cost or on price', d: '', a: 'Use whichever your buyer, supplier or platform uses. Retail generally quotes margin on the selling price, while manufacturing often quotes markup on cost. The important thing is that both sides mean the same thing.' },
      { q: 'Why is the United States set to 0%', a: 'In most US states sales tax is added at checkout rather than included in the advertised price, so the listed price carries no tax. If you do want a rate folded in, choose <strong>Enter a rate</strong> and type your combined state and local rate.' },
      { q: 'How is tax calculated from a gross amount', a: 'When tax is already inside the amount, the tax portion is the gross multiplied by rate ÷ (1 + rate). At 10% that is one eleventh, which is why a $110 sale contains $10 of tax rather than $11.' },
      { q: 'Can I rely on this for filing', a: 'Treat it as an estimate for planning. Registration status, thresholds, exemptions and reduced rates all vary by country and often by state or province. Check with an accountant before filing.' }
    ]
  }
};
