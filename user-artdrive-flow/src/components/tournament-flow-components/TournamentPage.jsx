import React, { useEffect, useState, useRef } from "react";
import RoundComponent from "./RoundComponent";
import FinalRoundComponent from "./FinalRoundComponent";
import RankingComponent from "./RankingComponent";
import RoundStartModal from "./RoundStartModal";
import FinalRoundModal from "./FinalRoundModal";
import TournamentEnded from "./TournamentEnded";
import LikesAndChanceIndicator from "./LikesAndChanceIndicator";
import { fetchArtworks, fetchCurrentRound, fetchUserImage } from "@/pages/api/tournaments";

const TournamentPage = ({
    userRole,
    tournamentData,
    totalParticipants,
    tournamentId,
}) => {
    const [tournamentState, setTournamentState] = useState("");
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentRound, setCurrentRound] = useState(parseInt(localStorage.getItem("currentRound")) || 1);
    const [totalRounds, setTotalRounds] = useState(null);
    const [showRoundModal, setShowRoundModal] = useState(false);
    const [showFinalModal, setShowFinalModal] = useState(false);
    const [showTournamentEnded, setShowTournamentEnded] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState(null); // New state for background image
    const [likes, setLikes] = useState(null); // New state for likes
    const ws = useRef(null);

    useEffect(() => {
        const cur = localStorage.getItem('currentRound');
        if (!cur) {
            localStorage.setItem('currentRound', 1);
        }
    }, [])

    const fetchArtworksToVote = async () => {
        setLoading(true);
        
        try {
            const data = await fetchArtworks(tournamentId);
            setArtworks(data);
            console.log("data of artworks: ", data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };


    const fetchCurrentRoundNumber = async () => {
        try {
            const roundNumber = await fetchCurrentRound(tournamentId);
            console.log("Current round: ", roundNumber);
            const currentRound = roundNumber.current_round + 1;
            localStorage.setItem("currentRound", currentRound);
            setCurrentRound(currentRound);
            return currentRound;
        } catch (error) {
            setError(error.message);
            return null;
        }
    };

    const fetchBackgroundImage = async () => {
        if (userRole !== 'participant_judge') {
            console.log("User is not a judge_contestant, cannot fetch background image.");
            return;
        }
    
        try {
            const data = await fetchUserImage(tournamentId);
            setBackgroundImage(data.image);
            setLikes(data.likes_count); // Set initial likes count
        } catch (error) {
            setError(error.message);
        }
    };

    
    const calculateTotalRounds = (participants) => {
        if (participants < 2) return 0;
        let groupStageParticipants = Math.pow(2, Math.floor(Math.log2(participants)));
        let totalRounds = 0;
        if (groupStageParticipants === participants) {
            totalRounds = Math.log2(participants);
        } else {
            totalRounds = Math.log2(groupStageParticipants) + 1;
        }
        return totalRounds + 2; // Adding 2 to account for the group stage and final stage
    };

    const startStage = async (roundNumber) => {
        if (roundNumber === 0) {
            setTournamentState("group stage");
            await fetchArtworksToVote();
        } else if (roundNumber < totalRounds - 1) {
            setTournamentState("playoff stage");
            await fetchArtworksToVote();
        } else if (roundNumber === totalRounds - 1) {
            setTournamentState("final stage");
            await fetchArtworksToVote();
        }
        setShowRoundModal(true);
        setTimeout(() => {
            setShowRoundModal(false);
        }, 4000);
    };

    useEffect(() => {
        const initialize = async () => {
            const roundNumber = await fetchCurrentRoundNumber();
            const totalRounds = calculateTotalRounds(totalParticipants);
            setTotalRounds(totalRounds);
            await fetchArtworksToVote();
            await fetchBackgroundImage(); // Fetch background image
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
        if (message.type === "like_update" && message.artwork_id) {
            setLikes(message.likes_count);
        } else if (message.message === "Stage group started") {
            console.log("stage group started in WS");
            setTournamentState("group stage");
            setShowRoundModal(true);
            fetchArtworksToVote();
            setTimeout(() => {
                setShowRoundModal(false);
            }, 4000);
        } else if (message.message && message.message.startsWith("Stage playoff_round_")) {
            const match = message.message.match(/Stage playoff_round_(\d+) started/);
            if (match && match[1]) {
                const roundNumber = parseInt(match[1], 10);
                setTournamentState(`playoff round ${roundNumber}`);
                setCurrentRound((prevRound) => {
                    const newRound = prevRound + 1;
                    localStorage.setItem("currentRound", newRound);
                    return newRound;
                });
                fetchArtworksToVote();
                setShowRoundModal(true);
                setTimeout(() => {
                    setShowRoundModal(false);
                }, 4000);
            }
        } else if (message.message === "Stage playoff started") {
            console.log("stage playoff started WS");
            setTournamentState("playoff stage");
            setCurrentRound((prevRound) => {
                const newRound = prevRound + 1;
                localStorage.setItem("currentRound", newRound);
                return newRound;
            });
            fetchArtworksToVote();
            setShowRoundModal(true);
            setTimeout(() => {
                setShowRoundModal(false);
            }, 4000);
        } else if (message.message === "Stage final started") {
            console.log("stage final started WS");
            setTournamentState("final stage");
            setCurrentRound((prevRound) => {
                const newRound = prevRound + 1;
                localStorage.setItem("currentRound", newRound);
                return newRound;
            });
            fetchArtworksToVote();
            setShowFinalModal(true);
            setTimeout(() => {
                setShowFinalModal(false);
            }, 4000);
        } else if (message.message === "Stage ended started") {
            console.log("final ended WS");
            setTournamentState("ended");
            setShowTournamentEnded(true);
            setTimeout(() => {
                setShowTournamentEnded(false);
            }, 4000);
        } else {
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
        switch (true) {
            case tournamentState === "":
            case tournamentState === "group stage":
                return artworks.length > 0 ? (
                    <RoundComponent
                        currentRound={currentRound}
                        tournamentName={tournamentData.name}
                        totalParticipants={totalParticipants}
                        artworks={artworks}
                        tournamentId={tournamentId}
                        backgroundImage={backgroundImage} // Pass background image
                        likes={likes} // Pass likes count
                    />
                ) : (
                    <div className="text-white text-2xl">
                        Loading artworks...
                    </div>
                );
            case tournamentState === "playoff stage":
            case /^playoff round \d+$/.test(tournamentState):
            case tournamentState === "final stage":
                return artworks.length > 0 ? (
                    <FinalRoundComponent
                        currentRound={currentRound}
                        tournamentName={tournamentData.name}
                        totalParticipants={totalParticipants}
                        artworks={artworks}
                        tournamentId={tournamentId}
                        backgroundImage={backgroundImage} // Pass background image
                        likes={likes} // Pass likes count
                    />
                ) : (
                    <div>Loading artworks...</div>
                );
            case tournamentState === "ended":
                return <RankingComponent tournamentId={tournamentId} />;
            case tournamentState === "rankings":
                return <RankingComponent tournamentId={tournamentId} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full flex h-[100vh] justify-center gradient-tournament-background bg-cover">
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
            </div>
        </div>
    );
};

export default TournamentPage;
