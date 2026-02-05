import React from 'react';
import { LOCATIONS } from '../data/scenarios';
import { UNEXPECTED_SCENARIOS } from '../data/unexpectedScenarios';

const ScenarioScreen = ({ 
  mode, 
  selectedLocation, 
  scenarioIndex, 
  unexpectedIndex,
  currentScenario, 
  onChoice, 
  onBack 
}) => {
  const totalScenarios = mode === 'guided' 
    ? LOCATIONS[selectedLocation].scenarios.length
    : UNEXPECTED_SCENARIOS.length;
  
  const currentIndex = mode === 'guided' ? scenarioIndex : unexpectedIndex;

  return (
    <div className="slide-in">
      <div className="bg-white rounded-2xl p-8 soft-shadow">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>{mode === 'guided' ? LOCATIONS[selectedLocation].name : 'Challenge Mode 🎲'}</span>
            <span>
              {mode === 'guided' 
                ? `Scenario ${currentIndex + 1} of ${totalScenarios}`
                : `Challenge ${currentIndex + 1} of ${totalScenarios}`
              }
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / totalScenarios) * 100}%` }}
            />
          </div>
        </div>

        {/* Thinking Hint for Unexpected */}
        {mode === 'unexpected' && (
          <div className="mb-6 bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
            <p className="text-orange-800 font-medium">
              💭 <strong>Thinking Hint:</strong> This is a NEW situation. Which of your 5 Super Rules might help?
            </p>
          </div>
        )}

        {/* Scenario */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{currentScenario.image}</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">{currentScenario.title}</h3>
          <p className="text-lg text-gray-700 leading-relaxed">{currentScenario.situation}</p>
        </div>

        {/* Choices */}
        <div className="space-y-3">
          <p className="text-gray-600 font-medium mb-3">What do you do?</p>
          {currentScenario.choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => onChoice(choice)}
              className="choice-btn w-full bg-indigo-50 hover:bg-indigo-100 border-2 border-indigo-200 rounded-xl p-4 text-left soft-shadow"
            >
              <span className="text-gray-800 text-lg">{choice.text}</span>
            </button>
          ))}
        </div>

        <button
          onClick={onBack}
          className="mt-6 text-gray-500 hover:text-gray-700 text-sm"
        >
          ← Back to home
        </button>
      </div>
    </div>
  );
};

export default ScenarioScreen;
