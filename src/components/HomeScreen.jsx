import React from 'react';
import MoodTracker from './MoodTracker';
import { MASTER_PRINCIPLES } from '../data/masterPrinciples';
import { LOCATIONS } from '../data/scenarios';

const HomeScreen = ({
  onLocationSelect,
  onUnexpectedMode,
  onViewPrinciples,
  onPersonalStory,
  completedLocations,
  learnedPrinciples,
  onMathVenture
}) => {
  return (
    <div className="slide-in">
      <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome!</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          You are about to explore different places and learn helpful skills that work in MANY situations, not just one.
          You'll learn how to respond whenever something unexpected happens!
        </p>
      </div>

      {/* Master Principles Quick View */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 soft-shadow mb-6 border-2 border-indigo-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800">🧭 Your 5 Super Rules</h3>
          <button
            onClick={onViewPrinciples}
            className="text-indigo-600 hover:text-indigo-700 font-medium text-sm"
          >
            Learn More →
          </button>
        </div>
        <p className="text-gray-600 mb-3">These rules work in EVERY situation, even new ones:</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {MASTER_PRINCIPLES.map(principle => (
            <div
              key={principle.id}
              className={`text-center p-3 rounded-lg ${learnedPrinciples.includes(principle.id) ? 'bg-white border-2 border-green-300' : 'bg-white bg-opacity-50'}`}
            >
              <div className="text-3xl mb-1">{principle.icon}</div>
              <div className="text-xs font-medium text-gray-700">{principle.name}</div>
              {learnedPrinciples.includes(principle.id) && (
                <div className="text-xs text-green-600 mt-1">✓ Learned!</div>
              )}
            </div>
          ))}
        </div>
      </div>



      {/* Mode Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div id="practice-section" className="bg-white rounded-2xl p-6 soft-shadow">
          <div className="text-center mb-4">
            <div className="text-5xl mb-2">📚</div>
            <h3 className="text-xl font-bold text-gray-800">Practice Mode</h3>
            <p className="text-gray-600 text-sm mt-2">Learn the rules in familiar places</p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(LOCATIONS).slice(0, 4).map(([key, location]) => (
              <button
                key={key}
                onClick={() => onLocationSelect(key)}
                className={`choice-btn ${location.color} ${location.borderColor} border-2 rounded-lg p-3 text-center soft-shadow relative`}
              >
                <div className="text-3xl mb-1">{location.icon}</div>
                <div className="text-sm font-bold text-gray-800">{location.name}</div>
                {completedLocations.includes(key) && (
                  <div className="absolute top-1 right-1 text-lg">✅</div>
                )}
              </button>
            ))}
          </div>
          <div className="mt-3">
            <button
              onClick={() => onLocationSelect('school')}
              className={`choice-btn w-full ${LOCATIONS.school.color} ${LOCATIONS.school.borderColor} border-2 rounded-lg p-3 text-center soft-shadow relative`}
            >
              <span className="text-2xl mr-2">{LOCATIONS.school.icon}</span>
              <span className="font-bold text-gray-800">{LOCATIONS.school.name}</span>
              {completedLocations.includes('school') && (
                <span className="absolute top-2 right-2 text-lg">✅</span>
              )}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 soft-shadow border-2 border-orange-200">
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">🎲</div>
              <h3 className="text-xl font-bold text-gray-800">Challenge Mode</h3>
              <p className="text-gray-600 text-sm mt-2">Handle UNEXPECTED situations!</p>
            </div>
            <div className="bg-white bg-opacity-60 rounded-lg p-4 mb-4">
              <p className="text-sm text-gray-700">
                <strong>Why this matters:</strong> In real life, things don't always go as planned.
                These scenarios teach you how to THINK when something new happens.
              </p>
            </div>
            <button
              onClick={onUnexpectedMode}
              className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-4 rounded-xl soft-shadow"
            >
              Start Challenge! 🚀
            </button>
          </div>

          {/* Personal Story Analyzer */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 soft-shadow border-2 border-teal-200">
            <div className="text-center mb-4">
              <div className="text-5xl mb-2">📝</div>
              <h3 className="text-xl font-bold text-gray-800">My Personal Story</h3>
              <p className="text-gray-600 text-sm mt-2">Share YOUR situation and get personalized advice!</p>
            </div>
            <button
              onClick={onPersonalStory}
              className="w-full bg-teal-400 hover:bg-teal-500 text-white font-bold py-4 rounded-xl soft-shadow"
            >
              Share My Story 💬
            </button>
          </div>
        </div>
      </div>

      {/* Math Venture Entry */}
      <div id="math-venture-section" className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-2xl p-6 soft-shadow mb-6 border-2 border-teal-200">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-teal-800 flex items-center gap-2">
              <span className="text-3xl">🚂</span> Math Venture
            </h3>
            <p className="text-teal-600 text-sm mt-1">Play fun games to learn counting and patterns!</p>
          </div>
          <button
            onClick={onMathVenture}
            className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl shadow-md transition-all transform hover:scale-105"
          >
            Play Now 🎮
          </button>
        </div>
      </div>

      {/* Class Component Form */}
      <div id="feedback-section">
        <MoodTracker />
      </div>
    </div>
  );
};

export default HomeScreen;
