

const PrizeDivision = () => {
    return (
        <div className="w-[90%] flex flex-col mt-5 mb-10">
            <div className="flex text-white flex-col justify-between py-5 px-5 rounded-3xl border-[1px] bg-white bg-opacity-10 border-[#8D8D8D]">
                <div className="w-full flex">
                    <div className="w-[50%] pl-4">place</div>
                    <div className="w-[40%]">prize</div>
                </div>
                <div className="w-full h-[1px] bg-white my-3"></div>
                <div className="flex w-full">
                    <div className="w-[50%] pl-4">
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4-7</div>
                        <div>8-12</div>
                    </div>
                    <div className="w-[40%]">
                        <div>20 000 ₸</div>
                        <div>10 000 ₸</div>
                        <div>5000 ₸</div>
                        <div>2500 ₸</div>
                        <div>1000 ₸</div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrizeDivision;
