import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import whiteLike from "../../../public/images/image-buttons/white-like.svg";

const RankingComponent = ({ tournamentId }) => {
    const [rankings, setRankings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const response = await fetch(
                    `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/top_10_participants/`
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch rankings");
                }
                const data = await response.json();
                setRankings(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchRankings();
    }, [tournamentId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const formatPrize = (prize) => {
        return Math.floor(prize);
    };

    return (
        <div className="w-full flex flex-col items-center gradient-tournament-background text-white pt-6 px-2 pb-20">
            <h1 className="text-2xl mb-3">Ranking</h1>
            <div className="h-[2px] w-[85%] mb-6 bg-gray-600"></div>
            <div className="w-full max-w-2xl flex flex-col items-center px-8 ">
                {rankings.map((rank, index) => (
                    <div
                        key={rank.user_id}
                        className="flex w-full items-center space-x-5 mb-4"
                    >
                        <div className="flex items-center justify-center text-sm text-gray-300">
                            {index + 1}
                        </div>
                        <div className="relative">
                            {index === 0 ? (
                                <Image
                                    src={rank.image}
                                    alt={`Rank ${index + 1}`}
                                    width={200}
                                    height={202}
                                    className="w-[90px] rounded-full mb-4 mt-7 h-[90px] object-cover"
                                />
                            ) : (
                                <Image
                                    src={rank.image}
                                    alt={`Rank ${index + 1}`}
                                    width={200}
                                    height={202}
                                    className="w-[75px] h-[75px] object-cover rounded-full"
                                />
                            )}

                            {index === 0 && (
                                <div className="absolute top-[-10px] left-[50%] transform -translate-x-1/2 w-8 h-8">
                                    <Image
                                        src="/images/image-buttons/crown.png"
                                        alt="Crown"
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex ml-4">
                            <div className="ml-0">
                                <div className="text-sm">{rank.username}</div>
                                <Link href={rank.artist_page}>
                                    <div className="text-xs underline text-gray-500">
                                        artist page
                                    </div>
                                </Link>
                            </div>
                            <div className="font-normal text-nowrap ml-6 flex items-center text-xl">
                                {/* {rank.prize} */}
                                400 $
                            </div>
                            <div className="font-normal text-nowrap ml-4 text-xl flex items-center">
                                <Image
                                    src={whiteLike}
                                    alt="like"
                                    className="h-[20px] w-[20px]"
                                    height={20}
                                    width={20}
                                />
                                <div className="ml-2 text-xm">400</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link href={`/tournaments`}>
                <div className="text-white mt-10 text-xl border-2 rounded-2xl px-4 py-2 border-indigo-800">
                    Return to tournaments page
                </div>
            </Link>
        </div>
    );
};

export default RankingComponent;
