"use client";
import { useState, useEffect } from "react";
import GetStartedButton from "./GetStartedButton";

const TrueFans = () => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);
    return (
        <div className="flex flex-col bg-black items-center pt-20 mt-[-1px] mb-[-1px] pb-20 w-full">
            <div className="w-[80%]">
                <h1 className={` text-white font-montserrat mb-4 text-pretty text-center ${language == 'en' ? 'text-5xl sm:text-4xl lg:text-5xl leading-[55px] ' : 'leading-[30px] text-3xl sm:text-4xl lg:text-5xl'}`}>
                    {language == "en" ? "your" : "твои"}{" "}
                    <span className="text-gradient-fans font-semibold">
                        {language == "en"
                            ? "true"
                            : "истинные"}
                        <br className="sm:hidden"></br>{" "}{language == 'en' ? 'fans' : 'фанаты'}
                    </span>{" "}
                    {language == 'en' ? 'await' : 'ждут'}
                </h1>

                <div className="flex justify-center items-center mt-10 sm:mt-0 h-[100px]">
                    <GetStartedButton
                        bgColor={"#21E342"}
                        width={170}
                        gradient={true}
                        height={45}
                        lang={language}
                    />
                </div>
            </div>
        </div>
    );
};

export default TrueFans;
