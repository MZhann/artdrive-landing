import GetStartedButton from "./GetStartedButton";

const TrueFans = () => {
    return (
        <div className="flex flex-col items-center pt-20 mt-[-1px] mb-[-1px] pb-20 w-full">
            <div className="w-[80%]">
                <h1 className="text-4xl sm:text-5xl font-dinroundbold mb-4 text-pretty text-center">
                    Your{" "}
                    <span className="bg-clip-text text-indigo-400 text-transparent bg-text-gradient">
                        True Fans
                    </span>{" "}
                    Await.
                </h1>

                <div className="flex justify-center items-center h-[100px]">
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
