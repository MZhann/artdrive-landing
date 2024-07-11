import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Image from "next/image";
import loadingGif from '../../../public/loading.gif';

const Verification = () => {
    const router = useRouter();
    const { email, name } = router.query;

    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    const [code, setCode] = useState("");
    const [language, setLanguage] = useState("");
    const [placeholder, setPlaceholder] = useState("confirmation code");
    const [error, setError] = useState(""); // Add state for error message
    const [loading, setLoading] = useState(false); // Add state for loading

    useEffect(() => {
        if (email && name) {
            setUserEmail(email);
            setUserName(name);
        }
    }, [email, name]);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage == 'ru'){
            setPlaceholder("код подтверждения")
        }
        console.log("language in verification is: ", localStorage.getItem('language'));
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }

        setUserName(name);
       
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

    const handleCode = async () => {
        // Reset error state
        setError("");

        // Validate input
        if (code.length !== 6 || isNaN(code)) {
            setError(
                language == "en"
                    ? "Code must be a 6-digit number"
                    : "Код должен состоять из 6 цифр"
            );
            return;
        }

        setLoading(true); // Set loading state

        const verificationData = {
            email: userEmail,
            code: code,
        };

        try {
            const response = await fetch(
                "https://artdrivebackend-production.up.railway.app/api/v1/verify/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(verificationData),
                }
            );

            if (response.ok) {
                router.push({
                    pathname: "/congrats",
                    query: { name: userName },
                });
            } else {
                setError(
                    language == "en"
                        ? "Incorrect email or code"
                        : "Неправильный email или код"
                );
            }
        } catch (error) {
            setError(
                language == "en"
                    ? "An error occurred during verification"
                    : "Произошла ошибка при проверке"
            );
        } finally {
            setLoading(false); // Reset loading state
        }
    };
    return (
        <div className="w-full flex h-screen justify-center items-center dark-purple-gradient bg-cover">
            <div className="w-[500px] h-[500px] mx-3 font-montserrat p-6 mt-[250px] rounded-3xl">
                <button
                    onClick={goBack}
                    className="text-start flex items-center p-2 rounded"
                >
                    <div className="mt-[-255px] z-50 text-white">
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
                    <p className="text-sm mb-2 text-[#DADADA] font-montserrat text-center w-[270px]">
                        {language == "en"
                            ? "We have just sent a confirmation code to your email:"
                            : "Мы отправили вам шестизначный код подтверждения на"}{" "}
                        <span className="font-bold text-white text-sm">
                            {email}
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

                {error && (
                    <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                    onClick={handleCode}
                    className="w-full p-5 mt-10 h-[50px] flex items-center justify-center text-white text-lg rounded-xl purple-gradient"
                    disabled={loading} 
                >
                    {loading ? (
                        <Image
                            src={loadingGif}
                            alt="Loading..."
                            width={30}
                            height={30}
                        />
                    ) : (
                        language == "en" ? "Continue" : "Продолжить"
                    )}
                </button>
            </div>
        </div>
    );
};

export default Verification;
