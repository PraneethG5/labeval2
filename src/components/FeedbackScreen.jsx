import React from 'react';
import { MASTER_PRINCIPLES } from '../data/masterPrinciples';

const FeedbackScreen = ({ currentFeedback, onContinue }) => {
  return (
    <div className="slide-in">
      <div className={`bg-white rounded-2xl p-8 soft-shadow ${currentFeedback.isCorrect ? 'glow-border' : ''}`}>
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">
            {currentFeedback.isCorrect ? '🎉' : '💭'}
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {currentFeedback.isCorrect ? 'Great Choice!' : 'Let\'s Think About This'}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            {currentFeedback.feedback}
          </p>

          {/* Show which principle was used */}
          {currentFeedback.principlesUsed && (
            <div className="bg-indigo-50 rounded-xl p-4 mb-4 border-2 border-indigo-200">
              <p className="text-indigo-700 font-medium mb-2">
                🧭 You used these Super Rules:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {currentFeedback.principlesUsed.map(pid => {
                  const p = MASTER_PRINCIPLES.find(pr => pr.id === pid);
                  return (
                    <span key={pid} className="bg-white px-3 py-1 rounded-full text-indigo-700 font-medium text-sm">
                      {p.icon} {p.name}
                    </span>
                  );
                })}
              </div>
            </div>
          )}

          {/* Show which principle they missed */}
          {!currentFeedback.isCorrect && currentFeedback.principle && (
            <div className="bg-purple-50 rounded-xl p-4 border-2 border-purple-200">
              <p className="text-purple-700 font-medium mb-2">
                💡 Next time, try using:
              </p>
              <div className="flex items-center justify-center gap-2">
                {(() => {
                  const p = MASTER_PRINCIPLES.find(pr => pr.id === currentFeedback.principle);
                  return (
                    <span className="bg-white px-4 py-2 rounded-full text-purple-700 font-medium">
                      {p.icon} {p.name}
                    </span>
                  );
                })()}
              </div>
            </div>
          )}
        </div>

        {currentFeedback.isCorrect && currentFeedback.tool && (
          <div className="bg-green-50 rounded-xl p-6 mb-6 border-2 border-green-200">
            <p className="text-center text-green-700 font-bold mb-2">🎁 New Tool Unlocked!</p>
            <p className="text-center text-2xl font-bold text-green-600">{currentFeedback.tool}</p>
          </div>
        )}

        <button
          onClick={onContinue}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl soft-shadow text-lg"
        >
          Continue Adventure →
        </button>
      </div>
    </div>
  );
};

export default FeedbackScreen;
