const PrizeBlock = ({prizeAmount, audienceCount, participantsCount}) => {
    return (
        <div className="w-[90%] flex flex-col mt-5">
            <div className="flex text-white flex-col justify-between py-5 px-5 rounded-3xl border-[1px] bg-white bg-opacity-10 border-[#8D8D8D]">
                <div className="text-sm mb-2 text-[#F5F5F5]">prize fund:</div>
                <div className="font-bold text-3xl">50 000 ₸</div>
                {/* <div className="font-bold text-3xl">{prizeAmount}$</div> */}
                <div className="text-sm text-[#F5F5F5] mt-3">participants: </div>
                {/* <div className="font-bold text-3xl">{audienceCount}</div> */}
                {/* <div className="text-sm mb-2 text-[#F5F5F5]">audience</div> */}
                <div className="font-bold text-3xl mt-2">{participantsCount}</div>
            </div>
        </div>
    );
};

export default PrizeBlock;
