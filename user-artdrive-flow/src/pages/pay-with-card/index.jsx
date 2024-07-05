const PayWithCard = () => {
    return (
        <div className="w-[393px] h-[852px] relative bg-white">
            
            <div className="w-[286px] h-[45.65px] left-[54px] top-[563px] absolute">
                <div className="w-[286px] h-[45.65px] left-0 top-0 absolute bg-blue-500 rounded-[10px]" />
                <div className="w-[215px] h-[16.67px] left-[35px] top-[13px] absolute text-center text-white text-xl font-medium font-['Roboto'] uppercase">
                    submit payment
                </div>
            </div>
            <div className="w-[107px] h-[23px] left-[54px] top-[163px] absolute text-neutral-800 text-xl font-bold font-['Roboto'] uppercase">
                total
            </div>
            <div className="w-[107px] h-[23px] left-[233px] top-[163px] absolute text-right text-neutral-800 text-xl font-bold font-['Roboto'] uppercase">
                100.00 $
            </div>
            <div className="w-[286px] pl-[15px] pr-[234px] py-[11px] left-[54px] top-[220px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center text-black text-[13px] font-light font-['Roboto'] capitalize tracking-wide">
                    Name
                </div>
            </div>
            <div className="w-[286px] pl-3 pr-48 py-[11px] left-[54px] top-[328px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center text-black text-[13px] font-light font-['Roboto'] capitalize tracking-wide">
                    card number
                </div>
            </div>
            <div className="w-[286px] pl-[15px] pr-[237px] py-[11px] left-[54px] top-[274px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center text-black text-[13px] font-light font-['Roboto'] capitalize tracking-wide">
                    Email
                </div>
            </div>
            <div className="w-[107px] pl-[11px] pr-[70px] py-[11px] left-[54px] top-[382px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center text-black text-[13px] font-light font-['Roboto'] uppercase tracking-wide">
                    CVV
                </div>
            </div>
            <div className="pl-2.5 pr-[51px] py-[11px] left-[54px] top-[436px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center text-black text-[13px] font-light font-['Roboto'] uppercase tracking-wide">
                    MM/yy
                </div>
            </div>
            <div className="w-[286px] h-[0px] left-[54px] top-[203px] absolute border border-black"></div>
            <div className="w-6 h-6 left-[54px] top-[506px] absolute">
                <img
                    className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"
                    src="https://via.placeholder.com/18x18"
                />
            </div>
            <div className="left-[87px] top-[510px] absolute text-center text-blue-500 text-[13px] font-normal font-['Roboto'] underline capitalize tracking-wide">
                terms and conditions
            </div>
        </div>
    );
};

export default PayWithCard;
