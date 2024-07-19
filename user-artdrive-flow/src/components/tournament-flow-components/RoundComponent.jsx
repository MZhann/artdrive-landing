import React, { useState } from "react";
import ProgressBar from "@/components/tournament-flow-components/round-components/ProgressBar";
import ArtCarousel from "./round-components/ArtCarousel";
import RoundStartModal from "@/components/tournament-flow-components/RoundStartModal";
import FinalRoundModal from "@/components/tournament-flow-components/FinalRoundModal";

const RoundComponent = ({ totalParticipants, artworks, tournamentId }) => {
    const tournamentName = "Character Art";
    // const totalParticipantsCount = totalParticipants;
    const totalArts = artworks.length;
    const [currentArt, setCurrentArt] = useState(1);
    const [currentRound, setCurrentRound] = useState(1);
    const [likedArtworks, setLikedArtworks] = useState([]);
    const totalRounds = calculateRounds(totalParticipants);
    const initialTime = 15;

    function calculateRounds(participants) {
        if (participants < 2) return 0; // No rounds if less than 2 participants
    
        // Calculate nearest lower power of 2
        let groupStageParticipants = Math.pow(2, Math.floor(Math.log2(participants)));
        let totalRounds = 0;
    
        // If the initial number of participants is already a power of 2
        if (groupStageParticipants === participants) {
            totalRounds = Math.log2(participants); // All rounds are playoffs
        } else {
            // Additional group stage round needed to reduce to the nearest power of 2
            totalRounds = Math.log2(groupStageParticipants) + 1;
        }
        
        console.log('there are: ' + totalRounds + ', ' + 1 + ' rounds.' )
        return totalRounds + 1; // Adding 1 for the final round
    }
    
    const handleTimeUp = () => {
        console.log("time is up");
    };

    const images = artworks.map(art => ({ src: art.image, alt: art.description, id: art.id }));

    const handleLike = (artId) => {
        setLikedArtworks((prevLikes) => [...prevLikes, artId]);
    };

    const handleDislike = () => {
        // No need to do anything here since we are not adding dislikes to the array
    };

    const handleNextRound = () => {
        setCurrentRound((prevRound) => prevRound + 1);
        setCurrentArt(1);
        // Fetch new artworks for the next round here
    };

    const sendLikes = async () => {
        const accessToken = localStorage.getItem("accessToken");
        try {
            const response = await fetch(`https://artdrivebackend-production.up.railway.app/api/v1/artwork/${tournamentId}/like/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ artwork_ids: likedArtworks }),
            });

            if (response.ok) {
                console.log("Likes submitted successfully");
                // Proceed to the next round or show a modal
            } else {
                console.error("Failed to submit likes.");
            }
        } catch (error) {
            console.error("An error occurred during submission:", error);
        }
    };

    return (
        <div className="w-full h-full flex flex-col items-center">
            <div className="text-white pt-6 w-full flex flex-col items-center">
                <ProgressBar
                    tournamentName={tournamentName}
                    totalArts={totalArts}
                    currentArt={currentArt}
                    totalRounds={totalRounds}
                    currentRound={currentRound}
                    initialTime={initialTime}
                    onTimeUp={handleTimeUp}
                />
            </div>
            <div className="text-white w-full flex flex-col items-center">
                <ArtCarousel
                    images={images}
                    onLike={handleLike}
                    onDislike={handleDislike}
                    totalRounds={totalRounds}
                    currentRound={currentRound}
                    onNextRound={handleNextRound}
                />
            </div>
        </div>
    );
};

export default RoundComponent;
