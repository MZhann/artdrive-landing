import Image from "next/image";
import done from '../../../public/images/done.png';

const TournamentCongrats = () => {
    return (
        <div className="w-[393px] h-[852px] relative bg-white">
            <Image  src={done} alt="done" width={70} height={70} className="absolute top-60 left-40"/>
            <div className="w-[215px] h-[23px] left-[79px] top-[344px] absolute text-center text-neutral-800 text-2xl font-bold font-['Roboto'] uppercase">
                congratulations!
            </div>
            <div className="w-[281px] h-[66px] left-[53px] top-[396px] absolute text-center text-neutral-800 text-base font-normal font-['Roboto']">
                You are now registered. Please turn on browser notifications, so
                you don’t miss the tournament
            </div>
            <div className="w-[55px] h-[55px] left-[169px] top-[260px] absolute"></div>
        </div>
    );
};

export default TournamentCongrats;
