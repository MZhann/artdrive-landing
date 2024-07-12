const JudgeButton = ({ openModal }) => {
    return (
        <button
            onClick={openModal}
            className="flex flex-col items-center justify-between w-[48%] h-[89px] border-[1px] solid border-[#FFC700] rounded-3xl"
        >
            <div className="text-xs pt-2">REGISTER AS A</div>
            <div className="text-black h-[59px] text-xl font-bold flex items-center justify-center pb-2 w-full bg-[#FFC700] rounded-3xl">
                Judge
            </div>
        </button>
    );
};

export default JudgeButton;

