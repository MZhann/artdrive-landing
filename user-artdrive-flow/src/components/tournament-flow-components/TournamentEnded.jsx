import Image from "next/image";
import trophy from "../../../public/images/image-buttons/trophy.png";
import loadingGif from "../../../public/loading.gif"


const TournamentEnded = () => {
    return (
        <div className="text-white flex flex-col items-center mt-[30%]">
            <Image src={trophy} alt="trophy" width={100} height={100} className="mb-5 mt-16"/>
            <div className="text-2xl font-bold mb-3 text-center mt-14">ТУРНИР ЗАВЕРШЕН, <br/> ВЫЯВЛЯЕМ <br/> ПОБЕДИТЕЛЕЙ</div>
            <Image src={loadingGif} alt="loading" width={50} height={50} className="mb-5" />
        
        </div>
    );
};

export default TournamentEnded;
