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
import PrizeDivision from "@/components/tournament-components/PrizeDivision"
import ModalContestantRegister from "@/components/modals/ModalContestantRegister";
import ModalJudgeRegistration from "@/components/modals/ModalJudgeRegister";

const Tournament = () => {
    const router = useRouter();
    const [tournamentInfo, setTournamentInfo] = useState({});
    const { id } = router.query;
    const [showContestantModal, setContestantShowModal] = useState(false);
    const [showJudgeModal, setJudgeShowModal] = useState(false);
    const [showScrollbar, setShowScrollbar] = useState(true);

    useEffect(() => {
        if (router.query) {
            setTournamentInfo(router.query);
        }
    }, [router.query]);

    const openContestantModal = () => setContestantShowModal(true);
    const closeContestantModal = () => setContestantShowModal(false);
    const openJudgeModal = () => setJudgeShowModal(true);
    const closeJudgeModal = () => setJudgeShowModal(false)


    const handleJudgeSubmit = () => {
        console.log('handleJudgeSubmit clicked')
    }
    const handleContestantSubmit = async (formData) => {
        try {
            const response = await fetch(
                `https://artdrivebackend-production.up.railway.app/api/v1/tournaments/${id}/register_participant/`,
                {
                    method: "POST",
                    body: formData,
                }
            );

            if (response.ok) {
                console.log("Successfully registered as a participant!");
                closeContestantModal();
            } else {
                console.error("Failed to register as a participant.");
            }
        } catch (error) {
            console.error("An error occurred during registration:", error);
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

                {tournamentInfo.startDate && (
                    <CountdownTimer startDate={tournamentInfo.startDate} />
                )}

                <div className="flex justify-between w-[90%] mt-5">
                    <ContestantButton openModal={openContestantModal} />
                    <JudgeButton openModal={openJudgeModal}/>
                </div>

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
            <ModalJudgeRegistration  show={showJudgeModal} onClose={closeJudgeModal} onSubmit={handleJudgeSubmit}/>
        </div>
    );
};

export default Tournament;
