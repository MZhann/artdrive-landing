import React, { useState } from "react";
import Image from "next/image";
import loadingGif from "../../../../public/loading.gif";
import profile from "../../../../public/images/image-buttons/profile.svg";
import share from "../../../../public/images/image-buttons/share.svg";
import star from "../../../../public/images/image-buttons/star.svg";
import like from "../../../../public/images/image-buttons/like.svg";
import { useSwipeable } from "react-swipeable";
import likeAnimation from "../../../../public/like-animation.gif";

const SingleArtComponent = ({ handleClose, image, onLike }) => {
    const [loading, setLoading] = useState(false); // New state for loading
    const [showAnimation, setShowAnimation] = useState(false); // State to handle like animation

    const closeSingleArtComponent = async () => {
        setLoading(true); // Show loading modal
        setShowAnimation(true); // Show like animation
        setTimeout(() => setShowAnimation(false), 1000); // Hide like animation after 1 second
        await onLike();
        setLoading(false); // Hide loading modal
        handleClose();
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleClose(),
        onSwipedRight: () => closeSingleArtComponent(),
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <div
            className="inset-0 bg-black w-full h-full flex flex-col items-center"
            {...swipeHandlers}
        >
            <div className="text-white w-full flex flex-col items-center">
                <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
                    <div className="relative">
                        <Image
                            src={image}
                            alt="images"
                            width={600}
                            height={800}
                            className="rounded-lg w-[390px] object-cover bg-purple-950 animate-bg-pulse h-[500px]"
                        />
                        {loading && (
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                                <Image src={loadingGif} alt="Loading" width={50} height={50} />
                            </div>
                        )}
                        {showAnimation && (
                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                <Image src={likeAnimation} alt="Like Animation" width={100} height={100} />
                            </div>
                        )}
                        <div className="absolute top-3 right-3">
                            <button
                                onClick={handleClose}
                                className="absolute top-2 right-2 text-white text-2xl p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="w-6 h-6"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.715 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="absolute bottom-3 left-3">
                            <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                                <Image src={share} alt="share" />
                            </button>
                        </div>
                        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                            <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                                <Image src={star} alt="star" />
                            </button>
                        </div>
                        <div className="absolute bottom-3 right-3">
                            <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                                <Image src={profile} alt="profile" />
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between mt-10">
                        <button
                            onClick={closeSingleArtComponent}
                            className="w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500"
                        >
                            <Image src={like} alt="I like" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleArtComponent;
