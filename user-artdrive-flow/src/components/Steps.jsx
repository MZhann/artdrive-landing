const Steps = () => {
    return (
        <div className=" flex flex-col items-start px-4 sm:px-20 lg:px-[15%] lg:items-center">
            <div className="flex justify-center lg:w-[80%] xl:w-[1100px]">
                <div className="flex flex-col w-[90%] ">
                    <h1 className="text-[#2B2B2B] font-dinroundbold text-[2.5rem] pt-16 leading-10 mb-6">
                        How does it work?
                    </h1>
                    <p className="text-[#2B2B2B] font-dinround text-3xl">
                        Become the best and richest creator in{" "}
                        <span className="text-green-600 font-dinroundbold">
                            5
                        </span>{" "}
                        steps
                    </p>
                    <div className="flex flex-col mt-10 ">
                        <div className="flex space-x-7 mb-7">
                            <p className="text-[#80E69D] font-dinroundbold text-5xl">
                                1
                            </p>
                            <p className="text-3xl font-dinround text-[#484848]">
                                Join a tournament.
                            </p>
                        </div>
                        <div className="flex space-x-7 mb-7">
                            <p className="text-[#80E69D] font-dinroundbold text-5xl">
                                2
                            </p>
                            <p className="text-3xl font-dinround text-[#484848]">
                                Submit your work.
                            </p>
                        </div>
                        <div className="flex space-x-7 mb-7">
                            <p className="text-[#80E69D] font-dinroundbold text-5xl">
                                3
                            </p>
                            <p className="text-3xl font-dinround text-[#484848]">
                                Transfer a buy-in.
                            </p>
                        </div>
                        <div className="flex space-x-7 mb-7">
                            <p className="text-[#80E69D] font-dinroundbold text-5xl">
                                4
                            </p>
                            <p className="text-3xl font-dinround text-[#484848]">
                                Judge other contestant&apos;s work.
                            </p>
                        </div>
                        <div className="flex space-x-7 mb-7">
                            <p className="text-[#80E69D] font-dinroundbold text-5xl">
                                5
                            </p>
                            <p className="text-3xl font-dinround text-[#484848]">
                                Win the love of an audience and win amazing
                                prizes!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
