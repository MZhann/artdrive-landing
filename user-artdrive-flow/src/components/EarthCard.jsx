import Image from "next/image";
import earth from "../../public/images/earth.svg";

const EarthCard = () => {
    return (
        <div className="bg-bg-image bg-cover flex items-center justify-center h-[200px] mt-10 sm:mt-14 lg:h-[270px]">
            <div className="flex items-center space-x-5 sm:space-x-8">
                <Image src={earth} height={107} width={107} alt="3d earth" className="sm:w-[180px] lg:w-[250px]" />
                <h2 className="text-2xl sm:text-3xl font-dinroundmedium lg:text-4xl">
                    Compete anytime,<br></br>
                    anywhere
                </h2>
            </div>
        </div>
    );
};

export default EarthCard;
