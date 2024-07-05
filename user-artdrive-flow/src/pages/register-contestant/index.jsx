"use client";
import { useState } from "react";
import Slider from "@/components/Slider";

const RegisterContestant = () => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };
    return (
        <div className="w-[393px] h-[1087px] relative bg-white">
            <div className="pl-3 pr-2 pt-2 pb-[9px] left-[54px] top-[126px] absolute bg-white rounded-[10px] border border-black justify-end items-center gap-[138px] inline-flex">
                <div className="text-center">
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        Submit your work
                    </span>
                </div>
                <div className="w-5 h-5 relative flex-col justify-start items-start flex" />
            </div>
            <div className="h-[73px] pl-[11px] pr-[157px] pt-[11px] pb-[47px] left-[54px] top-[204px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center">
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        Describe your work
                    </span>
                </div>
            </div>

            <div className="left-14 top-[331px] absolute text-center flex items-center">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                        className="hidden"
                    />
                    <span
                        className={`w-4 h-4 inline-block mr-2 rounded-full border border-black ${
                            checked ? "bg-black" : "bg-white"
                        }`}
                    ></span>

                    <span className="text-black text-[13px] font-light font-['Roboto']  tracking-wide">
                        Art made by AI
                    </span>
                </label>
            </div>
            <div className="left-14 top-[363px] absolute">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                        className="hidden"
                    />
                    <span
                        className={`w-4 h-4 inline-block mr-2 rounded-full border border-black ${
                            checked ? "bg-black" : "bg-white"
                        }`}
                    ></span>

                    <span className="text-black text-[13px] font-light font-['Roboto']  tracking-wide">
                        Human/Ai <br></br> (specify % how much ai contributed)
                    </span>
                </label>
            </div>
            <div className="left-14 top-[301px] absolute text-center flex items-center">
                <label className="flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleCheckboxChange}
                        className="hidden"
                    />
                    <span
                        className={`w-4 h-4 inline-block mr-2 rounded-full border border-black ${
                            checked ? "bg-black" : "bg-white"
                        }`}
                    ></span>

                    <span className="text-black text-[13px] font-light font-['Roboto']  tracking-wide">
                        Art made by human
                    </span>
                </label>
            </div>
            <Slider />
            <div className="left-[66px] top-[547px] absolute text-center text-neutral-500 text-xs font-light font-['Roboto'] lowercase tracking-wide">
                this address will be used for reward payments
            </div>
            <div className="left-[54px] top-[165px] absolute text-center">
                <span className="text-red-600 text-sm font-light font-['Roboto'] lowercase tracking-wide">
                    *
                </span>
                <span className="text-neutral-500 text-xs font-light font-['Roboto'] lowercase tracking-wide">
                    required field
                </span>
            </div>

            <div className="pl-3 pr-[66px] pt-2.5 pb-3 left-[54px] top-[503px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center">
                    <span className="text-black text-[13px] font-light font-['Roboto'] uppercase tracking-wide">
                        y
                    </span>
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        our{" "}
                    </span>
                    <span className="text-black text-[13px] font-light font-['Roboto'] uppercase tracking-wide">
                        USDT
                    </span>
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        {" "}
                        wallet address (trc 20)
                    </span>
                </div>
            </div>
            <div className="left-[90px] top-[660px] absolute text-center">
                <span className="text-black text-[13px] font-light font-['Roboto'] uppercase tracking-wide">
                    i{" "}
                </span>
                <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                    am not a cheater
                </span>
            </div>
            <div className="left-[89px] top-[704px] absolute text-center text-blue-500 text-[13px] font-normal font-['Roboto'] underline capitalize tracking-wide">
                terms and conditions
            </div>
            <div className="pl-[15px] pr-[117px] pt-2.5 pb-3 left-[54px] top-[581px] absolute bg-white rounded-[10px] border border-black justify-start items-center inline-flex">
                <div className="text-center">
                    <span className="text-black text-[13px] font-light font-['Roboto'] uppercase tracking-wide">
                        l
                    </span>
                    <span className="text-black text-[13px] font-light font-['Roboto'] lowercase tracking-wide">
                        ink to your social media
                    </span>
                </div>
            </div>
            <div className="w-[207px] h-[33px] left-[93px] top-[73px] absolute text-center text-neutral-800 text-xl font-bold font-['Roboto'] uppercase">
                Register form
            </div>
            <div className="w-[286px] h-[45.65px] left-[54px] top-[753px] absolute">
                <div className="w-[286px] h-[45.65px] left-0 top-0 absolute bg-blue-500 rounded-[10px]" />
                <div className="w-[215px] h-[16.67px] left-[35px] top-[13px] absolute text-center text-white text-xl font-medium font-['Roboto']">
                    Submit and pay a buy-in
                </div>
            </div>

            <div className="w-6 h-6 left-[54px] top-[656px] absolute">
                <img
                    className="w-[18px] h-[18px] left-[3px] top-[3px] absolute"
                    src="https://via.placeholder.com/18x18"
                />
            </div>
            <div className="w-6 h-6 left-[54px] top-[383px] absolute" />
            <div className="w-6 h-6 left-[54px] top-[341px] absolute" />
            <div className="w-6 h-6 left-[54px] top-[297px] absolute" />
            <div className="w-6 h-6 left-[54px] top-[700px] absolute" />
            {/* <div className="w-[117px] h-[90px] left-[141px] top-[382px] absolute">
                <div className="w-11 h-[41px] left-[66px] top-[3px] absolute">
                    <div className="left-[9px] top-[6px] absolute text-center text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">
                        90%
                    </div>
                </div>
                <div className="w-[117px] h-10 left-0 top-[50px] absolute">
                    <div className="p-px left-[1px] top-[18px] absolute bg-blue-500/opacity-60 rounded-[10px] justify-start items-start gap-[26px] inline-flex">
                        <div className="w-0.5 h-0.5 relative" />
                        <div className="w-0.5 h-0.5 relative" />
                        <div className="w-0.5 h-0.5 relative" />
                        <div className="w-0.5 h-0.5 relative" />
                        <div className="w-0.5 h-0.5 relative" />
                    </div>
                    <div className="p-0.5 left-0 top-[17px] absolute bg-blue-500 rounded-[10px] justify-center items-center gap-[26px] inline-flex">
                        <div className="w-0.5 h-0.5 relative opacity-40" />
                        <div className="w-0.5 h-0.5 relative opacity-40" />
                        <div className="w-0.5 h-0.5 relative opacity-40" />
                        <div className="w-0.5 h-0.5 relative opacity-40" />
                    </div>
                    <div className="w-5 h-5 left-[77px] top-[10px] absolute" />
                </div>
            </div> */}
        </div>
    );
};

export default RegisterContestant;
