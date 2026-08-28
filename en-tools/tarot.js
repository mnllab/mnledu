module.exports = {
  id: 'tarot',

  patches: [
    ["const POS1 = ['오늘의 카드'];", "const POS1 = ['Today'];"],
    ["const POS3 = ['과 거', '현 재', '미 래'];", "const POS3 = ['PAST', 'PRESENT', 'FUTURE'];"]
  ],

  strings: [
    ["ko:'바보'", "ko:'The Fool'"],
    ["ko:'마법사'", "ko:'The Magician'"],
    ["ko:'여사제'", "ko:'The High Priestess'"],
    ["ko:'여황제'", "ko:'The Empress'"],
    ["ko:'황제'", "ko:'The Emperor'"],
    ["ko:'교황'", "ko:'The Hierophant'"],
    ["ko:'연인'", "ko:'The Lovers'"],
    ["ko:'전차'", "ko:'The Chariot'"],
    ["ko:'힘'", "ko:'Strength'"],
    ["ko:'은둔자'", "ko:'The Hermit'"],
    ["ko:'운명의 수레바퀴'", "ko:'Wheel of Fortune'"],
    ["ko:'정의'", "ko:'Justice'"],
    ["ko:'매달린 사람'", "ko:'The Hanged Man'"],
    ["ko:'죽음'", "ko:'Death'"],
    ["ko:'절제'", "ko:'Temperance'"],
    ["ko:'악마'", "ko:'The Devil'"],
    ["ko:'탑'", "ko:'The Tower'"],
    ["ko:'별'", "ko:'The Star'"],
    ["ko:'달'", "ko:'The Moon'"],
    ["ko:'태양'", "ko:'The Sun'"],
    ["ko:'심판'", "ko:'Judgement'"],
    ["ko:'세계'", "ko:'The World'"],
    ['시작 · 순수 · 모험', 'Beginnings · innocence · adventure'],
    ['의지 · 재능 · 실행', 'Will · talent · execution'],
    ['직관 · 침묵 · 내면', 'Intuition · silence · the inner life'],
    ['풍요 · 돌봄 · 결실', 'Abundance · care · harvest'],
    ['질서 · 권위 · 기반', 'Order · authority · foundation'],
    ['가르침 · 전통 · 조언', 'Teaching · tradition · counsel'],
    ['선택 · 관계 · 조화', 'Choice · relationship · harmony'],
    ['전진 · 통제 · 승리', 'Momentum · control · victory'],
    ['용기 · 인내 · 부드러움', 'Courage · patience · gentleness'],
    ['성찰 · 고독 · 탐구', 'Reflection · solitude · enquiry'],
    ['전환 · 순환 · 기회', 'Turning · cycles · opportunity'],
    ['균형 · 판단 · 책임', 'Balance · judgement · responsibility'],
    ['멈춤 · 전환의 시선 · 희생', 'Pause · a changed view · sacrifice'],
    ['끝맺음 · 변형 · 새 출발', 'Endings · transformation · a fresh start'],
    ['조율 · 중용 · 치유', 'Moderation · balance · healing'],
    ['집착 · 유혹 · 속박', 'Attachment · temptation · constraint'],
    ['붕괴 · 각성 · 해방', 'Collapse · awakening · release'],
    ['희망 · 영감 · 회복', 'Hope · inspiration · recovery'],
    ['불안 · 환상 · 무의식', 'Unease · illusion · the unconscious'],
    ['성취 · 활력 · 명료함', 'Achievement · vitality · clarity'],
    ['부름 · 결산 · 거듭남', 'A calling · reckoning · renewal'],
    ['완성 · 통합 · 귀환', 'Completion · integration · return'],
    ['아직 아무것도 정해지지 않았습니다. 계산보다 마음이 앞서는 시기이니, 서툴러도 첫발을 내딛는 편이 낫습니다. 잃을 것이 적을수록 배울 것은 많아집니다.', 'Nothing is settled yet. This is a moment where instinct runs ahead of calculation, so taking a clumsy first step is better than not moving. The less there is to lose, the more there is to learn.'],
    ['필요한 도구는 이미 손안에 있습니다. 부족한 것은 자원이 아니라 결심입니다. 지금 시작하면 뜻대로 형태를 만들 수 있습니다.', 'You already hold what you need. What is missing is not resource but resolve. Begin now and the thing will take the shape you intend.'],
    ['서둘러 답을 내지 마십시오. 겉으로 드러난 것보다 감춰진 쪽이 진실에 가깝습니다. 조용히 기다리면 스스로 알게 됩니다.', 'Do not rush to an answer. What is hidden sits closer to the truth than what is on show. Wait quietly and you will come to know it yourself.'],
    ['공들인 것이 열매를 맺는 자리입니다. 자신과 주변을 넉넉히 돌보십시오. 베푼 만큼 돌아오는 흐름 위에 서 있습니다.', 'This is where the work you put in bears fruit. Look after yourself and those around you generously. You are on a current that returns what you give.'],
    ['느슨한 것을 다잡을 때입니다. 원칙과 구조를 세우면 흔들리던 일이 자리를 잡습니다. 책임을 피하지 않는 쪽이 유리합니다.', 'Time to tighten what has gone slack. Set the principles and the structure, and what was wobbling settles. Not ducking responsibility is the stronger position.'],
    ['혼자 해결하려 애쓰기보다 앞서간 이의 말에 귀 기울이십시오. 검증된 방식이 지름길일 때가 있습니다.', 'Rather than struggling alone, listen to someone who has been here before. A tested method is sometimes the shortcut.'],
    ['둘 중 하나를 골라야 하는 시기입니다. 이해득실보다 무엇을 사랑하는지가 답을 알려줍니다. 마음이 기우는 쪽에 진심이 있습니다.', 'A choice between two things is due. What you care about will answer it better than a calculation of gains. The side you lean towards is where your honesty is.'],
    ['방향만 정해지면 속도는 이미 갖췄습니다. 상반된 힘을 한 손에 쥐고 밀고 나가면 원하는 곳에 닿습니다.', 'Settle the direction and the speed is already there. Hold the opposing forces in one hand, push on, and you arrive where you meant to.'],
    ['억누르는 힘이 아니라 다독이는 힘이 필요합니다. 조급함을 달래며 버티면 사나운 상황도 결국 순해집니다.', 'What is needed is the strength that soothes, not the strength that suppresses. Settle your impatience and hold on, and even a fierce situation grows tame.'],
    ['물러나 홀로 있는 시간이 헛되지 않습니다. 등불은 멀리가 아니라 발밑을 비춥니다. 한 걸음만 보고 가면 됩니다.', 'Time spent withdrawn and alone is not wasted. A lantern lights the ground at your feet rather than the distance. Seeing one step ahead is enough.'],
    ['흐름이 바뀌는 지점에 서 있습니다. 붙잡으려 할수록 어긋나니, 변화를 받아들이면 오히려 유리해집니다.', 'You are standing where the current turns. The harder you grip, the more it slips. Accepting the change is what puts you ahead.'],
    ['감정을 걷어내고 사실만 저울에 올리십시오. 뿌린 대로 정확히 돌아옵니다. 지금의 선택이 훗날의 근거가 됩니다.', 'Clear the feeling away and weigh only the facts. What you sowed returns exactly. The choice you make now becomes the reason you cite later.'],
    ['지금은 나아갈 때가 아니라 다르게 볼 때입니다. 한 발 물러서면 뒤집혀 있던 답이 제자리를 찾습니다.', 'This is not a time to advance but to look differently. Step back and the answer that seemed upside down rights itself.'],
    ['끝이라는 말에 놀라지 마십시오. 무언가를 정리해야 다음이 들어옵니다. 놓아주는 것이 이번 국면의 과제입니다.', 'Do not be alarmed by the word ending. Something has to be cleared before the next thing can arrive. Letting go is the task of this phase.'],
    ['양쪽을 섞어 알맞은 온도를 만드는 시기입니다. 극단으로 기울지 않으면 지친 마음도 서서히 회복됩니다.', 'A time for blending both sides into the right temperature. Avoid the extremes and a tired mind recovers gradually.'],
    ['묶여 있다고 느끼지만 사슬은 헐겁습니다. 무엇에 매여 있는지 이름을 붙이는 순간 힘이 빠지기 시작합니다.', 'You feel bound, but the chain is loose. The moment you name what holds you, its grip begins to weaken.'],
    ['예상 못 한 균열이 생길 수 있습니다. 다만 무너지는 것은 애초에 기울어 있던 것입니다. 그 자리에 더 단단한 것을 세우게 됩니다.', 'An unexpected crack may open. What falls, though, was already leaning. In its place you will build something sturdier.'],
    ['어두운 시기를 지나 숨을 고르는 자리입니다. 조용하지만 분명한 빛이 있으니, 바라는 바를 다시 말해도 좋습니다.', 'Past the dark stretch, a place to catch your breath. The light is quiet but unmistakable, so it is fine to say what you want again.'],
    ['보이는 것이 전부가 아닙니다. 막연한 두려움과 실제 위험을 구분하십시오. 날이 밝기 전까지는 큰 결정을 미루는 편이 낫습니다.', 'What you can see is not all of it. Separate vague fear from actual risk. Better to hold off any large decision until it is light.'],
    ['감췄던 것이 환하게 드러나고 결과가 분명해집니다. 자신을 낮추지 말고 있는 그대로 내보이십시오.', 'What was concealed comes clearly into view and the outcome sharpens. Do not diminish yourself; show things as they are.'],
    ['지나온 시간을 매듭짓고 답해야 할 때입니다. 미뤄둔 일이 다시 찾아오니, 이번에는 정면으로 마주하십시오.', 'Time to tie off what has passed and answer for it. What you postponed comes back around, so meet it directly this time.'],
    ['하나의 여정이 마무리됩니다. 충분히 해냈으니 스스로를 인정하십시오. 닫힘과 동시에 다음 문이 열립니다.', 'One journey closes. You have done enough, so give yourself the credit. As it shuts, the next door opens.'],
    ['마음속으로 질문을 떠올리고 카드를 고르세요', 'Hold a question in mind and choose a card'],
    ['마음속으로 질문을 떠올리고 한 장을 고르세요', 'Hold a question in mind and choose one card'],
    ['과거 · 현재 · 미래 순으로 세 장을 고르세요', 'Choose three cards, for past, present and future'],
    ['카드가 모두 열렸습니다', 'All cards are turned'],
    ['오늘의 운세 · 1장', "Today's card · one"],
    ['과거 · 현재 · 미래 · 3장', 'Past, present, future · three'],
    ['카드 다시 보기', 'See the cards again'],
    ['새로운 리딩', 'New reading'],
    ['다시 섞기', 'Shuffle again'],
    ['해석 보기', 'Read them'],
    ['타로 카드 리딩', 'Tarot Reading'],
    ["'지나온 자리에서 지금에 이르렀고, 앞으로는 「' + last.ko + '」의 기운이 다가옵니다. '",
     "'From where you have been to where you are now, and ahead of you the character of ' + last.ko + '. '"],
    ['세 장을 한 줄로 읽어 보면 흐름이 보입니다.', 'Read the three in a line and the shape of it appears.'],
    ["'아직 ' + (need - picked.length) + '장 남았습니다'", "(need - picked.length) + ' still to choose'"]
  ],

  guide: {
    intro: {
      h: 'Cards as a prompt rather than a prediction',
      p: [
        'Tarot is more useful as a way of turning something over than as a forecast. Reading what a card is said to mean nudges you into looking at your situation from an angle you had not tried.',
        'This deck draws either a single card for the day or three for past, present and future. Cards come up at random, and it is meant to be taken lightly.'
      ]
    },
    uses: [
      { t: 'Starting the day', d: 'One card in the morning as a thought to carry around.' },
      { t: 'Working something out', d: 'A different angle on a question that has been going in circles.' },
      { t: 'With other people', d: 'Taking turns to draw and talk about what comes up.' }
    ],
    steps: [
      'Choose a spread: one card or three.',
      'Draw.',
      'Press <strong>Read them</strong> for the interpretation.'
    ],
    options: [
      { t: "Today's card", d: 'A single card as a theme for the day.' },
      { t: 'Past, present, future', d: 'Three cards read as a sequence.' },
      { t: 'Shuffle again', d: 'Reshuffles and draws afresh.' }
    ],
    faq: [
      { q: 'Are the results fixed', a: 'No, cards are drawn at random. The same question will give you something different each time.' },
      { q: 'Should I use this for real decisions', a: 'Please take it as entertainment. Base actual decisions on facts and evidence.' },
      { q: 'Which deck is this', a: 'The 22 major arcana of the Rider-Waite-Smith deck, whose imagery is in the public domain.' }
    ]
  }
};
