const ContestantButton = ({ openModal }) => {
    
    return (
        <button
            onClick={openModal}
            className="flex flex-col items-center justify-between w-[48%] h-[89px] border-[1px] solid border-[#7DD638] rounded-3xl"
        >
            <div className="text-xs pt-2">REGISTER AS A</div>
            <div className="text-black h-[59px] text-xl font-bold flex items-center justify-center pb-2 w-full bg-[#7DD638] rounded-3xl">Contestant</div>
        </button>
    );
};
export default ContestantButton;