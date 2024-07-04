"use client";

import React from "react";
import GetStartedButton from "@/components/GetStartedButton";
import "../app/globals.css";
import Carousel from "./Carousel";
import RunningStroke from "./RunningStroke";

const Banner = () => {
    const words = [
        "content",
        "art",
        "photos",
        "memes",
        "comics",
        "content",
        "art",
        "photos",
        "memes",
        "comics",
        "content",
        "art",
        "photos",
        "memes",
        "comics",
        "content",
        "art",
        "photos",
        "memes",
        "comics",
        "content",
        "art",
        "photos",
        "memes",
        "comics",
    ];
    const items = [
        { src: "/images/bannerArt1.svg" },
        { src: "/images/bannerArt2.svg" },
        { src: "/images/bannerArt3.svg" },
        { src: "/images/bannerArt4.svg" },
        { src: "/images/bannerArt5.svg" },
        { src: "/images/bannerArt6.svg" },
        { src: "/images/bannerArt7.svg" },
    ];

    return (
        <div>
            <div className="flex justify-center">
                <div className="bg-bg-image bg-cover bg-left w-full flex justify-center">
                    <div className="lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] w-full h-[849px] sm:h-[500px] md:h-[600px] pt-[90px] sm:pt-[120px] flex flex-col sm:flex-row sm:mb-[-15px] sm:justify-between items-center sm:px-[5%]">
                        <div className="flex  flex-col md:w-[75%] lg:w-[65%] md:pl-10 lg:pl-5 mb-2  sm:mt-0 ">
                            <div className="w-[100%]">
                                <div className="text-white font-italiana tracking-wide text-nowrap text-5xl lg:text-6xl xl:text-7xl mb-3">
                                    Monetize your
                                </div>{" "}
                                <div className="word-container sm:hidden">
                                    <div className="word-list text-5xl text-center mb-4 font-bold tracking-wide  font-montserrat text-white text-pretty text-gradient">
                                        {words.map((word, index) => (
                                            <div key={index} className="word">
                                                {word}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="mb-4 hidden sm:block font-semibold tracking-wide text-4xl font-montserrat text-pretty text-gradient lg:text-[2.7rem] xl:text-5xl">
                                    content, art,{" "}
                                    <br className="hidden md:flex"></br>photos,
                                    memes, <br className="hidden md:flex"></br>
                                    comics and more
                                </div>
                            </div>
                            <div className="text-white sm:hidden sm:text-left sm:text-[20px] text-2xl  tracking-wide mt-3 font-montserrat text-nowrap font-thin text-center">
                                with daily tournaments <br></br> for content
                                creators
                            </div>
                            <div className="hidden sm:block text-white lg:text-xl text-left text-[16px] xl:text-2xl text-2xl tracking-wide font-montserrat text-nowrap font-thin">
                                daily tournaments for content creators
                            </div>
                            <div className="justify-center hidden sm:flex sm:w-[154px] items-center h-[100px] lg:ml-10 lg:mt-5">
                                <GetStartedButton h={true} />
                            </div>
                        </div>

                        <Carousel items={items} />

                        <div className="flex justify-center items-center sm:hidden h-[100px]">
                            <GetStartedButton />
                        </div>
                    </div>
                </div>
            </div>
            <RunningStroke />
        </div>
    );
};

export default Banner;
