import React, { useState } from 'react';
import MathVentureHome from './MathVentureHome';
import NumberTrainGame from './NumberTrainGame';

const MathVentureContainer = ({ onBack }) => {
    const [currentGame, setCurrentGame] = useState(null);

    const handleStartGame = (gameId) => {
        setCurrentGame(gameId);
    };

    const handleBackToMenu = () => {
        setCurrentGame(null);
    };

    return (
        <div className="w-full h-full">
            {!currentGame && (
                <MathVentureHome
                    onStartGame={handleStartGame}
                    onBack={onBack}
                />
            )}

            {currentGame === 'train' && (
                <NumberTrainGame onBack={handleBackToMenu} />
            )}
        </div>
    );
};

export default MathVentureContainer;
