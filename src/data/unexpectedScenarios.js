export const UNEXPECTED_SCENARIOS = [
  {
    id: 'new1',
    title: 'The fire alarm goes off',
    situation: 'You\'re in the library reading. Suddenly, a loud alarm starts beeping and a voice says "Please exit the building."',
    image: '🔥🚨',
    principles: ['safety', 'patience'],
    choices: [
      {
        text: 'Cover your ears, look for the teacher, and follow the line outside',
        isCorrect: true,
        feedback: '⭐ Perfect! You kept yourself safe by covering your ears (the alarm is loud!), you found an adult, and you followed directions. Fire drills can be surprising, but you handled it!',
        principlesUsed: ['safety', 'patience']
      },
      {
        text: 'Run outside as fast as you can by yourself',
        isCorrect: false,
        feedback: '💭 You had the right idea to go outside, but going alone isn\'t safe. Teachers need to make sure everyone is accounted for. Stay with your group so adults know you\'re okay.',
        principle: 'safety'
      },
      {
        text: 'Hide under the table because the noise is scary',
        isCorrect: false,
        feedback: '💭 The loud noise IS scary! But fire alarms mean everyone needs to leave the building. You can cover your ears while you walk outside with your group.',
        principle: 'safety'
      }
    ]
  },
  {
    id: 'new2',
    title: 'Someone speaks a language you don\'t understand',
    situation: 'A new student comes up to you and says something, but it\'s in a different language. They look like they need something.',
    image: '🗣️❓',
    principles: ['words', 'help'],
    choices: [
      {
        text: 'Smile, and say "I don\'t understand. Let me find someone who can help."',
        isCorrect: true,
        feedback: '⭐ Wonderful! You stayed friendly and asked for help. A smile works in every language! Finding someone who can translate helps both of you.',
        principlesUsed: ['words', 'help']
      },
      {
        text: 'Walk away because you can\'t understand them',
        isCorrect: false,
        feedback: '💭 When someone talks to you, walking away can hurt their feelings. You can smile and try to find an adult who speaks their language or use simple gestures.',
        principle: 'words'
      },
      {
        text: 'Laugh because it sounds funny',
        isCorrect: false,
        feedback: '💭 Different languages might sound unfamiliar, but laughing makes people feel bad. Everyone\'s language is important to them. A friendly smile is better than a laugh.',
        principle: 'words'
      }
    ]
  },
  {
    id: 'new3',
    title: 'Your routine changes suddenly',
    situation: 'You always have art class on Tuesday, but today your teacher says "Today we\'re having a special assembly instead of art."',
    image: '📅❌',
    principles: ['patience', 'words'],
    choices: [
      {
        text: 'Take 3 deep breaths and ask "What will happen at the assembly?"',
        isCorrect: true,
        feedback: '⭐ Excellent! Changes can feel uncomfortable, but deep breaths help your body calm down. Asking questions helps you know what to expect.',
        principlesUsed: ['patience', 'words']
      },
      {
        text: 'Get very upset and refuse to go',
        isCorrect: false,
        feedback: '💭 Changes can feel frustrating, especially when you were looking forward to art. But saying "I don\'t like changes" is better than refusing. Teachers can help you feel better about new plans.',
        principle: 'patience'
      },
      {
        text: 'Say nothing but feel confused all day',
        isCorrect: false,
        feedback: '💭 Keeping confusion inside makes you feel worse. Asking "What will we do instead?" helps you prepare. Teachers want to help you understand!',
        principle: 'words'
      }
    ]
  },
  {
    id: 'new4',
    title: 'Someone is doing something you\'ve never seen',
    situation: 'At the park, you see a kid using a wheelchair basketball hoop that\'s lower than regular hoops.',
    image: '♿🏀',
    principles: ['space', 'words'],
    choices: [
      {
        text: 'Watch politely from a distance, then ask "That looks fun, how does it work?"',
        isCorrect: true,
        feedback: '⭐ Perfect! You gave them space, showed interest respectfully, and used friendly words. People like to share what they enjoy!',
        principlesUsed: ['space', 'words']
      },
      {
        text: 'Stare at them without saying anything',
        isCorrect: false,
        feedback: '💭 Staring can make people uncomfortable. If you\'re curious, it\'s better to ask a friendly question like "Can I watch you play?" with a smile.',
        principle: 'words'
      },
      {
        text: 'Point and say loudly "Why is your hoop different?"',
        isCorrect: false,
        feedback: '💭 Curiosity is good, but loud questions or pointing can embarrass people. A quiet, friendly question works better: "How does your hoop work? It looks cool!"',
        principle: 'space'
      }
    ]
  },
  {
    id: 'new5',
    title: 'You make a mistake in front of people',
    situation: 'You\'re giving a presentation to your class and you forget what to say next. Everyone is looking at you.',
    image: '😳👥',
    principles: ['help', 'patience'],
    choices: [
      {
        text: 'Take a breath and say "I lost my place. Can I look at my notes?"',
        isCorrect: true,
        feedback: '⭐ Brave choice! Everyone forgets things sometimes, even adults. Asking for help shows strength, not weakness. Your classmates understand!',
        principlesUsed: ['help', 'patience']
      },
      {
        text: 'Run out of the room',
        isCorrect: false,
        feedback: '💭 Forgetting feels embarrassing, but running makes it bigger than it is. Everyone forgets! Pausing and checking your notes is normal and okay.',
        principle: 'help'
      },
      {
        text: 'Stand silently and hope someone rescues you',
        isCorrect: false,
        feedback: '💭 Silent hoping is hard! Using your words - "I need a moment" or "Can I start this part over?" - helps you take control. Your teacher wants to help!',
        principle: 'words'
      }
    ]
  }
];
