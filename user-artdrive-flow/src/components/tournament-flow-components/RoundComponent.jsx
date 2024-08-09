import React, { useState } from "react";
import ProgressBar from "@/components/tournament-flow-components/round-components/ProgressBar";
import ArtCarousel from "./round-components/ArtCarousel";
import LikesAndChanceIndicator from "./LikesAndChanceIndicator"; // Import the component
import { sendLike } from "@/pages/api/artwork";

const RoundComponent = ({ currentRound, tournamentName, totalParticipants, artworks, tournamentId, backgroundImage, likes }) => {
    const totalArts = artworks.length;
    const [currentArt, setCurrentArt] = useState(0);
    const totalRounds = calculateRounds(totalParticipants);
    const initialTime = 15;

    function calculateRounds(participants) {
        console.log('backgroundImage: ', backgroundImage)
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

    const handleTimeUp = () => {
        handleNextArt();
    };

    const resetTimer = () => {
        setCurrentArt(currentArt + 1); // Force ProgressBar to reset the timer
    };

    const images = artworks.map(art => ({ src: art.image, alt: art.description, id: art.id }));

    const handleLike = async (artId) => {
        await sendLikes(artId);
        handleNextArt();
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

    const handleNextArt = () => {
        if (currentArt < totalArts - 1) {
            setCurrentArt(currentArt + 1);
            resetTimer();
        } else {
            console.log('I guess round is over')
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            {backgroundImage &&
                <LikesAndChanceIndicator backgroundImage={backgroundImage} likes={likes} totalParticipants={totalParticipants} currentRound={currentRound} />
            }
            <div className="text-white pt-4 w-full flex flex-col items-center">
                <ProgressBar
                    tournamentName={tournamentName}
                    totalArts={totalArts}
                    currentArt={currentArt}
                    totalRounds={totalRounds}
                    currentRound={currentRound}
                    initialTime={initialTime}
                    onTimeUp={handleTimeUp}
                    resetTimer={resetTimer} // Pass resetTimer as a prop
                />
            </div>
            <div className="text-white w-full h-full flex flex-col items-center">
                <ArtCarousel
                    images={images}
                    onLike={handleLike}
                    onDislike={handleNextArt}
                    totalRounds={totalRounds}
                    currentRound={currentRound}
                    onNextRound={handleNextArt}
                    resetTimer={resetTimer} // Pass resetTimer as a prop
                />
            </div>
        </div>
    );
};

export default RoundComponent;
