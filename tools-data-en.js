/* -----------------------------------------------------------
 * TOOLKIT · English tool catalogue
 * 한국어판 tools-data.js 와 id 는 같고, url 만 /en/ 아래를 가리킵니다.
 * 새 도구를 추가할 때 양쪽에 모두 넣어야 합니다.
 * --------------------------------------------------------- */

const TOOLS_DATA_EN = [

  /* ═══════════════ PRODUCTIVITY ═══════════════ */
  {
    id: 'text-batch-factory',
    title: 'Text Batch Factory',
    category: 'PRODUCTIVITY',
    desc: 'Cleans pasted text instantly in your browser. Combine markdown stripping, subtitle splitting and list numbering.',
    url: 'https://mnledu.com/en/productivity/text-batch-factory_en.html',
    icon: 'factory',
    badge: 'NEW',
    tags: ['#textcleanup', '#subtitles', '#listformat', '#automation']
  },
  {
    id: 'data-slicer',
    title: 'Excel & CSV Data Slicer',
    category: 'PRODUCTIVITY',
    desc: 'Pick a column to split on and get one file per value, bundled into a single ZIP. Turns an hour of filtering into one click.',
    url: 'https://mnledu.com/en/productivity/data-slicer_en.html',
    icon: 'scissors',
    badge: 'NEW',
    tags: ['#excel', '#CSV', '#filesplit', '#automation']
  },
  {
    id: 'copy-desk',
    title: 'One-Click Copy Desk',
    category: 'PRODUCTIVITY',
    desc: 'Keep prompts, scripts and links as cards, switch between editing and quick-copy mode, and everything saves as you type.',
    url: 'https://mnledu.com/en/productivity/copy-desk_en.html',
    icon: 'clipboard-list',
    badge: 'NEW',
    tags: ['#copy', '#notes', '#autosave', '#prompts']
  },
  {
    id: 'receipt-to-excel',
    title: 'Receipt to Expense Sheet',
    category: 'PRODUCTIVITY',
    desc: 'Reads the date, amount and merchant from a receipt photo and suggests an expense category by industry. Detailed or simple-total mode.',
    url: 'https://mnledu.com/en/productivity/receipt-to-excel_en.html',
    icon: 'receipt',
    badge: 'NEW',
    tags: ['#receipt', '#spreadsheet', '#expenses', '#OCR']
  },
  {
    id: 'roster-maker',
    title: 'Fair Roster Maker',
    category: 'PRODUCTIVITY',
    desc: 'Enter your team and their days off, and it builds a balanced duty roster with no back-to-back shifts.',
    url: 'https://mnledu.com/en/productivity/roster-maker_en.html',
    icon: 'calendar-check',
    badge: 'NEW',
    tags: ['#roster', '#schedule', '#automation', '#spreadsheet']
  },
  {
    id: 'sheet2memo',
    title: 'Sheet2Memo',
    category: 'PRODUCTIVITY',
    desc: 'Paste a spreadsheet link or file and every row becomes a sticky note you can search and filter.',
    url: 'https://mnledu.com/en/productivity/sheet2memo_en.html',
    icon: 'layout-grid',
    badge: 'NEW',
    tags: ['#spreadsheet', '#dashboard', '#organize', '#search']
  },
  {
    id: 'smart-list',
    title: 'Smart List Formatter',
    category: 'PRODUCTIVITY',
    desc: 'Turns a spreadsheet column into one line formatted for Outlook, Slack or SQL, with duplicates removed.',
    url: 'https://mnledu.com/en/productivity/smart-list_en.html',
    icon: 'list-ordered',
    badge: 'NEW',
    tags: ['#list', '#automation', '#SQL', '#copy']
  },
  {
    id: 'text-diff',
    title: 'Secure Text Diff Checker',
    category: 'PRODUCTIVITY',
    desc: 'Puts an original and a revised document side by side and shows exactly what changed, word or character.',
    url: 'https://mnledu.com/en/productivity/text-diff_en.html',
    icon: 'diff',
    badge: 'NEW',
    tags: ['#contracts', '#compare', '#review', '#documents']
  },
  {
    id: 'palette-picker',
    title: 'Brand Palette Picker',
    category: 'PRODUCTIVITY',
    desc: 'Drop in a logo or photo and pull out the dominant colour and a palette, with HEX, RGB and HSL to copy.',
    url: 'https://mnledu.com/en/productivity/palette-picker_en.html',
    icon: 'palette',
    badge: 'NEW',
    tags: ['#color', '#design', '#palette', '#brand']
  },
  {
    id: 'asset-hub',
    title: 'One-Click Asset Hub',
    category: 'PRODUCTIVITY',
    desc: 'Keep the phrases, colours, logos and links you reuse in one place and click to copy any of them.',
    url: 'https://mnledu.com/en/productivity/asset-hub_en.html',
    icon: 'clipboard-copy',
    badge: 'NEW',
    tags: ['#assets', '#copy', '#brand', '#automation']
  },
  {
    id: 'data-harvester',
    title: 'Data Harvester',
    category: 'PRODUCTIVITY',
    desc: 'Drop a folder for a file list, pull links and emails out of messy text, and decode broken URLs.',
    url: 'https://mnledu.com/en/productivity/data-harvester_en.html',
    icon: 'database',
    badge: 'NEW',
    tags: ['#data', '#linkextraction', '#filelist', '#recovery']
  },
  {
    id: 'pdf-signature',
    title: 'PDF Signature Stamp',
    category: 'PRODUCTIVITY',
    desc: 'Clear the background from a photo of your signature or stamp and place it anywhere on a PDF, with rotation, sensitivity control and camera capture.',
    url: 'https://mnledu.com/en/productivity/pdf-signature_en.html',
    icon: 'signature',
    badge: 'NEW',
    tags: ['#PDF', '#signature', '#documents', '#image']
  },
  {
    id: 'qr-studio',
    title: 'Custom QR Code Generator',
    category: 'PRODUCTIVITY',
    desc: 'Build print-ready QR codes in your own colours and sizes. Export transparent PNG or vector SVG.',
    url: 'https://mnledu.com/en/productivity/qr-studio_en.html',
    icon: 'qr-code',
    badge: 'NEW',
    tags: ['#QR', '#print', '#design', '#offline']
  },
  {
    id: 'meeting-minutes',
    title: 'Smart Meeting Minutes',
    category: 'PRODUCTIVITY',
    desc: 'Capture questions and answers, then copy the minutes in plain text, Word, Slack or Markdown.',
    url: 'https://mnledu.com/en/productivity/meeting-minutes_en.html',
    icon: 'clipboard-list',
    badge: 'NEW',
    tags: ['#meetings', '#writing', '#copy', '#markdown']
  },
  {
    id: 'slot-coordinator',
    title: 'Smart Schedule Coordinator',
    category: 'PRODUCTIVITY',
    desc: 'Paste a calendar screenshot and it works out when you are free, buffers and lunch removed.',
    url: 'https://mnledu.com/en/productivity/slot-coordinator_en.html',
    icon: 'calendar-clock',
    badge: 'NEW',
    tags: ['#scheduling', '#meetings', '#timezone', '#automation']
  },
  {
    id: 'notepad',
    title: 'Rich Text Notepad',
    category: 'PRODUCTIVITY',
    desc: 'Draft with basic formatting while character, word and byte counts update as you type.',
    url: 'https://mnledu.com/en/productivity/notepad_en.html',
    icon: 'notebook-pen',
    badge: 'BEST',
    tags: ['#writing', '#wordcount', '#copy', '#markdown']
  },
  {
    id: 'emailgen',
    title: 'Bulk Email Generator',
    category: 'PRODUCTIVITY',
    desc: 'Turn one template and a list of names into dozens of personalised messages at once.',
    url: 'https://mnledu.com/en/productivity/emailgen_en.html',
    icon: 'mail',
    badge: 'HOT',
    tags: ['#writing', '#template', '#mailmerge', '#bulk']
  },
  {
    id: 'templatemerger',
    title: 'Template Merger',
    category: 'PRODUCTIVITY',
    desc: 'Paste any list or table, write one sentence pattern, get every row filled in.',
    url: 'https://mnledu.com/en/productivity/templatemerger_en.html',
    icon: 'layout-template',
    badge: null,
    tags: ['#template', '#spreadsheet', '#bulk', '#automation']
  },
  {
    id: 'promptmerger',
    title: 'AI Prompt Merger',
    category: 'PRODUCTIVITY',
    desc: 'Combine several files into one prompt with clear boundaries and a token estimate.',
    url: 'https://mnledu.com/en/productivity/promptmerger_en.html',
    icon: 'files',
    badge: 'NEW',
    tags: ['#AI', '#text', '#copy', '#developer']
  },
  {
    id: 'listformat',
    title: 'Smart List Formatter',
    category: 'PRODUCTIVITY',
    desc: 'Deduplicate, sort, number and join a list, or add a prefix and suffix to every line.',
    url: 'https://mnledu.com/en/productivity/listformat_en.html',
    icon: 'list-ordered',
    badge: null,
    tags: ['#text', '#automation', '#list', '#copy']
  },
  {
    id: 'textclean',
    title: 'Text Cleaner',
    category: 'PRODUCTIVITY',
    desc: 'Strip stray spaces, line breaks, HTML tags and odd characters from copied text.',
    url: 'https://mnledu.com/en/productivity/textclean_en.html',
    icon: 'eraser',
    badge: null,
    tags: ['#text', '#automation', '#wordcount']
  },
  {
    id: 'anonymizer',
    title: 'Personal Data Redactor',
    category: 'PRODUCTIVITY',
    desc: 'Find and mask phone numbers, emails and ID numbers before you share or paste into AI.',
    url: 'https://mnledu.com/en/productivity/anonymizer_en.html',
    icon: 'shield-check',
    badge: 'NEW',
    tags: ['#privacy', '#text', '#automation', '#security']
  },
  {
    id: 'pdftxt',
    title: 'PDF Line Break Fixer',
    category: 'PRODUCTIVITY',
    desc: 'Rejoin text copied from a PDF so paragraphs read as paragraphs again.',
    url: 'https://mnledu.com/en/productivity/pdftxt_en.html',
    icon: 'wrap-text',
    badge: null,
    tags: ['#PDF', '#text', '#automation', '#research']
  },
  {
    id: 'pdfmerge',
    title: 'PDF Merge & Split',
    category: 'PRODUCTIVITY',
    desc: 'Combine PDFs or pull out selected pages without uploading anything anywhere.',
    url: 'https://mnledu.com/en/productivity/pdfmerge_en.html',
    icon: 'file-stack',
    badge: 'BEST',
    tags: ['#PDF', '#documents', '#offline']
  },
  {
    id: 'voicenote',
    title: 'Offline Voice Notes',
    category: 'PRODUCTIVITY',
    desc: 'Dictate notes locally, then optionally re-run the last recording through an on-device Whisper model for higher accuracy.',
    url: 'https://mnledu.com/en/productivity/voicenote_en.html',
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
    url: 'https://mnledu.com/en/data-analytics/cagrcal_en.html',
    icon: 'trending-up',
    badge: 'HOT',
    tags: ['#startup', '#businessplan', '#finance', '#forecast', '#spreadsheet']
  },
  {
    id: 'ocrextract',
    title: 'Image to Text (OCR)',
    category: 'DATA & ANALYTICS',
    desc: 'Pull text out of screenshots and scans, with an optional high-precision on-device AI engine and document layout detection.',
    url: 'https://mnledu.com/en/data-analytics/ocrextract_en.html',
    icon: 'scan-text',
    badge: null,
    tags: ['#OCR', '#image', '#text', '#offline']
  },
  {
    id: 'gov-fund-calc',
    title: 'Korean Grant Cost Share Calculator',
    category: 'DATA & ANALYTICS',
    desc: 'Korea-specific. Works out cash and in-kind cost share for Korean government R&D grants.',
    url: 'https://mnledu.com/en/data-analytics/gov-fund-calc_en.html',
    icon: 'calculator',
    badge: 'HOT',
    tags: ['#korea', '#startup', '#grants', '#businessplan', '#calculator']
  },
  {
    id: 'percent-calc',
    title: 'Margin & VAT Calculator',
    category: 'DATA & ANALYTICS',
    desc: 'Set a target margin, add tax and fees, and see the listing price and what you keep.',
    url: 'https://mnledu.com/en/data-analytics/percent-calc_en.html',
    icon: 'percent',
    badge: null,
    tags: ['#calculator', '#margin', '#pricing', '#tax']
  },

  /* ═══════════════ LIFESTYLE ═══════════════ */
  {
    id: 'birth-chart',
    title: 'Birth Chart Profiler',
    category: 'LIFESTYLE',
    desc: 'Reconstructs the sky at your birth time and place, with Ascendant, Midheaven, twelve Houses and major aspects.',
    url: 'https://mnledu.com/en/lifestyle/birth-chart_en.html',
    icon: 'orbit',
    badge: 'NEW',
    tags: ['#astrology', '#birthchart', '#personality', '#break']
  },
  {
    id: 'biorhythm',
    title: 'Healing Biorhythm Tracker',
    category: 'LIFESTYLE',
    desc: 'Enter your birthday and see where your physical, emotional and intellectual rhythms sit today.',
    url: 'https://mnledu.com/en/lifestyle/biorhythm_en.html',
    icon: 'activity',
    badge: 'NEW',
    tags: ['#wellness', '#mood', '#rhythm', '#break']
  },
  {
    id: 'food-picker',
    title: 'What Should I Eat?',
    category: 'LIFESTYLE',
    desc: 'Weather, company, mood and what comes after the meal narrow 224 dishes down to seven.',
    url: 'https://mnledu.com/en/lifestyle/food-picker_en.html',
    icon: 'utensils',
    badge: 'NEW',
    tags: ['#food', '#picker', '#lunch', '#break']
  },
  {
    id: 'saju-studio',
    title: 'Four Pillars Reading',
    category: 'LIFESTYLE',
    desc: 'An East Asian Four Pillars reading built from your birth date and time, read for strengths.',
    url: 'https://mnledu.com/en/lifestyle/saju-studio_en.html',
    icon: 'compass',
    badge: 'NEW',
    tags: ['#fortune', '#eastasian', '#personality', '#break']
  },
  {
    id: 'kstartup-board',
    title: 'This Week in K-Startup Funding',
    category: 'LIFESTYLE',
    desc: 'Korea-specific. This week\'s Korean government startup funding calls, sorted by closing date and filterable by region.',
    url: 'https://mnledu.com/en/lifestyle/kstartup-board_en.html',
    icon: 'layout-dashboard',
    badge: 'NEW',  // 시작 페이지 최상단 고정 (index.html 의 PINNED 섹션)
    tags: ['#korea', '#startup', '#funding', '#deadlines']
  },
  {
    id: 'youtubenote',
    title: 'YouTube Timestamp Notes',
    category: 'LIFESTYLE',
    desc: 'Take notes beside a video and drop in the current timestamp with one shortcut.',
    url: 'https://mnledu.com/en/lifestyle/youtubenote_en.html',
    icon: 'clapperboard',
    badge: 'NEW',
    tags: ['#video', '#study', '#notes', '#autosave']
  },
  {
    id: 'date-calc',
    title: 'Date & Age Calculator',
    category: 'LIFESTYLE',
    desc: 'Count days between dates, add days to a date, and check age or years of service.',
    url: 'https://mnledu.com/en/lifestyle/date-calc_en.html',
    icon: 'calendar-days',
    badge: 'NEW',
    tags: ['#date', '#calculator', '#deadline']
  },
  {
    id: 'unit-converter',
    title: 'Universal Unit Converter',
    category: 'LIFESTYLE',
    desc: 'Convert length, weight, area, volume and temperature, including US and metric units.',
    url: 'https://mnledu.com/en/lifestyle/unit-converter_en.html',
    icon: 'ruler',
    badge: null,
    tags: ['#units', '#calculator', '#imperial', '#metric']
  },
  {
    id: 'calculator',
    title: 'Smart Formula Calculator',
    category: 'LIFESTYLE',
    desc: 'Type a whole expression instead of tapping digits, and edit it while you go.',
    url: 'https://mnledu.com/en/lifestyle/calculator_en.html',
    icon: 'square-equal',
    badge: null,
    tags: ['#calculator', '#formula', '#offline']
  },
  {
    id: 'timezone-dial',
    title: 'Time Zone Dial',
    category: 'LIFESTYLE',
    desc: 'Line up several cities and scrub through the day to find a time that works for everyone.',
    url: 'https://mnledu.com/en/lifestyle/timezone-dial_en.html',
    icon: 'globe',
    badge: 'NEW',
    tags: ['#timezone', '#scheduling', '#remote']
  },
  {
    id: 'vocab-quiz',
    title: 'Flashcards & Quiz',
    category: 'LIFESTYLE',
    desc: 'Turn your own word list into flashcards and multiple choice questions, both directions.',
    url: 'https://mnledu.com/en/lifestyle/vocab-quiz_en.html',
    icon: 'graduation-cap',
    badge: 'NEW',
    tags: ['#study', '#flashcards', '#memory', '#exam']
  },

  /* ═══════════════ DESIGN & MEDIA ═══════════════ */
  {
    id: 'advanced-image-tailor',
    title: 'Advanced Image Tailor',
    category: 'DESIGN & MEDIA',
    desc: 'Fit a whole batch of images to the same canvas size at once, with a chosen fit mode and 9-point anchor, exported as one ZIP.',
    url: 'https://mnledu.com/en/design-media/advanced-image-tailor_en.html',
    icon: 'crop',
    badge: 'NEW',
    tags: ['#imageediting', '#crop', '#batch', '#thumbnail']
  },
  {
    id: 'vocal-rhythm-master-studio',
    title: 'Vocal & Rhythm Master Studio',
    category: 'DESIGN & MEDIA',
    desc: 'Scan your pitch live from the microphone and drill your own stroke pattern on the metronome, with vocal and backing-track recording.',
    url: 'https://mnledu.com/en/design-media/vocal-rhythm-master-studio_en.html',
    icon: 'mic',
    badge: 'NEW',
    tags: ['#vocaltraining', '#metronome', '#pitch', '#recording']
  },
  {
    id: 'thumb-mockup',
    title: 'Thumbnail & Shorts Preview Simulator',
    category: 'DESIGN & MEDIA',
    desc: 'See what the duration badge, progress bar and Shorts icon column cover, and where your title gets truncated.',
    url: 'https://mnledu.com/en/design-media/thumb-mockup_en.html',
    icon: 'monitor-play',
    badge: 'NEW',
    tags: ['#thumbnail', '#youtube', '#shorts', '#preview']
  },
  {
    id: 'uploader-toolkit',
    title: 'Uploader Toolkit',
    category: 'DESIGN & MEDIA',
    desc: 'Pick a date and your title and filename build themselves from your own rules, plus reusable description blocks.',
    url: 'https://mnledu.com/en/design-media/uploader-toolkit_en.html',
    icon: 'upload',
    badge: 'NEW',
    tags: ['#upload', '#youtube', '#template', '#automation']
  },
  {
    id: 'image-studio',
    title: 'All-in-One Photo Studio',
    category: 'PRODUCTIVITY',
    desc: 'Crop, rotate, resize and clear backgrounds entirely in your browser, with instant results and an AI cutout mode.',
    url: 'https://mnledu.com/en/productivity/image-studio_en.html',
    icon: 'image',
    badge: 'NEW',
    tags: ['#imageediting', '#backgroundremoval', '#crop', '#AI']
  },
  {
    id: 'screendeco',
    title: 'Screenshot Beautifier',
    category: 'DESIGN & MEDIA',
    desc: 'Add background, padding, rounded corners and a window bar to plain screenshots.',
    url: 'https://mnledu.com/en/design-media/screendeco_en.html',
    icon: 'frame',
    badge: 'HOT',
    tags: ['#image', '#slides', '#mockup', '#screenshot']
  },
  {
    id: 'mosaicmarker',
    title: 'Blur & Highlight Tool',
    category: 'DESIGN & MEDIA',
    desc: 'Pixelate sensitive details or highlight a region, all inside your browser.',
    url: 'https://mnledu.com/en/design-media/mosaicmarker_en.html',
    icon: 'highlighter',
    badge: null,
    tags: ['#image', '#privacy', '#screenshot', '#slides']
  },
  {
    id: 'teleprompter',
    title: 'Browser Teleprompter',
    category: 'DESIGN & MEDIA',
    desc: 'Scroll your script at a set pace so you can keep looking at the camera.',
    url: 'https://mnledu.com/en/design-media/teleprompter_en.html',
    icon: 'scroll-text',
    badge: null,
    tags: ['#video', '#presenting', '#recording', '#markdown']
  },

  /* ═══════════════ ENTERTAINMENT ═══════════════ */
  {
    id: 'balance-game',
    title: 'Balance Game Machine',
    category: 'ENTERTAINMENT',
    desc: 'Deals out impossible either-or questions. Add your own or paste in a batch generated by AI.',
    url: 'https://mnledu.com/en/entertainment/balance-game_en.html',
    icon: 'scale',
    badge: 'NEW',
    tags: ['#wouldyourather', '#picker', '#party', '#break']
  },
  {
    id: 'fashion-detector',
    title: 'Fashion Police',
    category: 'ENTERTAINMENT',
    desc: 'Upload a full-length photo and it judges your top, bottom and shoe colours. Fifty tongue-in-cheek verdicts.',
    url: 'https://mnledu.com/en/entertainment/fashion-detector_en.html',
    icon: 'shirt',
    badge: 'NEW',
    tags: ['#fashion', '#color', '#fun', '#break']
  },
  {
    id: 'aggro-match',
    title: 'Aggro Match',
    category: 'ENTERTAINMENT',
    desc: 'Paste your candidate titles and it pits them head to head until one is left standing.',
    url: 'https://mnledu.com/en/entertainment/aggro-match_en.html',
    icon: 'swords',
    badge: 'NEW',
    tags: ['#titles', '#bracket', '#picker', '#break']
  },
  {
    id: 'tetris',
    title: 'Block Stacker',
    category: 'ENTERTAINMENT',
    desc: 'Rotate falling blocks and clear full rows. Ghost piece and themes included.',
    url: 'https://mnledu.com/en/entertainment/tetris_en.html',
    icon: 'gamepad-2',
    badge: 'NEW',
    tags: ['#game', '#break', '#offline']
  },
  {
    id: 'sudoku',
    title: 'Sudoku',
    category: 'ENTERTAINMENT',
    desc: 'Four difficulty levels with optional error checking and highlight helpers.',
    url: 'https://mnledu.com/en/entertainment/sudoku_en.html',
    icon: 'grid-3x3',
    badge: 'NEW',
    tags: ['#game', '#puzzle', '#break', '#offline']
  },
  {
    id: 'snake',
    title: 'Snake',
    category: 'ENTERTAINMENT',
    desc: 'Eat, grow, and try not to run into yourself. Wall wrap can be turned on or off.',
    url: 'https://mnledu.com/en/entertainment/snake_en.html',
    icon: 'worm',
    badge: 'NEW',
    tags: ['#game', '#break', '#offline', '#mobile']
  },
  {
    id: 'minesweeper',
    title: 'Minesweeper',
    category: 'ENTERTAINMENT',
    desc: 'Deduce where the mines are from the numbers. Custom board sizes supported.',
    url: 'https://mnledu.com/en/entertainment/minesweeper_en.html',
    icon: 'bomb',
    badge: 'NEW',
    tags: ['#game', '#puzzle', '#break', '#offline']
  },
  {
    id: 'tarot',
    title: 'Tarot Reading',
    category: 'ENTERTAINMENT',
    desc: 'Draw one card for the day or three for past, present and future. Just for fun.',
    url: 'https://mnledu.com/en/entertainment/tarot_en.html',
    icon: 'sparkles',
    badge: 'NEW',
    tags: ['#fortune', '#tarot', '#break']
  },
  {
    id: 'neon-ladder',
    title: 'Ladder Lottery',
    category: 'ENTERTAINMENT',
    desc: 'The amidakuji style draw. Assign roles or split a bill with a random ladder.',
    url: 'https://mnledu.com/en/entertainment/neon-ladder_en.html',
    icon: 'waypoints',
    badge: 'NEW',
    tags: ['#game', '#group', '#random', '#draw']
  },
  {
    id: 'horse-race',
    title: 'Horse Race Picker',
    category: 'ENTERTAINMENT',
    desc: 'Race a horse per person to settle an order or split a bill, with a few seconds of suspense.',
    url: 'https://mnledu.com/en/entertainment/horse-race_en.html',
    icon: 'trophy',
    badge: 'NEW',
    tags: ['#game', '#group', '#random', '#picker']
  },
  {
    id: 'lotto',
    title: 'Lottery Number Generator',
    category: 'ENTERTAINMENT',
    desc: 'Powerball and Mega Millions by default, with include and exclude numbers.',
    url: 'https://mnledu.com/en/entertainment/lotto_en.html',
    icon: 'clover',
    badge: 'NEW',
    tags: ['#random', '#lottery', '#powerball', '#megamillions']
  },
  {
    id: 'russian-roulette',
    title: 'Random Picker Roulette',
    category: 'ENTERTAINMENT',
    desc: 'Six chambers, one marked. Pick who goes first or who gets the task.',
    url: 'https://mnledu.com/en/entertainment/russian-roulette_en.html',
    icon: 'dices',
    badge: 'NEW',
    tags: ['#game', '#group', '#random', '#break']
  },

  {
    id: 'presentation-timer',
    title: 'Presentation Timer',
    category: 'PRODUCTIVITY',
    desc: 'Runs talk and Q&A as one flow, counts overtime, and recalculates the expected time for every remaining slot.',
    url: 'https://mnledu.com/en/productivity/presentation-timer_en.html',
    icon: 'timer',
    badge: 'NEW',
    tags: ['#presenting', '#timer', '#meetings', '#agenda']
  }
];

if (typeof window !== 'undefined') window.TOOLS_DATA = TOOLS_DATA_EN;
if (typeof module !== 'undefined' && module.exports) module.exports = TOOLS_DATA_EN;
