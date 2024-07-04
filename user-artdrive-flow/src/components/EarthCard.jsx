const EarthCard = () => {
    return (
        <div className="bg-black bg-cover mt-[-2px] flex overflow-y-hidden items-center sm:w-full justify-center h-[200px]">
            <div className="flex items-center justify-center sm:w-full">
                <div className="text-3xl lg:text-4xl xl:text-5xl lg:font-normal flex flex-col items-center sm:flex-row sm:justify-center text-white font-montserrat text-center">
                    <span className="text-white lg:font-normal font-montserrat text-center sm:flex">Compete <span className="hidden sm:flex">&nbsp;</span></span>  <span className="text-gradient-two font-montserrat font-bold hidden lg:font-semibold sm:flex text-center">anytime! anywhere!</span> <span className="sm:hidden text-gradient-two font-montserrat font-bold">anytime! <br className="sm:hidden"></br> <span className="sm:hidden text-gradient font-montserrat font-bold">anywhere!</span></span>
                </div>
            </div>
        </div>
    );
};

export default EarthCard;
