import React, { useState, useEffect } from "react";
import { fetchFavoriteArtworks } from "@/pages/api/favorites";
import Image from "next/image";
import whiteLike from '../../../public/images/image-buttons/white-like.svg'
import loadingGif from "../../../public/loading.gif";
const ProfileGallery = () => {
    const [favoriteArtworks, setFavoriteArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const getFavoriteArtworks = async () => {
            try {
                const data = await fetchFavoriteArtworks();
                setFavoriteArtworks(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getFavoriteArtworks();
    }, []);

    const handleImageClick = (artwork) => {
        setSelectedImage(artwork);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handleDownload = (url) => {
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Image src={loadingGif} alt="Loading" width={50} height={50} />
            </div>
        );
    }

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="w-full flex flex-wrap justify-center space-y-4">
            {favoriteArtworks.map((favorite) => (
                <div
                    key={favorite.id}
                    className="bg-white bg-opacity-10 border-gray-500 border-2 rounded-lg m-4 p-4 w-[280px] shadow-md cursor-pointer"
                    onClick={() => handleImageClick(favorite.artwork)}
                >
                    <div className="relative w-full h-[200px]">
                        <Image
                            src={favorite.artwork.image}
                            alt={favorite.artwork.description}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        />
                    </div>
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold truncate">
                            {favorite.artwork.participant}
                        </h2>
                        <p className="text-gray-300 truncate">
                            {favorite.artwork.description}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center">
                                {/* <Image
                                    src={whiteLike}
                                    alt="likes"
                                    width={20}
                                    height={20}
                                    
                                    className="mr-1"
                                /> */}
                                <svg
                                    width="20"
                                    height="20"
                                    className="mr-1"
                                    viewBox="0 0 14 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14 3.83271C14 8.15996 7.51312 11.6626 7.23687 11.8072C7.16406 11.846 7.08268 11.8662 7 11.8662C6.91732 11.8662 6.83594 11.846 6.76312 11.8072C6.48688 11.6626 0 8.15996 0 3.83271C0.00115796 2.81656 0.409788 1.84236 1.13624 1.12384C1.86269 0.405315 2.84764 0.00114532 3.875 0C5.16563 0 6.29562 0.548943 7 1.47683C7.70438 0.548943 8.83438 0 10.125 0C11.1524 0.00114532 12.1373 0.405315 12.8638 1.12384C13.5902 1.84236 13.9988 2.81656 14 3.83271Z"
                                        fill="red"
                                    />
                                </svg>

                                <span className="text-sm">
                                    {favorite.artwork.likes_count}
                                </span>
                            </div>
                            <span className="text-sm text-gray-400">
                                {new Date(
                                    favorite.created_at
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            ))}

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
                    <div className="relative w-full h-full flex flex-col justify-center items-center">
                        <button
                            className="absolute top-5 right-5 text-white text-3xl"
                            onClick={handleCloseModal}
                        >
                            ✕
                        </button>
                        <Image
                            src={selectedImage.image}
                            alt={selectedImage.description}
                            width={1200}
                            height={800}
                            className="w-auto h-auto max-h-full max-w-full"
                        />
                        <button
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
                            onClick={() => handleDownload(selectedImage.image)}
                        >
                            Download
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileGallery;
