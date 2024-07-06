import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Image from "next/image";
import loadingGif from "../../../public/loading.gif"; // Add your loading gif here
import LoginForm from "@/components/LoginForm";

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showEmail, setShowEmail] = useState(true);
    const [showName, setShowName] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [language, setLanguage] = useState("en");
    const [emailPlaceholder, setEmailPlaceholder] = useState("email");
    const [namePlaceholder, setNamePlaceholder] = useState("name");
    const [passwordPlaceholder, setPasswordPlaceholder] = useState("password");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);
    const goBack = () => {
        router.push("/");
    };

    const handleFocus = () => {
        setEmailPlaceholder("");
    };

    const handleBlur = (inputValue) => {
        if (!inputValue) {
            setEmailPlaceholder("email");
        }
    };

    const handleNameFocus = () => {
        setNamePlaceholder("");
    };

    const handleNameBlur = (inputValue) => {
        if (!inputValue) {
            setEmailPlaceholder("name");
        }
    };

    const handlePasswordFocus = () => {
        setPasswordPlaceholder("");
    };

    const handlePasswordBlur = (inputValue) => {
        if (!inputValue) {
            setPasswordPlaceholder("password");
        }
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleName = () => {
        let validationErrors = {};
        if (!name) validationErrors.name = "Name is required";
        if (Object.keys(validationErrors).length === 0) {
            setShowName(false);
            setShowPassword(true);
            console.log(name);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleEmail = () => {
        let validationErrors = {};
        console.log(email);
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Invalid email address";
        }
        if (Object.keys(validationErrors).length === 0) {
            setShowEmail(false);
            setShowName(true);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleSubmit = async () => {
        let validationErrors = {};
        if (!name) validationErrors.name = "Name is required";
        if (!email) {
            validationErrors.email = "Email is required";
            console.log('name is required');
        } else if (!validateEmail(email)) {
            validationErrors.email = "Invalid email address";
            console.log('email is required');

        }
        if (!password) {
            validationErrors.password = "Password is required";
            console.log('password is required');

        } else if (!validatePassword(password)) {
            validationErrors.password =
                "Password must be at least 8 characters long";
            console.log('password should be more than 8 letters');

        }

        if (Object.keys(validationErrors).length === 0) {
            setLoading(true);
            const userData = {
                email: email,
                username: name,
                password: password,
            };

            console.log('user data: ', userData);

            try {
                const response = await fetch(
                    "https://artdrivebackend-production.up.railway.app/api/v1/register/",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(userData),
                    }
                );

                if (response.ok) {
                    console.log('response is ok: ', response);
                    router.push("/verification");
                } else {
                    console.log('response is not ok: ', response);
                    const data = await response.json();
                    setErrors({
                        submit:
                            data.message ||
                            "An error occurred during registration",
                    });
                }
            } catch (error) {
                console.log('error occurred');
                setErrors({ submit: "An error occurred during registration" });
            } finally {
                setLoading(false); // Set loading to false after completion
            }
        } else {
            setErrors(validationErrors);
            console.log('validation errors');
        }
    };
    return (
        <div className="w-full flex  h-screen justify-center items-center dark-purple-gradient bg-cover">
            <div className="w-[500px] mx-3 shadow-lg font-montserrat p-6 mt-[-40px] rounded-3xl">
                {showEmail && (
                    <button
                        onClick={goBack}
                        className="text-start flex items-center p-2 rounded"
                    >
                        <div className="mt-[-255px] z-50 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                )}
                {showName && (
                    <button
                        onClick={goBack}
                        className="text-start flex items-center p-2 rounded"
                    >
                        <div className="mt-[-450px] z-50 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                )}

                {showPassword && (
                    <button
                        onClick={goBack}
                        className="text-start flex items-center p-2 rounded"
                    >
                        <div className="mt-[-450px] z-50 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </button>
                )}

                {showEmail && (
                    <div>
                        <h1 className="text-xl mb-[50px] uppercase font-semibold mt-[-150px] text-white font-montserrat text-center">
                            {language == "en" ? "Sign Up" : "Регистрация"}
                        </h1>
                        <h3 className="text-sm mb-2 text-[#DADADA] font-montserrat">
                            {language == "en"
                                ? "Please, enter your email:"
                                : "Пожалуйста, введите ваш email"}
                        </h3>
                    </div>
                )}

                {showEmail && (
                    <div className="mb-4">
                        <input
                            onFocus={handleFocus}
                            onBlur={(e) => handleBlur(e.target.value)}
                            placeholder={emailPlaceholder}
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-5 border-2 font-thin h-[50px] border-[#737373] text-white placeholder-white text-sm rounded-xl bg-[#212022]"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>
                )}

                {showName && (
                    <div>
                        <h1 className="text-xl mb-[50px] uppercase font-semibold mt-[-246px] text-white font-montserrat text-center">
                            {language == "en" ? "Sign Up" : "Регистрация"}
                        </h1>
                        <h3 className="text-sm mb-2 text-[#DADADA] font-montserrat">
                            {language == "en"
                                ? "Please, enter your name"
                                : "Пожалуйста, введите ваше имя"}
                        </h3>
                        <div className="mb-4 ">
                            {language == "en" ? (
                                <input
                                    onFocus={handleNameFocus}
                                    onBlur={(e) =>
                                        handleNameBlur(e.target.value)
                                    }
                                    placeholder={namePlaceholder}
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-5 border-2 font-thin h-[50px] border-[#737373] text-white placeholder-white text-sm rounded-xl bg-[#212022]"
                                />
                            ) : (
                                <input
                                    onFocus={handleNameFocus}
                                    onBlur={(e) =>
                                        handleNameBlur(e.target.value)
                                    }
                                    placeholder={namePlaceholder}
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-5 border-2 font-thin h-[50px] border-[#737373] text-white placeholder-white text-sm rounded-xl bg-[#212022]"
                                />
                            )}

                            {errors.name && (
                                <p className="text-yellow-500 text-sm">
                                    {errors.name}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {showPassword && (
                    <div className="">
                        <h1 className="text-xl mb-[50px] uppercase font-semibold mt-[-246px] text-white font-montserrat text-center">
                            {language == "en" ? "Sign Up" : "Регистрация"}
                        </h1>
                        <h3 className="text-sm mb-2 text-[#DADADA] font-montserrat">
                            {language == "en"
                                ? "Please, create a password"
                                : "Пожалуйста, придумайте пароль"}
                        </h3>
                        <div className="mb-4 ">
                            <input
                                placeholder={passwordPlaceholder}
                                onFocus={handlePasswordFocus}
                                onBlur={(e) =>
                                    handlePasswordBlur(e.target.value)
                                }
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-5 border-2 font-thin h-[50px] border-[#737373] text-white placeholder-white text-sm rounded-xl bg-[#212022]"
                            />
                            {errors.password && (
                                <p className="text-yellow-500 text-sm">
                                    {errors.password}
                                </p>
                            )}
                        </div>
                    </div>
                )}

                {showEmail && (
                    <button
                        onClick={handleEmail}
                        className="w-full p-5 mt-10 h-[50px] flex items-center justify-center text-white text-lg rounded-xl purple-gradient"
                    >
                        {language == "en" ? "Continue" : "Продолжить с email"}
                    </button>
                )}

                {showName && (
                    <button
                        onClick={handleName}
                        className="w-full p-5 mt-10 h-[50px] flex items-center justify-center text-white text-lg rounded-xl purple-gradient"
                    >
                        {language == "en" ? "Continue" : "Продолжить"}
                    </button>
                )}

                {showPassword && (
                    <button
                        onClick={handleSubmit}
                        className="w-full p-5 mt-10 h-[50px] flex items-center justify-center text-white text-lg rounded-xl purple-gradient"
                        disabled={loading}
                    >
                        {loading ? (
                            <Image
                                src={loadingGif}
                                alt="Loading..."
                                width={45}
                                height={45}
                            />
                        ) : language == "en" ? (
                            "Continue"
                        ) : (
                            "Продолжить"
                        )}
                    </button>
                )}

                {showEmail && (
                    <div>
                        <div className="flex items-center mt-3">
                            <hr className="mt-2 w-1/2 h-1"></hr>

                            <div className="text-white px-4 text-sm">or</div>
                            <hr className="mt-2 w-1/2 h-1"></hr>
                        </div>
                        <LoginForm language={language} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
