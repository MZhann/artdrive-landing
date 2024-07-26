// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import loadingGif from "../../../../public/loading.gif";
// import expand from "../../../../public/images/image-buttons/expand.png";
// import profile from "../../../../public/images/image-buttons/profile.svg";
// import share from "../../../../public/images/image-buttons/share.svg";
// import star from "../../../../public/images/image-buttons/star.svg";
// import like from "../../../../public/images/image-buttons/like.svg";
// import x from "../../../../public/images/image-buttons/x.svg";
// import RoundStartModal from "../RoundStartModal";
// import loadingBird from '../../../../public/loadingBird.gif'

// const ArtCarousel = ({ images, onLike, onDislike, totalRounds, currentRound, onNextRound, resetTimer }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [showRoundModal, setShowRoundModal] = useState(false);
//     const [showWaitModal, setShowWaitModal] = useState(false);
//     const [loading, setLoading] = useState(false); // New state for loading

//     useEffect(() => {
//         const savedRound = localStorage.getItem("currentRound");
//         if (savedRound && parseInt(savedRound) !== currentRound) {
//             setShowRoundModal(true);
//         }
//     }, [currentRound]);

//     const handleNext = () => {
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

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
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
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={expand} alt='expand' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={share} alt='share'/>
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={star} alt='star' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={profile} alt='profile' />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex justify-between space-x-16 mt-10'>
//                 <button onClick={handleDislike} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={x} alt='I dont like' />
//                 </button>
//                 <button onClick={() => handleLike(images[currentIndex].id)} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={like} alt='I like' />
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
//                         <h1 className="px-4 text-3xl mb-8 text-bold">You been so fast to rate the arts!</h1>
//                         {/* <Image src={loadingGif} alt='loading gif' width={65} height={65} /> */}
//                         <h3 className="mb-4 text-thin">Lets wait the others</h3>

//                         <Image src={loadingBird} className="mt-10" alt='loading gif' width={150} height={150} />

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
import profile from "../../../../public/images/image-buttons/profile.svg";
import share from "../../../../public/images/image-buttons/share.svg";
import star from "../../../../public/images/image-buttons/star.svg";
import like from "../../../../public/images/image-buttons/like.svg";
import x from "../../../../public/images/image-buttons/x.svg";
import RoundStartModal from "../RoundStartModal";
import loadingBird from '../../../../public/loadingBird.gif'

const ArtCarousel = ({ images, onLike, onDislike, totalRounds, currentRound, onNextRound, resetTimer }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRoundModal, setShowRoundModal] = useState(false);
    const [showWaitModal, setShowWaitModal] = useState(false);
    const [loading, setLoading] = useState(false); // New state for loading

    useEffect(() => {
        const savedRound = localStorage.getItem("currentRound");
        if (savedRound && parseInt(savedRound) !== currentRound) {
            setShowRoundModal(true);
        }
    }, [currentRound]);

    const handleNext = () => {
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

    return (
        <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
            <div className="relative">
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
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={expand} alt='expand' />
                    </button>
                </div>
                <div className="absolute bottom-3 left-3">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={share} alt='share'/>
                    </button>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={star} alt='star' />
                    </button>
                </div>
                <div className="absolute bottom-3 right-3">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={profile} alt='profile' />
                    </button>
                </div>
            </div>

            <div className='flex justify-between space-x-16 mt-10'>
                <button onClick={handleDislike} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
                    <Image src={x} alt='I dont like' />
                </button>
                <button onClick={() => handleLike(images[currentIndex].id)} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
                    <Image src={like} alt='I like' />
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
                        <h1 className="px-4 text-3xl mb-8 text-bold">You been so fast to rate the arts!</h1>
                        <h3 className="mb-4 text-thin">Lets wait the others</h3>
                        <Image src={loadingBird} className="mt-10" alt='loading gif' width={150} height={150} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtCarousel;
