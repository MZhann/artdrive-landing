import Image from "next/image";
import arrow from "../../public/images/arrow.svg";

const Steps = () => {
    return (
        <div className="flex flex-col bg-bg-how bg-cover mt-[-2px] z-5 items-start px-4 sm:px-20 lg:px-[5%] lg:items-center">
            <div className="flex justify-center lg:w-[90%] xl:w-[1100px]">
                <div className="flex flex-col md:flex-row w-[90%] md:space-x-10 lg:space-x-30">
                    <div>
                        <h1 className="text-white font-italiana text-5xl sm:text-4xl pt-16 leading-[55px] text-nowrap mb-2">
                            How does it <br className="sm:hidden"></br>work?
                        </h1>
                        <p className="text-[#CAC9CB] font-montserrat text-2xl">
                            Unlock Your Potential in{" "}
                            <span className="text-[#B326F5] text-4xl font-bold">5</span>{" "}
                            Simple Steps
                        </p>
                        <Image
                            src={arrow}
                            width={350}
                            height={50}
                            alt="arrow"
                            className="ml-0 mt-10 hidden md:block"
                        />
                    </div>
                    <div className="flex sm:pb-[50px] flex-col w-full mt-20 sm:mt-16 text-[#CAC9CB] font-montserrat ">
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-center text-5xl w-[27px]">
                                1
                            </p>
                            <p className="text-2xl">
                                Join a tournament
                            </p>
                        </div>
                        <div className="flex items-center space-x-7  mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">2</p>
                            <p className="text-2xl">
                                Submit your work
                            </p>
                        </div>
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">3</p>
                            <p className="text-2xl">
                                Enter the Prize pool
                            </p>
                        </div>
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">4</p>
                            <p className="text-2xl">
                                Vote on fellow creators&apos; work
                            </p>
                        </div>
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">5</p>
                            <p className="text-2xl">
                                Impress the crowd and reap the rewards
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
