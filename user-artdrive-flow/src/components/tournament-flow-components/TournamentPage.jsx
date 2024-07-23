// import React, { useEffect, useState, useRef } from "react";
import React, { useEffect, useState, useRef } from "react";
import RoundComponent from "./RoundComponent";
import FinalRoundComponent from "./FinalRoundComponent";
import RankingComponent from "./RankingComponent";
import RoundStartModal from "./RoundStartModal";
import FinalRoundModal from "./FinalRoundModal";
import TournamentEnded from "./TournamentEnded";

const TournamentPage = ({
    tournamentData,
    totalParticipants,
    tournamentId,
}) => {
    const [tournamentState, setTournamentState] = useState("");
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentRound, setCurrentRound] = useState(null);
    const [totalRounds, setTotalRounds] = useState(null);
    const [showRoundModal, setShowRoundModal] = useState(false);
    const [showFinalModal, setShowFinalModal] = useState(false);
    const [showTournamentEnded, setShowTournamentEnded] = useState(false);
    const ws = useRef(null);


    const fetchArtworks = async () => {
        setLoading(true);
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(
                `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/judge_artworks/`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch artworks");
            }
            const data = await response.json();
            setArtworks(data);
            console.log("data of artworks: ", data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchCurrentRound = async () => {
        try {
            const response = await fetch(
                `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/current_round/`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (!response.ok) {
                throw new Error("Failed to fetch current round");
            }
            const roundNumber = await response.json();
            console.log("Current round: ", roundNumber);
            setCurrentRound(roundNumber.current_round+1);
            return roundNumber.current_round;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };

    const calculateTotalRounds = (participants) => {
        if (participants < 2) return 0;
    
        let groupStageParticipants = Math.pow(2, Math.floor(Math.log2(participants)));
        let totalRounds = 0;
    
        if (groupStageParticipants === participants) {
            totalRounds = Math.log2(participants);
        } else if (groupStageParticipants < participants) {
            totalRounds = Math.log2(groupStageParticipants) + 1;
        } else {
            totalRounds = Math.log2(groupStageParticipants);
        }
    
        // Add one for the final stage
        return totalRounds + 2; // Adding 2 to account for the group stage and final stage
    };
    const startStage = async (roundNumber) => {
        if (roundNumber === 0) {
            setTournamentState("group stage");
            await fetchArtworks();
        } else if (roundNumber < totalRounds - 1) {
            setTournamentState("playoff stage");
            await fetchArtworks();
        } else if (roundNumber === totalRounds - 1) {
            setTournamentState("final stage");
            await fetchArtworks();
        }
        setShowRoundModal(true);
        setTimeout(() => {
            setShowRoundModal(false);
        }, 4000);
    };

    useEffect(() => {
        const initialize = async () => {
            const roundNumber = await fetchCurrentRound();
            const totalRounds = calculateTotalRounds(totalParticipants);
            setTotalRounds(totalRounds);
            await fetchArtworks();
            if (roundNumber !== null) {
                await startStage(roundNumber); // Await to ensure it's done before setting loading to false
            }
            setLoading(false); // Set loading to false after initialization is complete
        };
        initialize();
    }, [tournamentId, totalParticipants]);

    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        ws.current = new WebSocket(
            `wss://artdrivebackenddaphne-production.up.railway.app/ws/tournaments/${tournamentId}/?token=${accessToken}`
        );

        ws.current.onopen = () => {
            console.log("WebSocket connection established");
        };

        ws.current.onmessage = (message) => {
            const parsedMessage = JSON.parse(message.data);
            console.log("parsedMessage", parsedMessage);
            handleServerMessage(parsedMessage);
        };

        ws.current.onclose = () => {
            console.log("WebSocket connection closed");
        };

        ws.current.onerror = (error) => {
            console.error("WebSocket error:", error);
        };

        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, [tournamentId]);

    const handleServerMessage = (message) => {
        console.log("message in handleServerMessage method: ", message);

        switch (message.message) {
            case "Stage group started":
                console.log("stage group started in WS");
                setTournamentState("group stage");
                setShowRoundModal(true);
                fetchArtworks();
                setTimeout(() => {
                    setShowRoundModal(false);
                }, 4000);
                break;
            case "Stage playoff started":
                setTournamentState("playoff stage");
                console.log("stage playoff started WS");
                fetchArtworks();
                setShowRoundModal(true);
                setTimeout(() => {
                    setShowRoundModal(false);
                }, 4000);
                break;
            case "Stage final started":
                console.log("stage final started WS");
                setTournamentState("final stage");
                fetchArtworks();
                setShowFinalModal(true);
                setTimeout(() => {
                    setShowFinalModal(false);
                }, 4000);
                break;
            case "Stage ended started":
                console.log("final ended WS");
                setTournamentState("ended");
                setShowTournamentEnded(true);
                setTimeout(()=>{
                    setShowTournamentEnded(false);
                }, 4000)
                break;
            default:
                console.error("Unknown message type:", message.message);
        }
    };

    const renderContent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        switch (tournamentState) {
            case "":
            case "group stage":
                return artworks.length > 0 ? (
                    <RoundComponent
                        currentRound={currentRound}
                        tournamentName={tournamentData.name}
                        totalParticipants={totalParticipants}
                        artworks={artworks}
                        tournamentId={tournamentId}
                       
                    />
                ) : (
                    <div className="text-white text-2xl">
                        Loading artworks...
                    </div>
                );
            case "playoff stage":
            case "final stage":
                return artworks.length > 0 ? (
                    <FinalRoundComponent
                        totalParticipants={totalParticipants}
                        artworks={artworks}
                        tournamentId={tournamentId}
                    />
                ) : (
                    <div>Loading artworks...</div>
                );
            case "ended":
                return <RankingComponent tournamentId={tournamentId} />;
            case "rankings":
                return <RankingComponent tournamentId={tournamentId} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full flex h-screen justify-center gradient-tournament-background bg-cover">
            <div className="w-[500px] flex flex-col items-center font-montserrat">
                {renderContent()}
                <RoundStartModal
                    show={showRoundModal}
                    totalRounds={totalRounds}
                    currentRound={currentRound}
                    onClose={() => setShowRoundModal(false)}
                />
                <FinalRoundModal
                    show={showFinalModal}
                    onClose={() => setShowFinalModal(false)}
                />
                {/* <TournamentEnded 
                    show={showTournamentEnded} 
                    onClose={() => setShowTournamentEnded(false)}
                /> */}
            </div>
        </div>
    );
};

export default TournamentPage;
