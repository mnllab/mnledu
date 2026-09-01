module.exports = {
  id: 'teleprompter',

  patches: [
    /* 예시 원고를 영문 발표로 */
    ["      '# 모두의 창업 프로젝트\\n\\n' +", "      '# Starting a company: the first step\\n\\n' +"],
    ["      '안녕하세요. 오늘은 **창업의 첫 단계**에 대해 말씀드리겠습니다.\\n\\n' +",
     "      'Today I want to talk about **where a company actually begins**.\\n\\n' +"],
    ["      '## 첫째, 문제를 정의합니다\\n\\n' +", "      '## First, define the problem\\n\\n' +"],
    ["      '많은 팀이 기술부터 시작합니다. 그러나 순서가 **반대**입니다.\\n' +",
     "      'Most teams start with the technology. That order is **backwards**.\\n' +"],
    ["      '고객이 겪는 불편을 먼저 찾아야 합니다.\\n\\n' +",
     "      'Find the difficulty your customer lives with first.\\n\\n' +"],
    ["      '- 누가 겪는 문제인가\\n' +", "      '- Who has this problem\\n' +"],
    ["      '- 얼마나 자주 겪는가\\n' +", "      '- How often do they run into it\\n' +"],
    ["      '- 지금은 어떻게 해결하고 있는가\\n\\n' +", "      '- What do they do about it today\\n\\n' +"],
    ["      '## 둘째, 가장 작은 실험을 설계합니다\\n\\n' +", "      '## Second, design the smallest test\\n\\n' +"],
    ["      '> 완성된 제품이 아니라 답을 얻을 수 있는 최소한의 형태\\n\\n' +",
     "      '> Not a finished product. The smallest thing that answers the question.\\n\\n' +"],
    ["      '검증에 필요한 것은 **속도**입니다.\\n\\n' +", "      'What validation needs is **speed**.\\n\\n' +"],
    ["      '## 마무리\\n\\n' +", "      '## To close\\n\\n' +"],
    ["      '오늘 말씀드린 두 가지, **문제 정의**와 **작은 실험**을 기억해 주십시오.\\n' +",
     "      'Two things to take away: **define the problem** and **run a small test**.\\n' +"],
    ["      '감사합니다.';", "      'Thank you.';"],

    ['placeholder="# 발표 제목&#10;&#10;안녕하세요. **핵심 메시지**는 노란색으로 강조됩니다.&#10;&#10;- 첫째 항목&#10;- 둘째 항목"',
     'placeholder="# Presentation title&#10;&#10;Text wrapped in **double asterisks** is highlighted.&#10;&#10;- First point&#10;- Second point"']
  ],

  strings: [
    ['<kbd>Space</kbd> 재생·정지 · <kbd>↑</kbd><kbd>↓</kbd> 속도 · <kbd>Home</kbd> 처음으로 · <kbd>M</kbd> 거울 · <kbd>T</kbd> 테마 · <kbd>H</kbd> 패널 숨김',
     '<kbd>Space</kbd> play/pause · <kbd>↑</kbd><kbd>↓</kbd> speed · <kbd>Home</kbd> top · <kbd>M</kbd> mirror · <kbd>T</kbd> theme · <kbd>H</kbd> hide panel'],
    ['예시 원고</button>', 'Sample script</button>'],
    ['.md 또는 .txt 파일을 이 화면에 끌어다 놓거나, 아래에 직접 붙여넣으세요',
     'Drop an .md or .txt file onto this screen, or paste your script below'],
    ['<kbd>Space</kbd> 재생·정지 · <kbd>↑</kbd><kbd>↓</kbd> 속도 · <kbd>Home</kbd> 처음으로 · <kbd>M</kbd> 거울 · <kbd>T</kbd> 테마 · <kbd>H',
     '<kbd>Space</kbd> play and pause · <kbd>↑</kbd><kbd>↓</kbd> speed · <kbd>Home</kbd> back to top · <kbd>M</kbd> mirror · <kbd>T</kbd> theme · <kbd>H'],
    ['원고를 불러왔습니다 · Space로 시작하세요', 'Script loaded. Press Space to start.'],
    ['md 또는 txt 파일만 열 수 있습니다', 'Only md and txt files can be opened'],
    ['원고 내용이 비어 있습니다', 'The script is empty'],
    ['먼저 원고를 불러와 주세요', 'Load a script first'],
    ['파일을 읽지 못했습니다', 'That file could not be read'],
    ['원고를 불러오세요', 'Load a script'],
    ['원고가 끝났습니다', 'End of script'],
    ['스마트 오토 프롬프터', 'Smart Auto Prompter'],
    ['좌우 반전 켜짐', 'Horizontal mirror on'],
    ['좌우 반전 꺼짐', 'Horizontal mirror off'],
    ['상하 반전 켜짐', 'Vertical mirror on'],
    ['상하 반전 꺼짐', 'Vertical mirror off'],
    ['좌우 반전', 'Mirror ↔'],
    ['상하 반전', 'Mirror ↕'],
    ['예시 원고', 'Sample script'],
    ['원고 적용', 'Load script'],
    ['파일 선택', 'Choose a file'],
    ['맨 위로', 'Back to top'],
    ['전체화면', 'Full screen'],
    ['창 모드', 'Exit full screen'],
    ['일시정지', 'Pause'],
    ['재생', 'Play'],
    ['가이드', 'Guide line'],
    ['라이트', 'Light'],
    ['다크', 'Dark'],
    ['원고</button>', 'Script</button>'],
    ['속도', 'Speed'],
    ['글자', 'Text'],
    ['폭', 'Width'],
    ["'남은 시간 '", "'time left '"],
    ["'속도 ' + speedEl.value", "'speed ' + speedEl.value"]
  ],

  guide: {
    intro: {
      h: 'Reading a script pulls your eyes down',
      p: [
        'Whether you are filming or presenting, glancing at notes takes your gaze off the camera, and to the person watching it reads as avoiding eye contact. Memorising everything is a lot to ask.',
        'A teleprompter scrolls the script near the top of the screen so your eyeline stays where it should be. This one does that in a browser, so a laptop or tablet propped beside the camera is all the equipment you need.'
      ]
    },
    uses: [
      { t: 'Recording video', d: 'Keeping your gaze on the lens while working from a script.' },
      { t: 'Rehearsing a talk', d: 'Adjusting the pace to find out how long the material actually runs.' },
      { t: 'Speaking on a call', d: 'Prepared remarks near the top of the screen so you can look at the camera.' },
      { t: 'Mirror rigs', d: 'Hardware prompters that use a beam splitter need the image reversed, which the mirror controls handle.' }
    ],
    steps: [
      'Paste your script or load a file. Markdown formatting is applied.',
      'Press <strong>Load script</strong>.',
      'Set the text size, width and speed.',
      'Go <strong>full screen</strong> and press <strong>Play</strong>, or just tap Space.'
    ],
    options: [
      { t: 'Speed', d: 'How fast the text moves. Start slightly slower than you expect to speak and adjust from there.' },
      { t: 'Text size and width', d: 'The further you sit from the screen, the larger the text and the narrower the column should be.' },
      { t: 'Mirror horizontally and vertically', d: 'For beam splitter prompter hardware. Leave both off when reading directly from the screen.' },
      { t: 'Guide line', d: 'Marks the reading position, which helps keep your eyes anchored in one place.' }
    ],
    faq: [
      { q: 'What does markdown do here', a: 'Headings render larger and text wrapped in double asterisks is highlighted in colour. Marking your key phrases means you will not skate past them.' },
      { q: 'Can I change speed while it is running', a: 'Yes, with the arrow keys or the control. Adjust as you go if your pace drifts.' },
      { q: 'Is my script saved', a: 'It stays in your browser but never reaches a server, so keep your own copy of the script.' }
    ]
  }
};
