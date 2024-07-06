import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";

const Verification = () => {
    const router = useRouter();
    const [code, setCode] = useState("");

    const [language, setLanguage] = useState("en");
    const [placeholder, setPlaceholder] = useState("confirmation code");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const handlePasswordBlur = (inputValue) => {
        if (!inputValue) {
            setPlaceholder("confirmation code");
        }
    };

    const handlePasswordFocus = () => {
        setPlaceholder("");
    };

    const goBack = () => {
        router.push("/register");
    };

    const handleCode = () => {
        router.push("/congrats");
    };

    return (
        <div className="w-full h-[100vh] flex items-center justify-center dark-purple-gradient bg-cover">
            <div className="w-[500px] mx-3 shadow-lg font-montserrat p-6 mt-[-40px] rounded-3xl">
                <button
                    onClick={goBack}
                    className="text-start mt-[-200px] mb-[160px] flex items-center p-2 rounded"
                >
                    <div className="mr-2 flex">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </button>
                <h1 className="text-xl mb-10 uppercase font-semibold mt-[-150px] text-white font-montserrat text-center">
                    {language == "en" ? "Check your email" : "Проверьте email"}
                </h1>
                <div className="w-full flex flex-col items-center">
                    <p className="text-sm mb-2 text-[#DADADA] font-montserrat text-center w-[220px]">
                        {language == "en"
                            ? "We have just sent a confirmation code to your email:"
                            : "Мы отправили вам шестизначный код подтверждения на"}{" "}
                        <span className="font-bold text-white text-sm">
                            thousand@gmail.com
                        </span>
                        .{" "}
                    </p>
                </div>

                <div className="mb-4 mt-4">
                    <input
                        placeholder={placeholder}
                        onFocus={handlePasswordFocus}
                        onBlur={(e) => handlePasswordBlur(e.target.value)}
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full p-5 border-2 font-thin h-[50px] border-[#737373] text-white placeholder-white text-sm rounded-xl bg-[#212022]"
                    />
                </div>

                <button
                    onClick={handleCode}
                    className="w-full p-5 mt-10 h-[50px] flex items-center justify-center text-white text-lg rounded-xl purple-gradient"
                >
                    {language == "en" ? "Continue" : "Продолжить"}
                </button>
            </div>
        </div>
    );
};

export default Verification;
