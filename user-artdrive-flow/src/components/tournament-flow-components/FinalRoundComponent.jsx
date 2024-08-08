import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProgressBar from "./round-components/ProgressBar";
import SingleArtComponent from "@/components/tournament-flow-components/round-components/SingleArtComponent";
import loadingGame from "../../../public/loadingGame.gif";
import LikesAndChanceIndicator from "./LikesAndChanceIndicator.jsx";
import { sendLike } from "@/pages/api/artwork";
import likeAnimation from "../../../public/like-animation.gif";

const FinalRoundComponent = ({
    tournamentName,
    currentRound,
    totalParticipants,
    artworks,
    tournamentId,
    backgroundImage,
    likes,
}) => {
    const totalArts = artworks.length;
    const totalRounds = calculateRounds(totalParticipants);
    const initialTime = 15;
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentArtPair, setCurrentArtPair] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetTimer, setResetTimer] = useState(false);
    const [showWaitModal, setShowWaitModal] = useState(false);
    const [showLikeAnimation, setShowLikeAnimation] = useState(false); // New state for like animation

    function calculateRounds(participants) {
        if (participants < 2) return 0;
        let groupStageParticipants = Math.pow(2, Math.floor(Math.log2(participants)));
        let totalRounds = 0;
        if (groupStageParticipants === participants) {
            totalRounds = Math.log2(participants);
        } else {
            totalRounds = Math.log2(groupStageParticipants) + 1;
        }
        return totalRounds + 1;
    }

    useEffect(() => {
        if (artworks.length > 1) {
            setCurrentArtPair([artworks[0], artworks[1]]);
        }
    }, [artworks]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handleNextPair = () => {
        const nextIndex = currentIndex + 2;
        if (nextIndex < artworks.length - 1) {
            setCurrentIndex(nextIndex);
            setCurrentArtPair([artworks[nextIndex], artworks[nextIndex + 1]]);
        } else if (nextIndex < artworks.length) {
            setCurrentIndex(nextIndex);
            setCurrentArtPair([artworks[nextIndex]]);
        } else {
            setShowWaitModal(true); // Show the wait modal when all pairs are assessed
        }
        setResetTimer(true); // Reset the timer for the next image
    };

    const sendLikes = async (artId) => {
        try {
            const response = await sendLike(artId);
            console.log("Like submitted successfully");
        } catch (error) {
            console.error("Failed to submit like.");
            console.error("An error occurred during submission:", error);
        }
    };

    const handleLike = (artId) => {
        sendLikes(artId);
        setShowLikeAnimation(true); // Show like animation
        setTimeout(() => setShowLikeAnimation(false), 1000); // Hide like animation after 1 second
        handleNextPair();
    };

    const handleTimeUp = () => {
        handleNextPair();
    };

    useEffect(() => {
        if (resetTimer) {
            setResetTimer(false); // Clear the reset timer flag after the reset
        }
    }, [resetTimer]);

    return (
        <div className="relative w-full h-full flex flex-col items-center text-white pt-6">
            {likes != null && (
                <LikesAndChanceIndicator
                    backgroundImage={backgroundImage}
                    likes={likes}
                    totalParticipants={totalParticipants}
                    currentRound={currentRound}
                />
            )}
            <ProgressBar
                tournamentName={tournamentName}
                totalArts={totalArts}
                currentArt={currentIndex + 1}
                totalRounds={totalRounds}
                currentRound={currentRound}
                initialTime={15}
                onTimeUp={handleTimeUp}
                resetTimer={resetTimer} // Pass resetTimer as a prop
            />
            <div className="relative flex items-center overflow-hidden justify-between w-full h-[600px] px-4 mb-4">
                {currentArtPair.map((image, index) => (
                    <motion.div
                        key={image.id}
                        className={`absolute top-8 w-full h-[505px] ${
                            index === 0 ? "rotate-12" : "-rotate-12"
                        } p-2 cursor-pointer ${
                            index === 0 ? "ml-[150px]" : "ml-[-150px]"
                        }`}
                        onClick={() => handleImageClick(image)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={image.image}
                            alt={`Art ${index + 1}`}
                            width={500}
                            height={550}
                            className="w-full h-[500px] border-4 border-gray-300 bg-purple-950 animate-bg-pulse object-cover rounded-2xl"
                        />
                    </motion.div>
                ))}
                {showLikeAnimation && (
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10">
                        <Image src={likeAnimation} alt="like animation" width={50} height={50} />
                    </div>
                )}
            </div>

            <div className="text-center text-xl">Please choose one art</div>

            <AnimatePresence>
                {selectedImage && (
                    <SingleArtComponent
                        handleClose={handleClose}
                        image={selectedImage.image}
                        onLike={() => handleLike(selectedImage.id)}
                    />
                )}
            </AnimatePresence>

            {showWaitModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
                    <div className="text-center text-white flex flex-col items-center mt-[50px]">
                        <h3 className="mt-[-100px] mb-4 text-normal">round 3 is finished</h3>
                        <h1 className="px-4 text-3xl mb-8 text-bold">You been so fast to rate the arts!</h1>
                        <h3 className="mb-4 text-thin">Lets wait the others</h3>
                        <Image src={loadingGame} className="mt-10" alt="loading gif" width={150} height={150} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinalRoundComponent;
