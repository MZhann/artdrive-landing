"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import winner from "../../public/images/winner.png";
import GetStartedButton from "@/components/GetStartedButton";
import "../app/globals.css";

const Banner = () => {
    const words = [
        "Comics",
        "Memes",
        "Photos",
        "Digital Art",
        "Content",
        "Comics",
        "Memes",
        "Photos",
        "Digital Art",
        "Content",
        "Comics",
        "Memes",
        "Photos",
        "Digital Art",
        "Content",
        "Comics",
        "Memes",
        "Photos",
        "Digital Art",
        "Content",
        "Comics",
        "Memes",
        "Photos",
        "Digital Art",
        "Content",
    ];

    return (
        <div className="flex justify-center">
            <div className="bg-bg-image bg-cover bg-center w-full h-[680px] pt-[100px] flex flex-col sm:flex-row sm:justify-between sm:h-[450px] md:h-[500px] lg:h-[600px] sm:pt-[70px] sm:px-10 md:px-[10%] lg:px-[15%] items-center lg:justify-center lg:space-x-60">
                <div className="flex flex-col items-center mb-2 mt-5 sm:mt-0 ">
                    <h1 className="text-black text-[32px] lg:text-[2.8rem] font-dinroundbold uppercase font-bold tracking-normal leading-10 text-center">
                        <span className="text-indigo-600">Monetize your</span>{" "}
                        <br></br>
                        <div className="word-container lg:mt-3">
                            <div className="word-list">
                                {words.map((word, index) => (
                                    <div key={index} className="word">
                                        {word}
                                    </div>
                                ))}
                                {words.map((word, index) => (
                                    <div key={index} className="word">
                                        {word}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </h1>
                    <div className="flex justify-center items-center h-[100px]">
                        <GetStartedButton />
                    </div>
                </div>
                <Image
                    src={winner}
                    height={248}
                    width={280}
                    className="sm:mt-[-30px] sm:w-[300px] md:w-[370px] lg:w-[390px]"
                />
            </div>
        </div>
    );
};

export default Banner;
