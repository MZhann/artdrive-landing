import { useEffect, useState } from "react";
import { getMyTournaments } from "@/pages/api/tournaments";
import TournamentCard from "@/components/TournamentCard";
import loading from "../../../public/loading.gif";
import Image from "next/image";

const ProfileTournaments = () => {
    const [myTournaments, setMyTournaments] = useState({
        past_tournaments: [],
        live_tournaments: [],
        upcoming_tournaments: [],
    });
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthorized, setIsAuthorized] = useState(true);

    useEffect(() => {
        const fetchTournaments = async () => {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                setIsAuthorized(false);
                setIsLoading(false);
                return;
            }
            try {
                const data = await getMyTournaments();
                setMyTournaments(data);
            } catch (error) {
                console.error("Error fetching user tournaments:", error);
                setIsAuthorized(false);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTournaments();
    }, []);

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

    if (!isAuthorized) {
        return <div className="text-white">You are not authorized, please log in.</div>;
    }

    if (isLoading) {
        return (
            <div className="mt-[-20px]">
                <Image src={loading} alt="loading" width={40} height={40} />
            </div>
        );
    }

    return (
        <div className="w-full">
            {myTournaments.live_tournaments.length > 0 && (
                <>
                    <h2 className="text-2xl text-center text-white mb-4">Live Tournaments</h2>
                    {renderTournaments(myTournaments.live_tournaments)}
                </>
            )}
            {myTournaments.upcoming_tournaments.length > 0 && (
                <>
                    <h2 className="text-2xl text-center text-white mb-4">Upcoming Tournaments</h2>
                    {renderTournaments(myTournaments.upcoming_tournaments)}
                </>
            )}
            {myTournaments.past_tournaments.length > 0 && (
                <>
                    <h2 className="text-2xl text-center text-white mb-4">Past Tournaments</h2>
                    {renderTournaments(myTournaments.past_tournaments)}
                </>
            )}
        </div>
    );
};

export default ProfileTournaments;
