import { useEffect, useState } from "react";
import TournamentCard from "./TournamentCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);
    const [activeTab, setActiveTab] = useState("upcoming");
    const [isLoading, setIsLoading] = useState(true);

    const endpoints = {
        upcoming: "https://artdrivebackend-production.up.railway.app/api/v1/tournaments/upcoming/",
        past: "https://artdrivebackend-production.up.railway.app/api/v1/tournaments/past/",
        live: "https://artdrivebackend-production.up.railway.app/api/v1/tournaments/live/",
    };

    const fetchTournaments = async (endpoint) => {
        try {
            setIsLoading(true);
            const response = await fetch(endpoint);
            const data = await response.json();
            setTournaments(data);
        } catch (error) {
            console.error("Error fetching tournaments:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments(endpoints[activeTab]);
    }, [activeTab]);

    return (
        <div className="tournament-bg bg-cover w-full h-[1200px] flex flex-col items-center">
            <Navbar />
            <div className="text-white mt-20">
                <h1 className="text-center text-3xl">Tournaments</h1>
                <div className="flex justify-between  w-[300px] text-[#a9a8a9] space-x-2 mt-5">
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
                        className={`rounded-3xl py-1 px-6 flex justify-center items-center ${
                            activeTab === "past"
                                ? "border-2 border-white text-white"
                                : "border-[#929192]"
                        }`}
                        onClick={() => setActiveTab("past")}
                    >
                        Past
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col items-center pt-7 mb-64">
                {isLoading ? (
                    <div className="text-white">Loading...</div>
                ) : (
                    tournaments.map((tournament) => (
                        <TournamentCard
                            isLoading={isLoading}
                            key={tournament.id}
                            id={tournament.id}
                            name={tournament.name}
                            startDate={tournament.start_date}
                            prizeFund={tournament.prize_fund}
                            participants={tournament.participants}
                            judges={tournament.judges}
                            audience={
                                tournament.total_participants +
                                tournament.total_judges
                            }
                            backgroundImage={tournament.background_image}
                            {...tournament}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default Tournaments;
