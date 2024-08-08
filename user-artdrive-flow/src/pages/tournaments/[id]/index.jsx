// import Image from "next/image";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import CountdownTimer from "@/components/tournament-components/CountdownTimer";
// import ContestantButton from "@/components/tournament-components/ContestantButton";
// import JudgeButton from "@/components/tournament-components/JudgeButton";
// import SponsorBlock from "@/components/tournament-components/SponsorBlock";
// import PrizeBlock from "@/components/tournament-components/PrizeBlock";
// import PrizeDivision from "@/components/tournament-components/PrizeDivision";
// import ModalContestantRegister from "@/components/modals/ModalContestantRegister";
// import TournamentResult from "@/components/tournament-components/TournamentResult";
// import ModalJudgeRegister from "@/components/modals/ModalJudgeRegister";
// import { checkAuthorization } from "@/pages/api/profile";
// import {
//     getTournamentInfo,
//     checkUserRole,
//     registerContestant,
//     registerJudge,
// } from "@/pages/api/tournaments";

// const Tournament = () => {
//     const router = useRouter();
//     const [tournamentInfo, setTournamentInfo] = useState({});
//     const { id } = router.query;
//     const [showContestantModal, setContestantShowModal] = useState(false);
//     const [showJudgeModal, setJudgeShowModal] = useState(false);
//     const [userRole, setUserRole] = useState("");

//     useEffect(() => {
//         console.log('tournamentInfo:', tournamentInfo)
//         const fetchTournamentInfo = async () => {
//             if (id) {
//                 const data = await getTournamentInfo(id);
//                 setTournamentInfo(data);
//             }
//         };

//         fetchTournamentInfo();
//     }, [id]);

//     useEffect(() => {
//         const checkUsersRole = async () => {
//             const accessToken = localStorage.getItem("accessToken");
//             if (!accessToken) {
//                 return;
//             }

//             const response = await checkUserRole(id);
//             const role = response.role;
//             if (role === "participant_judge" || role === "judge") {
//                 setUserRole(role);
//             }
//             console.log("role: ", role);
//         };

//         if (id) {
//             checkUsersRole();
//         }
//     }, [id]);

//     const checkUserAuthorization = () => {
//         const accessToken = localStorage.getItem("accessToken");
//         if (!accessToken) {
//             return false;
//         }else{
//             return true;
//         }
//     };

//     const openContestantModal = async () => {
//         const isAuthorized = await checkUserAuthorization();
//         if (isAuthorized) {
//             setContestantShowModal(true);
//         } else {
//             router.push("/auth/login");
//         }
//     };

//     const openJudgeModal = async () => {
//         const isAuthorized = await checkUserAuthorization();
//         if (isAuthorized) {
//             setJudgeShowModal(true);
//         } else {
//             router.push("/auth/login");
//         }
//     };

//     const closeContestantModal = () => setContestantShowModal(false);
//     const closeJudgeModal = () => setJudgeShowModal(false);

//     const openTournament = () => {
//         router.push({
//             pathname: "/tournament",
//             query: { id: id, userRole: userRole },
//         });
//     };

//     const handleJudgeSubmit = async (formData) => {
//         try {
//             const response = await registerJudge(id, formData);

//             console.log("Successfully registered as a judge!", response);
//             closeJudgeModal();
//             setUserRole("judge");
//         } catch (error) {
//             console.error("An error occurred during registration:", error);
//         }
//     };

//     const handleContestantSubmit = async (formData) => {
//         try {
//             const accessToken = localStorage.getItem("accessToken");
//             const response = await registerContestant(id, formData);

//             console.log("Successfully registered as a contestant!", response);
//             closeContestantModal();
//             setUserRole("participant_judge");
//         } catch (error) {
//             console.error("An error occurred during registration:", error);
//         }
//     };

//     const renderContent = () => {
//         if (tournamentInfo.status === "upcoming") {
//             return (
//                 <>
//                     <CountdownTimer startDate={tournamentInfo.start_date} startTime={tournamentInfo.start_time}/>
//                     <div
//                         className={
//                             userRole == ""
//                                 ? `flex justify-between w-[90%] mt-5`
//                                 : `flex justify-center w-[90%] mt-5`
//                         }
//                     >
//                         {userRole === "participant_judge" && (
//                             <div className="text-2xl text-center px-3 py-4 md:px-5 border-2 border-white rounded-2xl bg-purple-700">
//                                 You are registered as a contestant
//                             </div>
//                         )}
//                         {userRole === "" && (
//                             <ContestantButton openModal={openContestantModal} />
//                         )}

//                         {userRole === "judge" && (
//                             <div className="text-2xl flex justify-center items-center px-4 text-center border-2 border-white py-6 rounded-2xl bg-purple-700">
//                                 You are registered as a judge
//                             </div>
//                         )}
//                         {userRole === "" && (
//                             <JudgeButton openModal={openJudgeModal} />
//                         )}
//                     </div>
//                 </>
//             );
//         } else if (tournamentInfo.status === "past") {
//             return (
//                 <div className="mt-10 text-2xl bg-purple-800 rounded-2xl border-4 px-10 py-6  mx-6 text-center">
//                     Tournament was over at{" "}
//                     {new Date(tournamentInfo.start_date).toLocaleDateString()}
//                 </div>
//             );
//         } else if (tournamentInfo.status === "live") {
//             return (
//                 <>
//                     <CountdownTimer startDate={tournamentInfo.start_date} startTime={tournamentInfo.start_date} />
//                     <div className="mt-5 text-2xl">Tournament is Live now</div>
//                     <div className="flex justify-center w-[90%] mt-5">
//                         <button
//                             onClick={openTournament}
//                             className="purple-gradient text-white py-3 rounded-xl px-6"
//                         >
//                             Join
//                         </button>
//                     </div>
//                 </>
//             );
//         }
//     };

//     return (
//         <div className="tournament-bg font-montserrat w-full flex flex-col items-center">
//             <Navbar />
//             <div className="text-white mt-24 w-full flex flex-col items-center ">
//                 <div className="w-[90%] h-[290px] rounded-3xl flex justify-center absolute bg-purple-900 animate-pulse"></div>
//                 <div
//                     className="w-[90%] h-[290px] rounded-3xl flex justify-center z-10 "
//                     style={{
//                         backgroundImage: `url(${tournamentInfo.background_image})`,
//                         backgroundSize: "cover",
//                         backgroundPosition: "center",
//                     }}
//                 >
//                     <div className="bg-black bg-opacity-40 rounded-3xl w-full h-full flex justify-center items-center">
//                         <h1 className="text-white text-center text-5xl font-extrabold">
//                             {tournamentInfo.name}
//                         </h1>
//                     </div>
//                 </div>

//                 {renderContent()}


//                 <div className="mt-10 text-2xl">Art Drive Tournament</div>

//                 {tournamentInfo.status === "past" && <TournamentResult />}
                

//                 <SponsorBlock bonus_prizes={tournamentInfo.bonus_prizes} />
//                 <PrizeBlock
//                     prizeAmount={tournamentInfo.prize_fund}
//                     audienceCount={tournamentInfo.audience}
//                     participantsCount={tournamentInfo.total_participants}
//                 />

//                 <div className="w-[90%] mt-7 pl-2 pr-2">
//                     <h1 className="text-xl font-bold mb-2">Prize Fund</h1>
//                     <div className="">
//                        For tournament <strong className="text-yellow-400">&apos;{tournamentInfo.name}&apos;</strong>  the prize fund corresponds to the information below: {" "}
//                     </div>
//                 </div>

//                 <PrizeDivision />
//             </div>
//             <Footer />
//             <ModalContestantRegister
//                 show={showContestantModal}
//                 onClose={closeContestantModal}
//                 onSubmit={handleContestantSubmit}
//             />
//             <ModalJudgeRegister
//                 show={showJudgeModal}
//                 onClose={closeJudgeModal}
//                 onSubmit={handleJudgeSubmit}
//             />
//         </div>
//     );
// };

// export default Tournament;

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/tournament-components/CountdownTimer";
import ContestantButton from "@/components/tournament-components/ContestantButton";
import JudgeButton from "@/components/tournament-components/JudgeButton";
import SponsorBlock from "@/components/tournament-components/SponsorBlock";
import PrizeBlock from "@/components/tournament-components/PrizeBlock";
import PrizeDivision from "@/components/tournament-components/PrizeDivision";
import ModalContestantRegister from "@/components/modals/ModalContestantRegister";
import TournamentResult from "@/components/tournament-components/TournamentResult";
import ModalJudgeRegister from "@/components/modals/ModalJudgeRegister";
import { checkAuthorization } from "@/pages/api/profile";
import {
    getTournamentInfo,
    checkUserRole,
    registerContestant,
    registerJudge,
} from "@/pages/api/tournaments";

const Tournament = () => {
    const router = useRouter();
    const [tournamentInfo, setTournamentInfo] = useState({});
    const { id } = router.query;
    const [showContestantModal, setContestantShowModal] = useState(false);
    const [showJudgeModal, setJudgeShowModal] = useState(false);
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        const fetchTournamentInfo = async () => {
            if (id) {
                const data = await getTournamentInfo(id);
                setTournamentInfo(data);
            }
        };

        fetchTournamentInfo();
    }, [id]);

    useEffect(() => {
        const checkUsersRole = async () => {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                return;
            }

            const response = await checkUserRole(id);
            const role = response.role;
            if (role === "participant_judge" || role === "judge") {
                setUserRole(role);
            }
        };

        if (id) {
            checkUsersRole();
        }
    }, [id]);

    const checkUserAuthorization = () => {
        const accessToken = localStorage.getItem("accessToken");
        return !!accessToken;
    };

    const openContestantModal = async () => {
        const isAuthorized = await checkUserAuthorization();
        if (isAuthorized) {
            setContestantShowModal(true);
        } else {
            router.push("/auth/login");
        }
    };

    const openJudgeModal = async () => {
        const isAuthorized = await checkUserAuthorization();
        if (isAuthorized) {
            setJudgeShowModal(true);
        } else {
            router.push("/auth/login");
        }
    };

    const closeContestantModal = () => setContestantShowModal(false);
    const closeJudgeModal = () => setJudgeShowModal(false);

    const openTournament = () => {
        router.push({
            pathname: "/tournament",
            query: { id: id, userRole: userRole },
        });
    };

    const handleJudgeSubmit = async (formData) => {
        try {
            const response = await registerJudge(id, formData);
            closeJudgeModal();
            setUserRole("judge");
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };

    const handleContestantSubmit = async (formData) => {
        try {
            const response = await registerContestant(id, formData);
            closeContestantModal();
            setUserRole("participant_judge");
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };

    const renderContent = () => {
        if (tournamentInfo.status === "upcoming") {
            return (
                <>
                    <CountdownTimer startDate={tournamentInfo.start_date} startTime={tournamentInfo.start_time} />
                    <div
                        className={
                            userRole == ""
                                ? `flex justify-between w-[90%] mt-5`
                                : `flex justify-center w-[90%] mt-5`
                        }
                    >
                        {userRole === "participant_judge" && (
                            <div className="text-2xl text-center px-3 py-4 md:px-5 border-2 border-white rounded-2xl bg-purple-700">
                                You are registered as a contestant
                            </div>
                        )}
                        {userRole === "" && (
                            <ContestantButton openModal={openContestantModal} />
                        )}

                        {userRole === "judge" && (
                            <div className="text-2xl flex justify-center items-center px-4 text-center border-2 border-white py-6 rounded-2xl bg-purple-700">
                                You are registered as a judge
                            </div>
                        )}
                        {userRole === "" && (
                            <JudgeButton openModal={openJudgeModal} />
                        )}
                    </div>
                </>
            );
        } else if (tournamentInfo.status === "past") {
            return (
                <div className="mt-10 text-2xl bg-purple-800 rounded-2xl border-4 px-10 py-6  mx-6 text-center">
                    Tournament was over at{" "}
                    {new Date(tournamentInfo.start_date).toLocaleDateString()}
                </div>
            );
        } else if (tournamentInfo.status === "live") {
            return (
                <>
                    <CountdownTimer startDate={tournamentInfo.start_date} startTime={tournamentInfo.start_date} />
                    <div className="mt-5 text-2xl">Tournament is Live now</div>
                    <div className="flex justify-center w-[90%] mt-5">
                        <button
                            onClick={openTournament}
                            className="purple-gradient text-white py-3 rounded-xl px-6"
                        >
                            Join
                        </button>
                    </div>
                </>
            );
        }
    };

    return (
        <div className="tournament-bg font-montserrat w-full flex flex-col items-center">
            <Navbar />
            <div className="text-white mt-24 w-full flex flex-col items-center ">
                <div className="w-[90%] h-[290px] rounded-3xl flex justify-center absolute bg-purple-900 animate-pulse"></div>
                <div
                    className="w-[90%] h-[290px] rounded-3xl flex justify-center z-10 "
                    style={{
                        backgroundImage: `url(${tournamentInfo.background_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="bg-black bg-opacity-40 rounded-3xl w-full h-full flex justify-center items-center">
                        <h1 className="text-white text-center text-5xl font-extrabold">
                            {tournamentInfo.name}
                        </h1>
                    </div>
                </div>

                {renderContent()}

                <div className="mt-10 text-2xl">Art Drive Tournament</div>

                {tournamentInfo.status === "past" && <TournamentResult tournamentId={id} />}

                <SponsorBlock bonus_prizes={tournamentInfo.bonus_prizes} />
                <PrizeBlock
                    prizeAmount={tournamentInfo.prize_fund}
                    audienceCount={tournamentInfo.audience}
                    participantsCount={tournamentInfo.total_participants}
                />

                <div className="w-[90%] mt-7 pl-2 pr-2">
                    <h1 className="text-xl font-bold mb-2">Prize Fund</h1>
                    <div className="">
                        For tournament <strong className="text-yellow-400">&apos;{tournamentInfo.name}&apos;</strong>  the prize fund corresponds to the information below: {" "}
                    </div>
                </div>

                <PrizeDivision />
            </div>
            <Footer />
            <ModalContestantRegister
                show={showContestantModal}
                onClose={closeContestantModal}
                onSubmit={handleContestantSubmit}
            />
            <ModalJudgeRegister
                show={showJudgeModal}
                onClose={closeJudgeModal}
                onSubmit={handleJudgeSubmit}
            />
        </div>
    );
};

export default Tournament;
