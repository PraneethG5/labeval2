import React, { useState } from 'react';
import { ArrowLeft, Send, Check, MapPin, Smile, Frown, Meh, AlertCircle } from 'lucide-react';
import { MASTER_PRINCIPLES } from '../data/masterPrinciples';

const PersonalStoryScreen = ({ onBack, learnedPrinciples }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    situation: '',
    location: '',
    feeling: '',
    action: '',
    outcome: ''
  });
  const [analysis, setAnalysis] = useState(null);

  const locations = [
    { id: 'school', name: 'School', icon: '🏫' },
    { id: 'home', name: 'Home', icon: '🏠' },
    { id: 'store', name: 'Store', icon: '🛒' },
    { id: 'playground', name: 'Playground', icon: '🎪' },
    { id: 'restaurant', name: 'Restaurant', icon: '🍽️' },
    { id: 'other', name: 'Other', icon: '🌍' }
  ];

  const feelings = [
    { id: 'confused', name: 'Confused', icon: '😕', color: 'bg-yellow-100 border-yellow-300' },
    { id: 'scared', name: 'Scared', icon: '😰', color: 'bg-purple-100 border-purple-300' },
    { id: 'angry', name: 'Angry', icon: '😠', color: 'bg-red-100 border-red-300' },
    { id: 'sad', name: 'Sad', icon: '😢', color: 'bg-blue-100 border-blue-300' },
    { id: 'uncomfortable', name: 'Uncomfortable', icon: '😣', color: 'bg-orange-100 border-orange-300' },
    { id: 'overwhelmed', name: 'Overwhelmed', icon: '😵', color: 'bg-gray-100 border-gray-300' }
  ];

  const handleNext = () => {
    if (step === 6) {
      // Analyze logic would go here
      return;
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    if (step === 1) {
      onBack();
    } else {
      setStep(step - 1);
    }
  };

  const analyzeStory = () => {
    // Simple mock analysis based on keywords
    let suggestions = [];
    let rules = [];
    
    // Check feelings
    if (formData.feeling === 'angry' || formData.feeling === 'sad') {
      suggestions.push({
        title: "Expression Emotions",
        text: "It sounds like you had some big feelings. It's okay to feel that way! Next time, try using your words to say 'I am angry' or 'I am sad' instead of letting the feeling take over."
      });
      rules.push('use-words');
    } else if (formData.feeling === 'scared' || formData.feeling === 'overwhelmed') {
      suggestions.push({
        title: "Seeking Safety",
        text: "When things feel too big or scary, the most important thing is to be safe. Looking for a grown-up you trust is a great first step."
      });
      rules.push('safety-first');
    }

    // Check actions (heuristic)
    const actionLower = formData.action.toLowerCase();
    if (actionLower.includes('hit') || actionLower.includes('push') || actionLower.includes('yell')) {
       suggestions.push({
        title: "Gentle Hands and Voices",
        text: "You mentioned doing something strong with your body or voice. When we do that, others might get hurt or scared. Taking a deep breath can help us pause first."
      });
       if (!rules.includes('safety-first')) rules.push('safety-first');
       if (!rules.includes('wait-watch')) rules.push('wait-watch');
    }

    // Default suggestion if none matched
    if (suggestions.length === 0) {
      suggestions.push({
        title: "Using Your Super Rules",
        text: "That sounds like a tricky situation. In times like this, remembering to Stop and Think can really help. Which Super Rule do you think would have helped most?"
      });
    }

    setAnalysis({
      suggestions,
      rules: MASTER_PRINCIPLES.filter(p => rules.includes(p.id))
    });
    setStep(6);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What happened?</h3>
            <p className="text-gray-600">Describe the situation. For example: "A kid took my toy..."</p>
            <textarea
              className="w-full p-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:outline-none h-32"
              placeholder="Type your story here..."
              value={formData.situation}
              onChange={(e) => setFormData({...formData, situation: e.target.value})}
            />
            <button
              disabled={!formData.situation}
              onClick={handleNext}
              className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${formData.situation ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-300'}`}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">Where did it happen?</h3>
            <div className="grid grid-cols-2 gap-3">
              {locations.map(loc => (
                <button
                  key={loc.id}
                  onClick={() => {
                    setFormData({...formData, location: loc.id});
                    setStep(3);
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${formData.location === loc.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}
                >
                  <span className="text-2xl mr-2">{loc.icon}</span>
                  <span className="font-semibold text-gray-700">{loc.name}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">How did you feel?</h3>
            <div className="grid grid-cols-2 gap-3">
              {feelings.map(feeling => (
                <button
                  key={feeling.id}
                  onClick={() => {
                    setFormData({...formData, feeling: feeling.id});
                    setStep(4);
                  }}
                  className={`p-4 rounded-xl border-2 text-left transition-all ${feeling.color} ${formData.feeling === feeling.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
                >
                  <div className="text-3xl mb-1">{feeling.icon}</div>
                  <div className="font-semibold text-gray-800">{feeling.name}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What did you do?</h3>
            <p className="text-gray-600">Be honest - no judgment here! "I yelled...", "I ran away..."</p>
            <textarea
              className="w-full p-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:outline-none h-32"
              placeholder="I did..."
              value={formData.action}
              onChange={(e) => setFormData({...formData, action: e.target.value})}
            />
            <button
              disabled={!formData.action}
              onClick={handleNext}
              className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${formData.action ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-300'}`}
            >
              Next
            </button>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-800">What happened after?</h3>
            <p className="text-gray-600">"The teacher came...", "They left..."</p>
            <textarea
              className="w-full p-4 border-2 border-indigo-200 rounded-xl focus:border-indigo-500 focus:outline-none h-32"
              placeholder="Then..."
              value={formData.outcome}
              onChange={(e) => setFormData({...formData, outcome: e.target.value})}
            />
            <button
              disabled={!formData.outcome}
              onClick={analyzeStory}
              className={`w-full py-3 rounded-xl font-bold text-white transition-colors ${formData.outcome ? 'bg-indigo-500 hover:bg-indigo-600' : 'bg-gray-300'}`}
            >
              Analyze My Story 🚀
            </button>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6 slide-in">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl border-2 border-indigo-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Here's what I think...</h3>
              
              {analysis?.suggestions.map((suggestion, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-sm mb-4 border-l-4 border-indigo-400">
                  <h4 className="font-bold text-indigo-700 mb-2">{suggestion.title}</h4>
                  <p className="text-gray-600">{suggestion.text}</p>
                </div>
              ))}
              
              {analysis?.rules.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-bold text-gray-700 mb-3">Super Rules to Use Next Time:</h4>
                  <div className="flex flex-wrap gap-2">
                    {analysis.rules.map(rule => (
                      <div key={rule.id} className="bg-white px-3 py-2 rounded-lg border border-gray-200 flex items-center gap-2">
                        <span>{rule.icon}</span>
                        <span className="font-medium text-sm">{rule.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onBack}
              className="w-full py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition-colors"
            >
              Done
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="slide-in max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <button 
          onClick={handleBack}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600 mr-2"
        >
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-2xl font-bold text-gray-800">Personal Story Analyzer</h2>
      </div>

      <div className="mb-8">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-indigo-500 transition-all duration-500 ease-out"
            style={{ width: `${(step / 6) * 100}%` }}
          />
        </div>
        <div className="text-right text-xs text-gray-500 mt-1">Step {step} of 6</div>
      </div>

      {renderStep()}
    </div>
  );
};

export default PersonalStoryScreen;
