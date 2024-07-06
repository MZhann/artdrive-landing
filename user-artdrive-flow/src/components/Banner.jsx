"use client";

import React from "react";
import { useState, useEffect } from "react";
import GetStartedButton from "@/components/GetStartedButton";
import "../app/globals.css";
import Carousel from "./Carousel";
import RunningStroke from "./RunningStroke";

const Banner = () => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const words =
        language === "en"
            ? [
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
              ]
            : [
                  "картины",
                  "ИИ арт",
                  "фото",
                  "мемы",
                  "комиксы",
                  "и многое другое",
                  "картины",
                  "ИИ арт",
                  "фото",
                  "мемы",
                  "комиксы",
                  "и многое другое",
                  "картины",
                  "ИИ арт",
                  "фото",
                  "мемы",
                  "комиксы",
                  "и многое другое",
                  "картины",
                  "ИИ арт",
                  "фото",
                  "мемы",
                  "комиксы",
                  "и многое другое",
                  "картины",
              ];

    const items = [
        { src: "/images/bannerArt1.png" },
        { src: "/images/bannerArt2.png" },
        { src: "/images/bannerArt3.png" },
        { src: "/images/bannerArt4.jpeg" },
        { src: "/images/bannerArt5.png" },
        { src: "/images/bannerArt6.jpg" },
        { src: "/images/bannerArt7.jpg" },
    ];

    return (
        <div>
            <div className="flex justify-center">
                <div className="bg-bg-image bg-cover bg-left w-full flex justify-center">
                    <div className="lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] w-full h-[849px] sm:h-[500px] md:h-[600px] pt-[90px] sm:pt-[120px] flex flex-col sm:flex-row sm:mb-[-15px] sm:justify-between items-center sm:px-[5%]">
                        <div className={`flex  flex-col  mb-2  sm:mt-0 ${language == 'en' ? 'md:w-[75%] lg:w-[65%] md:pl-10 lg:pl-5' : 'md:w-[65%] lg:w-[55%] md:pl-2 lg:pl-0' }`}>
                            <div className="w-[100%]">
                                <div className={`text-white tracking-wide text-nowrap  mb-3  ${language !== 'en' ? 'font-particiana tracking-tighter text-center sm:text-start text-[2rem] font-semibold sm:text-[2.6rem] lg:text-5xl xl:text-6xl' : 'font-italiana text-5xl lg:text-6xl xl:text-7xl'}`}>
                                    {language === "en"
                                        ? "Monetize your"
                                        : "Монетизируй"}
                                </div>{" "}
                                <div className="word-container sm:hidden">
                                    <div className={`${language == 'en' ? 'text-5xl' : 'text-4xl mt-[-20px] pt-[8px]'} word-list text-center mb-4 font-bold tracking-wide  font-montserrat text-white text-pretty text-gradient`}>
                                        {words.map((word, index) => (
                                            <div key={index} className="word">
                                                {word}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={`mb-4 hidden sm:block font-semibold tracking-wide text-4xl font-montserrat text-pretty text-gradient lg:text-[2.7rem] xl:text-5xl`}>
                                    {language === "en"
                                        ? "content, art,"
                                        : "картины, ИИ арт,"}{" "}
                                    <br className="hidden md:flex"></br>
                                    {language === "en"
                                        ? "photos, memes,"
                                        : "фото, мемы,"}{" "}
                                    <br className="hidden sm:flex"></br>
                                    {language === "en"
                                        ? "comics and more"
                                        : "комиксы и многое другое"}
                                </div>
                            </div>
                            <div className={`${language == 'en' ? 'text-2xl' : 'text-xl'} text-white sm:hidden sm:text-left sm:text-[20px]  tracking-wide mt-3 font-montserrat text-nowrap font-thin text-center`}>
                                {language === "en"
                                    ? "with daily tournaments"
                                    : "с ежедневными турнирами"}{" "}
                                <br></br>{" "}
                                {language === "en"
                                    ? "for content creators"
                                    : "для создателей контента"}
                            </div>
                            <div className={`${language=='en' ? 'lg:text-xl xl:text-2xl' : 'lg:text-lg xl:text-xl'} hidden sm:block text-white  text-left text-[16px]  text-2xl tracking-wide font-montserrat text-nowrap font-thin`}>
                                {language === "en"
                                    ? "daily tournaments for content creators"
                                    : "ежедневные турниры для создателей контента"}
                            </div>
                            <div className="justify-center hidden sm:flex sm:w-[154px] items-center h-[100px] lg:ml-10 lg:mt-5">
                                <GetStartedButton h={true} lang={language} />
                            </div>
                        </div>

                        <Carousel lang={language} items={items} />

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
