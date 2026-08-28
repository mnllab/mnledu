module.exports = {
  id: 'screendeco',

  patches: [
    ["a.download = '목업_' + stamp() + '.png';", "a.download = 'mockup_' + stamp() + '.png';"],
    ['title="딥 슬레이트"', 'title="Deep slate"'],
    ['title="스틸 블루"', 'title="Steel blue"'],
    ['title="뮤티드 슬레이트"', 'title="Muted slate"'],
    ['title="라이트 그레이"', 'title="Light grey"'],
    ['title="화이트"', 'title="White"'],
    ['title="차콜"', 'title="Charcoal"']
  ],

  strings: [
    ['맥은 ⌘ + V · 이미지를 끌어다 놓거나 클릭해서 열 수도 있습니다',
     'Use ⌘ + V on a Mac · you can also drop an image here or click to browse'],
    ['이 브라우저는 이미지 복사를 지원하지 않습니다. 다운로드를 사용해 주세요',
     'This browser cannot copy images. Use download instead.'],
    ['스크린샷에 여백과 그림자를 입혀 목업으로 · 브라우저 안에서만 처리',
     'Give a screenshot padding and a shadow · handled entirely in your browser'],
    ['여기에 스크린샷을 붙여넣으세요 (Ctrl + V)', 'Paste a screenshot here (Ctrl + V)'],
    ['이미지가 복사되었습니다! 붙여넣기로 바로 쓰세요', 'Image copied. Paste it straight in.'],
    ['복사가 차단되었습니다 (', 'Copying was blocked ('],
    ['). 다운로드를 사용해 주세요', '). Use download instead.'],
    ['복사에 실패했습니다. 다운로드를 사용해 주세요', 'Copying failed. Use download instead.'],
    ['먼저 이미지를 붙여넣어 주세요', 'Paste an image first'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['이미지를 만들지 못했습니다', 'The image could not be created'],
    ['이미지를 읽지 못했습니다', 'That image could not be read'],
    ['이미지를 불러왔습니다', 'Image loaded'],
    ['이미지 파일이 아닙니다', 'That is not an image file'],
    ['1초 캡처 뷰티파이어', 'Screenshot Beautifier'],
    ['스크린샷 붙여넣기', 'Paste a screenshot'],
    ['배경 여백 색상', 'Background colour'],
    ['맥 창 헤더 표시', 'Show a Mac window bar'],
    ['다른 이미지', 'Another image'],
    ['배경색', 'Background'],
    ['신호등', 'Traffic lights'],
    ['그림자', 'Shadow'],
    ['여백', 'Padding'],
    ['모서리 반지름', 'Corner radius'],
    ['모서리', 'Corners'],
    ['크기', 'Size'],
    ['저장되었습니다!', 'Saved'],
    ["' px  (원본 '", "' px  (original '"],
    ['blob 생성 실패', 'blob creation failed'],
    ['오류', 'error']
  ],

  guide: {
    intro: {
      h: 'Why a raw screenshot looks unfinished',
      p: [
        'Drop a screenshot into a slide and it tends to sit awkwardly. A white capture on a white background loses its edges entirely, and the cropped boundary is left exposed.',
        'Adding a background, some padding and a soft shadow changes the impression completely, without touching the content. This tool does that in a few clicks, and can add a Mac style window bar so the capture reads as an application rather than a fragment.'
      ]
    },
    uses: [
      { t: 'Slides', d: 'Product screens and demo captures that need to sit properly on a slide.' },
      { t: 'Blog and social posts', d: 'Tidying a capture so the surrounding article looks considered.' },
      { t: 'Proposals and pitch decks', d: 'Work in progress screens read as more finished with a background and shadow behind them.' },
      { t: 'Documentation', d: 'Giving every screenshot in a manual the same consistent treatment.' }
    ],
    steps: [
      'Paste or drop in an image.',
      'Adjust the background, padding, corners and shadow.',
      'Turn on the window bar if it suits the context.',
      'Use <strong>Copy image</strong> and paste it where you need it.'
    ],
    options: [
      { t: 'Background', d: 'The colour behind the capture. Choosing something that contrasts with your document is what gives the image an edge.' },
      { t: 'Padding, corners and shadow', d: 'Padding relieves the crowding, while rounded corners and a shadow lift the capture off the page. Restraint reads better than maximum settings.' },
      { t: 'Mac window bar and traffic lights', d: 'Adds a title bar above the capture. Suited to introducing a piece of software.' }
    ],
    faq: [
      { q: 'Is my image uploaded', a: 'No. Everything happens in your browser.' },
      { q: 'Can I save it as a file', a: 'Yes, though copying and pasting directly into a document is usually quicker. Download is there when you need a file.' },
      { q: 'Does it reduce the quality', a: 'The original is kept at full size and the background and padding are added around it, so there is no meaningful loss.' }
    ]
  }
};
