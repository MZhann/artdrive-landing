import { useEffect, useState } from "react";
import TournamentCard from "./TournamentCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);

    useEffect(() => {
        const fetchTournaments = async () => {
            try {
                const response = await fetch(
                    "https://artdrivebackend-production.up.railway.app/api/v1/tournaments/upcoming/"
                );
                const data = await response.json();
                setTournaments(data);
            } catch (error) {
                console.error("Error fetching tournaments:", error);
            }
        };

        fetchTournaments();
    }, []);

    return (
        <div className="tournament-bg w-full flex flex-col items-center min-h-[1000px]">
            <Navbar />
            <div className="text-white mt-20">
                <h1 className="text-center text-3xl">Tournaments</h1>
                <div className="flex justify-between w-[300px] text-[#a9a8a9] space-x-2 mt-5">
                    <button className="border-[white] text-white rounded-3xl border-2 py-1 px-6 flex justify-center items-center">
                        Live
                    </button>
                    <button className="border-[#929192] rounded-3xl py-1 px-6 flex justify-center items-center">
                        Upcoming
                    </button>
                    <button className="border-[#929192] rounded-3xl py-1 px-6 flex justify-center items-center">
                        Past
                    </button>
                </div>
            </div>

            <div className="w-full flex flex-col items-center pt-7 mb-64">
                {tournaments.map((tournament) => (
                    <TournamentCard
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
                ))}
            </div>
            <div className="absolute bottom-[-200px] w-full">
                <Footer />
            </div>
        </div>
    );
};

export default Tournaments;
