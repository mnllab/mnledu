module.exports = {
  id: 'promptmerger',

  patches: [
    ["return bar + '\\n[파일명: ' + f.name + ']\\n' + bar + '\\n' + body;",
     "return bar + '\\n[FILE: ' + f.name + ']\\n' + bar + '\\n' + body;"]
  ],

  strings: [
    ['여기에 텍스트 기반 파일을 끌어다 놓거나 클릭해서 추가하세요',
     'Drop text based files here, or click to add them'],
    ['파일을 추가하면 병합된 프롬프트가 여기에 표시됩니다',
     'Add files and the merged prompt appears here'],
    ['여러 파일을 한 덩어리 프롬프트로 · 브라우저 안에서만 처리',
     'Several files into one prompt · handled only in your browser'],
    ['텍스트 기반 파일만 지원합니다\\n\\n제외됨 : ',
     'Only text based files are supported\\n\\nSkipped: '],
    ['AI 프롬프트용 파일 병합기', 'AI Prompt Merger'],
    ['프롬프트 전체 복사', 'Copy the whole prompt'],
    ['병합 형식', 'Merge format'],
    ['구분선 형식', 'Rule separated'],
    ['코드펜스 형식', 'Code fences'],
    ['병합 결과', 'Merged prompt'],
    ['전체 비우기', 'Clear all'],
    ['파일 추가', 'Add files'],
    ['추가된 파일', 'Files added'],
    ['추가한 파일을 모두 비웁니다. 계속할까요?', 'This removes every file you added. Continue?'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['프롬프트가 복사되었습니다!', 'Prompt copied'],
    ['복사할 내용이 없습니다', 'Nothing to copy'],
    ['저장할 내용이 없습니다', 'Nothing to save'],
    ['저장되었습니다!', 'Saved'],
    ["'합계 ' + fmtSize(total)", "'total ' + fmtSize(total)"],
    ["f.name + ' 제거'", "'Remove ' + f.name"],
    ["const name = '병합프롬프트_' + d.getFullYear()", "const name = 'prompt_' + d.getFullYear()"],
    ['저장', 'Save'],
    ['글자', 'Characters'],
    ['줄 <b', 'Lines <b'],
    ['대략 <b', 'about <b'],
    ['토큰', 'tokens'],
    ['개</span>', '</span>'],
    ['등</p>', 'and more</p>']
  ],

  guide: {
    intro: {
      h: 'What goes wrong when you hand an AI several files',
      p: [
        'Uploading files one at a time blurs the line between them, and simply pasting them end to end removes it entirely. The model then answers about the wrong file, or merges two of them into a single confused explanation.',
        'This tool labels each file and marks its boundary with a code fence or a rule, then joins them into one prompt. It also shows the total character count and a rough token estimate, so you can tell before you paste whether you are near the model\'s input limit.'
      ]
    },
    uses: [
      { t: 'Code review across files', d: 'Asking about a feature that spans several modules. Clear file boundaries are what make the answer specific.' },
      { t: 'Summarising a set of documents', d: 'Handing over several meeting notes or reports and asking what they have in common.' },
      { t: 'Checking the size first', d: 'Seeing the token estimate before you paste. Over the limit, it is better to split the question in two than to have the input silently truncated.' },
      { t: 'Keeping a reference bundle', d: 'Saving a set of files as one text block so you do not have to gather them again next time.' }
    ],
    steps: [
      'Add your files. Several at once is fine.',
      'Choose whether to separate them with code fences or rules.',
      'Check the size, then use <strong>Copy the whole prompt</strong> and paste it into your AI tool.'
    ],
    options: [
      { t: 'Code fences', d: 'Wraps each file in triple backticks. The right choice for source code, since the model can tell code from commentary.' },
      { t: 'Rule separated', d: 'Divides files with a plain rule. Easier to read for ordinary documents.' }
    ],
    faq: [
      { q: 'How accurate is the token estimate', a: 'It is approximate. Every model counts tokens differently, so leave some headroom when you are near a limit.' },
      { q: 'Are my files uploaded', a: 'No. Your browser reads them directly and joins them on screen. Nothing is transmitted.' },
      { q: 'Which file types work', a: 'Anything that reads as text: source files, txt, md, csv, json, yml and similar. Compressed formats such as Word documents or PDFs need converting to text first.' }
    ]
  }
};
