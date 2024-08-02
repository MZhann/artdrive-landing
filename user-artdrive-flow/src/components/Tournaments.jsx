import { useEffect, useState } from "react";
import TournamentCard from "./TournamentCard";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getMyTournaments, getUpcomingTournaments, getLiveTournaments } from "@/pages/api/tournaments";

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);
    const [myTournaments, setMyTournaments] = useState({
        past_tournaments: [],
        live_tournaments: [],
        upcoming_tournaments: [],
    });
    const [activeTab, setActiveTab] = useState("upcoming");
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(true);
    const [error, setError] = useState("");

    const checkAuthorization = () => {
        const accessToken = localStorage.getItem("accessToken");
        return !!accessToken;
    };

    const fetchTournaments = async () => {
        try {
            setIsLoading(true);
            setIsAuthorized(true);
            setError("");
            
            switch (activeTab) {
                case "myTournaments": {
                    if (checkAuthorization()) {
                        const res = await getMyTournaments();
                        setMyTournaments(res);
                    } else {
                        setIsAuthorized(false);
                    }
                    break;
                }
                case "upcoming": {
                    const res = await getUpcomingTournaments();
                    setTournaments(res);
                    break;
                }
                case "live": {
                    const res = await getLiveTournaments();
                    setTournaments(res);
                    break;
                }
                default: break;
            }
        } catch (error) {
            console.error("Error fetching tournaments:", error);
            setError("Failed to fetch tournaments. Please try again later.");
            setIsAuthorized(false);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments();
    }, [activeTab]);

    const renderTournaments = (tournamentsList) => {
        if (!Array.isArray(tournamentsList) || tournamentsList.length === 0) {
            return <div className="text-white">No tournaments available.</div>;
        }

        return tournamentsList.map((tournament) => (
            <TournamentCard
                key={tournament.id}
                id={tournament.id}
                name={tournament.name}
                startDate={tournament.start_date}
                prizeFund={tournament.prize_fund}
                participants={tournament.total_participants}
                judges={tournament.total_judges}
                audience={tournament.total_participants}
                backgroundImage={tournament.background_image}
                {...tournament}
            />
        ));
    };

    return (
        <div className="tournament-bg bg-cover w-full min-h-[1200px] h-full flex flex-col justify-between items-center">
            <div className="w-full flex flex-col items-center">
                <Navbar />

                <div className="text-white mt-20 w-full flex flex-col items-center">
                    <h1 className="text-center text-3xl">Tournaments</h1>
                    <div className="flex justify-center w-full md:w-[450px] text-[#a9a8a9] space-x-1 md:space-x-2 mt-5 pr-4 pl-4">
                        <button
                            className={`rounded-3xl py-1 px-6 flex justify-center items-center ${
                                activeTab === "live"
                                    ? "border-2 border-white text-white"
                                    : "border-[#929192]"
                            }`}
                            onClick={() => setActiveTab("live")}
                        >
                            Live
                        </button>
                        <button
                            className={`rounded-3xl py-1 px-6 flex justify-center items-center ${
                                activeTab === "upcoming"
                                    ? "border-2 border-white text-white"
                                    : "border-[#929192]"
                            }`}
                            onClick={() => setActiveTab("upcoming")}
                        >
                            Upcoming
                        </button>
                        <button
                            className={`rounded-3xl py-1 px-2 md:px-5 flex justify-center items-center ${
                                activeTab === "myTournaments"
                                    ? "border-2 border-white text-white"
                                    : "border-[#929192]"
                            }`}
                            onClick={() => setActiveTab("myTournaments")}
                        >
                            My tournaments
                        </button>
                    </div>
                </div>

                <div className="w-full flex flex-col items-center pt-7 mb-64">
                    {isLoading ? (
                        <div className="text-white">Loading...</div>
                    ) : !isAuthorized ? (
                        <div className="text-white">
                            Please authorize to see your tournaments.
                        </div>
                    ) : error ? (
                        <div className="text-white">{error}</div>
                    ) : (
                        <>
                            {activeTab === "myTournaments" ? (
                                <>
                                    {myTournaments.live_tournaments &&
                                        myTournaments.live_tournaments.length >
                                            0 && (
                                            <>
                                                <h2 className="text-2xl text-white mb-4">
                                                    Live Tournaments
                                                </h2>
                                                {renderTournaments(
                                                    myTournaments.live_tournaments
                                                )}
                                            </>
                                        )}
                                    {myTournaments.upcoming_tournaments &&
                                        myTournaments.upcoming_tournaments
                                            .length > 0 && (
                                            <>
                                                <h2 className="text-2xl text-white mb-4">
                                                    Upcoming Tournaments
                                                </h2>
                                                {renderTournaments(
                                                    myTournaments.upcoming_tournaments
                                                )}
                                            </>
                                        )}
                                    {myTournaments.past_tournaments &&
                                        myTournaments.past_tournaments.length >
                                            0 && (
                                            <>
                                                <h2 className="text-2xl text-white mb-4">
                                                    Past Tournaments
                                                </h2>
                                                {renderTournaments(
                                                    myTournaments.past_tournaments
                                                )}
                                            </>
                                        )}
                                </>
                            ) : (
                                renderTournaments(tournaments)
                            )}
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Tournaments;
