import React from 'react';
import { MASTER_PRINCIPLES } from '../data/masterPrinciples';

const PrinciplesScreen = ({ learnedPrinciples, onBack }) => {
  return (
    <div className="slide-in">
      <div className="bg-white rounded-2xl p-8 soft-shadow">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">🧭 Your 5 Super Rules</h2>
        <p className="text-gray-600 mb-6 text-lg">
          These rules are like a map for your brain. They work in EVERY situation, even ones you've never seen before!
        </p>

        <div className="space-y-4">
          {MASTER_PRINCIPLES.map(principle => (
            <div key={principle.id} className="thinking-pattern p-5 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{principle.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                    {principle.name}
                    {learnedPrinciples.includes(principle.id) && (
                      <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-full">✓ You know this!</span>
                    )}
                  </h3>
                  <p className="text-gray-700 font-medium mb-3">{principle.rule}</p>
                  <div className="bg-white bg-opacity-60 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1"><strong>Use this when:</strong></p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {principle.examples.map((ex, idx) => (
                        <li key={idx}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-indigo-50 rounded-xl p-6">
          <p className="text-gray-700 text-lg">
            <strong>💡 Remember:</strong> When something unexpected happens, ask yourself: 
            "Which of my 5 Super Rules can help me right now?"
          </p>
        </div>

        <button
          onClick={onBack}
          className="mt-6 w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 rounded-xl soft-shadow"
        >
          Back to Adventures
        </button>
      </div>
    </div>
  );
};

export default PrinciplesScreen;
