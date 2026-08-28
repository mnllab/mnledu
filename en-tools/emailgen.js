module.exports = {
  id: 'emailgen',

  patches: [
    /* 조사 안내 문구 제거 — 영문에서는 의미가 없다.
       조사 함수 자체는 한글이 입력될 때만 반응하므로 그대로 둔다 */
    ['            <span class="text-ink">(은/는) (이/가) (을/를) (와/과) (으로/로)</span> 는 앞말 받침에 맞춰 자동 선택됩니다.\n',
     '            Rows with an empty value are tidied up so you never get a stray comma or blank line.\n'],

    /* 본문 예시를 영문 업무 메일로 */
    ["    subject.value = '[{회사명}] {안건} 진행 안내';",
     "    subject.value = '[{Company}] {Subject} — schedule confirmed';"],
    [`      '{회사명} {수신인} {직함}님께\\n\\n' +
      '안녕하세요, **{발신회사} {발신인}**입니다.\\n\\n' +
      '{안건}(이/가) 다음과 같이 확정되어 안내드립니다.\\n\\n' +
      '- 일시 : {일시}\\n' +
      '- 장소 : {장소}\\n' +
      '- 준비 : {준비물}\\n\\n' +
      '{추가메모}\\n\\n' +
      '문의사항은 회신 주시면 됩니다.\\n감사합니다.\\n\\n' +
      '{발신인} 드림';`,
     `      'Dear {Name}, {Title} at {Company}\\n\\n' +
      'This is **{Sender}** from **{SenderCompany}**.\\n\\n' +
      'I am writing to confirm the details for {Subject}.\\n\\n' +
      '- Date : {Date}\\n' +
      '- Location : {Location}\\n' +
      '- Please bring : {Bring}\\n\\n' +
      '{Notes}\\n\\n' +
      'Do reply to this message if anything needs changing.\\n\\n' +
      'Best regards,\\n{Sender}';`],

    [`      회사명: '㈜에임랩', 수신인: '홍길동', 직함: '대표',
      발신회사: '서울대학교 공학연구원', 발신인: '김장길',
      안건: '2단계 컨설팅', 일시: '2026. 9. 3.(목) 14:00',
      장소: '본사 회의실', 준비물: '', 추가메모: ''`,
     `      Company: 'Aimlab Inc.', Name: 'Jordan Reyes', Title: 'CEO',
      SenderCompany: 'SNU Engineering Research Institute', Sender: 'Janggil Kim',
      Subject: 'the phase 2 review', Date: 'Thu 3 Sep 2026, 2:00 pm',
      Location: 'Head office meeting room', Bring: '', Notes: ''`],

    ["    tplName.value = '컨설팅 일정 안내';",
     "    tplName.value = 'Consulting schedule notice';"],

    [`      '회사명\\t수신인\\t직함\\t안건\\t일시\\t장소\\t발신회사\\t발신인\\t준비물\\t추가메모\\n' +
      '㈜에임랩\\t홍길동\\t대표\\t2단계 컨설팅\\t2026. 9. 3.(목) 14:00\\t본사 회의실\\t서울대학교 공학연구원\\t김장길\\t\\t\\n' +
      '유진엠에스\\t이다은\\t팀장\\t착수보고\\t2026. 9. 5.(토) 10:00\\t온라인\\t서울대학교 공학연구원\\t김장길\\t사업계획서\\t\\n' +
      '\\t박신혜\\t\\t중간점검\\t2026. 9. 10.(목) 15:00\\t창조경제혁신센터\\t서울대학교 공학연구원\\t김장길\\t\\t자료는 사전 공유 예정';`,
     `      'Company\\tName\\tTitle\\tSubject\\tDate\\tLocation\\tSenderCompany\\tSender\\tBring\\tNotes\\n' +
      'Aimlab Inc.\\tJordan Reyes\\tCEO\\tthe phase 2 review\\tThu 3 Sep, 2:00 pm\\tHead office\\tSNU ERI\\tJanggil Kim\\t\\t\\n' +
      'Eugene MS\\tPriya Raman\\tTeam Lead\\tthe kickoff report\\tSat 5 Sep, 10:00 am\\tOnline\\tSNU ERI\\tJanggil Kim\\tBusiness plan\\t\\n' +
      '\\tSam Okafor\\t\\tthe interim check\\tThu 10 Sep, 3:00 pm\\tInnovation Centre\\tSNU ERI\\tJanggil Kim\\t\\tMaterials shared in advance';`],

    /* 화면 예시 placeholder */
    ['placeholder="[{회사명}] {안건} 안내드립니다"',
     'placeholder="[{Company}] Regarding {Subject}"'],
    ['placeholder="{회사명} {수신인} {직함}님께&#10;&#10;안녕하세요, {발신인}입니다.&#10;{안건}(이/가) 확정되었습니다."',
     'placeholder="Dear {Name}, {Title} at {Company}&#10;&#10;This is {Sender}.&#10;{Subject} has been confirmed."'],
    ['placeholder="회사명&#9;수신인&#9;직함&#9;안건&#10;㈜에임랩&#9;홍길동&#9;대표&#9;2단계 컨설팅&#10;유진엠에스&#9;이다은&#9;팀장&#9;착수보고"',
     'placeholder="Company&#9;Name&#9;Title&#9;Subject&#10;Aimlab Inc.&#9;Jordan Reyes&#9;CEO&#9;phase 2 review&#10;Eugene MS&#9;Priya Raman&#9;Team Lead&#9;kickoff report"'],

    /* 수신인 키 참조 */
    ["who: values['수신인'] || ''", "who: values['Name'] || ''"],
    ["const who = row['수신인'] || row[data.keys[0]] || '';",
     "const who = row['Name'] || row[data.keys[0]] || '';"],
    ["const head = SEP + '\\n[수신인: ' + (it.who || '(이름 없음)') + '님 메일]\\n' + SEP;",
     "const head = SEP + '\\nMessage for: ' + (it.who || '(no name)') + '\\n' + SEP;"],
    ["const name = '이메일_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +",
     "const name = 'emails_' + d.getFullYear() + p(d.getMonth() + 1) + p(d.getDate()) +"]
  ],

  strings: [
    ['템플릿 하나에 명단을 넣어 여러 통을 한 번에 생성합니다. 조사(은/는, 이/가)를 받침에 맞춰 자동 교정합니다.',
     'Merge one template with a list of recipients to produce every message at once.'],
    ['첫 줄에 변수명, 그 아래에 값을 넣습니다. 엑셀에서 복사해 붙여넣으면 그대로 인식됩니다(탭 구분). 쉼표 구분도 됩니다.',
     'Put the field names on the first line and the values below. Pasting straight from a spreadsheet works, and commas are accepted too.'],
    ['중괄호로 변수를 씁니다. 값이 비면 앞뒤 공백과 빈 줄이 자동으로 정리됩니다.',
     'Write fields in curly braces. Empty values are tidied away along with the spacing around them.'],
    ['템플릿에 변수를 넣으면 입력란이 자동으로 생깁니다', 'Add a field to the template and an input appears here'],
    ['중괄호 변수를 쓰면 여기에 표시됩니다', 'Fields you add in curly braces show up here'],
    ['이 환경에서는 브라우저 저장이 막혀 있습니다. 파일로 저장해 두세요.',
     'Browser storage is blocked here, so save your template as a file instead.'],
    ['자주 쓰는 양식을 이름을 붙여 저장해 두면 언제든 불러올 수 있습니다',
     'Name a template you use often and it will be here next time'],
    ['같은 이름의 양식이 있습니다. 덮어쓸까요?', 'A template with that name exists. Overwrite it?'],
    ['편집 중인 템플릿을 비웁니다. 계속할까요?', 'This clears the template you are editing. Continue?'],
    ['브라우저가 막았습니다. 드래그해서 복사하세요', 'The browser blocked copying. Select the text instead.'],
    ['브라우저가 다운로드를 막았습니다', 'Your browser blocked the download'],
    ['서식이 유지된 채 복사되었습니다!', 'Copied with formatting'],
    ['이 환경에서는 저장이 막혀 있습니다', 'Saving is blocked in this environment'],
    ['데이터를 인식하지 못했습니다', 'That data could not be read'],
    ['양식 이름을 입력해 주세요', 'Give the template a name'],
    ['복사할 내용이 없습니다', 'Nothing to copy'],
    ['저장할 내용이 없습니다', 'Nothing to save'],
    ['본문이 비어 있습니다', 'The message body is empty'],
    ['예시 양식을 넣었습니다', 'Sample template loaded'],
    ['예시 데이터를 넣었습니다', 'Sample data loaded'],
    ['템플릿 하나로 여러 통을 한 번에 · 브라우저 안에서만 처리',
     'One template, many messages · processed only in your browser'],
    ['반복 이메일 생성기', 'Bulk Email Generator'],
    ['본문 커서 위치에 넣기', 'Insert at the cursor'],
    ['비우면 자동으로 정돈됩니다', 'Leave blank and it tidies itself'],
    ['전체 이메일 복사', 'Copy all messages'],
    ['이메일 복사', 'Copy message'],
    ['양식을 삭제할까요?', 'Delete this template?'],
    ['양식을 불러왔습니다', 'template loaded'],
    ['양식을 저장했습니다', 'template saved'],
    ['눌러서 불러오기', 'Click to load'],
    ['파일로 저장', 'Save as file'],
    ['저장된 양식', 'Saved templates'],
    ['양식 이름', 'Template name'],
    ['템플릿 편집', 'Template'],
    ['예시 데이터', 'Sample data'],
    ['1:1 단일', 'Single'],
    ['대량 연속', 'Bulk'],
    ['일반 텍스트', 'Plain text'],
    ['마크다운', 'Markdown'],
    ['서식 복사', 'Copy formatted'],
    ['대량 데이터', 'Bulk data'],
    ['값 입력', 'Values'],
    ['미리보기', 'Preview'],
    ['복사되었습니다!', 'Copied'],
    ['저장되었습니다!', 'Saved'],
    ['삭제했습니다', 'Deleted'],
    ['불러오기', 'Load'],
    ['공백 포함', 'with spaces'],
    ['공백 제외', 'without spaces'],
    ['(자동 정돈됨)', '(tidied automatically)'],
    ["'빈 변수 ' + empty.length + '개 ", "'empty fields: ' + empty.length + ' "],
    ["'변수 ' + data.keys.length + '개 · ' + data.rows.length + '건 인식'",
     "data.keys.length + ' fields · ' + data.rows.length + ' rows'"],
    ["'메일 ' + items.length + '통'", "items.length + ' messages'"],
    ["'제목: ' + it.subject", "'Subject: ' + it.subject"],
    ['(이름 없음)', '(no name)'],
    ['작성', 'Mode'],
    ['서식', 'Format'],
    ['제목', 'Subject'],
    ['본문', 'Body'],
    ['저장', 'Save'],
    ['예시', 'Sample'],
    ['비우기', 'Clear'],
    ['삭제', 'Delete'],
    ['자</span>', '</span>'],
    ['class="num ml-1 text-ink">0</b>개', 'class="num ml-1 text-ink">0</b>']
  ],

  guide: {
    intro: {
      h: 'When the same email has to go out twenty times',
      p: [
        'Twenty recipients, the same message, but each one needs their own name, company and meeting time. Mail merge means installing something and wiring up a data source. Doing it by hand means twenty rounds of find and replace, and a real chance that message fourteen still says someone else\'s name.',
        'This tool sits in the middle. Write the message once with fields in curly braces, paste your list straight out of a spreadsheet, and every message is built at once. Empty fields are removed along with the spacing around them, so a missing value never leaves a dangling comma or an empty line.'
      ]
    },
    uses: [
      { t: 'Event and meeting invitations', d: 'Paste a spreadsheet of attendees and get one message per person, each with their own time and location.' },
      { t: 'Review and application outcomes', d: 'The wording is fixed and only the company and contact change. A typical merge, and a bad place for a copy and paste mistake.' },
      { t: 'Scheduling across a list', d: 'Send everyone the same instructions with a different slot in each message.' },
      { t: 'Recurring client notices', d: 'Price changes, holiday hours, anything that goes out regularly. Save the template and it is ready next time.' }
    ],
    steps: [
      'Write your subject and body in <strong>Template</strong>. Mark anything that changes as <strong>{Company}</strong> or similar.',
      'Paste your list into the data box. Copying a range out of a spreadsheet keeps the tab separation, so it just works.',
      'Check the preview, then use <strong>Copy message</strong> for one at a time or <strong>Bulk</strong> for the whole set.',
      'Send them from your own mail client.'
    ],
    options: [
      { t: 'Single and Bulk', d: 'Single builds one message from values you type in. Bulk runs the template over every row of your list and shows all the results together.' },
      { t: 'Plain text and Markdown', d: 'Plain text suits an ordinary mail client or a web form. Markdown keeps the bold and list formatting for Slack, Notion and similar tools.' },
      { t: 'Saved templates', d: 'Give a template a name and it stays in your browser for next time. It is stored on your device rather than on a server, so clearing browser data clears it.' }
    ],
    faq: [
      { q: 'Can I paste directly from a spreadsheet', a: 'Yes. Copying a range gives tab separated text, which is read as columns automatically. Comma separated data works too.' },
      { q: 'What happens if a value is missing', a: 'The field is removed along with the surrounding spacing, so you do not end up with a stray comma or a blank line. The count of empty fields is shown above the preview.' },
      { q: 'Does it send the emails', a: 'No. It only builds the text. Sending happens in your own mail client, which keeps your contacts and credentials out of this page entirely.' },
      { q: 'Is my recipient list uploaded anywhere', a: 'No. The list stays in your browser and is never transmitted. That matters, because a recipient list is personal data.' }
    ]
  }
};
