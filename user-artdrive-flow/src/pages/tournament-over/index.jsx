import "../../app/globals.css";
import Link from "next/link";
import Image from "next/image";
import loadingMachine from "../../../public/loadingGame.gif";

const TournamentOver = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center dark-purple-gradient bg-cover font-montserrat">
            <div className="w-[500px] mx-3 flex flex-col items-center font-montserrat p-6 mt-[-40px] rounded-3xl">
                <div className="text-white text-center">
                    This tournament is over
                </div>
                <Image
                    src={loadingMachine}
                    alt="loading"
                    width={200}
                    height={200}
                    className="mt-3"
                />
                <Link href={'/tournaments'} className="px-3 py-2 transition-all duration-300 hover:px-5  rounded-full text-white uppercase mt-2 purple-gradient">back to tournaments</Link>
            </div>
        </div>
    );
};

export default TournamentOver;
