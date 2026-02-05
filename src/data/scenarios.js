export const LOCATIONS = {
  supermarket: {
    name: 'Supermarket',
    icon: '🛒',
    color: 'bg-green-100',
    borderColor: 'border-green-300',
    scenarios: [
      {
        id: 1,
        title: 'Someone is blocking the aisle',
        situation: 'You need to get pasta, but someone is standing right in front of the pasta shelf with their cart.',
        image: '🚶‍♀️🛒',
        principles: ['words', 'space'],
        choices: [
          {
            text: 'Say "Excuse me, may I get through please?"',
            isCorrect: true,
            feedback: '⭐ Perfect! Using polite words like "excuse me" and "please" helps people understand you need space. Most people will smile and move their cart.',
            tool: 'Polite Words',
            principlesUsed: ['words']
          },
          {
            text: 'Try to squeeze past them without saying anything',
            isCorrect: false,
            feedback: '💭 This might work, but the person doesn\'t know you\'re there. They might accidentally bump you with their cart. Using words is safer and clearer.',
            principle: 'words'
          },
          {
            text: 'Wait silently and hope they notice you',
            isCorrect: false,
            feedback: '💭 Waiting is polite, but people often don\'t notice when someone is behind them. It\'s okay to use your voice to ask for help.',
            principle: 'words'
          }
        ]
      },
      {
        id: 2,
        title: 'You accidentally bump into someone',
        situation: 'You were looking at the cereal boxes and didn\'t see someone walking behind you. You stepped back and bumped them.',
        image: '😮🙊',
        principles: ['words', 'space'],
        choices: [
          {
            text: 'Say "I\'m sorry, I didn\'t see you"',
            isCorrect: true,
            feedback: '⭐ Great job! Saying sorry shows you didn\'t mean to bump them. Most people will say "That\'s okay!" and everyone feels better.',
            tool: 'Sorry Words',
            principlesUsed: ['words']
          },
          {
            text: 'Walk away quickly',
            isCorrect: false,
            feedback: '💭 Walking away might make the person think you bumped them on purpose. A quick "sorry" helps them know it was an accident.',
            principle: 'words'
          },
          {
            text: 'Freeze and don\'t say anything',
            isCorrect: false,
            feedback: '💭 It\'s okay to feel surprised, but the other person might feel confused. A simple "sorry" helps everyone understand what happened.',
            principle: 'words'
          }
        ]
      }
    ]
  },
  restaurant: {
    name: 'Restaurant',
    icon: '🍽️',
    color: 'bg-orange-100',
    borderColor: 'border-orange-300',
    scenarios: [
      {
        id: 3,
        title: 'The waiter asks for your order',
        situation: 'The waiter comes to your table with a notepad and says "What would you like to order?"',
        image: '👨‍🍳📝',
        principles: ['words'],
        choices: [
          {
            text: 'Point at the menu picture',
            isCorrect: false,
            feedback: '💭 Pointing can help, but the waiter might not see exactly where you\'re pointing. Using words together with pointing works best.',
            principle: 'words'
          },
          {
            text: 'Say "I would like the chicken nuggets, please"',
            isCorrect: true,
            feedback: '⭐ Excellent! You said what you want clearly and used "please." The waiter knows exactly what to bring you.',
            tool: 'Clear Voice',
            principlesUsed: ['words']
          },
          {
            text: 'Say "Anything is fine"',
            isCorrect: false,
            feedback: '💭 The waiter needs to know what food you actually want. It\'s okay to choose! You can say the name of the food you like.',
            principle: 'words'
          }
        ]
      },
      {
        id: 4,
        title: 'Your food is taking a long time',
        situation: 'You ordered 15 minutes ago. Other people have their food but yours hasn\'t arrived yet.',
        image: '⏰🍽️',
        principles: ['help', 'patience'],
        choices: [
          {
            text: 'Wait quietly and don\'t say anything',
            isCorrect: false,
            feedback: '💭 Waiting is good, but sometimes the kitchen makes mistakes. It\'s okay to ask politely about your food after 15 minutes.',
            principle: 'help'
          },
          {
            text: 'Ask an adult "Can we check on our food, please?"',
            isCorrect: true,
            feedback: '⭐ Perfect! Asking an adult for help is smart. They can talk to the waiter and find out about your food. Restaurants want to help!',
            tool: 'Ask for Help',
            principlesUsed: ['help', 'words']
          },
          {
            text: 'Get upset and leave the table',
            isCorrect: false,
            feedback: '💭 It\'s frustrating to wait, but leaving won\'t get your food faster. Asking about it with calm words is the quickest way to solve the problem.',
            principle: 'patience'
          }
        ]
      }
    ]
  },
  playground: {
    name: 'Playground',
    icon: '🎪',
    color: 'bg-purple-100',
    borderColor: 'border-purple-300',
    scenarios: [
      {
        id: 5,
        title: 'The swing is taken',
        situation: 'You want to swing, but another child is using the only swing available.',
        image: '🧒🎪',
        principles: ['words', 'space', 'patience'],
        choices: [
          {
            text: 'Walk up and push them off',
            isCorrect: false,
            feedback: '💭 Pushing hurts and scares people. Everyone deserves to feel safe. Using words is always better than using hands to push.',
            principle: 'safety'
          },
          {
            text: 'Ask "Can I have a turn after you?"',
            isCorrect: true,
            feedback: '⭐ Perfect! Asking for a turn means everyone gets to play. The other child knows you\'re waiting and will probably swing for a few more minutes then let you have a turn.',
            tool: 'Turn-Taking',
            principlesUsed: ['words', 'patience']
          },
          {
            text: 'Stand very close and stare at them',
            isCorrect: false,
            feedback: '💭 Standing too close can make people uncomfortable. It\'s better to stand a few steps away and use words to ask for a turn.',
            principle: 'space'
          }
        ]
      },
      {
        id: 6,
        title: 'Someone wants to play your game',
        situation: 'You\'re playing with a ball. Another child comes over and asks "Can I play too?"',
        image: '⚽👫',
        principles: ['words'],
        choices: [
          {
            text: 'Say "No" and walk away with the ball',
            isCorrect: false,
            feedback: '💭 It\'s okay if you want to play alone sometimes, but you can say it in a kinder way like "I want to play by myself right now." That helps them understand.',
            principle: 'words'
          },
          {
            text: 'Say "Sure! We can take turns kicking"',
            isCorrect: true,
            feedback: '⭐ Wonderful! Sharing and taking turns means both people have fun. You might even make a new friend!',
            tool: 'Sharing Skills',
            principlesUsed: ['words']
          },
          {
            text: 'Ignore them and keep playing',
            isCorrect: false,
            feedback: '💭 When someone talks to you, they feel sad if you don\'t answer. Even if you want to play alone, it\'s kind to say "Not right now, thank you."',
            principle: 'words'
          }
        ]
      }
    ]
  },
  hospital: {
    name: 'Waiting Room',
    icon: '🏥',
    color: 'bg-blue-100',
    borderColor: 'border-blue-300',
    scenarios: [
      {
        id: 7,
        title: 'The waiting room is full',
        situation: 'You arrive at the doctor\'s office. The waiting room has many people sitting quietly. There are a few empty chairs.',
        image: '🪑👨‍⚕️',
        principles: ['space', 'patience'],
        choices: [
          {
            text: 'Run around and touch things',
            isCorrect: false,
            feedback: '💭 People in waiting rooms might not feel well. Quiet activities help everyone feel calm. Some people need rest before seeing the doctor.',
            principle: 'space'
          },
          {
            text: 'Sit in a chair and do a quiet activity (read, draw, or look at your tablet)',
            isCorrect: true,
            feedback: '⭐ Perfect choice! Quiet activities in waiting rooms help you pass the time and keep the space calm for others who might not feel well.',
            tool: 'Calm Waiting',
            principlesUsed: ['space', 'patience']
          },
          {
            text: 'Talk loudly to everyone in the room',
            isCorrect: false,
            feedback: '💭 In waiting rooms, people often don\'t feel well or need quiet. Soft voices or whispers work better here than loud talking.',
            principle: 'space'
          }
        ]
      },
      {
        id: 8,
        title: 'You feel anxious about the doctor',
        situation: 'You\'re waiting for your checkup. Your body feels tense and your mind is racing with worried thoughts.',
        image: '😰🏥',
        principles: ['words', 'help'],
        choices: [
          {
            text: 'Tell an adult "I feel nervous"',
            isCorrect: true,
            feedback: '⭐ Excellent! Naming your feelings helps adults understand and support you. They can help you feel calmer and explain what will happen.',
            tool: 'Feelings Words',
            principlesUsed: ['words', 'help']
          },
          {
            text: 'Try to hide your feelings and say nothing',
            isCorrect: false,
            feedback: '💭 It\'s very hard to hide big feelings. Adults want to help! Telling them how you feel means they can make things easier for you.',
            principle: 'words'
          },
          {
            text: 'Run out of the waiting room',
            isCorrect: false,
            feedback: '💭 Running away feels like it will help, but then you miss your checkup. Talking about worried feelings is a better way to feel better.',
            principle: 'safety'
          }
        ]
      }
    ]
  },
  school: {
    name: 'School Hallway',
    icon: '🏫',
    color: 'bg-yellow-100',
    borderColor: 'border-yellow-300',
    scenarios: [
      {
        id: 9,
        title: 'Walking in the hallway line',
        situation: 'Your class is walking in a line to the library. You\'re right behind another student.',
        image: '👫➡️',
        principles: ['space'],
        choices: [
          {
            text: 'Keep about one arm\'s length of space behind them',
            isCorrect: true,
            feedback: '⭐ Great job! One arm\'s length is the perfect distance. Not too close, not too far. Everyone has their own bubble of space.',
            tool: 'Personal Space',
            principlesUsed: ['space']
          },
          {
            text: 'Walk very close and touch their backpack',
            isCorrect: false,
            feedback: '💭 Being too close makes people uncomfortable. Imagine your own space bubble - you want about one arm\'s length around you. So does everyone else!',
            principle: 'space'
          },
          {
            text: 'Stop walking and look at things in the hallway',
            isCorrect: false,
            feedback: '💭 Stopping breaks the line and the people behind you can\'t move forward. If you see something interesting, you can remember to ask your teacher about it later.',
            principle: 'patience'
          }
        ]
      },
      {
        id: 10,
        title: 'Someone bumps your shoulder',
        situation: 'The hallway is crowded. Another student accidentally bumps your shoulder while walking past.',
        image: '🚶‍♂️💥',
        principles: ['patience'],
        choices: [
          {
            text: 'Understand it was an accident and keep walking',
            isCorrect: true,
            feedback: '⭐ Perfect! In crowded hallways, little bumps happen by accident. If the person didn\'t mean to hurt you and you\'re not hurt, it\'s okay to let it go.',
            tool: 'Understanding Accidents',
            principlesUsed: ['patience']
          },
          {
            text: 'Push them back hard',
            isCorrect: false,
            feedback: '💭 Pushing back can hurt someone and get you in trouble. Most bumps in hallways are accidents, not on purpose. It\'s okay to let small accidents go.',
            principle: 'safety'
          },
          {
            text: 'Yell at them',
            isCorrect: false,
            feedback: '💭 Yelling makes everyone feel bad. If it was an accident and didn\'t hurt, you can take a deep breath and keep moving. If you\'re hurt, tell an adult calmly.',
            principle: 'words'
          }
        ]
      }
    ]
  }
};
