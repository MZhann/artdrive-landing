import Image from "next/image";
import done from "../../../public/images/donePurple.png";
import loadingGif from "../../../public/loading.gif"


const TournamentStarting = () => {
    return (
        <div className="text-white flex flex-col items-center mt-[30%]">
            <Image src={done} alt="done" width={50} height={50} className="mb-5"/>
            <h1 className="text-2xl font-bold mb-3">YOU JOINED!</h1>
            <p>waiting for other opponents to join</p>
            <Image src={loadingGif} alt="loading" width={50} height={50} className="mb-5 mt-4" />
            <h2 className="font-bold text-lg">Tournament title:</h2>
            <h2 className="mb-5 uppercase">aethetics of almaty</h2>
            <h2 className="font-bold text-lg">Tournament mission:</h2>
            <h2 className="uppercase mb-5">Find extraordinary art</h2>
            <h2 className="font-bold text-lg">Reward:</h2>
            <h2>CHANCE TO WIN 100$</h2>
        
        </div>
    );
};

export default TournamentStarting;
