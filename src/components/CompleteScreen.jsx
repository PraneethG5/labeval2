import React from 'react';
import { LOCATIONS } from '../data/scenarios';

const CompleteScreen = ({ mode, selectedLocation, learnedPrinciples, onBackToHome }) => {
  return (
    <div className="slide-in">
      <div className="bg-white rounded-2xl p-8 soft-shadow text-center">
        <div className="text-7xl mb-4">🏆</div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Mission Accomplished!</h2>
        <p className="text-lg text-gray-700 mb-6">
          {mode === 'guided' 
            ? `You completed the ${LOCATIONS[selectedLocation].name} adventure!`
            : 'You completed the Challenge Mode!'
          }
        </p>

        <div className="bg-indigo-50 rounded-xl p-6 mb-6">
          <p className="text-gray-700 text-lg mb-4">
            <strong>What you learned:</strong>
          </p>
          <p className="text-gray-700">
            The 5 Super Rules work everywhere - at home, at school, at the store, at the park, 
            and even in places you've never been before. When something unexpected happens, 
            pause, take 3 breaths, and think: "Which rule can help me right now?"
          </p>
        </div>

        {learnedPrinciples.length === 5 && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 mb-6 border-2 border-yellow-300">
            <div className="text-5xl mb-2">🌟</div>
            <p className="text-xl font-bold text-orange-700">
              You've mastered ALL 5 Super Rules!
            </p>
            <p className="text-gray-700 mt-2">
              You're ready to handle any social situation!
            </p>
          </div>
        )}

        <button
          onClick={onBackToHome}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-xl soft-shadow text-lg"
        >
          Choose Another Adventure
        </button>
      </div>
    </div>
  );
};

export default CompleteScreen;
