// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// import ProgressBar from "./round-components/ProgressBar";
// import SingleArtComponent from '@/components/tournament-flow-components/round-components/SingleArtComponent';
// import loadingBird from '../../../public/loadingBird.gif'

// const FinalRoundComponent = ({ tournamentName, currentRound, totalParticipants, artworks, tournamentId }) => {
//     const totalArts = artworks.length;
//     const totalRounds = calculateRounds(totalParticipants);
//     const initialTime = 15;
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [currentArtPair, setCurrentArtPair] = useState([]);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [resetTimer, setResetTimer] = useState(false);
//     const [showWaitModal, setShowWaitModal] = useState(false);

//     function calculateRounds(participants) {
//         if (participants < 2) return 0;
//         let groupStageParticipants = Math.pow(2, Math.floor(Math.log2(participants)));
//         let totalRounds = 0;
//         if (groupStageParticipants === participants) {
//             totalRounds = Math.log2(participants);
//         } else {
//             totalRounds = Math.log2(groupStageParticipants) + 1;
//         }
//         return totalRounds + 1;
//     }

//     useEffect(() => {
//         if (artworks.length > 1) {
//             setCurrentArtPair([artworks[0], artworks[1]]);
//         }
//     }, [artworks]);

//     const handleImageClick = (image) => {
//         setSelectedImage(image);
//     };

//     const handleClose = () => {
//         setSelectedImage(null);
//     };

//     const handleNextPair = () => {
//         const nextIndex = currentIndex + 2;
//         if (nextIndex < artworks.length - 1) {
//             setCurrentIndex(nextIndex);
//             setCurrentArtPair([artworks[nextIndex], artworks[nextIndex + 1]]);
//         } else if (nextIndex < artworks.length) {
//             setCurrentIndex(nextIndex);
//             setCurrentArtPair([artworks[nextIndex]]);
//         } else {
//             setShowWaitModal(true); // Show the wait modal when all pairs are assessed
//         }
//         setResetTimer(true); // Reset the timer for the next image
//     };

//     const sendLike = async (artId) => {
//         const accessToken = localStorage.getItem("accessToken");
//         try {
//             const response = await fetch(`https://artdrivebackend-production.up.railway.app/api/v1/artwork/${artId}/like/`, {
//                 method: "POST",
//                 headers: {
//                     "Authorization": `Bearer ${accessToken}`,
//                     "Content-Type": "application/json"
//                 },
//             });

//             if (response.ok) {
//                 console.log("Like submitted successfully");
//             } else {
//                 console.error("Failed to submit like.");
//             }
//         } catch (error) {
//             console.error("An error occurred during submission:", error);
//         }
//     };

//     const handleLike = (artId) => {
//         sendLike(artId);
//         handleNextPair();
//     };

//     const handleTimeUp = () => {
//         handleNextPair();
//     };

//     useEffect(() => {
//         if (resetTimer) {
//             setResetTimer(false); // Clear the reset timer flag after the reset
//         }
//     }, [resetTimer]);

//     return (
//         <div className="relative w-full h-full flex flex-col items-center text-white pt-6">
//             <ProgressBar
//                 tournamentName={tournamentName}
//                 totalArts={totalArts}
//                 currentArt={currentIndex + 1}
//                 totalRounds={totalRounds}
//                 currentRound={currentRound}
//                 initialTime={15}
//                 onTimeUp={handleTimeUp}
//                 resetTimer={resetTimer} // Pass resetTimer as a prop
//             />
//             <div className="relative flex items-center overflow-hidden justify-between w-full h-[600px] px-4 mb-4">
//                 {currentArtPair.map((image, index) => (
//                     <motion.div
//                         key={image.id}
//                         className={`absolute top-8 w-full h-[505px] ${index === 0 ? "rotate-12" : "-rotate-12"} p-2 cursor-pointer ${index === 0 ? "ml-[150px]" : "ml-[-150px]"}`}
//                         onClick={() => handleImageClick(image)}
//                         whileHover={{ scale: 1.05 }}
//                     >
//                         <Image
//                             src={image.image}
//                             alt={`Art ${index + 1}`}
//                             width={500}
//                             height={550}
//                             className="w-full h-[500px] border-4 border-gray-300 bg-purple-950 animate-bg-pulse object-cover rounded-2xl"
//                         />
//                     </motion.div>
//                 ))}
//             </div>

//             <div className="text-center text-xl">Please choose one art</div>

//             <AnimatePresence>
//                 {selectedImage && (
//                     <SingleArtComponent
//                         handleClose={handleClose}
//                         image={selectedImage.image}
//                         onLike={() => handleLike(selectedImage.id)}
//                     />
//                 )}
//             </AnimatePresence>

//             {showWaitModal && (
//                 // <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
//                 //     <div className="text-center text-white flex flex-col items-center">
//                 //         <h1 className="text-3xl mb-8">You have assessed all the images. Wait till others complete assessing.</h1>
//                 //         <Image src={loading} alt='loading gif' width={65} height={65} />
//                 //     </div>
//                 // </div>
//                 <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
//                     <div className="text-center text-white flex flex-col items-center mt-[50px]">
//                         <h3 className="mt-[-100px] mb-4 text-normal">round 3 is finished</h3>
//                         <h1 className="px-4 text-3xl mb-8 text-bold">You been so fast to rate the arts!</h1>
//                         <h3 className="mb-4 text-thin">Lets wait the others</h3>
//                         <Image src={loadingBird} className="mt-10" alt='loading gif' width={150} height={150} />
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default FinalRoundComponent;


// FinalRoundComponent.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ProgressBar from "./round-components/ProgressBar";
import SingleArtComponent from '@/components/tournament-flow-components/round-components/SingleArtComponent';
import loading from '../../../public/loading.gif';
import LikesAndChanceIndicator from "./LikesAndChanceIndicator.jsx"; // Import the component

const FinalRoundComponent = ({ tournamentName, currentRound, totalParticipants, artworks, tournamentId, backgroundImage, likes }) => {
    const totalArts = artworks.length;
    const totalRounds = calculateRounds(totalParticipants);
    const initialTime = 15;
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentArtPair, setCurrentArtPair] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [resetTimer, setResetTimer] = useState(false);
    const [showWaitModal, setShowWaitModal] = useState(false);

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

    const sendLike = async (artId) => {
        const accessToken = localStorage.getItem("accessToken");
        try {
            const response = await fetch(`https://artdrivebackend-production.up.railway.app/api/v1/artwork/${artId}/like/`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json"
                },
            });

            if (response.ok) {
                console.log("Like submitted successfully");
            } else {
                console.error("Failed to submit like.");
            }
        } catch (error) {
            console.error("An error occurred during submission:", error);
        }
    };

    const handleLike = (artId) => {
        sendLike(artId);
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
            {backgroundImage && 
            <LikesAndChanceIndicator backgroundImage={backgroundImage} likes={likes} totalParticipants={totalParticipants} currentRound={currentRound} />
            
            }
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
                        className={`absolute top-8 w-full h-[505px] ${index === 0 ? "rotate-12" : "-rotate-12"} p-2 cursor-pointer ${index === 0 ? "ml-[150px]" : "ml-[-150px]"}`}
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
                    <div className="text-center text-white flex flex-col items-center">
                        <h1 className="text-3xl mb-8">You have assessed all the images. Wait till others complete assessing.</h1>
                        <Image src={loading} alt='loading gif' width={65} height={65} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default FinalRoundComponent;
