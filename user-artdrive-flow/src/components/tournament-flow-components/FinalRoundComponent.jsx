import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProgressBar from "./round-components/ProgressBar";
import SingleArtComponent from '@/components/tournament-flow-components/round-components/SingleArtComponent';

const FinalRoundComponent = ({ totalParticipants, artworks, tournamentId }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentArtPair, setCurrentArtPair] = useState([]);
    const [likedArtworks, setLikedArtworks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

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
            // Submit the likes when all pairs are processed
            sendLikes();
        }
    };

    const handleLike = (artId) => {
        setLikedArtworks((prevLikedArtworks) => [...prevLikedArtworks, artId]);
        handleNextPair();
    };

    const handleDislike = () => {
        handleNextPair();
    };

    const sendLikes = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(`https://artdrivebackend-production.up.railway.app/api/v1/artwork/${tournamentId}/like/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ artwork_ids: likedArtworks })
            });

            if (!response.ok) {
                throw new Error("Failed to submit likes");
            }
            console.log("Likes submitted successfully");
        } catch (error) {
            console.error("An error occurred during submission:", error);
        }
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center text-white pt-6">
            <ProgressBar
                tournamentName={"Character Art"}
                totalArts={artworks.length}
                currentArt={currentIndex + 1}
                totalRounds={totalParticipants}
                currentRound={totalParticipants - artworks.length + 1}
                initialTime={20}
                onTimeUp={() => console.log("time is up")}
            />
            <div className="relative flex items-center overflow-hidden justify-between w-full h-[600px] px-4 mb-4">
                {currentArtPair.map((image, index) => (
                    <motion.div
                        key={image.id}
                        className={`absolute top-8 w-full h-[505px] ${index === 0 ? "rotate-12" : "-rotate-12"} p-2 cursor-pointer ${index === 0 ? "ml-[150px]" : "ml-[-150px]"}`}
                        onClick={() => handleImageClick(image)}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Image
                            src={image.image}
                            alt={`Art ${index + 1}`}
                            width={500}
                            height={550}
                            className="w-full h-[500px] border-4 border-gray-300 object-cover rounded-2xl"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="text-center text-xl">Please choose one art</div>

            <AnimatePresence>
                {selectedImage && (
                    <SingleArtComponent
                        handleClose={handleClose}
                        image={selectedImage.image}
                        onLike={() => handleLike(selectedImage.id)}
                        onDislike={handleDislike}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default FinalRoundComponent;
