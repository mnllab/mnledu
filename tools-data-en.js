/* -----------------------------------------------------------
 * TOOLKIT · English tool catalogue
 * 한국어판 tools-data.js 와 id 는 같고, url 만 /en/ 아래를 가리킵니다.
 * 새 도구를 추가할 때 양쪽에 모두 넣어야 합니다.
 * --------------------------------------------------------- */

const TOOLS_DATA_EN = [

  /* ═══════════════ PRODUCTIVITY ═══════════════ */
  {
    id: 'notepad',
    title: 'Rich Text Notepad',
    category: 'PRODUCTIVITY',
    desc: 'Draft with basic formatting while character, word and byte counts update as you type.',
    url: 'https://mnledu.com/en/productivity/notepad.html',
    icon: 'notebook-pen',
    badge: 'BEST',
    tags: ['#writing', '#wordcount', '#copy', '#markdown']
  },
  {
    id: 'emailgen',
    title: 'Bulk Email Generator',
    category: 'PRODUCTIVITY',
    desc: 'Turn one template and a list of names into dozens of personalised messages at once.',
    url: 'https://mnledu.com/en/productivity/emailgen.html',
    icon: 'mail',
    badge: 'HOT',
    tags: ['#writing', '#template', '#mailmerge', '#bulk']
  },
  {
    id: 'templatemerger',
    title: 'Template Merger',
    category: 'PRODUCTIVITY',
    desc: 'Paste any list or table, write one sentence pattern, get every row filled in.',
    url: 'https://mnledu.com/en/productivity/templatemerger.html',
    icon: 'layout-template',
    badge: null,
    tags: ['#template', '#spreadsheet', '#bulk', '#automation']
  },
  {
    id: 'promptmerger',
    title: 'AI Prompt Merger',
    category: 'PRODUCTIVITY',
    desc: 'Combine several files into one prompt with clear boundaries and a token estimate.',
    url: 'https://mnledu.com/en/productivity/promptmerger.html',
    icon: 'files',
    badge: 'NEW',
    tags: ['#AI', '#text', '#copy', '#developer']
  },
  {
    id: 'listformat',
    title: 'Smart List Formatter',
    category: 'PRODUCTIVITY',
    desc: 'Deduplicate, sort, number and join a list, or add a prefix and suffix to every line.',
    url: 'https://mnledu.com/en/productivity/listformat.html',
    icon: 'list-ordered',
    badge: null,
    tags: ['#text', '#automation', '#list', '#copy']
  },
  {
    id: 'textclean',
    title: 'Text Cleaner',
    category: 'PRODUCTIVITY',
    desc: 'Strip stray spaces, line breaks, HTML tags and odd characters from copied text.',
    url: 'https://mnledu.com/en/productivity/textclean.html',
    icon: 'eraser',
    badge: null,
    tags: ['#text', '#automation', '#wordcount']
  },
  {
    id: 'anonymizer',
    title: 'Personal Data Redactor',
    category: 'PRODUCTIVITY',
    desc: 'Find and mask phone numbers, emails and ID numbers before you share or paste into AI.',
    url: 'https://mnledu.com/en/productivity/anonymizer.html',
    icon: 'shield-check',
    badge: 'NEW',
    tags: ['#privacy', '#text', '#automation', '#security']
  },
  {
    id: 'pdftxt',
    title: 'PDF Line Break Fixer',
    category: 'PRODUCTIVITY',
    desc: 'Rejoin text copied from a PDF so paragraphs read as paragraphs again.',
    url: 'https://mnledu.com/en/productivity/pdftxt.html',
    icon: 'wrap-text',
    badge: null,
    tags: ['#PDF', '#text', '#automation', '#research']
  },
  {
    id: 'pdfmerge',
    title: 'PDF Merge & Split',
    category: 'PRODUCTIVITY',
    desc: 'Combine PDFs or pull out selected pages without uploading anything anywhere.',
    url: 'https://mnledu.com/en/productivity/pdfmerge.html',
    icon: 'file-stack',
    badge: 'BEST',
    tags: ['#PDF', '#documents', '#offline']
  },
  {
    id: 'voicenote',
    title: 'Offline Voice Notes',
    category: 'PRODUCTIVITY',
    desc: 'Dictate notes with speech recognition that runs inside your browser, not on a server.',
    url: 'https://mnledu.com/en/productivity/voicenote.html',
    icon: 'mic',
    badge: 'NEW',
    tags: ['#voice', '#dictation', '#meetings', '#text']
  },

  /* ═══════════════ DATA & ANALYTICS ═══════════════ */
  {
    id: 'cagrcal',
    title: 'CAGR Calculator',
    category: 'DATA & ANALYTICS',
    desc: 'Work out compound annual growth rate and project a year by year forecast table.',
    url: 'https://mnledu.com/en/data-analytics/cagrcal.html',
    icon: 'trending-up',
    badge: 'HOT',
    tags: ['#startup', '#businessplan', '#finance', '#forecast', '#spreadsheet']
  },
  {
    id: 'ocrextract',
    title: 'Image to Text (OCR)',
    category: 'DATA & ANALYTICS',
    desc: 'Pull text out of screenshots and scans. Runs on your device, so images stay local.',
    url: 'https://mnledu.com/en/data-analytics/ocrextract.html',
    icon: 'scan-text',
    badge: null,
    tags: ['#OCR', '#image', '#text', '#offline']
  },
  {
    id: 'gov-fund-calc',
    title: 'Korean Grant Cost Share Calculator',
    category: 'DATA & ANALYTICS',
    desc: 'Korea-specific. Works out cash and in-kind cost share for Korean government R&D grants.',
    url: 'https://mnledu.com/en/data-analytics/gov-fund-calc.html',
    icon: 'calculator',
    badge: 'HOT',
    tags: ['#korea', '#startup', '#grants', '#businessplan', '#calculator']
  },
  {
    id: 'percent-calc',
    title: 'Margin & VAT Calculator',
    category: 'DATA & ANALYTICS',
    desc: 'Set a target margin, add tax and fees, and see the listing price and what you keep.',
    url: 'https://mnledu.com/en/data-analytics/percent-calc.html',
    icon: 'percent',
    badge: null,
    tags: ['#calculator', '#margin', '#pricing', '#tax']
  },

  /* ═══════════════ LIFESTYLE ═══════════════ */
  {
    id: 'youtubenote',
    title: 'YouTube Timestamp Notes',
    category: 'LIFESTYLE',
    desc: 'Take notes beside a video and drop in the current timestamp with one shortcut.',
    url: 'https://mnledu.com/en/lifestyle/youtubenote.html',
    icon: 'clapperboard',
    badge: 'NEW',
    tags: ['#video', '#study', '#notes', '#autosave']
  },
  {
    id: 'date-calc',
    title: 'Date & Age Calculator',
    category: 'LIFESTYLE',
    desc: 'Count days between dates, add days to a date, and check age or years of service.',
    url: 'https://mnledu.com/en/lifestyle/date-calc.html',
    icon: 'calendar-days',
    badge: 'NEW',
    tags: ['#date', '#calculator', '#deadline']
  },
  {
    id: 'unit-converter',
    title: 'Universal Unit Converter',
    category: 'LIFESTYLE',
    desc: 'Convert length, weight, area, volume and temperature, including US and metric units.',
    url: 'https://mnledu.com/en/lifestyle/unit-converter.html',
    icon: 'ruler',
    badge: null,
    tags: ['#units', '#calculator', '#imperial', '#metric']
  },
  {
    id: 'calculator',
    title: 'Smart Formula Calculator',
    category: 'LIFESTYLE',
    desc: 'Type a whole expression instead of tapping digits, and edit it while you go.',
    url: 'https://mnledu.com/en/lifestyle/calculator.html',
    icon: 'square-equal',
    badge: null,
    tags: ['#calculator', '#formula', '#offline']
  },
  {
    id: 'timezone-dial',
    title: 'Time Zone Dial',
    category: 'LIFESTYLE',
    desc: 'Line up several cities and scrub through the day to find a time that works for everyone.',
    url: 'https://mnledu.com/en/lifestyle/timezone-dial.html',
    icon: 'globe',
    badge: 'NEW',
    tags: ['#timezone', '#scheduling', '#remote']
  },
  {
    id: 'vocab-quiz',
    title: 'Flashcards & Quiz',
    category: 'LIFESTYLE',
    desc: 'Turn your own word list into flashcards and multiple choice questions, both directions.',
    url: 'https://mnledu.com/en/lifestyle/vocab-quiz.html',
    icon: 'graduation-cap',
    badge: 'NEW',
    tags: ['#study', '#flashcards', '#memory', '#exam']
  },

  /* ═══════════════ DESIGN & MEDIA ═══════════════ */
  {
    id: 'screendeco',
    title: 'Screenshot Beautifier',
    category: 'DESIGN & MEDIA',
    desc: 'Add background, padding, rounded corners and a window bar to plain screenshots.',
    url: 'https://mnledu.com/en/design-media/screendeco.html',
    icon: 'frame',
    badge: 'HOT',
    tags: ['#image', '#slides', '#mockup', '#screenshot']
  },
  {
    id: 'mosaicmarker',
    title: 'Blur & Highlight Tool',
    category: 'DESIGN & MEDIA',
    desc: 'Pixelate sensitive details or highlight a region, all inside your browser.',
    url: 'https://mnledu.com/en/design-media/mosaicmarker.html',
    icon: 'highlighter',
    badge: null,
    tags: ['#image', '#privacy', '#screenshot', '#slides']
  },
  {
    id: 'teleprompter',
    title: 'Browser Teleprompter',
    category: 'DESIGN & MEDIA',
    desc: 'Scroll your script at a set pace so you can keep looking at the camera.',
    url: 'https://mnledu.com/en/design-media/teleprompter.html',
    icon: 'scroll-text',
    badge: null,
    tags: ['#video', '#presenting', '#recording', '#markdown']
  },

  /* ═══════════════ ENTERTAINMENT ═══════════════ */
  {
    id: 'tetris',
    title: 'Block Stacker',
    category: 'ENTERTAINMENT',
    desc: 'Rotate falling blocks and clear full rows. Ghost piece and themes included.',
    url: 'https://mnledu.com/en/entertainment/tetris.html',
    icon: 'gamepad-2',
    badge: 'NEW',
    tags: ['#game', '#break', '#offline']
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    category: 'ENTERTAINMENT',
    desc: 'Four difficulty levels with optional error checking and highlight helpers.',
    url: 'https://mnledu.com/en/entertainment/sudoku.html',
    icon: 'grid-3x3',
    badge: 'NEW',
    tags: ['#game', '#puzzle', '#break', '#offline']
  },
  {
    id: 'snake',
    title: 'Snake',
    category: 'ENTERTAINMENT',
    desc: 'Eat, grow, and try not to run into yourself. Wall wrap can be turned on or off.',
    url: 'https://mnledu.com/en/entertainment/snake.html',
    icon: 'worm',
    badge: 'NEW',
    tags: ['#game', '#break', '#offline', '#mobile']
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    category: 'ENTERTAINMENT',
    desc: 'Deduce where the mines are from the numbers. Custom board sizes supported.',
    url: 'https://mnledu.com/en/entertainment/minesweeper.html',
    icon: 'bomb',
    badge: 'NEW',
    tags: ['#game', '#puzzle', '#break', '#offline']
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    category: 'ENTERTAINMENT',
    desc: 'Draw one card for the day or three for past, present and future. Just for fun.',
    url: 'https://mnledu.com/en/entertainment/tarot.html',
    icon: 'sparkles',
    badge: 'NEW',
    tags: ['#fortune', '#tarot', '#break']
  },
  {
    id: 'neon-ladder',
    title: 'Ladder Lottery',
    category: 'ENTERTAINMENT',
    desc: 'The amidakuji style draw. Assign roles or split a bill with a random ladder.',
    url: 'https://mnledu.com/en/entertainment/neon-ladder.html',
    icon: 'waypoints',
    badge: 'NEW',
    tags: ['#game', '#group', '#random', '#draw']
  },
  {
    id: 'horse-race',
    title: 'Horse Race Picker',
    category: 'ENTERTAINMENT',
    desc: 'Race a horse per person to settle an order or split a bill, with a few seconds of suspense.',
    url: 'https://mnledu.com/en/entertainment/horse-race.html',
    icon: 'trophy',
    badge: 'NEW',
    tags: ['#game', '#group', '#random', '#picker']
  },
  {
    id: 'lotto',
    title: 'Lottery Number Generator',
    category: 'ENTERTAINMENT',
    desc: 'Powerball and Mega Millions by default, with include and exclude numbers.',
    url: 'https://mnledu.com/en/entertainment/lotto.html',
    icon: 'clover',
    badge: 'NEW',
    tags: ['#random', '#lottery', '#powerball', '#megamillions']
  },
  {
    id: 'russian-roulette',
    title: 'Random Picker Roulette',
    category: 'ENTERTAINMENT',
    desc: 'Six chambers, one marked. Pick who goes first or who gets the task.',
    url: 'https://mnledu.com/en/entertainment/russian-roulette.html',
    icon: 'dices',
    badge: 'NEW',
    tags: ['#game', '#group', '#random', '#break']
  },

  {
    id: 'presentation-timer',
    title: 'Presentation Timer',
    category: 'PRODUCTIVITY',
    desc: 'Runs talk and Q&A as one flow, counts overtime, and recalculates the expected time for every remaining slot.',
    url: 'https://mnledu.com/en/productivity/presentation-timer.html',
    icon: 'timer',
    badge: 'NEW',
    tags: ['#presenting', '#timer', '#meetings', '#agenda']
  }
];

if (typeof window !== 'undefined') window.TOOLS_DATA = TOOLS_DATA_EN;
if (typeof module !== 'undefined' && module.exports) module.exports = TOOLS_DATA_EN;
