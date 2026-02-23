import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Star, Train, RotateCcw, Camera, MousePointer2, Keyboard, XCircle } from 'lucide-react';
import html2canvas from 'html2canvas';

const NumberTrainGame = ({ onBack }) => {
    const [sequence, setSequence] = useState([]);
    const [missingIndex, setMissingIndex] = useState(null);
    const [options, setOptions] = useState([]);
    const [gameState, setGameState] = useState('playing'); // playing, won, lost
    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [stickers, setStickers] = useState([]);
    const [shake, setShake] = useState(false);
    const gameRef = useRef(null);

    // Sound effects (simulated with visual feedback for now)
    const playSound = (type) => {
        // Placeholder for actual sound implementation
        // console.log(`Playing sound: ${type}`);
    };

    const generateLevel = () => {
        const start = Math.floor(Math.random() * 5) + 1; // Keeping numbers smaller for cardinality visualization
        const step = Math.floor(Math.random() * 2) + 1;
        const length = 4;

        let newSequence = [];
        for (let i = 0; i < length; i++) {
            newSequence.push(start + (i * step));
        }

        const missing = Math.floor(Math.random() * length);
        const correctAnswer = newSequence[missing];

        // Generate options
        let newOptions = [correctAnswer];
        while (newOptions.length < 3) {
            // Range: -4 to +4, excluding 0
            const offset = Math.floor(Math.random() * 9) - 4;
            const wrong = correctAnswer + offset;

            // Validation:
            // 1. Must be positive
            // 2. Must not be the correct answer (offset !== 0 ensures this)
            // 3. Must not already be in options
            if (wrong > 0 && offset !== 0 && !newOptions.includes(wrong)) {
                newOptions.push(wrong);
            }
        }

        // Shuffle options
        newOptions.sort(() => Math.random() - 0.5);

        setSequence(newSequence);
        setMissingIndex(missing);
        setOptions(newOptions);
        setGameState('playing');
        setFeedback('');
        setShake(false);
        setStickers([]); // Reset stickers for new game
    };

    useEffect(() => {
        generateLevel();
    }, [level]);

    // Keyboard interaction
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (gameState !== 'playing') return;

            if (e.key === '1' && options[0]) handleAnswer(options[0]);
            if (e.key === '2' && options[1]) handleAnswer(options[1]);
            if (e.key === '3' && options[2]) handleAnswer(options[2]);
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [options, gameState]);


    const handleAnswer = (selected) => {
        const correct = sequence[missingIndex];
        if (selected === correct) {
            playSound('success');
            setScore(score + 10);
            setGameState('won');
            setFeedback('Correct! The train is ready! 🚂');
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
        } else {
            playSound('error');
            setFeedback(`Oops! ${selected} is not right. Try again!`);
            triggerShake();
        }
    };

    const triggerShake = () => {
        setShake(true);
        setTimeout(() => setShake(false), 500);
    };

    const nextLevel = () => {
        setLevel(level + 1);
    };

    const addSticker = (e) => {
        if (gameState !== 'won') return;

        const rect = gameRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const stickerTypes = ['⭐', '🎈', '🚂', '🌟', '💖'];
        const randomSticker = stickerTypes[Math.floor(Math.random() * stickerTypes.length)];

        setStickers([...stickers, { x, y, content: randomSticker, id: Date.now() }]);
    };

    const takeSnapshot = async () => {
        if (gameRef.current) {
            const canvas = await html2canvas(gameRef.current);
            const image = canvas.toDataURL("image/png");
            const link = document.createElement('a');
            link.href = image;
            link.download = `Math-Victory-Level-${level}.png`;
            link.click();
        }
    };

    return (
        <div className="min-h-screen bg-sky-100 p-4 font-nunito flex items-center justify-center">
            <motion.div
                ref={gameRef}
                onClick={addSticker}
                animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
                className={`max-w-5xl w-full bg-white rounded-3xl p-8 shadow-xl border-4 ${gameState === 'won' ? 'border-yellow-400 cursor-copy' : 'border-sky-200'}`}
            >

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <button onClick={onBack} className="text-gray-500 hover:text-gray-700 font-bold">
                        ← Back
                    </button>
                    <div className="flex gap-4">
                        <div className="bg-yellow-100 px-4 py-2 rounded-full font-bold text-yellow-700 flex items-center gap-2">
                            <Star className="w-5 h-5 fill-yellow-500" /> {score}
                        </div>
                        <div className="bg-sky-100 px-4 py-2 rounded-full font-bold text-sky-700">
                            Level {level}
                        </div>
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-center text-sky-800 mb-2">Number Train 🚂</h2>
                <p className="text-center text-gray-500 mb-8">Count the items and find the missing number!</p>

                {/* Train Visualization */}
                <div className="flex flex-wrap justify-center items-end gap-1 md:gap-2 mb-12 min-h-[180px]">

                    {/* ENGINE (Restored) */}
                    <div className="w-28 h-36 md:w-36 md:h-44 bg-red-600 rounded-lg relative flex flex-col items-center justify-center shadow-lg border-b-8 border-gray-800 mr-2">
                        <div className="absolute -top-10 left-4 w-8 h-12 bg-gray-800 mx-auto"></div> {/* Chimney */}
                        <div className="absolute -top-14 left-2 w-12 h-8 bg-gray-300 rounded-full opacity-60 animate-bounce"></div> {/* Smoke */}
                        <div className="w-20 h-20 bg-red-700 rounded-full border-4 border-yellow-400 flex items-center justify-center shadow-inner">
                            <span className="text-4xl filter drop-shadow-md">😎</span>
                        </div>
                        {/* Wheels */}
                        <div className="absolute -bottom-3 left-2 w-8 h-8 bg-black rounded-full border-4 border-gray-500 animate-spin-slow"></div>
                        <div className="absolute -bottom-3 right-2 w-8 h-8 bg-black rounded-full border-4 border-gray-500 animate-spin-slow"></div>
                        {/* Connector */}
                        <div className="absolute top-2/3 -right-3 w-4 h-3 bg-gray-800 rounded-r"></div>
                    </div>

                    {/* CARS */}
                    {sequence.map((num, idx) => {
                        return (
                            <motion.div
                                key={idx}
                                className="relative"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2 }}
                            >
                                <div className={`
                            w-24 h-32 md:w-28 md:h-36 rounded-lg flex flex-col items-center justify-start pt-2 border-b-8 shadow-lg relative overflow-hidden
                            ${idx === missingIndex
                                        ? 'bg-gray-100 border-gray-300 text-gray-400 border-dashed border-4 justify-center pt-0'
                                        : 'bg-blue-500 border-blue-700 text-white'
                                    }
                        `}>
                                    <div className="text-4xl font-black mb-1 z-10 relative drop-shadow-sm">
                                        {idx === missingIndex ? (gameState === 'won' ? num : '?') : num}
                                    </div>

                                    {/* Candy Counters (Cardinality) - Improved Visibility */}
                                    {idx !== missingIndex && (
                                        <div className="bg-white/90 rounded-xl p-2 mx-1 flex flex-wrap justify-center content-center gap-1 w-[90%] h-[55%] overflow-hidden shadow-inner">
                                            {Array.from({ length: num }).map((_, i) => (
                                                <span key={i} className="text-sm leading-none filter drop-shadow-sm">🍬</span>
                                            ))}
                                        </div>
                                    )}

                                    {gameState === 'won' && idx === missingIndex && (
                                        <div className="bg-white/90 rounded-xl p-2 mx-1 flex flex-wrap justify-center content-center gap-1 w-[90%] h-[55%] overflow-hidden shadow-inner">
                                            {Array.from({ length: num }).map((_, i) => (
                                                <span key={i} className="text-sm leading-none filter drop-shadow-sm">🍬</span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Wheels */}
                                    <div className="absolute -bottom-3 left-2 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-500 z-20"></div>
                                    <div className="absolute -bottom-3 right-2 w-6 h-6 bg-gray-800 rounded-full border-2 border-gray-500 z-20"></div>

                                    {/* Connector */}
                                    {idx < sequence.length - 1 && (
                                        <div className="absolute top-2/3 -right-3 w-4 h-3 bg-gray-800 rounded-r"></div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Options / Feedback */}
                <div className="text-center">
                    {gameState === 'playing' ? (
                        <div>
                            <p className="text-sky-600 font-bold mb-4 flex items-center justify-center gap-2">
                                <MousePointer2 className="w-4 h-4" /> Click or <Keyboard className="w-4 h-4" /> Type 1, 2, 3
                            </p>
                            <div className="flex justify-center gap-6">
                                {options.map((opt, idx) => (
                                    <motion.button
                                        key={opt}
                                        whileHover={{ scale: 1.05, rotate: 1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleAnswer(opt)}
                                        className="w-28 h-36 bg-sky-500 hover:bg-sky-400 text-white rounded-2xl shadow-xl border-b-8 border-sky-700 transition-all flex flex-col items-center justify-start pt-2 relative overflow-hidden group"
                                    >
                                        <span className="text-4xl font-bold z-10 mb-2">{opt}</span>

                                        <div className="bg-white/20 group-hover:bg-white/30 rounded-xl p-1 flex flex-wrap justify-center content-start gap-1 w-[85%] h-[55%] overflow-hidden transition-colors">
                                            {Array.from({ length: opt }).map((_, i) => (
                                                <span key={i} className="text-sm leading-none">🍬</span>
                                            ))}
                                        </div>

                                        <div className="absolute top-0 right-0 w-8 h-8 bg-white text-sky-700 rounded-bl-xl text-lg flex items-center justify-center font-bold z-20 shadow-sm border-l border-b border-sky-100">
                                            {idx + 1}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <p className={`text-2xl font-bold mb-4 ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-500'}`}>
                                {feedback}
                            </p>

                            {gameState === 'won' ? (
                                <div className="bg-yellow-50 p-4 rounded-xl border-2 border-yellow-200 inline-block animate-bounce-slight">
                                    <p className="text-sm text-yellow-800 mb-2 font-bold flex items-center gap-2 justify-center">
                                        <MousePointer2 className="w-4 h-4" />
                                        Click anywhere to add stickers!
                                    </p>
                                    <div className="flex gap-4 justify-center">
                                        <button
                                            onClick={takeSnapshot}
                                            className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-xl shadow-lg flex items-center gap-2"
                                        >
                                            <Camera className="w-5 h-5" />
                                            Save Memory
                                        </button>
                                        <button
                                            onClick={nextLevel}
                                            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg flex items-center gap-2"
                                        >
                                            Next Level →
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-2 text-red-400">
                                    <XCircle className="w-6 h-6" />
                                    <span className="font-bold">Try counting the candies!</span>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Stickers Overlay */}
                {stickers.map(s => (
                    <motion.div
                        key={s.id}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1.5 }}
                        className="absolute pointer-events-none select-none text-4xl"
                        style={{ left: s.x, top: s.y }}
                    >
                        {s.content}
                    </motion.div>
                ))}

            </motion.div>
        </div>
    );
};

export default NumberTrainGame;
