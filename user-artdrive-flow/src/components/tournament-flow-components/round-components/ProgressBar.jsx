import React, { useEffect, useState } from 'react';

const ProgressBar = ({ tournamentName, totalArts, currentArt, totalRounds, currentRound, initialTime, onTimeUp }) => {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);
    const progress = (currentArt / totalArts) * 100;

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime > 0) {
                    return prevTime - 1;
                } else {
                    clearInterval(timer);
                    onTimeUp();
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [onTimeUp]);

    return (
        <div className="w-full px-4 pb-4 text-white ">
            <h1 className="text-2xl mb-2">{tournamentName}</h1>
            <div className="relative w-full h-4 rounded-full bg-gray-700 bg-opacity-10 flex items-center justify-start px-[2px] border-2 border-gray-500 mb-4">
                <div
                    className="h-1 rounded-full p-1"
                    style={{
                        width: `${progress}%`,
                        background: 'linear-gradient(90deg, #00FF00, #FF7F00)'
                    }}
                />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border-2 border-white">
                        <span>{timeRemaining}</span>
                    </div>
                    <span className="ml-2 text-sm">Round {currentRound} from {totalRounds}</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
