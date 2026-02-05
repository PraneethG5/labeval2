# Social Quest - Interactive Social Skills Learning for Autistic Children

An educational React application designed to help autistic children (ages 6-12) learn and practice social skills through interactive scenarios and game-based learning.

## 🌟 Features

### Core Learning Approach
- **5 Master Principles**: Universal social rules that apply to ANY situation
- **Practice Mode**: Learn through familiar scenarios in 5 different locations
- **Challenge Mode**: Apply principles to unexpected situations
- **Progressive Learning**: Track mastery of tools and principles

### Sensory-Friendly Design
- Muted color palette (pastels, soft blues)
- Gentle animations only
- Large, clear buttons and text
- Predictable, consistent layout
- No autoplaying sounds or flashy effects

### Educational Features
- **15 Interactive Scenarios**:
  - 10 guided scenarios across 5 locations
  - 5 unexpected challenge scenarios
- **Personal Story Analyzer**: NEW! Kids can input their own situations and get personalized advice
- **Immediate Feedback**: Positive reinforcement and gentle corrections
- **Concrete Language**: Direct, literal instructions (no metaphors)
- **Progress Tracking**: Stars, tools, and mastered principles
- **Meta-Learning**: Teaching flexible thinking, not rigid scripts

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd social-quest-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
social-quest-app/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── HomeScreen.jsx
│   │   ├── PrinciplesScreen.jsx
│   │   ├── ScenarioScreen.jsx
│   │   ├── FeedbackScreen.jsx
│   │   └── CompleteScreen.jsx
│   ├── data/               # Data files
│   │   ├── masterPrinciples.js
│   │   ├── scenarios.js
│   │   └── unexpectedScenarios.js
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── index.html            # HTML template
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind configuration
└── README.md            # This file
```

## 🎮 How It Works

### The 5 Master Principles

1. **🛡️ Safety First**: If something feels unsafe, find an adult
2. **💬 Use Your Words**: Communicate needs and feelings calmly
3. **↔️ Respect Space**: Keep one arm's length from others
4. **⏸️ Wait and Watch**: Pause and observe when confused
5. **🆘 Ask for Help**: It's always okay to ask for help

### Learning Modes

**Practice Mode** - Five locations with guided scenarios:
- 🛒 Supermarket
- 🍽️ Restaurant
- 🎪 Playground
- 🏥 Waiting Room
- 🏫 School Hallway

**Challenge Mode** - Unexpected situations:
- Fire alarm emergencies
- Language barriers
- Routine changes
- Unfamiliar situations
- Making mistakes in public

**Personal Story Analyzer** - NEW Interactive Feature:
- Kids share their own uncomfortable situations
- AI-powered analysis based on the 5 Master Principles
- Personalized advice for "what to do differently next time"
- Helps apply learned principles to real-life experiences
- Builds self-reflection and growth mindset

## 🎨 Customization

### Adding New Scenarios

Edit `src/data/scenarios.js` or `src/data/unexpectedScenarios.js`:

```javascript
{
  id: 'unique_id',
  title: 'Scenario Title',
  situation: 'Description of the situation',
  image: '🎯', // Emoji representation
  principles: ['safety', 'words'], // Related principles
  choices: [
    {
      text: 'Choice text',
      isCorrect: true,
      feedback: 'Explanation of why this is good',
      tool: 'Tool Name', // Optional
      principlesUsed: ['safety'] // Optional
    },
    // ... more choices
  ]
}
```

### Modifying Master Principles

Edit `src/data/masterPrinciples.js` to change the core rules.

### Styling Changes

- Global styles: `src/index.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in components

## 🛠️ Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📚 Educational Philosophy

This application is based on research in autism education and follows these principles:

1. **Meta-Learning Over Memorization**: Teaching universal principles that apply to infinite scenarios, not rigid scripts for specific situations

2. **Cognitive Flexibility**: Helping children develop thinking patterns to handle novel, unexpected situations

3. **Positive Psychology**: Focusing on growth, capability, and empowerment rather than deficit-based language

4. **Sensory Consideration**: Respecting sensory sensitivities through careful design choices

5. **Concrete Communication**: Using literal, direct language that is easy to process and understand

## 🤝 Contributing

This is an educational project. If you'd like to improve it:
1. Add more scenarios
2. Enhance accessibility features
3. Improve feedback messaging
4. Add multilingual support

## 📄 License

This project is created for educational purposes.

## 👏 Acknowledgments

- Designed with input from autism education research
- Built with React, Vite, and Tailwind CSS
- Inspired by cognitive behavioral therapy and social skills training methodologies

## 📞 Support

For questions or suggestions about improving the educational content, please reach out to your instructor or teaching assistant.

---

**Remember**: The goal is to teach flexible thinking, not rigid rules. Every child learns differently, and this tool is meant to complement, not replace, personalized support from educators and caregivers.
