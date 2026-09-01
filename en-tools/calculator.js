module.exports = {
  id: 'calculator',

  strings: [
    ['키보드도 그대로 됩니다 · Enter 계산 · Backspace 한 글자 · Esc 전체 지우기 · 입력창에 직접 타이핑해도 됩니다',
     'The keyboard works too · Enter to calculate · Backspace to delete · Esc to clear · you can type straight into the field'],
    ['계산하면 여기에 쌓입니다. 눌러서 다시 불러올 수 있습니다.',
     'Calculations collect here. Click one to bring it back.'],
    ['괄호와 거듭제곱이 들어간 식을 그대로 계산합니다',
     'Type an expression with brackets and powers and it evaluates as written'],
    ['계산 엔진을 불러오지 못했습니다', 'The calculation engine could not be loaded'],
    ['식이 올바르지 않습니다', 'That expression is not valid'],
    ['식을 확인해 주세요', 'Check the expression'],
    ['스마트 수식 계산기', 'Smart Formula Calculator'],
    ['눌러서 불러오기', 'Click to reload'],
    ['식을 불러왔습니다', 'Expression restored'],
    ['기록을 비웠습니다', 'History cleared'],
    ['계산 기록', 'History'],
    ['입력 중…', 'Typing…'],
    ['비우기', 'Clear'],
    ['라이트', 'Light'],
    ['다크', 'Dark']
  ],

  guide: {
    intro: {
      h: 'A calculator that takes the whole expression',
      p: [
        'A standard calculator wants one digit at a time. For anything with several terms you end up holding an intermediate result in your head, and when the answer looks wrong there is no way to see where it went astray.',
        'Here you type the expression as a whole. Write <strong>(1200 - 350) * 0.7</strong> and it evaluates directly, with the expression still on screen so you can see exactly what to change.'
      ]
    },
    uses: [
      { t: 'Budget arithmetic', d: 'Several items added together and then multiplied by a rate. The expression stays visible, which makes checking easy.' },
      { t: 'Verifying a quote', d: 'Typing the line items from a supplier quote to confirm the total.' },
      { t: 'Unit pricing', d: 'Dividing a total by quantity, with brackets to handle any conditions.' },
      { t: 'Quick sums mid-task', d: 'One tab, no application to launch.' }
    ],
    steps: [
      'Type an expression. Brackets, the four operations and powers are supported.',
      'The result appears as you type.',
      'Edit the expression and the result follows.'
    ],
    options: [
      { t: 'Light and dark', d: 'Switch the theme to suit the time of day or the windows around it.' },
      { t: 'History', d: 'Past calculations collect below. Click one to bring the expression back.' }
    ],
    faq: [
      { q: 'What operations are supported', a: 'Addition, subtraction, multiplication and division, plus brackets and powers.' },
      { q: 'Is my history saved', a: 'It stays for the session so you can look back, but closing the page clears it. Copy anything you need to keep.' },
      { q: 'Does it work offline', a: 'Once the page has loaded, yes. Everything runs in your browser.' }
    ]
  }
};
