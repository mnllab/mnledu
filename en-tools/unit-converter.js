module.exports = {
  id: 'unit-converter',

  patches: [
    /* 카테고리 이름과 설명 */
    ["icon: '📏', label: '길이', base: 'm',", "icon: '📏', label: 'Length', base: 'm',"],
    ["note: '기준 단위는 미터입니다. 자·척은 한국 곡척(30.303cm) 기준입니다.',",
     "note: 'The base unit is the metre. The ja (尺) is the Korean carpenter\\'s foot at 30.303 cm.',"],
    ["icon: '⚖️', label: '무게', base: 'kg',", "icon: '⚖️', label: 'Weight', base: 'kg',"],
    ["note: '기준 단위는 킬로그램입니다. 근은 600g(육류·일반 기준), 관은 3.75kg입니다.',",
     "note: 'The base unit is the kilogram. The geun (斤) is 600 g and the gwan (貫) is 3.75 kg, both Korean market units.',"],
    ["icon: '🏠', label: '넓이 · 평수', base: 'm2',", "icon: '🏠', label: 'Area', base: 'm2',"],
    ["note: '1평은 3.305785m²(400/121)입니다. 부동산에서 쓰는 값과 같습니다.',",
     "note: 'One pyeong (坪) is 3.305785 m², the figure used in Korean property listings.',"],
    ["icon: '🧴', label: '부피', base: 'L',", "icon: '🧴', label: 'Volume', base: 'L',"],
    ["note: '되·말은 한국 전통 단위로 1되는 1.8039L입니다. 갤런은 미국 기준입니다.',",
     "note: 'Gallons and fluid ounces are US measures. The doe (升) and mal (斗) are traditional Korean units, one doe being 1.8039 L.',"],
    ["icon: '💾', label: '데이터 (IT)', base: 'B',", "icon: '💾', label: 'Data', base: 'B',"],
    ["note: '1024 진수(KiB 기준)로 변환합니다. 저장장치 제조사가 쓰는 1000 진수와는 값이 다릅니다.',",
     "note: 'Converted in binary units where 1 KB is 1024 bytes. Drive manufacturers use decimal units, so their figures differ.',"],

    /* 길이 : 미국 단위를 앞으로 */
    ["{ k: 'mm', n: '밀리미터 (mm)', f: 0.001 },", "{ k: 'in', n: 'Inch (in)',       f: 0.0254 },"],
    ["{ k: 'cm', n: '센티미터 (cm)', f: 0.01 },", "{ k: 'ft', n: 'Foot (ft)',       f: 0.3048 },"],
    ["{ k: 'm',  n: '미터 (m)',      f: 1 },", "{ k: 'yd', n: 'Yard (yd)',       f: 0.9144 },"],
    ["{ k: 'km', n: '킬로미터 (km)', f: 1000 },", "{ k: 'mi', n: 'Mile (mi)',       f: 1609.344 },"],
    ["{ k: 'in', n: '인치 (in)',     f: 0.0254 },", "{ k: 'mm', n: 'Millimetre (mm)', f: 0.001 },"],
    ["{ k: 'ft', n: '피트 (ft)',     f: 0.3048 },", "{ k: 'cm', n: 'Centimetre (cm)', f: 0.01 },"],
    ["{ k: 'yd', n: '야드 (yd)',     f: 0.9144 },", "{ k: 'm',  n: 'Metre (m)',       f: 1 },"],
    ["{ k: 'mi', n: '마일 (mi)',     f: 1609.344 },", "{ k: 'km', n: 'Kilometre (km)',  f: 1000 },"],
    ["{ k: 'ja', n: '자 (尺)',       f: 0.30303 },", "{ k: 'nm', n: 'Nautical mile',   f: 1852 },"],
    ["{ k: 'nm', n: '해리 (nmi)',    f: 1852 }", "{ k: 'ja', n: 'Ja 자 (KR)',      f: 0.30303 }"],

    /* 무게 */
    ["{ k: 'mg',  n: '밀리그램 (mg)', f: 0.000001 },", "{ k: 'oz',  n: 'Ounce (oz)',     f: 0.028349523125 },"],
    ["{ k: 'g',   n: '그램 (g)',      f: 0.001 },", "{ k: 'lb',  n: 'Pound (lb)',     f: 0.45359237 },"],
    ["{ k: 'kg',  n: '킬로그램 (kg)', f: 1 },", "{ k: 'mg',  n: 'Milligram (mg)', f: 0.000001 },"],
    ["{ k: 't',   n: '톤 (t)',        f: 1000 },", "{ k: 'g',   n: 'Gram (g)',       f: 0.001 },"],
    ["{ k: 'oz',  n: '온스 (oz)',     f: 0.028349523125 },", "{ k: 'kg',  n: 'Kilogram (kg)',  f: 1 },"],
    ["{ k: 'lb',  n: '파운드 (lb)',   f: 0.45359237 },", "{ k: 't',   n: 'Tonne (t)',      f: 1000 },"],
    ["{ k: 'geun',n: '근 (斤)',       f: 0.6 },", "{ k: 'geun',n: 'Geun 근 (KR)',   f: 0.6 },"],
    ["{ k: 'gwan',n: '관 (貫)',       f: 3.75 }", "{ k: 'gwan',n: 'Gwan 관 (KR)',   f: 3.75 }"],

    /* 넓이 */
    ["{ k: 'cm2', n: '제곱센티미터 (cm²)', f: 0.0001 },", "{ k: 'ft2', n: 'Square foot (ft²)',  f: 0.09290304 },"],
    ["{ k: 'm2',  n: '제곱미터 (m²)',      f: 1 },", "{ k: 'ac',  n: 'Acre (ac)',          f: 4046.8564224 },"],
    ["{ k: 'pyeong', n: '평 (坪)',         f: 400 / 121 },", "{ k: 'm2',  n: 'Square metre (m²)',  f: 1 },"],
    ["{ k: 'a',   n: '아르 (a)',           f: 100 },", "{ k: 'cm2', n: 'Square cm (cm²)',    f: 0.0001 },"],
    ["{ k: 'ha',  n: '헥타르 (ha)',        f: 10000 },", "{ k: 'a',   n: 'Are (a)',            f: 100 },"],
    ["{ k: 'km2', n: '제곱킬로미터 (km²)', f: 1000000 },", "{ k: 'ha',  n: 'Hectare (ha)',       f: 10000 },"],
    ["{ k: 'ac',  n: '에이커 (ac)',        f: 4046.8564224 },", "{ k: 'km2', n: 'Square km (km²)',    f: 1000000 },"],
    ["{ k: 'ft2', n: '제곱피트 (ft²)',     f: 0.09290304 }", "{ k: 'pyeong', n: 'Pyeong 평 (KR)',  f: 400 / 121 }"],

    /* 부피 */
    ["{ k: 'mL',  n: '밀리리터 (mL)',   f: 0.001 },", "{ k: 'floz',n: 'Fluid ounce (fl oz)', f: 0.0295735295625 },"],
    ["{ k: 'L',   n: '리터 (L)',        f: 1 },", "{ k: 'cup', n: 'Cup (200 mL)',        f: 0.2 },"],
    ["{ k: 'm3',  n: '세제곱미터 (m³)', f: 1000 },", "{ k: 'gal', n: 'Gallon (US)',         f: 3.785411784 },"],
    ["{ k: 'cup', n: '컵 (200mL)',      f: 0.2 },", "{ k: 'mL',  n: 'Millilitre (mL)',     f: 0.001 },"],
    ["{ k: 'gal', n: '갤런 (US gal)',   f: 3.785411784 },", "{ k: 'L',   n: 'Litre (L)',           f: 1 },"],
    ["{ k: 'floz',n: '액량온스 (fl oz)',f: 0.0295735295625 },", "{ k: 'm3',  n: 'Cubic metre (m³)',    f: 1000 },"],
    ["{ k: 'doe', n: '되 (升)',         f: 1.8039 },", "{ k: 'doe', n: 'Doe 되 (KR)',         f: 1.8039 },"],
    ["{ k: 'mal', n: '말 (斗)',         f: 18.039 }", "{ k: 'mal', n: 'Mal 말 (KR)',         f: 18.039 }"],

    /* 데이터 */
    ["{ k: 'bit', n: '비트 (bit)',     f: 1 / 8 },", "{ k: 'bit', n: 'Bit',            f: 1 / 8 },"],
    ["{ k: 'B',   n: '바이트 (Byte)',  f: 1 },", "{ k: 'B',   n: 'Byte',           f: 1 },"],
    ["{ k: 'KB',  n: '킬로바이트 (KB)',f: 1024 },", "{ k: 'KB',  n: 'Kilobyte (KB)',  f: 1024 },"],
    ["{ k: 'MB',  n: '메가바이트 (MB)',f: 1024 ** 2 },", "{ k: 'MB',  n: 'Megabyte (MB)',  f: 1024 ** 2 },"],
    ["{ k: 'GB',  n: '기가바이트 (GB)',f: 1024 ** 3 },", "{ k: 'GB',  n: 'Gigabyte (GB)',  f: 1024 ** 3 },"],
    ["{ k: 'TB',  n: '테라바이트 (TB)',f: 1024 ** 4 },", "{ k: 'TB',  n: 'Terabyte (TB)',  f: 1024 ** 4 },"],
    ["{ k: 'PB',  n: '페타바이트 (PB)',f: 1024 ** 5 }", "{ k: 'PB',  n: 'Petabyte (PB)',  f: 1024 ** 5 }"]
  ],

  strings: [
    ['아무 칸에나 숫자를 넣으면 나머지가 동시에 채워집니다',
     'Type into any field and every other one fills in at once'],
    ['유니버설 단위 변환기', 'Universal Unit Converter'],
    ['소수점 자릿수', 'Decimal places'],
    ['소수점 2자리', '2 decimal places'],
    ['4자리', '4 places'],
    ['6자리', '6 places'],
    ['자동', 'Auto'],
    ['값이 비어 있습니다', 'That field is empty'],
    ['모두 비웠습니다', 'All cleared'],
    ['복사가 막혔습니다', 'Copy was blocked'],
    ["'복사 · '", "'Copied · '"],
    ['비우기', 'Clear'],
    ['복사', 'Copy']
  ],

  guide: {
    intro: {
      h: 'Converting units without a page full of ads',
      p: [
        'Inches to centimetres, pounds to kilograms, square feet to square metres. Each one is a small question, and searching for it means loading a page covered in advertising and then fighting to copy the answer.',
        'Here every related unit sits on one screen. Type a number into any field and the rest fill in together, so you can read off whichever one you need.'
      ]
    },
    uses: [
      { t: 'Property and floor area', d: 'Square feet to square metres when comparing listings or lease terms across markets.' },
      { t: 'Product specifications', d: 'Converting inches, pounds and Fahrenheit from an overseas datasheet.' },
      { t: 'Shipping and customs', d: 'Restating weight and volume in the units the destination country expects.' },
      { t: 'Cooking', d: 'Ounces, cups and Fahrenheit into grams and Celsius, or the other way round.' }
    ],
    steps: [
      'Pick a category.',
      'Type a value into any field.',
      'The equivalent values appear in every other unit. Copy whichever you need.'
    ],
    options: [
      { t: 'Decimal places', d: 'Auto, or a fixed number of places. A fixed setting reads better in a document.' }
    ],
    faq: [
      { q: 'What are the units marked KR', a: 'Traditional Korean measures that still appear in property listings and markets there: pyeong for area, geun and gwan for weight, doe and mal for volume. They are included because this site started in Korea, and they are grouped at the end of each list.' },
      { q: 'Why is my drive smaller than advertised', a: 'Manufacturers count a gigabyte as 1,000,000,000 bytes while operating systems use 1,073,741,824. Data conversions here use the binary figure, which is why the numbers differ.' },
      { q: 'Is temperature supported', a: 'Yes, in Celsius, Fahrenheit and Kelvin. Temperature scales have different zero points rather than being simple ratios, so they are calculated differently from the other categories.' }
    ]
  }
};
