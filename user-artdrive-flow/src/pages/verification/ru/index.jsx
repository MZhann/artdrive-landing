import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../../app/globals.css";

const Verification = () => {
    const router = useRouter();
    const [code, setCode] = useState("");

    const [language, setLanguage] = useState("en");
    
    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const goBack = () => {
        router.push("/register");
    };

    const handleCode = () => {
        router.push("/congrats");
    }

    return (
        <div className="w-full h-[100vh] flex items-center justify-center bg-bg-about bg-cover">
            <div className="max-w-md mx-auto w-[90%] mt-[-40px] p-8 font-dinroundmedium border-2 border-gray-400 bg-white bg-opacity-10 rounded-2xl text-white">
                <button
                    onClick={goBack}
                    className="text-start  flex items-center p-2 rounded"
                >
                    <div className="mr-2">
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
                <h1 className="text-2xl uppercase mb-4 font-dinroundbold text-center">
                    
                    Проверьте email
                </h1>
                <p className="dinroundmedium text-xl text-gray-300 text-pretty">
                
                            Мы отправили вам шестизначный код подтверждения на
                    {" "}
                    <span className="font-bold text-white text-xl">thousand@gmail.com</span>.
                    {" "}
                    Пожалуйста, введите его ниже, чтобы подтвердить свой email.
                </p>

                <div className="h-[1px] w-full bg-gray-300 my-7"></div>

                <div className="mb-4 ">
                    <input
                        placeholder="код подтверждения"
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full p-5 border-2 border-[#888888] text-gray-800 placeholder-gray-700 rounded-lg"
                    />
                </div>

                <button onClick={handleCode} className="w-full p-5 mt-5 bg-blue-500 text-white rounded-xl border-b-blue-800 border-4 hover:bg-blue-600">
                    Продолжить
                </button>
            </div>
        </div>
    );
};

export default Verification;
