import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchRanking } from "@/pages/api/tournaments";
import like from "../../../public/images/image-buttons/like.svg";
import TournamentUserCard from "../../components/tournament-components/TournamentUserCard";
import dynamic from "next/dynamic";
import TournamentResultSingleCard from "../../components/tournament-components/TournamentResultSingleCard";
import fireworkAnimation from "../../../public/firework-throwed.json"; // Ensure correct path

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const RankingComponent = ({ tournamentId }) => {
    const [rankings, setRankings] = useState([]);
    const [userRank, setUserRank] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [username, setUsername] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [noMoreData, setNoMoreData] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [showFireworks, setShowFireworks] = useState(true);

    useEffect(() => {
        const fetchRankings = async () => {
            try {
                const data = await fetchRanking(tournamentId, page, username);
                if (page === 1 && username === "") {
                    setRankings(data.results.participants);
                } else if (page === 1 && username !== "") {
                    setSearchResults(data.results.participants);
                } else {
                    setRankings((prev) => [
                        ...prev,
                        ...data.results.participants,
                    ]);
                }
                setUserRank(data.results.user_rank);
                if (!data.next) {
                    setNoMoreData(true);
                } else {
                    setNoMoreData(false);
                }
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchRankings();
    }, [tournamentId, page, username]);

    const loadMore = () => {
        setPage((prev) => prev + 1);
    };

    const handleSearch = () => {
        setUsername(searchQuery);
        setPage(1);
    };

    
    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === "") {
            setUsername("");
            setPage(1);
        }
    };

    useEffect(() => {
        if (showFireworks) {
            const timer = setTimeout(() => {
                setShowFireworks(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showFireworks]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="w-full h-full flex justify-center ">
            <div className="w-[90%] rounded-3xl text-white mt-10 flex flex-col items-center relative">
                {showFireworks && (
                    <div className="absolute inset-0 flex justify-center items-center">
                        <Lottie
                            animationData={fireworkAnimation}
                            className="w-[450px] h-[450px]"
                        />
                    </div>
                )}
                <h1 className="my-3 text-xl font-bold">Tournament Ranking</h1>
                <div className="flex justify-center space-x-3 w-full">
                    {rankings.length > 1 && (
                        <div className="flex flex-col items-center mt-10">
                            <div className="relative">
                                <div className="w-[90px] h-[90px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                    <Image
                                        src={rankings[1].artwork.image}
                                        alt={`Rank 2`}
                                        width={200}
                                        height={200}
                                        className="w-[200px] h-[200px] object-cover rounded-full "
                                    />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8 bg-gray-400 text-xs font-bold text-black flex items-center justify-center rounded-full">
                                    2nd
                                </div>
                            </div>
                            <div className="text-xs text-gray-300 mt-2">
                                {rankings[1].username}
                            </div>
                            <div className="text-xs font-bold text-white">
                                {rankings[1].prize} $
                            </div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src={like}
                                    alt="like"
                                    width={15}
                                    height={15}
                                    className="w-[15px] h-[15px]"
                                />
                                <div className="text-xs">
                                    {rankings[1].artwork.likes_count}
                                </div>
                            </div>
                        </div>
                    )}
                    {rankings.length > 0 && (
                        <div className="flex flex-col items-center">
                            <div className="relative">
                                <div className="w-[110px] h-[110px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                    <Image
                                        src={rankings[0].artwork.image}
                                        alt={`Rank 1`}
                                        width={200}
                                        height={200}
                                        className="w-[200px] h-[200px] object-cover rounded-full "
                                    />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8 text-xs font-bold  text-black flex items-center justify-center rounded-full bg-yellow-400">
                                    1st
                                </div>
                            </div>
                            <div className="text-xs text-gray-300 mt-2">
                                {rankings[0].username}
                            </div>
                            <div className="text-xs font-bold text-white">
                                {rankings[0].prize} $
                            </div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src={like}
                                    alt="like"
                                    width={15}
                                    height={15}
                                    className="w-[15px] h-[15px]"
                                />
                                <div className="text-xs">
                                    {rankings[0].artwork.likes_count}
                                </div>
                            </div>
                        </div>
                    )}
                    {rankings.length > 2 && (
                        <div className="flex flex-col items-center mt-20">
                            <div className="relative">
                                <div className="w-[80px] h-[80px] border-2 border-gray-400 bg-gray-700 rounded-full overflow-hidden">
                                    <Image
                                        src={rankings[2].artwork.image}
                                        alt={`Rank 3`}
                                        width={200}
                                        height={200}
                                        className="w-[200px] h-[200px] object-cover rounded-full "
                                    />
                                </div>
                                <div className="absolute top-0 right-0 w-8 h-8  text-xs font-bold text-black flex items-center justify-center rounded-full bg-yellow-600">
                                    3rd
                                </div>
                            </div>
                            <div className="text-xs text-gray-300 mt-2">
                                {rankings[2].username}
                            </div>
                            <div className="text-xs font-bold text-white">
                                {rankings[2].prize} $
                            </div>
                            <div className="flex items-center space-x-1">
                                <Image
                                    src={like}
                                    alt="like"
                                    width={15}
                                    height={15}
                                    className="w-[15px] h-[15px]"
                                />
                                <div className="text-xs">
                                    {rankings[2].artwork.likes_count}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex mt-4 mb-4 w-[250px]">
                    <input
                        className="w-full h-[40px] rounded-3xl bg-white bg-opacity-5 border-2 px-4 border-gray-300"
                        placeholder="search"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <button
                        onClick={handleSearch}
                        className="ml-2 bg-gray-700 text-white rounded-full p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-4.35-4.35m1.35-4.65a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                            />
                        </svg>
                    </button>
                </div>

                <div className="w-[330px] flex flex-col items-center">
                    {searchResults.length > 0 ? (
                        searchResults.map((rank) => (
                            <TournamentResultSingleCard
                                key={rank.user_id}
                                rank={rank}
                            />
                        ))
                    ) : (
                        <>
                            {userRank && userRank.participant && (
                                <>
                                    <TournamentUserCard
                                        rank={userRank.rank}
                                        user={userRank.participant}
                                    />
                                    <div className="h-[1px] w-full bg-gray-300 mb-5 mt-3"></div>
                                </>
                            )}
                            {rankings.slice(3).map((rank) => (
                                <TournamentResultSingleCard
                                    key={rank.user_id}
                                    rank={rank}
                                />
                            ))}
                        </>
                    )}
                </div>
                {!noMoreData && (
                    <button
                        onClick={loadMore}
                        className="my-3 underline  hover p-3 hover:bg-gray-400 hover:bg-opacity-10 hover:rounded-2xl transition-all duration-200"
                    >
                        Show more
                    </button>
                )}

                <Link
                    href={`/tournaments`}
                    className="text-white mt-10 mb-10 text-xl border-2 rounded-2xl px-4 py-2 border-purple-800 hover:bg-purple-500"
                >
                    Return to tournaments page
                </Link>
            </div>
        </div>
    );
};

export default RankingComponent;
