import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import TournamentPage from "@/components/tournament-flow-components/TournamentPage";
import TournamentPage from "@/components/tournament-flow-components/TournamentPage";
import "../../app/globals.css";
import MainContainer from "@/components/MainContainer";

const Tournament = () => {
    const router = useRouter();
    const { id, userRole } = router.query;
    const [tournamentData, setTournamentData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchTournamentData = async () => {
                try {
                    const response = await fetch(
                        `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${id}/`
                    );
                    if (!response.ok) {
                        throw new Error("Failed to fetch tournament data");
                    }
                    const data = await response.json();
                    setTournamentData(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchTournamentData();
        }
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <MainContainer>
                {tournamentData && (
                    <TournamentPage
                        userRole={userRole}
                        tournamentData={tournamentData}
                        totalParticipants={tournamentData.total_participants}
                        tournamentId={id}
                    />
                )}
            </MainContainer>
        </div>
    );
};

export default Tournament;
