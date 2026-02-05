import { useState } from 'react';
import Header from './components/Header';
import HomeScreen from './components/HomeScreen';
import PrinciplesScreen from './components/PrinciplesScreen';
import ScenarioScreen from './components/ScenarioScreen';
import FeedbackScreen from './components/FeedbackScreen';
import CompleteScreen from './components/CompleteScreen';
import PersonalStoryScreen from './components/PersonalStoryScreen';
import { LOCATIONS } from './data/scenarios';
import { UNEXPECTED_SCENARIOS } from './data/unexpectedScenarios';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home'); 
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentScenario, setCurrentScenario] = useState(null);
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [collectedTools, setCollectedTools] = useState([]);
  const [learnedPrinciples, setLearnedPrinciples] = useState([]);
  const [stars, setStars] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState(null);
  const [completedLocations, setCompletedLocations] = useState([]);
  const [mode, setMode] = useState('guided'); // 'guided' or 'unexpected'
  const [unexpectedIndex, setUnexpectedIndex] = useState(0);

  const handleLocationSelect = (locationKey) => {
    setSelectedLocation(locationKey);
    setCurrentScenario(LOCATIONS[locationKey].scenarios[0]);
    setScenarioIndex(0);
    setMode('guided');
    setCurrentScreen('scenario');
  };

  const handleUnexpectedMode = () => {
    setMode('unexpected');
    setCurrentScenario(UNEXPECTED_SCENARIOS[0]);
    setUnexpectedIndex(0);
    setCurrentScreen('scenario');
  };

  const handleViewPrinciples = () => {
    setCurrentScreen('principles');
  };

  const handlePersonalStory = () => {
    setCurrentScreen('personalStory');
  };

  const handleChoice = (choice) => {
    setCurrentFeedback(choice);
    setShowFeedback(true);
    
    if (choice.isCorrect) {
      setStars(prev => prev + 1);
      if (choice.tool && !collectedTools.includes(choice.tool)) {
        setCollectedTools(prev => [...prev, choice.tool]);
      }
      if (choice.principlesUsed) {
        choice.principlesUsed.forEach(p => {
          if (!learnedPrinciples.includes(p)) {
            setLearnedPrinciples(prev => [...prev, p]);
          }
        });
      }
    }
  };

  const handleContinue = () => {
    if (mode === 'guided') {
      const location = LOCATIONS[selectedLocation];
      const nextIndex = scenarioIndex + 1;

      if (nextIndex < location.scenarios.length) {
        setScenarioIndex(nextIndex);
        setCurrentScenario(location.scenarios[nextIndex]);
        setShowFeedback(false);
        setCurrentFeedback(null);
      } else {
        if (!completedLocations.includes(selectedLocation)) {
          setCompletedLocations(prev => [...prev, selectedLocation]);
        }
        setCurrentScreen('complete');
        setShowFeedback(false);
        setCurrentFeedback(null);
      }
    } else {
      // Unexpected mode
      const nextIndex = unexpectedIndex + 1;
      if (nextIndex < UNEXPECTED_SCENARIOS.length) {
        setUnexpectedIndex(nextIndex);
        setCurrentScenario(UNEXPECTED_SCENARIOS[nextIndex]);
        setShowFeedback(false);
        setCurrentFeedback(null);
      } else {
        setCurrentScreen('complete');
        setShowFeedback(false);
        setCurrentFeedback(null);
      }
    }
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedLocation(null);
    setCurrentScenario(null);
    setScenarioIndex(0);
    setMode('guided');
    setShowFeedback(false);
    setCurrentFeedback(null);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Header 
          stars={stars} 
          collectedTools={collectedTools} 
          learnedPrinciples={learnedPrinciples} 
        />

        {currentScreen === 'home' && (
          <HomeScreen 
            onLocationSelect={handleLocationSelect}
            onUnexpectedMode={handleUnexpectedMode}
            onViewPrinciples={handleViewPrinciples}
            onPersonalStory={handlePersonalStory}
            completedLocations={completedLocations}
            learnedPrinciples={learnedPrinciples}
          />
        )}

        {currentScreen === 'principles' && (
          <PrinciplesScreen 
            learnedPrinciples={learnedPrinciples}
            onBack={handleBackToHome}
          />
        )}

        {currentScreen === 'personalStory' && (
          <PersonalStoryScreen 
            learnedPrinciples={learnedPrinciples}
            onBack={handleBackToHome}
          />
        )}

        {currentScreen === 'scenario' && !showFeedback && currentScenario && (
          <ScenarioScreen 
            mode={mode}
            selectedLocation={selectedLocation}
            scenarioIndex={scenarioIndex}
            unexpectedIndex={unexpectedIndex}
            currentScenario={currentScenario}
            onChoice={handleChoice}
            onBack={handleBackToHome}
          />
        )}

        {showFeedback && currentFeedback && (
          <FeedbackScreen 
            currentFeedback={currentFeedback}
            onContinue={handleContinue}
          />
        )}

        {currentScreen === 'complete' && (
          <CompleteScreen 
            mode={mode}
            selectedLocation={selectedLocation}
            learnedPrinciples={learnedPrinciples}
            onBackToHome={handleBackToHome}
          />
        )}
      </div>
    </div>
  );
}

export default App;
