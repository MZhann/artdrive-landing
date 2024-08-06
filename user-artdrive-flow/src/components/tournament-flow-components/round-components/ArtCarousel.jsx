// // import React, { useState, useEffect } from "react";
// // import Image from "next/image";
// // import loadingGif from "../../../../public/loading.gif";
// // import expand from "../../../../public/images/image-buttons/expand.png";
// // import star from "../../../../public/images/image-buttons/star.svg";
// // import like from "../../../../public/images/image-buttons/like.svg";
// // import x from "../../../../public/images/image-buttons/x.svg";
// // import RoundStartModal from "../RoundStartModal";
// // import loadingGame from "../../../../public/loadingGame.gif";
// // import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";

// // const ArtCarousel = ({
// //     images,
// //     onLike,
// //     onDislike,
// //     totalRounds,
// //     currentRound,
// //     onNextRound,
// //     resetTimer,
// // }) => {
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const [showRoundModal, setShowRoundModal] = useState(false);
// //     const [showWaitModal, setShowWaitModal] = useState(false);
// //     const [loading, setLoading] = useState(false); // New state for loading
// //     const [expandedImage, setExpandedImage] = useState(null); // New state for expanded image
// //     const [isFavorite, setIsFavorite] = useState(false); // New state for favorite
// //     const [favorites, setFavorites] = useState([]); // State for storing the list of favorite images

// //     useEffect(() => {
// //         const savedRound = localStorage.getItem("currentRound");
// //         if (savedRound && parseInt(savedRound) !== currentRound) {
// //             setShowRoundModal(true);
// //         }
// //     }, [currentRound]);

// //     useEffect(() => {
// //         const preloadImages = (imageUrls) => {
// //             imageUrls.forEach((url) => {
// //                 const img = new window.Image();
// //                 img.src = url;
// //             });
// //         };

// //         const nextImages = images.slice(currentIndex + 1, currentIndex + 4).map(image => image.src);
// //         preloadImages(nextImages);
// //     }, [currentIndex, images]);

// //     useEffect(() => {
// //         const fetchFavorites = async () => {
// //             const favoriteList = await fetchFavoriteArtworks();
// //             setFavorites(favoriteList.map(fav => fav.artwork.id));
// //         };
// //         fetchFavorites();
// //     }, []);

// //     useEffect(() => {
// //         if (favorites.includes(images[currentIndex].id)) {
// //             setIsFavorite(true);
// //         } else {
// //             setIsFavorite(false);
// //         }
// //     }, [currentIndex, images, favorites]);

// //     const handleNext = () => {
// //         if (currentIndex < images.length - 1) {
// //             setCurrentIndex((prevIndex) => prevIndex + 1);
// //             resetTimer(); // Reset the timer only when next image is shown
// //             setLoading(false); // Hide loading modal
// //         } else {
// //             setShowWaitModal(true);
// //             onNextRound();
// //         }
// //     };

// //     const handleLike = async (artId) => {
// //         setLoading(true); // Show loading modal
// //         await onLike(artId);
// //         handleNext();
// //     };

// //     const handleDislike = async () => {
// //         setLoading(true); // Show loading modal
// //         setTimeout(() => {
// //             // console.log("This message is displayed after 1 second");
// //         }, 1300);
// //         await onDislike();
// //         handleNext();
// //     };

// //     const handleTimeUp = async () => {
// //         await handleDislike(); // Automatically dislike the image if time is up
// //     };

// //     useEffect(() => {
// //         const timer = setInterval(() => {
// //             handleTimeUp();
// //         }, 15000);

// //         return () => clearInterval(timer);
// //     }, [currentIndex]);

// //     const handleExpand = () => {
// //         setExpandedImage(images[currentIndex]);
// //     };

// //     const handleCloseExpand = () => {
// //         setExpandedImage(null);
// //     };

// //     const handleFavoriteToggle = async (artId) => {
// //         if (isFavorite) {
// //             await removeFromFavorites(artId);
// //         } else {
// //             await addToFavorites(artId);
// //         }
// //         setIsFavorite(!isFavorite);
// //         const updatedFavorites = await fetchFavoriteArtworks();
// //         setFavorites(updatedFavorites.map(fav => fav.artwork.id));
// //     };

// //     const handleDownload = (url) => {
// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.setAttribute('download', 'downloaded_image.jpg'); // You can set a custom name for the downloaded file
// //         document.body.appendChild(link);
// //         link.click();
// //         document.body.removeChild(link);
// //     };

// //     return (
// //         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
// //             <div className="relative">
// //                 <Image
// //                     src={images[currentIndex].src}
// //                     alt={images[currentIndex].alt}
// //                     width={600}
// //                     height={800}
// //                     className="rounded-lg w-[390px] object-cover bg-purple-950 animate-bg-pulse h-[500px]"
// //                 />
// //                 {loading && (
// //                     <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
// //                         <Image src={loadingGif} alt="Loading" width={50} height={50} />
// //                     </div>
// //                 )}
// //                 <div className="absolute top-3 right-3">
// //                     <button
// //                         className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full"
// //                         onClick={handleExpand}
// //                     >
// //                         <Image src={expand} alt="expand" />
// //                     </button>
// //                 </div>
// //                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
// //                     <button
// //                         className={`p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full ${isFavorite ? "bg-green-500" : ""}`}
// //                         onClick={() => handleFavoriteToggle(images[currentIndex].id)}
// //                     >
// //                         <Image src={star} alt="star" />
// //                     </button>
// //                 </div>
// //             </div>

// //             <div className="flex justify-between space-x-16 mt-10">
// //                 <button
// //                     onClick={handleDislike}
// //                     className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
// //                 >
// //                     <Image src={x} alt="I don't like" />
// //                 </button>
// //                 <button
// //                     onClick={() => handleLike(images[currentIndex].id)}
// //                     className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
// //                 >
// //                     <Image src={like} alt="I like" />
// //                 </button>
// //             </div>

// //             <RoundStartModal
// //                 show={showRoundModal}
// //                 totalRounds={totalRounds}
// //                 currentRound={currentRound}
// //                 onClose={() => setShowRoundModal(false)}
// //             />

// //             {showWaitModal && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
// //                     <div className="text-center text-white flex flex-col items-center mt-[50px]">
// //                         <h3 className="mt-[-100px] mb-4 text-normal">round 3 is finished</h3>
// //                         <h1 className="px-4 text-3xl mb-8 text-bold">
// //                             You been so fast to rate the arts!
// //                         </h1>
// //                         <h3 className="mb-4 text-thin">Lets wait the others</h3>
// //                         <Image
// //                             src={loadingGame}
// //                             className="mt-10"
// //                             alt="loading gif"
// //                             width={150}
// //                             height={150}
// //                         />
// //                     </div>
// //                 </div>
// //             )}

// //             {expandedImage && (
// //                 <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
// //                     <div className="relative w-full h-full flex flex-col justify-center items-center">
// //                         <button
// //                             className="absolute top-5 right-5 text-white text-3xl"
// //                             onClick={handleCloseExpand}
// //                         >
// //                             ✕
// //                         </button>
// //                         <Image
// //                             src={expandedImage.src}
// //                             alt={expandedImage.alt}
// //                             width={1200}
// //                             height={800}
// //                             className="w-auto h-auto max-h-full max-w-full"
// //                         />
// //                         <button
// //                             className="mt-4 p-2 bg-blue-600 text-white rounded"
// //                             onClick={() => handleDownload(expandedImage.src)}
// //                         >
// //                             Download
// //                         </button>
// //                     </div>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default ArtCarousel;


// import React, { useState, useEffect } from "react";
// import { useSwipeable } from "react-swipeable";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import loadingGif from "../../../../public/loading.gif";
// import expand from "../../../../public/images/image-buttons/expand.png";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import x from "../../../../public/images/image-buttons/x.svg";
// import RoundStartModal from "../RoundStartModal";
// import loadingGame from "../../../../public/loadingGame.gif";
// import { addToFavorites, removeFromFavorites, fetchFavoriteArtworks } from "@/pages/api/favorites";

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
//     const [loading, setLoading] = useState(false);
//     const [expandedImage, setExpandedImage] = useState(null);
//     const [isFavorite, setIsFavorite] = useState(false);
//     const [favorites, setFavorites] = useState([]);
//     const [direction, setDirection] = useState(0); // New state for swipe direction

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
//         if (currentIndex < images.length - 1) {
//             setCurrentIndex((prevIndex) => prevIndex + 1);
//             resetTimer();
//             setLoading(false);
//         } else {
//             setShowWaitModal(true);
//             onNextRound();
//         }
//     };

//     const handleLike = async (artId) => {
//         setLoading(true);
//         await onLike(artId);
//         handleNext();
//     };

//     const handleDislike = async () => {
//         setLoading(true);
//         await onDislike();
//         handleNext();
//     };

//     const handleTimeUp = async () => {
//         await handleDislike();
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

//     const handleDownload = (url) => {
//         const link = document.createElement('a');
//         link.href = url;
//         link.setAttribute('download', 'downloaded_image.jpg');
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//     };

//     const swipeHandlers = useSwipeable({
//         onSwipedLeft: () => handleSwipe(-1),
//         onSwipedRight: () => handleSwipe(1),
//         preventScrollOnSwipe: true,
//         trackMouse: true,
//     });

//     const handleSwipe = (dir) => {
//         setDirection(dir);
//         if (dir === 1) {
//             handleLike(images[currentIndex].id);
//         } else if (dir === -1) {
//             handleDislike();
//         }
//     };

//     return (
//         <div {...swipeHandlers} className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
//                 <AnimatePresence initial={false} custom={direction}>
//                     <motion.div
//                         key={currentIndex}
//                         custom={direction}
//                         initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <Image
//                             src={images[currentIndex].src}
//                             alt={images[currentIndex].alt}
//                             width={600}
//                             height={800}
//                             className="rounded-lg w-[390px] object-cover bg-purple-950 animate-bg-pulse h-[500px]"
//                         />
//                     </motion.div>
//                 </AnimatePresence>
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
//             </div>

//             <div className="flex justify-between space-x-16 mt-10">
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
//                         <button
//                             className="mt-4 p-2 bg-blue-600 text-white rounded"
//                             onClick={() => handleDownload(expandedImage.src)}
//                         >
//                             Download
//                         </button>
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
    const [swipeDirection, setSwipeDirection] = useState(null); // State to handle swipe direction for animation

    useEffect(() => {
        const savedRound = localStorage.getItem("currentRound");
        if (savedRound && parseInt(savedRound) !== currentRound) {
            setShowRoundModal(true);
        }
    }, [currentRound]);

    useEffect(() => {
        const preloadImages = (imageUrls) => {
            imageUrls.forEach((url) => {
                const img = new window.Image();
                img.src = url;
            });
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

    const handleDownload = (url) => {
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'downloaded_image.jpg'); // You can set a custom name for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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

            <div className="flex justify-between space-x-16 mt-10">
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
                        <button
                            className="mt-4 p-2 bg-blue-600 text-white rounded"
                            onClick={() => handleDownload(expandedImage.src)}
                        >
                            Download
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtCarousel;
