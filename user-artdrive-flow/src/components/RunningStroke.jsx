import "../app/globals.css";
import React from "react";
import Image from "next/image";
import youtube from '../../public/images/companyLogos/youtube.png'
import instagram from '../../public/images/companyLogos/instagram.png'
import x from '../../public/images/companyLogos/x.png'
import midjourney from '../../public/images/companyLogos/midjourney.png'
import stableDiffusion from '../../public/images/companyLogos/stableDiffusion.png'
import tt from '../../public/images/companyLogos/tt.png'
import eth from '../../public/images/companyLogos/eth.png'
import usdt from '../../public/images/companyLogos/usdt.png'
import pinterest from '../../public/images/companyLogos/pinterest.png'

const RunningStroke = () => {
    return (
        <div className="ticker">
            {/* <div className="font-dinroundmedium text-center text-3xl mt-[40px]">Companies that cooperate with ArtDrive:</div> */}
            <div className="flex items-center">
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={youtube} width={100} height={100} className="lg:w-[200px] md:w-[150px]"   alt="youtube logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={midjourney}  width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="midjourney logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={stableDiffusion} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="stable diffusion logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={eth} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="eth logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={usdt} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="usdt logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={tt} width={100} height={100} className="lg:w-[200px] md:w-[150px]"   alt="ticktock logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={pinterest} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="pinterest logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={instagram} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="instagram logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={x} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="x logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px] px-[0px]">
                    <Image src={youtube} width={100} height={100} className="lg:w-[200px] md:w-[150px]"   alt="youtube logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={midjourney}  width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="midjourney logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={stableDiffusion} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="stable diffusion logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={eth} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="eth logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={usdt} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="usdt logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={tt} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="ticktock logo"/>
                </div>

                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={pinterest} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="pinterest logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={instagram} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="instagram logo"/>
                </div>
                <div className="ticker_item w-[150px] lg:w-[250px] md:w-[200px] h-[150px]">
                    <Image src={x} width={100} height={100} className="lg:w-[200px] md:w-[150px]"  alt="x logo"/>
                </div>

            </div>
        </div>
    )
}

export default RunningStroke;