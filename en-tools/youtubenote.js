module.exports = {
  id: 'youtubenote',

  patches: [
    ["const head = videoId ? '# 영상 메모\\n\\nhttps://youtu.be/' + videoId + '\\n\\n' : '# 영상 메모\\n\\n';",
     "const head = videoId ? '# Video notes\\n\\nhttps://youtu.be/' + videoId + '\\n\\n' : '# Video notes\\n\\n';"],
    ["const name = '영상메모_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +",
     "const name = 'video_notes_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +"]
  ],

  strings: [
    ['영상을 보며 여기에 적으세요. Ctrl+Enter 를 누르면 현재 재생 시간이 들어갑니다.',
     'Write here while you watch. Ctrl+Enter drops in the current playback time.'],
    ['유튜브 플레이어를 불러오지 못했습니다. 인터넷 연결을 확인해 주세요',
     'The YouTube player could not be loaded. Check your connection.'],
    ['이 환경에서는 브라우저 저장이 막혀 있습니다. 저장 버튼으로 파일로 남겨 주세요.',
     'Browser storage is blocked here. Use the save button to keep a file instead.'],
    ['영상을 불러오지 못했습니다. 주소를 확인해 주세요',
     'That video could not be loaded. Check the address.'],
    ['유튜브 주소를 붙여넣으세요 (youtu.be/… 또는 youtube.com/watch?v=…)',
     'Paste a YouTube address (youtu.be/… or youtube.com/watch?v=…)'],
    ['영상을 보며 시간이 박힌 메모 작성 · 이 브라우저에 자동 저장',
     'Take notes stamped with the playback time · saved automatically in this browser'],
    ['위에 유튜브 주소를 넣으면 여기에 영상이 나옵니다', 'Paste an address above and the video appears here'],
    ['시간표를 누르면 그 지점으로 이동합니다', 'Click a timestamp to jump there'],
    ['클릭하면 이 지점으로 이동합니다', 'Click to jump to this point'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['유튜브 주소를 인식하지 못했습니다', 'That address was not recognised'],
    ['메모를 모두 지웁니다. 계속할까요?', 'This clears all your notes. Continue?'],
    ['먼저 영상을 불러와 주세요', 'Load a video first'],
    ['이동하지 못했습니다', 'Could not jump to that point'],
    ['유튜브 타임스탬프 노트', 'YouTube Timestamp Notes'],
    ['마크다운 (링크 포함)', 'Markdown with links'],
    ['마크다운 (단순)', 'Markdown, plain'],
    ['마크다운으로 복사', 'Copy as markdown'],
    ['일반 텍스트', 'Plain text'],
    ['내보내기 형식', 'Export format'],
    ['현재 시간 삽입', 'Insert current time'],
    ['영상 불러오기', 'Load video'],
    ['메모 비우기', 'Clear notes'],
    ['복사할 메모가 없습니다', 'Nothing to copy'],
    ['저장할 메모가 없습니다', 'Nothing to save'],
    ['자동 저장 불가', 'Autosave unavailable'],
    ["'자동 저장됨 '", "'Autosaved '"],
    ["'마지막 저장 '", "'Last saved '"],
    [' 로도 삽입', ' also inserts'],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ['타임스탬프', 'Timestamps'],
    ['메모</span>', 'Notes</span>'],
    ['현재 <b', 'Now <b'],
    ['글자 <b', 'Characters <b'],
    ['저장</button>', 'Save</button>']
  ],

  guide: {
    intro: {
      h: 'The problem with taking notes on a video',
      p: [
        'You watch a lecture, write down the useful parts, and come back a week later wanting to check one of them. Now you are scrubbing through two hours of footage trying to find where it was said.',
        'This puts the video and a notepad side by side, and one keystroke drops the current playback time into your notes. Later, that timestamp tells you exactly where to look, and clicking it jumps straight there.'
      ]
    },
    uses: [
      { t: 'Lecture notes', d: 'Recording points as they come up, with the time attached for revision.' },
      { t: 'Conference talks', d: 'Marking the parts of a long recording worth quoting or returning to.' },
      { t: 'Summaries for a team', d: 'Notes with timestamps let colleagues verify a point without watching the whole thing.' },
      { t: 'Chapter markers', d: 'Drafting the chapter list for your own video, exportable as markdown for the description.' }
    ],
    steps: [
      'Paste a YouTube address and press <strong>Load video</strong>.',
      'Write in the notes panel while you watch.',
      'Press <strong>Ctrl+Enter</strong> at any point to insert the current playback time.',
      'Export as markdown or plain text.'
    ],
    options: [
      { t: 'Markdown with links', d: 'Turns each timestamp into a link that jumps to that point. Useful in Notion, GitHub or anywhere markdown renders.' },
      { t: 'Markdown, plain', d: 'Keeps the times as text without links.' },
      { t: 'Plain text', d: 'No formatting at all.' }
    ],
    faq: [
      { q: 'Are my notes saved', a: 'They autosave in your browser, so they survive a reload on the same device. Nothing is sent to a server, so keep a copy of anything important.' },
      { q: 'Which addresses work', a: 'Both the short youtu.be form and the full youtube.com/watch?v= form.' },
      { q: 'Some videos will not load', a: 'Videos whose owners have disabled embedded playback cannot be loaded here. That is a restriction set by the uploader and there is no way around it.' }
    ]
  }
};
