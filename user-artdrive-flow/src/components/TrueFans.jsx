import GetStartedButton from "./GetStartedButton";

const TrueFans = () => {
    return (
        <div className="flex flex-col bg-black items-center pt-20 mt-[-1px] mb-[-1px] pb-20 w-full">
            <div className="w-[80%]">
                <h1 className="text-5xl sm:text-4xl lg:text-5xl text-white leading-[55px] font-montserrat mb-4 text-pretty text-center">
                    Your{" "}
                    <span className="text-gradient-fans font-semibold">
                        true <br className="sm:hidden"></br>fans
                    </span>{" "}
                    await
                </h1>

                <div className="flex justify-center items-center mt-10 sm:mt-0 h-[100px]">
                    <GetStartedButton
                        bgColor={"#21E342"}
                        width={170}
                        gradient={true}
                        height={45}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrueFans;
