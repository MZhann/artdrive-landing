// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const LikesAndChanceIndicator = ({ totalParticipants, likes }) => {
//     const [chance, setChance] = useState(0);
//     const [likeAnimations, setLikeAnimations] = useState([]);

//     useEffect(() => {
//         const calculateChance = () => {
//             const chanceToWin = 100 / totalParticipants;
//             setChance(chanceToWin.toFixed(2));
//         };
//         calculateChance();
//     }, [totalParticipants]);

//     useEffect(() => {
//         if (likes > 0) {
//             const newAnimation = { id: Date.now() };
//             setLikeAnimations((prev) => [...prev, newAnimation]);

//             setTimeout(() => {
//                 setLikeAnimations((prev) =>
//                     prev.filter((anim) => anim.id !== newAnimation.id)
//                 );
//             }, 1000);
//         }
//     }, [likes]);

//     return (
//         <div className="flex justify-between items-center w-full p-4">
//             <div className="text-white text-xl">Chance to win: {chance}%</div>
//             <div className="relative">
//                 <div className="text-white text-xl">Likes: {likes}</div>
//                 <AnimatePresence>
//                     {likeAnimations.map((anim) => (
//                         <motion.div
//                             key={anim.id}
//                             initial={{ opacity: 1, y: 0 }}
//                             animate={{ opacity: 0, y: -50 }}
//                             exit={{ opacity: 0 }}
//                             className="absolute right-0"
//                         >
//                             <span role="img" aria-label="like">
//                                 ❤️
//                             </span>
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// };

// export default LikesAndChanceIndicator;

// LikesAndChanceIndicator.jsx
import React, { useState, useEffect } from "react";
import Image from "next/image";
import likeIndicator from "../../../public/images/image-buttons/likeIndicator.svg";
import chanceToWinTrophy from "../../../public/images/image-buttons/chanceToWinTrophy.svg";

const LikesAndChanceIndicator = ({ backgroundImage, likes, totalParticipants, currentRound }) => {
    const [showAnimation, setShowAnimation] = useState(false);
    const [chanceToWin, setChanceToWin] = useState(100 / totalParticipants); // Initial chance to win

    useEffect(() => {
        // Recalculate chance to win based on current round
        const newChanceToWin = (100 / (totalParticipants / Math.pow(2, currentRound)));
        setChanceToWin(newChanceToWin);
    }, [totalParticipants, currentRound]);

    // Simulate the like animation
    useEffect(() => {
        if (likes > 0) {
            setShowAnimation(true);
            const timer = setTimeout(() => {
                setShowAnimation(false);
            }, 1000); // Animation duration in milliseconds
            return () => clearTimeout(timer);
        }
    }, [likes]);

    return (
        <div className="relative w-[93%] h-[90px] mb-4 flex mt-10 justify-between items-center p-4 bg-cover bg-center rounded-xl border-2 px-8 border-gray-600" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-white text-lg flex flex-col items-center mt-4 justify-center">
                <Image src={chanceToWinTrophy} alt="trophy" width={45} height={45} />
                <span className="font-bold ml-2">{chanceToWin.toFixed(0)}%</span>
            </div>
            <div className="relative flex flex-col items-center justify-center mt-2">
                <Image src={likeIndicator} alt="likes" width={55} height={55} />
                <span className="text-white text-lg mt-[-8px]">{likes}</span>

                {showAnimation && (
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center">
                        <Image src="/like-animation.png" alt="like animation" width={50} height={50} className="animate-bounce" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default LikesAndChanceIndicator;
