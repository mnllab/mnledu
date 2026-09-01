module.exports = {
  id: 'mosaicmarker',

  patches: [
    ["a.download = '가림처리_' + stamp() + '.png';", "a.download = 'redacted_' + stamp() + '.png';"],
    ['title="노랑"', 'title="Yellow"'],
    ['title="초록"', 'title="Green"'],
    ['title="분홍"', 'title="Pink"'],
    ['title="파랑"', 'title="Blue"']
  ],

  strings: [
    ['맥은 ⌘ + V · 끌어다 놓거나 클릭해서 열 수도 있습니다',
     'Use ⌘ + V on a Mac · you can also drop an image here or click to browse'],
    ['이 브라우저는 이미지 복사를 지원하지 않습니다. 다운로드를 사용해 주세요',
     'This browser cannot copy images. Use download instead.'],
    ['가릴 곳은 뭉개고 강조할 곳은 칠하기 · 브라우저 안에서만 처리',
     'Pixelate what should be hidden, highlight what matters · handled entirely in your browser'],
    ['이미지를 불러왔습니다 · 끌어서 영역을 지정하세요', 'Image loaded. Drag to mark an area.'],
    ['편집한 내용을 모두 지우고 원본으로 되돌립니다.', 'This discards every edit and restores the original.'],
    ['가릴 영역을 마우스로 끌어서 지정하세요', 'Drag across the area you want to cover'],
    ['여기에 이미지를 붙여넣으세요 (Ctrl + V)', 'Paste an image here (Ctrl + V)'],
    ['이미지가 복사되었습니다! 붙여넣기로 바로 쓰세요', 'Image copied. Paste it straight in.'],
    ['복사가 차단되었습니다 (', 'Copying was blocked ('],
    ['). 다운로드를 사용해 주세요', '). Use download instead.'],
    ['복사에 실패했습니다. 다운로드를 사용해 주세요', 'Copying failed. Use download instead.'],
    ['먼저 이미지를 붙여넣어 주세요', 'Paste an image first'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['이미지를 만들지 못했습니다', 'The image could not be created'],
    ['이미지를 읽지 못했습니다', 'That image could not be read'],
    ['이미지 파일이 아닙니다', 'That is not an image file'],
    ['원본으로 되돌렸습니다', 'Restored to the original'],
    ['모자이크 &amp; 형광펜 툴', 'Blur &amp; Highlight Tool'],
    ['이미지 붙여넣기', 'Paste an image'],
    ['다른 이미지', 'Another image'],
    ['실행 취소', 'Undo'],
    ['원본으로', 'Reset'],
    ['모자이크', 'Pixelate'],
    ['형광펜', 'Highlight'],
    ['거칠기', 'Coarseness'],
    ['색상', 'Colour'],
    ['클릭만 한 경우', 'click without dragging'],
    ['저장되었습니다!', 'Saved'],
    ["'편집 ' + history.length + '단계 · Ctrl+Z로 되돌릴 수 있습니다'",
     "history.length + ' edits · Ctrl+Z undoes the last one'"],
    ['blob 실패', 'blob failed'],
    ['오류', 'error']
  ],

  guide: {
    intro: {
      h: 'When a screenshot has something in it that should not be shared',
      p: [
        'Captures pick up names, account numbers and email addresses along with whatever you actually meant to show. Opening an image editor to cover them is a chore, and uploading the file to an online editor means handing over precisely the thing you were trying to hide.',
        'This pixelates and highlights inside your browser. The image never goes anywhere, which is the point when the thing you are covering is the sensitive part.'
      ]
    },
    uses: [
      { t: 'Hiding personal details', d: 'Names, phone numbers and account numbers caught in a capture.' },
      { t: 'Support requests', d: 'Sending a screenshot of a problem without the unrelated information around it.' },
      { t: 'Drawing attention', d: 'Highlighting the part of the screen you are actually talking about.' },
      { t: 'Teaching material', d: 'Using a real screen as an example with the identifying parts removed.' }
    ],
    steps: [
      'Paste or drop in an image.',
      'Choose <strong>Pixelate</strong> or <strong>Highlight</strong>.',
      'Drag across the area you want to treat.',
      'Use <strong>Copy image</strong> to take it away.'
    ],
    options: [
      { t: 'Coarseness', d: 'The size of the pixelation blocks. Set it coarse when the point is to make text genuinely unreadable.' },
      { t: 'Colour', d: 'The highlighter colour.' },
      { t: 'Undo and reset', d: 'Undo the last stroke, or go back to the untouched original. Ctrl+Z works too.' }
    ],
    faq: [
      { q: 'Can pixelation be reversed', a: 'The original pixels are gone from the exported image, so it cannot be undone. That said, very fine pixelation can leave shapes guessable, so use a coarse setting for anything that matters.' },
      { q: 'Is my image uploaded', a: 'No. Everything happens inside your browser.' },
      { q: 'Does the highlighter cover the text', a: 'No, it is semi-transparent so the text underneath stays readable. Use pixelation when the goal is to hide something.' }
    ]
  }
};
