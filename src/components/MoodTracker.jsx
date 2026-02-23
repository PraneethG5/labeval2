import React, { useState } from 'react';
import { Send, Smile, Frown, Meh, Angry } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const MOODS = [
    { label: 'Happy', icon: <Smile className="w-8 h-8" />, color: 'bg-green-100 text-green-600 border-green-300' },
    { label: 'Calm', icon: <Meh className="w-8 h-8" />, color: 'bg-blue-100 text-blue-600 border-blue-300' },
    { label: 'Sad', icon: <Frown className="w-8 h-8" />, color: 'bg-purple-100 text-purple-600 border-purple-300' },
    { label: 'Angry', icon: <Angry className="w-8 h-8" />, color: 'bg-red-100 text-red-600 border-red-300' },
];

const MoodTracker = () => {
    const [selectedMood, setSelectedMood] = useState(null);
    const [note, setNote] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!selectedMood) return;

        // Visual feedback only
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setSelectedMood(null);
            setNote('');
        }, 3000);
    };

    return (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 soft-shadow border-2 border-indigo-100 mt-6">
            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">📝 How are you feeling?</h3>
                <p className="text-gray-600">Check in with your feelings today!</p>
            </div>

            <AnimatePresence mode="wait">
                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-green-100 border-2 border-green-300 p-8 rounded-2xl text-center"
                    >
                        <div className="text-5xl mb-4">🌟</div>
                        <h4 className="text-xl font-bold text-green-800 mb-2">Thanks for sharing!</h4>
                        <p className="text-green-700">Acknowledging your feelings is a super skill!</p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onSubmit={handleSubmit}
                        className="max-w-md mx-auto space-y-6"
                    >
                        {/* Mood Selection */}
                        <div className="grid grid-cols-4 gap-3">
                            {MOODS.map((mood) => (
                                <button
                                    key={mood.label}
                                    type="button"
                                    onClick={() => setSelectedMood(mood.label)}
                                    className={`
                                        flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all
                                        ${selectedMood === mood.label
                                            ? `${mood.color} ring-2 ring-offset-1 ring-indigo-200 scale-105 shadow-md`
                                            : 'bg-white border-gray-200 text-gray-400 hover:bg-gray-50'
                                        }
                                    `}
                                >
                                    <div className="mb-1">{mood.icon}</div>
                                    <span className="text-xs font-bold">{mood.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Note Input */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Why do you feel this way? (Optional)</label>
                            <textarea
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                placeholder="I feel this way because..."
                                className="w-full p-4 rounded-xl border-2 border-indigo-100 focus:border-indigo-400 focus:ring-0 resize-none h-24 text-gray-700 placeholder-gray-400"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!selectedMood}
                            className={`
                                w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all
                                ${selectedMood
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200 transform hover:-translate-y-0.5'
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }
                            `}
                        >
                            <Send className="w-5 h-5" />
                            Save My Feelings
                        </button>
                    </motion.form>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MoodTracker;
