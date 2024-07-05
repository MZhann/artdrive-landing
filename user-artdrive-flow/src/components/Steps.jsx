"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import arrow from "../../public/images/arrow.svg";

const Steps = () => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);
    return (
        <div className="flex flex-col bg-bg-how bg-cover mt-[-2px] z-5 items-start px-4 sm:px-20 lg:px-[5%] lg:items-center">
            <div className="flex justify-center lg:w-[90%] xl:w-[1100px]">
                <div className="flex flex-col md:flex-row w-[90%] md:space-x-10 lg:space-x-30">
                    <div>
                        <h1
                            className={`${
                                language == "en"
                                    ? "font-italiana"
                                    : "font-particiana"
                            } text-white  text-5xl sm:text-4xl pt-16 leading-[55px] text-nowrap mb-2`}
                        >
                            {language == "en" ? "How does it" : "Как это"}{" "}
                            <br className="sm:hidden"></br>
                            {language == "en" ? "work" : "работает?"}
                        </h1>
                        <p className="text-[#CAC9CB] font-montserrat text-2xl">
                            {language == "en"
                                ? "Unlock Your Potential in"
                                : "Расскрой Свой Потенциал В "}{" "}
                            <span className="text-[#B326F5] text-4xl font-bold">
                                5
                            </span>{" "}
                            {language == "en" ? "Simple Steps" : "Простых Шага"}
                        </p>
                        <Image
                            src={arrow}
                            width={350}
                            height={50}
                            alt="arrow"
                            className="ml-0 mt-10 hidden md:block"
                        />
                    </div>
                    <div className="flex sm:pb-[50px] flex-col w-full mt-20 sm:mt-16 text-[#CAC9CB] font-montserrat ">
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-center text-5xl w-[27px]">
                                1
                            </p>
                            <p className="text-2xl">
                                {language == "en"
                                    ? "Join a tournament"
                                    : "Присоединись к турниру"}
                            </p>
                        </div>
                        <div className="flex items-center space-x-7  mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">
                                2
                            </p>
                            <p className="text-2xl">
                                {language == "en"
                                    ? "Submit your work"
                                    : "Загрузи свою работу"}
                            </p>
                        </div>
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">
                                3
                            </p>
                            <p className="text-2xl">
                                {language == "en"
                                    ? "Enter the Prize pool"
                                    : "Оплати взнос за участие"}
                            </p>
                        </div>
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">
                                4
                            </p>
                            <p className="text-2xl">
                                {language == "en"
                                    ? "Vote on fellow creators&apos; work"
                                    : "Оцените работы коллег-создателей"}
                            </p>
                        </div>
                        <div className="flex items-center space-x-7 mb-7">
                            <p className="text-[#B326F5] text-5xl text-center w-[27px]">
                                5
                            </p>
                            <p className="text-2xl">
                                {language == "en"
                                    ? "Impress the crowd and reap the rewards"
                                    : "Произведите впечатление на толпу и пожинайте плоды"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;
