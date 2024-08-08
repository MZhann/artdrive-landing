// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import loadingGif from "../../../../public/loading.gif";
// import expand from "../../../../public/images/image-buttons/expand.png";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import x from "../../../../public/images/image-buttons/x.svg";
// import RoundStartModal from "../RoundStartModal";
// import loadingGame from "../../../../public/loadingGame.gif";
// import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";
// import { useSwipeable } from "react-swipeable";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
// import likeAnimationData from "../../../../public/like-animation.json";

// const ArtCarousel = ({
//     images,
//     onLike,
//     onDislike,
//     totalRounds,
//     currentRound,
//     onNextRound,
//     resetTimer,
// }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [showRoundModal, setShowRoundModal] = useState(false);
//     const [showWaitModal, setShowWaitModal] = useState(false);
//     const [loading, setLoading] = useState(false); // New state for loading
//     const [expandedImage, setExpandedImage] = useState(null); // New state for expanded image
//     const [isFavorite, setIsFavorite] = useState(false); // New state for favorite
//     const [favorites, setFavorites] = useState([]); // State for storing the list of favorite images
//     const [showAnimation, setShowAnimation] = useState(false); // State to handle like animation
//     const [swipeDirection, setSwipeDirection] = useState(null); // State to handle swipe direction for animation

//     useEffect(() => {
//         const savedRound = localStorage.getItem("currentRound");
//         if (savedRound && parseInt(savedRound) !== currentRound) {
//             setShowRoundModal(true);
//         }
//     }, [currentRound]);

//     useEffect(() => {
//         const preloadImages = (imageUrls) => {
//             imageUrls.forEach((url) => {
//                 const img = new window.Image();
//                 img.src = url;
//             });
//         };

//         const nextImages = images.slice(currentIndex + 1, currentIndex + 4).map(image => image.src);
//         preloadImages(nextImages);
//     }, [currentIndex, images]);

//     useEffect(() => {
//         const fetchFavorites = async () => {
//             const favoriteList = await fetchFavoriteArtworks();
//             setFavorites(favoriteList.map(fav => fav.artwork.id));
//         };
//         fetchFavorites();
//     }, []);

//     useEffect(() => {
//         if (favorites.includes(images[currentIndex].id)) {
//             setIsFavorite(true);
//         } else {
//             setIsFavorite(false);
//         }
//     }, [currentIndex, images, favorites]);

//     const handleNext = () => {
//         setSwipeDirection(null); // Reset swipe direction for animation
//         if (currentIndex < images.length - 1) {
//             setCurrentIndex((prevIndex) => prevIndex + 1);
//             resetTimer(); // Reset the timer only when next image is shown
//             setLoading(false); // Hide loading modal
//         } else {
//             setShowWaitModal(true);
//             onNextRound();
//         }
//     };

//     const handleLike = async (artId) => {
//         setLoading(true); // Show loading modal
//         setShowAnimation(true);
//         setTimeout(() => setShowAnimation(false), 1000);
//         await onLike(artId);
//         handleNext();
//     };

//     const handleDislike = async () => {
//         setLoading(true); // Show loading modal
//         setTimeout(() => {
//             // console.log("This message is displayed after 1 second");
//         }, 1300);
//         await onDislike();
//         handleNext();
//     };

//     const handleTimeUp = async () => {
//         await handleDislike(); // Automatically dislike the image if time is up
//     };

//     useEffect(() => {
//         const timer = setInterval(() => {
//             handleTimeUp();
//         }, 15000);

//         return () => clearInterval(timer);
//     }, [currentIndex]);

//     const handleExpand = () => {
//         setExpandedImage(images[currentIndex]);
//     };

//     const handleCloseExpand = () => {
//         setExpandedImage(null);
//     };

//     const handleFavoriteToggle = async (artId) => {
//         if (isFavorite) {
//             await removeFromFavorites(artId);
//         } else {
//             await addToFavorites(artId);
//         }
//         setIsFavorite(!isFavorite);
//         const updatedFavorites = await fetchFavoriteArtworks();
//         setFavorites(updatedFavorites.map(fav => fav.artwork.id));
//     };


//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: () => handleSwipe(-1),
//         onSwipedRight: () => handleSwipe(1),
//         preventScrollOnSwipe: true,
//         trackMouse: true,
//     });

//     const handleSwipe = (dir) => {
//         setSwipeDirection(dir); // Set swipe direction for animation
//         if (dir === 1) {
//             handleLike(images[currentIndex].id);
//         } else {
//             handleDislike();
//         }
//     };

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <motion.div
//                 className="relative"
//                 initial={{ x: 0 }}
//                 animate={{ x: swipeDirection === 1 ? 300 : swipeDirection === -1 ? -300 : 0 }}
//                 transition={{ duration: 0.3 }}
//                 {...swipeHandlers}
//             >
//                 <Image
//                     src={images[currentIndex].src}
//                     alt={images[currentIndex].alt}
//                     width={600}
//                     height={800}
//                     className="rounded-lg w-[390px] object-cover bg-purple-950 animate-bg-pulse h-[500px]"
//                 />
//                 {loading && (
//                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
//                         <Image src={loadingGif} alt="Loading" width={50} height={50} />
//                     </div>
//                 )}
//                 <div className="absolute top-3 right-3">
//                     <button
//                         className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full"
//                         onClick={handleExpand}
//                     >
//                         <Image src={expand} alt="expand" />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button
//                         className={`p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full ${isFavorite ? "bg-green-500" : ""}`}
//                         onClick={() => handleFavoriteToggle(images[currentIndex].id)}
//                     >
//                         <Image src={star} alt="star" />
//                     </button>
//                 </div>
//             </motion.div>

//             <div className="flex relative justify-between space-x-16 mt-10">
//                 <button
//                     onClick={handleDislike}
//                     className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
//                 >
//                     <Image src={x} alt="I don't like" />
//                 </button>
//                 <button
//                     onClick={() => handleLike(images[currentIndex].id)}
//                     className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
//                 >
//                     <Image src={like} alt="I like" />
//                     {showAnimation && (
//                         <motion.div
//                             initial={{ opacity: 0 }}
//                             animate={{ opacity: 1 }}
//                             transition={{ duration: 0.3 }}
//                             className="absolute top-[-50px] z-10"
//                         >
//                             <Lottie animationData={likeAnimationData} style={{ width: 200, height: 200, marginTop: -150 }} />
//                         </motion.div>
//                     )}
//                 </button>
//             </div>

//             <RoundStartModal
//                 show={showRoundModal}
//                 totalRounds={totalRounds}
//                 currentRound={currentRound}
//                 onClose={() => setShowRoundModal(false)}
//             />

//             {showWaitModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
//                     <div className="text-center text-white flex flex-col items-center mt-[50px]">
//                         <h3 className="mt-[-100px] mb-4 text-normal">round 3 is finished</h3>
//                         <h1 className="px-4 text-3xl mb-8 text-bold">
//                             You been so fast to rate the arts!
//                         </h1>
//                         <h3 className="mb-4 text-thin">Lets wait the others</h3>
//                         <Image
//                             src={loadingGame}
//                             className="mt-10"
//                             alt="loading gif"
//                             width={150}
//                             height={150}
//                         />
//                     </div>
//                 </div>
//             )}

//             {expandedImage && (
//                 <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
//                     <div className="relative w-full h-full flex flex-col justify-center items-center">
//                         <button
//                             className="absolute top-5 right-5 text-white text-3xl"
//                             onClick={handleCloseExpand}
//                         >
//                             ✕
//                         </button>
//                         <Image
//                             src={expandedImage.src}
//                             alt={expandedImage.alt}
//                             width={1200}
//                             height={800}
//                             className="w-auto h-auto max-h-full max-w-full"
//                         />
                        
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ArtCarousel;


import React, { useState, useEffect } from "react";
import Image from "next/image";
import loadingGif from "../../../../public/loading.gif";
import expand from "../../../../public/images/image-buttons/expand.png";
import star from "../../../../public/images/image-buttons/star.svg";
import like from "../../../../public/images/image-buttons/like.svg";
import x from "../../../../public/images/image-buttons/x.svg";
import RoundStartModal from "../RoundStartModal";
import loadingGame from "../../../../public/loadingGame.gif";
import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";
import { useSwipeable } from "react-swipeable";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import likeAnimationData from "../../../../public/like-animation.json"; // Ensure correct path

// Dynamically import Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const ArtCarousel = ({
    images,
    onLike,
    onDislike,
    totalRounds,
    currentRound,
    onNextRound,
    resetTimer,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRoundModal, setShowRoundModal] = useState(false);
    const [showWaitModal, setShowWaitModal] = useState(false);
    const [loading, setLoading] = useState(false); // New state for loading
    const [expandedImage, setExpandedImage] = useState(null); // New state for expanded image
    const [isFavorite, setIsFavorite] = useState(false); // New state for favorite
    const [favorites, setFavorites] = useState([]); // State for storing the list of favorite images
    const [showAnimation, setShowAnimation] = useState(false); // State to handle like animation
    const [swipeDirection, setSwipeDirection] = useState(null); // State to handle swipe direction for animation

    useEffect(() => {
        const savedRound = localStorage.getItem("currentRound");
        if (savedRound && parseInt(savedRound) !== currentRound) {
            setShowRoundModal(true);
        }
    }, [currentRound]);

    useEffect(() => {
        const preloadImages = (imageUrls) => {
            if (typeof window !== "undefined") {
                imageUrls.forEach((url) => {
                    const img = new window.Image();
                    img.src = url;
                });
            }
        };

        const nextImages = images.slice(currentIndex + 1, currentIndex + 4).map(image => image.src);
        preloadImages(nextImages);
    }, [currentIndex, images]);

    useEffect(() => {
        const fetchFavorites = async () => {
            const favoriteList = await fetchFavoriteArtworks();
            setFavorites(favoriteList.map(fav => fav.artwork.id));
        };
        fetchFavorites();
    }, []);

    useEffect(() => {
        if (favorites.includes(images[currentIndex].id)) {
            setIsFavorite(true);
        } else {
            setIsFavorite(false);
        }
    }, [currentIndex, images, favorites]);

    const handleNext = () => {
        setSwipeDirection(null); // Reset swipe direction for animation
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
            resetTimer(); // Reset the timer only when next image is shown
            setLoading(false); // Hide loading modal
        } else {
            setShowWaitModal(true);
            onNextRound();
        }
    };

    const handleLike = async (artId) => {
        setLoading(true); // Show loading modal
        setShowAnimation(true);
        setTimeout(() => setShowAnimation(false), 1000);
        await onLike(artId);
        handleNext();
    };

    const handleDislike = async () => {
        setLoading(true); // Show loading modal
        setTimeout(() => {
            // console.log("This message is displayed after 1 second");
        }, 1300);
        await onDislike();
        handleNext();
    };

    const handleTimeUp = async () => {
        await handleDislike(); // Automatically dislike the image if time is up
    };

    useEffect(() => {
        const timer = setInterval(() => {
            handleTimeUp();
        }, 15000);

        return () => clearInterval(timer);
    }, [currentIndex]);

    const handleExpand = () => {
        setExpandedImage(images[currentIndex]);
    };

    const handleCloseExpand = () => {
        setExpandedImage(null);
    };

    const handleFavoriteToggle = async (artId) => {
        if (isFavorite) {
            await removeFromFavorites(artId);
        } else {
            await addToFavorites(artId);
        }
        setIsFavorite(!isFavorite);
        const updatedFavorites = await fetchFavoriteArtworks();
        setFavorites(updatedFavorites.map(fav => fav.artwork.id));
    };


    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(-1),
        onSwipedRight: () => handleSwipe(1),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    const handleSwipe = (dir) => {
        setSwipeDirection(dir); // Set swipe direction for animation
        if (dir === 1) {
            handleLike(images[currentIndex].id);
        } else {
            handleDislike();
        }
    };

    return (
        <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
            <motion.div
                className="relative"
                initial={{ x: 0 }}
                animate={{ x: swipeDirection === 1 ? 300 : swipeDirection === -1 ? -300 : 0 }}
                transition={{ duration: 0.3 }}
                {...swipeHandlers}
            >
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={600}
                    height={800}
                    className="rounded-lg w-[390px] object-cover bg-purple-950 animate-bg-pulse h-[500px]"
                />
                {loading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                        <Image src={loadingGif} alt="Loading" width={50} height={50} />
                    </div>
                )}
                <div className="absolute top-3 right-3">
                    <button
                        className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full"
                        onClick={handleExpand}
                    >
                        <Image src={expand} alt="expand" />
                    </button>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <button
                        className={`p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full ${isFavorite ? "bg-green-500" : ""}`}
                        onClick={() => handleFavoriteToggle(images[currentIndex].id)}
                    >
                        <Image src={star} alt="star" />
                    </button>
                </div>
            </motion.div>

            <div className="flex relative justify-between space-x-16 mt-10">
                <button
                    onClick={handleDislike}
                    className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
                >
                    <Image src={x} alt="I don't like" />
                </button>
                <button
                    onClick={() => handleLike(images[currentIndex].id)}
                    className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
                >
                    <Image src={like} alt="I like" />
                    {showAnimation && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-[-50px] z-10"
                        >
                            <Lottie animationData={likeAnimationData} style={{ width: 200, height: 200, marginTop: -150 }} />
                        </motion.div>
                    )}
                </button>
            </div>

            <RoundStartModal
                show={showRoundModal}
                totalRounds={totalRounds}
                currentRound={currentRound}
                onClose={() => setShowRoundModal(false)}
            />

            {showWaitModal && (
                <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
                    <div className="text-center text-white flex flex-col items-center mt-[50px]">
                        <h3 className="mt-[-100px] mb-4 text-normal">round 3 is finished</h3>
                        <h1 className="px-4 text-3xl mb-8 text-bold">
                            You been so fast to rate the arts!
                        </h1>
                        <h3 className="mb-4 text-thin">Lets wait the others</h3>
                        <Image
                            src={loadingGame}
                            className="mt-10"
                            alt="loading gif"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
            )}

            {expandedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    <div className="relative w-full h-full flex flex-col justify-center items-center">
                        <button
                            className="absolute top-5 right-5 text-white text-3xl"
                            onClick={handleCloseExpand}
                        >
                            ✕
                        </button>
                        <Image
                            src={expandedImage.src}
                            alt={expandedImage.alt}
                            width={1200}
                            height={800}
                            className="w-auto h-auto max-h-full max-w-full"
                        />
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtCarousel;
