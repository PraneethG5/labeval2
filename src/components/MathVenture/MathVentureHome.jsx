import React, { useState } from 'react';
import { Star, Trophy, ArrowRight, BookOpen, User, Users, School } from 'lucide-react';
import { motion } from 'framer-motion';

const MathVentureHome = ({ onStartGame, onBack }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 p-6 font-nunito">
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-teal-100">
                    <button
                        onClick={onBack}
                        className="px-4 py-2 bg-teal-100 text-teal-700 rounded-xl hover:bg-teal-200 transition-colors font-bold"
                    >
                        ← Back to Social Quest
                    </button>
                    <h1 className="text-3xl font-bold text-teal-600 flex items-center gap-3">
                        <Star className="fill-yellow-400 text-yellow-400 w-8 h-8" />
                        Math Venture
                    </h1>
                </div>

                {/* Practice Mode */}
                <div>
                    <h2 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                        <BookOpen className="w-6 h-6" />
                        Learning while playing
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onStartGame('train')}
                        className="w-full p-8 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl shadow-lg border-2 border-orange-200 text-left group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-4 bg-white rounded-2xl shadow-sm">
                                <span className="text-4xl">🚂</span>
                            </div>
                            <ArrowRight className="w-6 h-6 text-orange-400 group-hover:translate-x-1 transition-transform" />
                        </div>
                        <h3 className="text-2xl font-bold text-orange-800 mb-2">Number Train</h3>
                        <p className="text-orange-600">Fill the missing number to help the train leave!</p>
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default MathVentureHome;
