const SponsorBlock = ({bonus_prizes}) => {
    return (
        <div className="w-[90%] flex flex-col mt-5">
            <div className="flex flex-col items-center font-bold text-black h-[63px] w-[76px] bg-white rounded-tl-3xl rounded-tr-3xl ml-[1px] mb-[-40px] ">HOT</div>
            <div className="flex flex-col justify-between py-5 px-5 bg-black rounded-3xl border-[1px] border-[#8D8D8D]">
                <h1 className="text-lg font-bold uppercase">{bonus_prizes}</h1>
                <p className="text-sm text-[#F5F5F5] font-thin">sponsor gift</p>
            </div>
        </div>
    )
}

export default SponsorBlock;