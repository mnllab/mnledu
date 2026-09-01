module.exports = {
  id: 'anonymizer',

  patches: [
    /* 예시를 영문 회의 메모로. 한국 번호 형식도 하나 남겨 인식 범위를 보여준다 */
    ["      '담당자 김장길 010-1234-5678 / 사무실 02-880-1234\\n' +",
     "      'Contact Janggil Kim +1 (415) 555-0132 / office 415-555-0188\\n' +"],
    ["      '이메일 jangkil.kim@snu.ac.kr, ab@naver.com\\n' +",
     "      'Email janggil.kim@example.edu, sales@example.com\\n' +"],
    ["      '주민등록번호 650312-1234567, 사업자등록번호 302-82-79641\\n' +",
     "      'National ID 650312-1234567, company number 302-82-79641\\n' +"],
    ["      '서버 IP는 192.168.0.1이며 외부 접속은 203.245.11.7입니다\\n' +",
     "      'Server IP is 192.168.0.1 and the public address is 203.245.11.7\\n' +"],
    ["      '휴대폰 01012345678 또는 +82-10-1234-5678\\n' +",
     "      'Mobile 01012345678 or +82-10-1234-5678\\n' +"],
    ["      '계약금액 1,234-5678 원, 작성일 2026-08-27 은 그대로 남습니다';",
     "      'Amounts like 1,234-5678 and dates like 2026-08-27 are left alone';"],

    ["function () { n.ip++; return '[IP 숨김 처리]'; }",
     "function () { n.ip++; return '[IP REDACTED]'; }"],
    ["const name = '가린텍스트_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +",
     "const name = 'redacted_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +"]
  ],

  strings: [
    ['브라우저 안에서만 처리 · 어디에도 전송·저장되지 않음',
     'Processed only in your browser · never transmitted or stored'],
    ['개인정보가 안전하게 가려진 채 복사되었습니다!', 'Copied with personal details masked'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['개인정보가 섞인 텍스트를 붙여넣으세요', 'Paste text that contains personal details'],
    ['마스킹된 결과가 여기에 표시됩니다', 'The redacted text appears here'],
    ['개인정보 자동 지우개', 'Personal Data Redactor'],
    ['복사할 결과가 없습니다', 'Nothing to copy'],
    ['저장할 내용이 없습니다', 'Nothing to save'],
    ['주민·법인번호', 'ID and company numbers'],
    ["'가린 항목 ' + total + '건'", "total + ' items masked'"],
    ['복사·저장 형식', 'Copy and save format'],
    ['복사 형식', 'Copy format'],
    ['워드·한글용', 'For Word'],
    ['메모장용', 'Plain text'],
    ['가려진 결과', 'Redacted'],
    ['전체 복사', 'Copy all'],
    ['전화번호', 'Phone numbers'],
    ['이메일', 'Email addresses'],
    ['IP 주소', 'IP addresses'],
    ['저장되었습니다!', 'Saved'],
    ['초기화', 'Reset'],
    ['지우기', 'Clear'],
    ['예시', 'Sample'],
    ['저장', 'Save'],
    ['원본', 'Input'],
    ['글자', 'Characters']
  ],

  guide: {
    intro: {
      h: 'What has to come out before you share a file',
      p: [
        'Meeting notes and contact lists get shared, pasted into AI tools and attached to tickets. Before any of that, the phone numbers and email addresses have to go. Doing it by hand is slow and unreliable, and in a long document you will miss some.',
        'This tool finds personal details by their shape rather than their meaning. Eleven digit mobile numbers, strings containing an at sign, national ID and company registration patterns, and IP addresses are all recognised and masked.'
      ]
    },
    uses: [
      { t: 'Before pasting into an AI tool', d: 'Support transcripts and contact lists are much safer to hand over once the identifiers are gone.' },
      { t: 'Sharing meeting notes', d: 'Notes taken during a call often carry phone numbers in the body text.' },
      { t: 'Turning real work into examples', d: 'Using an actual document as a template or a teaching sample. The structure stays, the identities go.' },
      { t: 'Filing bug reports', d: 'Screenshots are awkward to redact. Text goes through here in one pass.' }
    ],
    steps: [
      'Paste the text into the left panel.',
      'Switch on the categories you want masked.',
      'Read through the result, then copy or save it.'
    ],
    options: [
      { t: 'Phone numbers', d: 'Matches mobile and landline formats, including international prefixes.' },
      { t: 'Email addresses', d: 'Anything shaped like an address containing an at sign.' },
      { t: 'ID and company numbers', d: 'National identification and business registration number patterns.' },
      { t: 'IP addresses', d: 'Both private and public addresses, which often appear in logs and technical notes.' }
    ],
    faq: [
      { q: 'Does it mask names', a: 'No. A name has no distinguishing format, so it cannot be detected reliably. Read the result and edit any names yourself.' },
      { q: 'Can I trust it to catch everything', a: 'Details written in an unusual way, such as a number with spaces inside it, can slip through. <strong>Always read the result before you share it.</strong> This tool reduces the work, it does not replace the check.' },
      { q: 'Are amounts and dates affected', a: 'No. Figures like 1,234-5678 and dates like 2026-08-27 are deliberately left alone, since they look similar to some ID formats but are not personal data.' },
      { q: 'Can I undo the masking', a: 'Not from the result, but your original stays untouched in the left panel for as long as the page is open.' }
    ]
  }
};
