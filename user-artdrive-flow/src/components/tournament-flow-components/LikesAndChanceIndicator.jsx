import React, { useState, useEffect } from "react";
import Image from "next/image";
import likeIndicator from "../../../public/images/image-buttons/likeIndicator.svg";
import chanceToWinTrophy from "../../../public/images/image-buttons/chanceToWinTrophy.svg";
import Lottie from "lottie-react";
import likeAnimationData from "../../../public/like-animation.json";

const LikesAndChanceIndicator = ({ backgroundImage, likes, totalParticipants, currentRound }) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [chanceToWin, setChanceToWin] = useState(100 / totalParticipants);

    useEffect(() => {
        const newChanceToWin = 100 / (totalParticipants / Math.pow(2, currentRound));
        setChanceToWin(newChanceToWin);
    }, [totalParticipants, currentRound]);

    useEffect(() => {
        if (likes > 0) {
            setShowAnimation(true);
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [likes]);

    return (
        <div className="relative w-[93%] h-[90px] mb-4 flex mt-10 justify-between items-center p-4 bg-cover bg-center rounded-xl border-2 px-8 border-gray-600" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/35 rounded-xl"></div>
            <div className="text-white z-10 text-lg flex flex-col items-center mt-4 justify-center">
                <Image src={chanceToWinTrophy} alt="trophy" width={45} height={45} />
                <span className="font-bold ml-2">{chanceToWin.toFixed(0)}%</span>
            </div>
            <div className="relative flex z-10 flex-col items-center justify-center mt-2">
                <Image src={likeIndicator} alt="likes" width={55} height={55} />
                <span className="text-white font-bold text-lg mt-[-8px]">{likes}</span>

                {showAnimation && (
                    <div className="absolute top-0">
                        <Lottie animationData={likeAnimationData} style={{ width: 120, height: 120, marginTop: -100 }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LikesAndChanceIndicator;
