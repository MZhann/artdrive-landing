const PayStripeCrypto = () => {
    return (
        <div className="w-[393px] h-[852px] relative bg-white">
            <div className="pl-3.5 pr-[7px] py-3.5 left-[54px] top-[318px] absolute bg-white rounded-[10px] border border-black justify-end items-center gap-[124px] inline-flex">
                <div className="text-center">
                    <span className="text-black text-[13px] font-light font-['Roboto'] capitalize tracking-wide">
                        credit{" "}
                    </span>
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        or debit card
                    </span>
                </div>
                <div className="w-[22px] h-[22px] relative flex-col justify-start items-start flex" />
            </div>
            <div className="w-[286px] h-[50px] left-[54px] top-[408px] absolute bg-white rounded-[10px] border border-black">
                <div className="left-[16px] top-[17px] absolute text-center">
                    <span className="text-black text-[13px] font-light font-['Roboto'] capitalize tracking-wide">
                        crypto{" "}
                    </span>
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        currencies
                    </span>
                </div>
                <div className="w-[22px] h-[22px] left-[258px] top-[14px] absolute" />
                <div className="w-[25px] h-[25px] left-[136px] top-[12px] absolute" />
            </div>
            <div className="w-[251px] h-[33px] left-[75px] top-[245px] absolute text-center text-neutral-800 text-xl font-bold font-['Roboto'] uppercase">
                select a payment method{" "}
            </div>
            
        </div>
    );
};

export default PayStripeCrypto;
