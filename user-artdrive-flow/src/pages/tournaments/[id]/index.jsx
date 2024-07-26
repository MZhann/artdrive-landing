import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/tournament-components/CountdownTimer";
import ContestantButton from "@/components/tournament-components/ContestantButton";
import JudgeButton from "@/components/tournament-components/JudgeButton";
import SponsorBlock from "@/components/tournament-components/SponsorBlock";
import PrizeBlock from "@/components/tournament-components/PrizeBlock";
import PrizeDivision from "@/components/tournament-components/PrizeDivision";
import ModalContestantRegister from "@/components/modals/ModalContestantRegister";
import ModalJudgeRegister from "@/components/modals/ModalJudgeRegister";

const Tournament = () => {
    const router = useRouter();
    const [tournamentInfo, setTournamentInfo] = useState({});
    const { id } = router.query;
    const [showContestantModal, setContestantShowModal] = useState(false);
    const [showJudgeModal, setJudgeShowModal] = useState(false);
    const [userRole, setUserRole] = useState("");

    useEffect(() => {
        if (router.query) {
            setTournamentInfo(router.query);
        }
    }, [router.query]);

    useEffect(() => {
        const checkUserRole = async () => {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                return;
            }
            try {
                const response = await fetch(
                    `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${id}/check_user_role/`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                if (response.ok) {
                    const data = await response.json();
                    const role = data.role;
                    
                    if (role === "participant_judge" || role === "judge") {
                        setUserRole(role);
                    }
                    console.log('role: ', role);
                }
            } catch (error) {
                console.error("Failed to check user role:", error);
            }
        };

        if (id) {
            checkUserRole();
        }
    }, [id]);

    const checkAuthorization = async () => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                return false;
            }
            const response = await fetch('https://artdrivebackend-production.up.railway.app/api/v1/profile/', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            return response.ok;
        } catch (error) {
            console.error("Authorization check failed:", error);
            return false;
        }
    };

    const openContestantModal = async () => {
        const isAuthorized = await checkAuthorization();
        if (isAuthorized) {
            setContestantShowModal(true);
        } else {
            router.push('/auth/login');
        }
    };

    const openJudgeModal = async () => {
        const isAuthorized = await checkAuthorization();
        if (isAuthorized) {
            setJudgeShowModal(true);
        } else {
            router.push('/auth/login');
        }
    };

    const closeContestantModal = () => setContestantShowModal(false);
    const closeJudgeModal = () => setJudgeShowModal(false);

    const openTournament = () => {
        router.push({
            pathname: '/tournament',
            query: { id: id, userRole: userRole }
        });
    };

    const handleJudgeSubmit = async (formData) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(
                `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${id}/register_judge/`,
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                console.log("Successfully registered as a judge!");
                closeJudgeModal();
                setUserRole("judge");
            } else {
                console.error("Failed to register as a judge.");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };

    const handleContestantSubmit = async (formData) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            const response = await fetch(
                `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${id}/register_participant/`,
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${accessToken}`
                    },
                    body: formData,
                }
            );

            if (response.ok) {
                console.log("Successfully registered as a participant!");
                closeContestantModal();
                setUserRole("participant_judge");
            } else {
                console.error("Failed to register as a participant.");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
        }
    };

    const renderContent = () => {
        if (tournamentInfo.status === "upcoming") {
            return (
                <>
                    <CountdownTimer startDate={tournamentInfo.startDate} />
                    <div className={userRole=='' ? `flex justify-between w-[90%] mt-5` : `flex justify-center w-[90%] mt-5`}>
                        {userRole === "participant_judge" && (
                            <div className="text-2xl text-center px-3 py-2 rounded-2xl bg-indigo-500">You are registered as a contestant</div>
                        )} 
                        {userRole === '' && (
                            <ContestantButton openModal={openContestantModal} />                            
                        )}
                        
                        {userRole === "judge" && (
                            <div className="text-2xl flex justify-center items-center px-4 text-center py-6 rounded-2xl bg-indigo-500">You are registered as a judge</div>
                        ) }
                        {userRole === '' &&  (
                            <JudgeButton openModal={openJudgeModal} />
                        )}
                    </div>
                </>
            );
        } else if (tournamentInfo.status === "past") {
            return (
                <div className="mt-5 text-2xl bg-purple-800 rounded-2xl border-4 px-10 py-6  mx-6 text-center py-2">
                    Tournament was over at {new Date(tournamentInfo.startDate).toLocaleDateString()}
                </div>
            );
        } else if (tournamentInfo.status === "live") {
            return (
                <>
                    <CountdownTimer startDate={tournamentInfo.startDate} />
                    <div className="mt-5 text-2xl">Tournament is Live now</div>
                    <div className="flex justify-center w-[90%] mt-5">
                        <button onClick={openTournament} className="purple-gradient text-white py-3 rounded-xl px-6">
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
                <div
                    className="w-[90%] h-[290px] rounded-3xl flex justify-center"
                    style={{
                        backgroundImage: `url(${tournamentInfo.backgroundImage})`,
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

                <div className="mt-5 text-2xl">Art Drive Tournament</div>

                <SponsorBlock bonus_prizes={tournamentInfo.bonus_prizes} />
                <PrizeBlock
                    prizeAmount={tournamentInfo.prize_fund}
                    audienceCount={tournamentInfo.audience}
                    participantsCount={tournamentInfo.total_participants}
                />

                <div className="w-[90%] mt-7 pl-2 pr-2">
                    <h1 className="text-xl font-bold mb-2">Prize Fund</h1>
                    <div className="">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. </div>
                </div>

                <PrizeDivision />
                
            </div>
            <Footer />
            <ModalContestantRegister show={showContestantModal} onClose={closeContestantModal} onSubmit={handleContestantSubmit} />
            <ModalJudgeRegister show={showJudgeModal} onClose={closeJudgeModal} onSubmit={handleJudgeSubmit} />
        </div>
    );
};

export default Tournament;
