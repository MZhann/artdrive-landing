// import "../app/globals.css";
import "../app/globals.css";

import React from "react";
import Image from "next/image";
import youtube from '../../public/images/companyLogos/youtube.svg'
import instagram from '../../public/images/companyLogos/instagram.svg'
import x from '../../public/images/companyLogos/x.svg'
import midjourney from '../../public/images/companyLogos/midjourney.svg'
import stableDiffusion from '../../public/images/companyLogos/stableDiffusion.png'
import tt from '../../public/images/companyLogos/tt.svg'
import eth from '../../public/images/companyLogos/eth.svg'
import usdt from '../../public/images/companyLogos/tether.svg'
import pinterest from '../../public/images/companyLogos/pint.svg'

const RunningStroke = () => {
    return (
        <div className="ticker bg-black">
            <div className="flex items-center h-[90px] sm:h-[65px] sm:mt-5">
                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={youtube} width={100} height={100} className="sm:w-[80px]"   alt="youtube logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={midjourney}  width={100} height={100} className=" w-[60px] sm:w-[50px]"  alt="midjourney logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={stableDiffusion} width={100} height={100} className="w-[140px]  sm:w-[100px] mt-[4px]"  alt="stable diffusion logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={eth} width={100} height={100} className=" w-[60px] sm:w-[45px] mr-[-40px]"  alt="eth logo"/>
                </div>

                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={usdt} width={100} height={100} className=" w-[60px] sm:w-[40px]"  alt="usdt logo"/>
                </div>

                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={tt} width={100} height={100} className="w-[150px] sm:w-[100px]"   alt="ticktock logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={pinterest} width={100} height={100} className="w-[50px]  sm:w-[30px]"  alt="pinterest logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={instagram} width={100} height={100} className=" w-[150px]"  alt="instagram logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={x} width={100} height={100} className=" sm:w-[70px]"  alt="x logo"/>
                </div>
                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={youtube} width={100} height={100} className="sm:w-[80px]"   alt="youtube logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={midjourney}  width={100} height={100} className=" w-[60px] sm:w-[50px]"  alt="midjourney logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={stableDiffusion} width={100} height={100} className="w-[140px]  sm:w-[100px] mt-[4px]"  alt="stable diffusion logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={eth} width={100} height={100} className=" w-[60px] sm:w-[45px] mr-[-40px]"  alt="eth logo"/>
                </div>

                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={usdt} width={100} height={100} className=" w-[60px] sm:w-[40px]"  alt="usdt logo"/>
                </div>

                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={tt} width={100} height={100} className="w-[150px] sm:w-[100px]"   alt="ticktock logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={pinterest} width={100} height={100} className="w-[50px]  sm:w-[30px]"  alt="pinterest logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={instagram} width={100} height={100} className=" w-[150px]"  alt="instagram logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={x} width={100} height={100} className=" sm:w-[70px]"  alt="x logo"/>
                </div>
                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px] px-[0px]">
                    <Image src={youtube} width={100} height={100} className="sm:w-[80px]"   alt="youtube logo"/>
                </div>
                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px]">
                    <Image src={midjourney}  width={100} height={100} className=" w-[60px] sm:w-[50px]"  alt="midjourney logo"/>
                </div>

                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px]">
                    <Image src={stableDiffusion} width={70} height={100} className="w-[140px]   sm:w-[100px] mt-[4px]"  alt="stable diffusion logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px]">
                    <Image src={eth} width={100} height={100} className=" sm:w-[45px] mr-[-40px]"  alt="eth logo"/>
                </div>

                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px]">
                    <Image src={usdt} width={100} height={100} className=" w-[60px] sm:w-[40px]"  alt="usdt logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px]">
                    <Image src={tt} width={100} height={100} className="w-[150px] sm:w-[100px]"  alt="ticktock logo"/>
                </div>

                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px]">
                    <Image src={pinterest} width={100} height={100} className=" sm:w-[30px]"  alt="pinterest logo"/>
                </div>
                <div className="ticker_item w-[150px]   sm:w-[120px] h-[150px]">
                    <Image src={instagram} width={100} height={100} className="  w-[150px]"  alt="instagram logo"/>
                </div>
                <div className="ticker_item w-[150px]  sm:w-[120px] h-[150px]">
                    <Image src={x} width={100} height={100} className="sm:w-[70px]"  alt="x logo"/>
                </div>

            </div>
        </div>
    )
}

export default RunningStroke;