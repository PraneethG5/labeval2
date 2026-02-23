import React from 'react';

const Header = ({ stars, collectedTools, learnedPrinciples }) => {
  return (
    <div className="bg-white rounded-2xl p-6 soft-shadow mb-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-indigo-600">🌟 Social Quest</h1>
          <p className="text-gray-600 mt-1">Your Adventure Helper</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-center">
            <div className="text-2xl">⭐</div>
            <div className="text-sm text-gray-600">{stars} Stars</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">🛠️</div>
            <div className="text-sm text-gray-600">{collectedTools.length} Super Skills</div>
          </div>
          <div className="text-center">
            <div className="text-2xl">💡</div>
            <div className="text-sm text-gray-600">{learnedPrinciples.length}/5 Rules</div>
          </div>
        </div>
      </div>

      {collectedTools.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-2">Your Super Skills:</p>
          <div className="flex flex-wrap gap-2">
            {collectedTools.map((tool, idx) => (
              <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium star-collect">
                ✓ {tool}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
