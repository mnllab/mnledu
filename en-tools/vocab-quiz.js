module.exports = {
  id: 'vocab-quiz',

  patches: [
    ["      'Apple / 사과\\nBanana / 바나나\\nCherry / 체리\\nGrape / 포도\\n' +\n      'Strawberry / 딸기\\nWatermelon / 수박\\nPeach / 복숭아\\nPear / 배\\n' +\n      'Mango / 망고\\nLemon / 레몬';",
     "      'ubiquitous / present everywhere\\nmitigate / make less severe\\n' +\n      'prudent / showing care for the future\\ncandid / honest and direct\\n' +\n      'resilient / able to recover quickly\\nambiguous / open to more than one meaning\\n' +\n      'concise / brief but complete\\nviable / able to work successfully\\n' +\n      'redundant / no longer needed\\ncoherent / logical and consistent';"],
    ['<textarea id="raw" placeholder="Apple / 사과&#10;Banana / 바나나&#10;Cherry / 체리" spellcheck="false"></textarea>',
     '<textarea id="raw" placeholder="ubiquitous / present everywhere&#10;mitigate / make less severe&#10;prudent / showing care for the future" spellcheck="false"></textarea>'],
    ['예시<br>Apple / 사과<br>Banana / 바나나',
     'For example<br>ubiquitous / present everywhere<br>mitigate / make less severe']
  ],

  strings: [
    ['단어와 뜻을 슬래시(/)로 구분하여 한 줄에 하나씩 입력하세요.',
     'One entry per line, with the term and its meaning separated by a slash.'],
    ['파일을 이 영역에 끌어다 놓아도 됩니다 · 쉼표나 탭으로 구분된 줄도 인식합니다',
     'You can also drop a file here · comma and tab separated lines are recognised too'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['학습 중에도 언제든 조절할 수 있습니다', 'You can change this while studying'],
    ['단어를 한 줄 이상 입력해 주세요', 'Enter at least one line'],
    ['모르겠어요 · 정답 보기', 'Not sure · show the answer'],
    ['정답을 입력하고 Enter', 'Type the answer and press Enter'],
    ['처음으로 돌아가기', 'Back to the start'],
    ['한 바퀴 돌았습니다', 'That is the full set'],
    ['틀린 문제만 다시 냅니다', 'Retrying the ones you missed'],
    ['문항 수를 확인해 주세요', 'Check the number of questions'],
    ['파일을 읽지 못했습니다', 'That file could not be read'],
    ['단어가 없습니다', 'There are no entries'],
    ['내 단어로 만드는 양방향 학습', 'Two-way practice built from your own list'],
    ['단어장 &amp; 퀴즈', 'Flashcards &amp; Quiz'],
    ['다음 · 학습 설정', 'Next · study settings'],
    ['뒤로 · 단어 수정', 'Back · edit the list'],
    ['txt 파일 열기', 'Open a txt file'],
    ['예시 채우기', 'Load a sample'],
    ['출제 방향', 'Direction'],
    ['단어 → 뜻', 'Term → meaning'],
    ['뜻 → 단어', 'Meaning → term'],
    ['랜덤 섞기', 'Mixed'],
    ['A를 보고 B를 맞춥니다', 'See the term, recall the meaning'],
    ['B를 보고 A를 맞춥니다', 'See the meaning, recall the term'],
    ['문제마다 무작위', 'Random each question'],
    ['학습 모드', 'Study mode'],
    ['단어장', 'List'],
    ['플래시카드', 'Flashcards'],
    ['객관식 퀴즈', 'Multiple choice'],
    ['주관식 퀴즈', 'Type the answer'],
    ['문제와 정답을 한눈에', 'Everything visible at once'],
    ['눌러서 뒤집기', 'Tap to flip'],
    ['보기 4개 중 고르기', 'Choose from four'],
    ['직접 입력하기', 'Write it out'],
    ['학습 시작', 'Start'],
    ['문항 수', 'Questions'],
    ['글자 크기', 'Text size'],
    ['최종 점수', 'Final score'],
    ['오답 노트', 'Missed questions'],
    ['다시 풀기', 'Try again'],
    ['틀린 것만 다시', 'Retry the missed ones'],
    ['처음으로', 'Start over'],
    ['뜻 모두 보기', 'Show all meanings'],
    ['뜻 가리기', 'Hide meanings'],
    ['순서 섞기', 'Shuffle'],
    ['정답입니다', 'Correct'],
    ['전부 맞혔습니다', 'All correct'],
    ['← 이전', '← Previous'],
    ['다음 →', 'Next →'],
    ['(넘김)', '(skipped)'],
    ['(빈칸)', '(blank)'],
    ['<th>문제</th><th>내 답</th><th>정답</th>', '<th>Question</th><th>Your answer</th><th>Correct</th>'],
    ["'정답 · ' + item.ans", "'Answer · ' + item.ans"],
    ["'정답률 ' + rate + '% · '", "rate + '% correct · '"],
    ["'틀린 ' + wrong.length + '개를 다시 보세요'", "'review the ' + wrong.length + ' you missed'"],
    ["pairs.length + '개 인식'", "pairs.length + ' entries'"],
    ["r.bad.length + '줄 건너뜀'", "r.bad.length + ' lines skipped'"],
    ["r.bad.length + '줄은 구분자가 없어 건너뛰었습니다'", "r.bad.length + ' lines had no separator and were skipped'"],
    ["f.name + ' 을 불러왔습니다'", "f.name + ' loaded'"],
    ["total + '개'", "total + ' entries'"],
    ["'전체 <b id=\"totalCnt\" class=\"mono\">0</b>개 중 무작위로 뽑습니다'",
     "'drawn at random from <b id=\"totalCnt\" class=\"mono\">0</b> entries'"],
    ['전체 <b id="totalCnt" class="mono">0</b>개 중 무작위로 뽑습니다',
     'Drawn at random from <b id="totalCnt" class="mono">0</b> entries'],
    ['<span class="text-[11px]" style="color:var(--dim)">가</span>',
     '<span class="text-[11px]" style="color:var(--dim)">A</span>'],
    ['<span class="text-[15px]" style="color:var(--dim)">가</span>',
     '<span class="text-[15px]" style="color:var(--dim)">A</span>'],
    ['다크', 'Dark'],
    ['라이트', 'Light'],
    ['확인', 'Check']
  ],

  guide: {
    intro: {
      h: 'Recognising something is not the same as knowing it',
      p: [
        'Read a vocabulary list enough times and it starts to feel familiar. Then you try to recall a meaning and nothing comes. Familiarity and retrieval are different skills, and only one of them is what you need in an exam or a conversation.',
        'What fixes it is pulling the answer out yourself. This tool takes a list you have written and turns it into cards to flip or questions to answer, in either direction, so you practise recall rather than recognition.'
      ]
    },
    uses: [
      { t: 'Exam vocabulary', d: 'Language tests and professional certifications where a fixed body of terms has to be memorised.' },
      { t: 'A new field', d: 'Building the vocabulary of a domain you have just started working in.' },
      { t: 'Course revision', d: 'Turning the key concepts from a lecture into question and answer form.' },
      { t: 'Helping a child study', d: 'Load their word list and work through it together. The text size can be increased.' }
    ],
    steps: [
      'Enter your list as <strong>term / meaning</strong>, one per line.',
      'Choose a study mode: list, flashcards, multiple choice or typed answers.',
      'Pick a direction: term to meaning, meaning to term, or mixed.',
      'Set the number of questions and start.'
    ],
    options: [
      { t: 'Direction', d: 'Practising one direction only leaves the reverse weak. Once the material is familiar, mixed is the more useful setting.' },
      { t: 'Study mode', d: 'Flashcards suit first exposure, multiple choice checks recognition, and typing the answer is the hardest and the most effective.' },
      { t: 'Shuffle and question count', d: 'Stops you memorising the order and keeps each session to a manageable size.' },
      { t: 'Text size and theme', d: 'Adjustable at any point, including mid-session.' }
    ],
    faq: [
      { q: 'How do I format the list', a: 'One per line as "term / meaning". Comma and tab separated lines are recognised too, so pasting two columns from a spreadsheet works.' },
      { q: 'Is my list saved', a: 'It stays in your browser, so it is there when you come back on the same device. Clearing browser data removes it, so keep a copy of anything important.' },
      { q: 'Can I import from a spreadsheet', a: 'Copy the two columns and paste them in. Tab separated text is recognised directly, so no reformatting is needed.' }
    ]
  }
};
