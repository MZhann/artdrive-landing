// import React, { useEffect, useState, useRef } from "react";
// import RoundComponent from "./RoundComponent";
// import FinalRoundComponent from "./FinalRoundComponent";
// import TournamentEnded from "./TournamendEnded";
// import TournamentStarting from './TournamentStarting';
// import RankingComponent from "./RankingComponent";
// import RoundStartModal from "./RoundStartModal";
// import FinalRoundModal from "./FinalRoundModal";
// const TournamentPage = ({ tournamentData, totalParticipants, tournamentId }) => {
//     const [tournamentState, setTournamentState] = useState("waiting");
//     const [roundData, setRoundData] = useState([]);
//     const [artworks, setArtworks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentRound, setCurrentRound] = useState(1);
//     const [totalRounds, setTotalRounds] = useState(10);
//     const [showRoundModal, setShowRoundModal] = useState(false);
//     const [showFinalModal, setShowFinalModal] = useState(false);
//     const ws = useRef(null);

//     useEffect(() => {
//         const fetchArtworks = async () => {
//             try {
//                 const accessToken = localStorage.getItem("accessToken");
//                 const response = await fetch(
//                     `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/judge_artworks/`,
//                     {
//                         method: "GET",
//                         headers: {
//                             "Authorization": `Bearer ${accessToken}`,
//                             "Content-Type": "application/json"
//                         }
//                     }
//                 );
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch artworks");
//                 }
//                 const data = await response.json();
//                 setArtworks(data);
//                 console.log('data of artworks: ', data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchArtworks();
//     }, [tournamentId]);

//     useEffect(() => {
//         ws.current = new WebSocket(`ws://20.52.191.107:8001/ws/tournaments/${tournamentId}/`);

//         ws.current.onopen = () => {
//             console.log("WebSocket connection established");
//         };

//         ws.current.onmessage = (message) => {
//             const parsedMessage = JSON.parse(message.data);
//             console.log('parsedMessage', parsedMessage);
//             handleServerMessage(parsedMessage);
//         };

//         ws.current.onclose = () => {
//             console.log("WebSocket connection closed");
//         };

//         ws.current.onerror = (error) => {
//             console.error("WebSocket error:", error);
//         };

//         return () => {
//             if (ws.current) {
//                 ws.current.close();
//             }
//         };
//     }, [tournamentId]);

//     const handleServerMessage = (message) => {
//         console.log('message in handleServerMessage method: ', message)
//         switch (message.message) {
//             case "You are connected to the tournament channel tournament_7.":
//                 console.log('You are connected in WS');
//                 setTournamentState("waiting");
//                 console.log('tournament state: ', tournamentState)

//                 // setCurrentRound('1');
//                 // setRoundData(message);
//                 // setShowRoundModal(true);
//                 // setTimeout(() => {
//                 //     setShowRoundModal(false);
//                 // }, 4000);
//                 break;
//             case "Stage group started":
//                 console.log("stage group started in WS")
//                 setTournamentState("group stage")
//                 // setShowFinalModal(true);
//                 // setTimeout(() => {
//                 //     setShowFinalModal(false);
//                 // }, 4000);
//                 break;
//             case "Stage playoff started":
//                 setTournamentState("playoff stage")
//                 console.log("stage playoff started WS")
//                 // setTournamentState("ended");
//                 break;
//             case "Stage final started":
//                 console.log("stage final started WS")
//                 // setRankings(message.rankings);
//                 // setTournamentState("rankings");
//                 break;
//             case "Stage ended started":
//                 console.log("stage ended started WS")
//                 break;
//             default:
//                 console.error("Unknown message type:", message.type);
//         }
//     };

//     const renderContent = () => {
//         switch (tournamentState) {
//             case "waiting":
//                 return <TournamentStarting />;
//             case "group stage":
//                 return <RoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />;
//             case "playoff stage":
//                 return <FinalRoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />;
//             case "ended":
//                 return <TournamentEnded />;
//             case "rankings":
//                 return <RankingComponent rankings={rankings} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="w-full flex h-screen justify-center gradient-tournament-background bg-cover">
//             <div className="w-[500px] flex flex-col items-center font-montserrat">
//                 {renderContent()}
//                 {/* <div className="text-white">This is Tournament page</div> */}
//                 <RoundStartModal
//                     show={showRoundModal}
//                     totalRounds={totalRounds}
//                     currentRound={currentRound}
//                     onClose={() => setShowRoundModal(false)}
//                 />
//                 <FinalRoundModal
//                     show={showFinalModal}
//                     onClose={() => setShowFinalModal(false)}
//                 />
//             </div>
//         </div>
//     );
// };
//     //                 {/* <TournamentStarting /> */}
//     //                 {/* <RoundComponent /> */}

//     //                 <FinalRoundComponent images={finalRoundImages}/>
//     //                 {/* <TournamentEnded /> */}
//     //                 {/* <RankingComponent /> */}
//     //             </div>
//     //         </div>

// export default TournamentPage;

// import React, { useEffect, useState, useRef } from "react";
// import RoundComponent from "./RoundComponent";
// import FinalRoundComponent from "./FinalRoundComponent";
// import TournamentEnded from "./TournamendEnded";
// import TournamentStarting from "./TournamentStarting";
// import RankingComponent from "./RankingComponent";
// import RoundStartModal from "./RoundStartModal";
// import FinalRoundModal from "./FinalRoundModal";

// const TournamentPage = ({ tournamentData, totalParticipants, tournamentId }) => {
//     const [tournamentState, setTournamentState] = useState("waiting");
//     const [roundData, setRoundData] = useState([]);
//     const [artworks, setArtworks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentRound, setCurrentRound] = useState(1);
//     const [totalRounds, setTotalRounds] = useState(10);
//     const [showRoundModal, setShowRoundModal] = useState(false);
//     const [showFinalModal, setShowFinalModal] = useState(false);
//     const ws = useRef(null);

//     useEffect(() => {
//         const fetchArtworks = async () => {
//             try {
//                 const accessToken = localStorage.getItem("accessToken");
//                 const response = await fetch(
//                     `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/judge_artworks/`,
//                     {
//                         method: "GET",
//                         headers: {
//                             "Authorization": `Bearer ${accessToken}`,
//                             "Content-Type": "application/json"
//                         }
//                     }
//                 );
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch artworks");
//                 }
//                 const data = await response.json();
//                 setArtworks(data);
//                 console.log('data of artworks: ', data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchArtworks();
//     }, [tournamentId, tournamentState]);

//     useEffect(() => {
//         ws.current = new WebSocket(`ws://20.52.191.107:8001/ws/tournaments/${tournamentId}/`);

//         ws.current.onopen = () => {
//             console.log("WebSocket connection established");
//         };

//         ws.current.onmessage = (message) => {
//             const parsedMessage = JSON.parse(message.data);
//             console.log('parsedMessage', parsedMessage);
//             handleServerMessage(parsedMessage);
//         };

//         ws.current.onclose = () => {
//             console.log("WebSocket connection closed");
//         };

//         ws.current.onerror = (error) => {
//             console.error("WebSocket error:", error);
//         };

//         return () => {
//             if (ws.current) {
//                 ws.current.close();
//             }
//         };
//     }, [tournamentId]);

//     const handleServerMessage = (message) => {
//         console.log('message in handleServerMessage method: ', message)
//         switch (message.message) {
//             case "You are connected to the tournament channel tournament_7.":
//                 console.log('You are connected in WS');
//                 setTournamentState("waiting");
//                 break;
//             case "Stage group started":
//                 console.log("stage group started in WS");
//                 setTournamentState("group stage");
//                 setShowRoundModal(true);
//                 setTimeout(() => {
//                     setShowRoundModal(false);
//                 }, 4000);
//                 break;
//             case "Stage playoff started":
//                 setTournamentState("playoff stage");
//                 console.log("stage playoff started WS");

//                 // setShowFinalModal(true);
//                 // setTimeout(() => {
//                     // setShowFinalModal(false);
//                 // }, 4000);
//                 break;
//             case "Stage final started":
//                 console.log("stage final started WS");
//                 setTournamentState("final stage");
//                 setShowFinalModal(true);
//                 setTimeout(() => {
//                     setShowFinalModal(false);
//                 }, 4000);
//                 break;
//             case "Stage ended":
//                 console.log("stage ended WS");
//                 setTournamentState("ended");
//                 break;
//             case "Tournament over":
//                 console.log("tournament over WS");
//                 setTournamentState("rankings");
//                 break;
//             default:
//                 console.error("Unknown message type:", message.message);
//         }
//     };

//     const renderContent = () => {
//         switch (tournamentState) {
//             case "waiting":
//                 return <TournamentStarting />;
//             case "group stage":
//                 return <RoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />;
//             case "playoff stage":
//                 return <FinalRoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />;
//             case "final stage":
//                 return <FinalRoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />;
//             case "ended":
//                 return <TournamentEnded />;
//             case "rankings":
//                 return <RankingComponent rankings={tournamentData.rankings} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="w-full flex h-screen justify-center gradient-tournament-background bg-cover">
//             <div className="w-[500px] flex flex-col items-center font-montserrat">
//                 {renderContent()}
//                 <RoundStartModal
//                     show={showRoundModal}
//                     totalRounds={totalRounds}
//                     currentRound={currentRound}
//                     onClose={() => setShowRoundModal(false)}
//                 />
//                 <FinalRoundModal
//                     show={showFinalModal}
//                     onClose={() => setShowFinalModal(false)}
//                 />
//             </div>
//         </div>
//     );
// };

// export default TournamentPage;

// import React, { useEffect, useState, useRef } from "react";
// import RoundComponent from "./RoundComponent";
// import FinalRoundComponent from "./FinalRoundComponent";
// import TournamentEnded from "./TournamendEnded";
// import TournamentStarting from "./TournamentStarting";
// import RankingComponent from "./RankingComponent";
// import RoundStartModal from "./RoundStartModal";
// import FinalRoundModal from "./FinalRoundModal";

// const TournamentPage = ({ tournamentData, totalParticipants, tournamentId }) => {
//     const [tournamentState, setTournamentState] = useState("waiting");
//     const [roundData, setRoundData] = useState([]);
//     const [artworks, setArtworks] = useState([]);
//     const [loading, setLoading] = useState(false); // Change initial state to false
//     const [error, setError] = useState(null);
//     const [currentRound, setCurrentRound] = useState(1);
//     const [totalRounds, setTotalRounds] = useState(10);
//     const [showRoundModal, setShowRoundModal] = useState(false);
//     const [showFinalModal, setShowFinalModal] = useState(false);
//     const ws = useRef(null);

//     const fetchArtworks = async () => {
//         setLoading(true); // Start loading
//         try {
//             const accessToken = localStorage.getItem("accessToken");
//             const response = await fetch(
//                 `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/judge_artworks/`,
//                 {
//                     method: "GET",
//                     headers: {
//                         "Authorization": `Bearer ${accessToken}`,
//                         "Content-Type": "application/json"
//                     }
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error("Failed to fetch artworks");
//             }
//             const data = await response.json();
//             setArtworks(data);
//             console.log('data of artworks: ', data);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false); // Stop loading
//         }
//     };

//     useEffect(() => {
//         ws.current = new WebSocket(`ws://20.52.191.107:8001/ws/tournaments/${tournamentId}/`);

//         ws.current.onopen = () => {
//             console.log("WebSocket connection established");
//         };

//         ws.current.onmessage = (message) => {
//             const parsedMessage = JSON.parse(message.data);
//             console.log('parsedMessage', parsedMessage);
//             handleServerMessage(parsedMessage);
//         };

//         ws.current.onclose = () => {
//             console.log("WebSocket connection closed");
//         };

//         ws.current.onerror = (error) => {
//             console.error("WebSocket error:", error);
//         };

//         return () => {
//             if (ws.current) {
//                 ws.current.close();
//             }
//         };
//     }, [tournamentId]);

//     const handleServerMessage = (message) => {
//         console.log('message in handleServerMessage method: ', message)
//         switch (message.message) {
//             case "You are connected to the tournament channel tournament_7.":
//                 console.log('You are connected in WS');
//                 setTournamentState("waiting");
//                 break;
//             case "Stage group started":
//                 console.log("stage group started in WS");
//                 setTournamentState("group stage");
//                 setShowRoundModal(true);
//                 fetchArtworks(); // Fetch artworks when group stage starts
//                 setTimeout(() => {
//                     setShowRoundModal(false);
//                 }, 4000);
//                 break;
//             case "Stage playoff started":
//                 setTournamentState("playoff stage");
//                 console.log("stage playoff started WS");
//                 setShowFinalModal(true);
//                 fetchArtworks(); // Fetch artworks when playoff stage starts
//                 setTimeout(() => {
//                     setShowFinalModal(false);
//                 }, 4000);
//                 break;
//             case "Stage final started":
//                 console.log("stage final started WS");
//                 setTournamentState("final stage");
//                 setShowFinalModal(true);
//                 fetchArtworks(); // Fetch artworks when final stage starts
//                 setTimeout(() => {
//                     setShowFinalModal(false);
//                 }, 4000);
//                 break;
//             case "Stage ended":
//                 console.log("stage ended WS");
//                 setTournamentState("ended");
//                 break;
//             case "Tournament over":
//                 console.log("tournament over WS");
//                 setTournamentState("rankings");
//                 break;
//             default:
//                 console.error("Unknown message type:", message.message);
//         }
//     };

//     const renderContent = () => {
//         if (loading) {
//             return <div>Loading...</div>;
//         }

//         if (error) {
//             return <div>Error: {error}</div>;
//         }

//         switch (tournamentState) {
//             case "waiting":
//                 return <TournamentStarting />;
//             case "group stage":
//                 return artworks.length > 0 ? (
//                     <RoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />
//                 ) : (
//                     <div>Loading artworks...</div>
//                 );
//             case "playoff stage":
//             case "final stage":
//                 return artworks.length > 0 ? (
//                     <FinalRoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />
//                 ) : (
//                     <div>Loading artworks...</div>
//                 );
//             case "ended":
//                 return <TournamentEnded />;
//             case "rankings":
//                 return <RankingComponent rankings={tournamentData.rankings} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="w-full flex h-screen justify-center gradient-tournament-background bg-cover">
//             <div className="w-[500px] flex flex-col items-center font-montserrat">
//                 {renderContent()}
//                 <RoundStartModal
//                     show={showRoundModal}
//                     totalRounds={totalRounds}
//                     currentRound={currentRound}
//                     onClose={() => setShowRoundModal(false)}
//                 />
//                 <FinalRoundModal
//                     show={showFinalModal}
//                     onClose={() => setShowFinalModal(false)}
//                 />
//             </div>
//         </div>
//     );
// };

// export default TournamentPage;

import React, { useEffect, useState, useRef } from "react";
import RoundComponent from "./RoundComponent";
import FinalRoundComponent from "./FinalRoundComponent";
import TournamentEnded from "./TournamendEnded";
import TournamentStarting from "./TournamentStarting";
import RankingComponent from "./RankingComponent";
import RoundStartModal from "./RoundStartModal";
import FinalRoundModal from "./FinalRoundModal";

const TournamentPage = ({
    tournamentData,
    totalParticipants,
    tournamentId,
}) => {
    const [tournamentState, setTournamentState] = useState("waiting");
    const [roundData, setRoundData] = useState([]);
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(false); // Change initial state to false
    const [error, setError] = useState(null);
    const [currentRound, setCurrentRound] = useState(1);
    const [totalRounds, setTotalRounds] = useState(10);
    const [showRoundModal, setShowRoundModal] = useState(false);
    const [showFinalModal, setShowFinalModal] = useState(false);
    const ws = useRef(null);

    const fetchArtworks = async () => {
        setLoading(true); // Start loading
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
            setLoading(false); // Stop loading
        }
    };

    useEffect(() => {
        ws.current = new WebSocket(
            `wss://artdrivebackenddaphne-production.up.railway.app/ws/tournaments/${tournamentId}/`
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
            case "You are connected to the tournament channel tournament_7.":
                console.log("You are connected in WS");
                setTournamentState("waiting");
                break;
            case "Stage group started":
                console.log("stage group started in WS");
                setTournamentState("group stage");
                setShowRoundModal(true);
                fetchArtworks(); // Fetch artworks when group stage starts
                setTimeout(() => {
                    setShowRoundModal(false);
                }, 4000);
                break;
            case "Stage playoff started":
                setTournamentState("playoff stage");
                console.log("stage playoff started WS");
                fetchArtworks(); // Fetch artworks when playoff stage starts
                setShowFinalModal(true);
                setTimeout(() => {
                    setShowFinalModal(false);
                }, 4000);
                break;
            case "Stage final started":
                console.log("stage final started WS");
                setTournamentState("final stage");
                fetchArtworks(); // Fetch artworks when final stage starts
                setShowFinalModal(true);
                setTimeout(() => {
                    setShowFinalModal(false);
                }, 4000);
                break;
            case "Stage ended started":
                console.log("final ended WS");
                setTournamentState("ended");
                break;
            case "Tournament over":
                console.log("tournament over WS");
                setTournamentState("rankings");
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
            case "waiting":
                return <TournamentStarting />;
            case "group stage":
                return artworks.length > 0 ? (
                    <RoundComponent
                        totalParticipants={totalParticipants}
                        artworks={artworks}
                        tournamentId={tournamentId}
                    />
                ) : (
                    <div>Loading artworks...</div>
                );
            case "playoff stage":
            case "playoff stage":
                return (
                    <FinalRoundComponent
                        totalParticipants={totalParticipants}
                        artworks={artworks}
                        tournamentId={tournamentId}
                    />
                );

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
                return <RankingComponent tournamentId={tournamentId}/>;

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
            </div>
        </div>
    );
};

export default TournamentPage;

// import React, { useEffect, useState, useRef } from "react";
// import RoundComponent from "./RoundComponent";
// import FinalRoundComponent from "./FinalRoundComponent";
// import TournamentEnded from "./TournamendEnded";
// import TournamentStarting from "./TournamentStarting";
// import RankingComponent from "./RankingComponent";
// import RoundStartModal from "./RoundStartModal";
// import FinalRoundModal from "./FinalRoundModal";

// const TournamentPage = ({ tournamentData, totalParticipants, tournamentId }) => {
//     const [tournamentState, setTournamentState] = useState("waiting");
//     const [artworks, setArtworks] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//     const [currentRound, setCurrentRound] = useState(1);
//     const [totalRounds, setTotalRounds] = useState(10);
//     const [showRoundModal, setShowRoundModal] = useState(false);
//     const [showFinalModal, setShowFinalModal] = useState(false);
//     const ws = useRef(null);

//     const fetchArtworks = async () => {
//         setLoading(true);
//         try {
//             const accessToken = localStorage.getItem("accessToken");
//             const response = await fetch(
//                 `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${tournamentId}/judge_artworks/`,
//                 {
//                     method: "GET",
//                     headers: {
//                         "Authorization": `Bearer ${accessToken}`,
//                         "Content-Type": "application/json"
//                     }
//                 }
//             );
//             if (!response.ok) {
//                 throw new Error("Failed to fetch artworks");
//             }
//             const data = await response.json();
//             setArtworks(data);
//             console.log('data of artworks: ', data);
//         } catch (error) {
//             setError(error.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (!ws.current) {
//             ws.current = new WebSocket(`ws://20.52.191.107:8001/ws/tournaments/${tournamentId}/`);

//             ws.current.onopen = () => {
//                 console.log("WebSocket connection established");
//             };

//             ws.current.onmessage = (message) => {
//                 const parsedMessage = JSON.parse(message.data);
//                 console.log('parsedMessage', parsedMessage);
//                 handleServerMessage(parsedMessage);
//             };

//             ws.current.onclose = () => {
//                 console.log("WebSocket connection closed");
//             };

//             ws.current.onerror = (error) => {
//                 console.error("WebSocket error:", error);
//             };
//         }

//         return () => {
//             if (ws.current) {
//                 ws.current.close();
//                 ws.current = null;
//             }
//         };
//     }, [tournamentId]);

//     const handleServerMessage = (message) => {
//         console.log('message in handleServerMessage method: ', message);
//         switch (message.message) {
//             case "You are connected to the tournament channel tournament_7.":
//                 console.log('You are connected in WS');
//                 setTournamentState("waiting");
//                 break;
//             case "Stage group started":
//                 console.log("stage group started in WS");
//                 setTournamentState("group stage");
//                 setShowRoundModal(true);
//                 fetchArtworks();
//                 setTimeout(() => {
//                     setShowRoundModal(false);
//                 }, 4000);
//                 break;
//             case "Stage playoff started":
//                 setTournamentState("playoff stage");
//                 console.log("stage playoff started WS");
//                 fetchArtworks();
//                 setShowFinalModal(true);
//                 setTimeout(() => {
//                     setShowFinalModal(false);
//                 }, 4000);
//                 break;
//             case "Stage final started":
//                 console.log("stage final started WS");
//                 setTournamentState("final stage");
//                 fetchArtworks();
//                 setShowFinalModal(true);
//                 setTimeout(() => {
//                     setShowFinalModal(false);
//                 }, 4000);
//                 break;
//             case "Stage ended":
//                 console.log("stage ended WS");
//                 setTournamentState("ended");
//                 break;
//             case "Tournament over":
//                 console.log("tournament over WS");
//                 setTournamentState("rankings");
//                 break;
//             default:
//                 console.error("Unknown message type:", message.message);
//         }
//     };

//     const renderContent = () => {
//         if (loading) {
//             return <div>Loading...</div>;
//         }

//         if (error) {
//             return <div>Error: {error}</div>;
//         }

//         switch (tournamentState) {
//             case "waiting":
//                 return <TournamentStarting />;
//             case "group stage":
//                 return artworks.length > 0 ? (
//                     <RoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />
//                 ) : (
//                     <div>Loading artworks...</div>
//                 );
//             case "playoff stage":
//             case "final stage":
//                 return artworks.length > 0 ? (
//                     <FinalRoundComponent totalParticipants={totalParticipants} artworks={artworks} tournamentId={tournamentId} />
//                 ) : (
//                     <div>Loading artworks...</div>
//                 );
//             case "ended":
//                 return <TournamentEnded />;
//             case "rankings":
//                 return <RankingComponent rankings={tournamentData.rankings} />;
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="w-full flex h-screen justify-center gradient-tournament-background bg-cover">
//             <div className="w-[500px] flex flex-col items-center font-montserrat">
//                 {renderContent()}
//                 <RoundStartModal
//                     show={showRoundModal}
//                     totalRounds={totalRounds}
//                     currentRound={currentRound}
//                     onClose={() => setShowRoundModal(false)}
//                 />
//                 <FinalRoundModal
//                     show={showFinalModal}
//                     onClose={() => setShowFinalModal(false)}
//                 />
//             </div>
//         </div>
//     );
// };

// export default TournamentPage;
