import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Image from "next/image";
import googleLogo from "../../../public/images/Google-logo.svg";

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

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);
    const goBack = () => {
        router.push("/");
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
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

    const handleSubmit = () => {
        let validationErrors = {};
        if (!name) validationErrors.name = "Name is required";
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Invalid email address";
        }
        if (!password) {
            validationErrors.password = "Password is required";
        } else if (!validatePassword(password)) {
            validationErrors.password =
                "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
        }

        if (Object.keys(validationErrors).length === 0) {
            router.push("/verification");
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className="w-full flex bg-gray-600 h-screen justify-center items-center bg-bg-image bg-cover">
            <div className="w-[500px] bg-white bg-opacity-10 mx-3 shadow-lg font-dinroundmedium p-6 mt-[-40px] rounded-3xl border-4 border-gray">
                {showEmail && (
                    <button
                        onClick={goBack}
                        className="text-start  flex items-center p-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                        <div className="mr-2">
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
                        <h1 className="text-2xl mb-4 text-white font-dinroundbold text-center">
                            {language == "en"
                                ? "Sign Up"
                                : "Зарегистрироваться"}
                        </h1>
                        <h3 className="text-lg mb-2 text-white font-dinroundmedium">
                            {language == "en"
                                ? "Please, enter your email:"
                                : "Пожалуйста, введите ваш email"}
                        </h3>
                    </div>
                )}

                {showEmail && (
                    <div className="mb-4">
                        {/* <p className="font-dinroundbold mt-5 text-white mb-1 ml-1">
                            email
                        </p> */}

                        <input
                            placeholder="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-5 border-2 border-[#888888] placeholder-gray-700 rounded-lg"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">
                                {errors.email}
                            </p>
                        )}
                    </div>
                )}

                {showName && (
                    <div className="text-[#2B2B2B]">
                        <h1 className=" text-[white] mt-4 text-4xl">
                            {language == "en"
                                ? "Set your name"
                                : "Укажите ваше имя"}
                        </h1>
                        <p className="text-2xl mt-4 font-dinround text-[white] mb-2">
                            {language == "en"
                                ? "To start, what&apos;s your name?"
                                : "Для начала, как вас зовут?"}
                        </p>
                        <div className="mb-4 ">
                            {/* <p className="font-dinroundbold text-white mt-5 mb-1 ml-1">
                                Name
                            </p> */}

                            {language == "en" ? (
                                <input
                                    placeholder="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-5 border-2 border-[#888888] placeholder-gray-700 rounded-lg"
                                />
                            ) : (
                                <input
                                    placeholder="имя"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-5 border-2 border-[#888888] placeholder-gray-700 rounded-lg"
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
                    <div className="text-white">
                        <h1 className=" text-white mt-4 text-4xl">
                            {language == "en"
                                ? "Pick a password"
                                : "Придумайте пароль"}
                        </h1>
                        <p className="text-2xl mt-4 font-dinround text-white mb-2">
                            {language == "en"
                                ? "Now, set your password with at least 8 characters:"
                                : "Теперь придумайте пароль минимум из 8 символов: минимум 1 заглавная, 1 строчная и 1 цифра"}
                        </p>
                        <div className="mb-4 ">
                            {/* <p className="font-dinroundbold text-white mt-5 mb-1 ml-1">
                                
                                {language == 'en' ? 'Password' : 'пароль'}

                            </p> */}

                            <input
                                placeholder="Password 8+ characters"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-5 border-2 border-[#888888] placeholder-gray-700 text-black rounded-lg"
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
                        className="w-full p-5 mt-10 bg-blue-500 text-white rounded-xl border-b-blue-800 border-4 hover:bg-blue-600"
                    >
                        {language == "en"
                            ? "Continue with email"
                            : "Продолжить с email"}
                    </button>
                )}

                {showName && (
                    <button
                        onClick={handleName}
                        className="w-full p-5 mt-10 bg-blue-500 text-white rounded-xl border-b-blue-800 border-4 hover:bg-blue-600"
                    >
                        {language == "en" ? "Continue" : "Продолжить"}
                    </button>
                )}

                {showPassword && (
                    <button
                        onClick={handleSubmit}
                        className="w-full p-5 mt-10 bg-blue-500 text-white rounded-xl border-b-blue-800 border-4 hover:bg-blue-600"
                    >
                        {language == "en" ? "Continue" : "Продолжить"}
                    </button>
                )}

                {showEmail && (
                    <div>
                        <hr className="mt-4"></hr>
                        <button
                            onClick={() => router.push("/api/auth/google")}
                            className="w-full flex items-center justify-center space-x-2 mt-4 p-5 border-2 rounded-lg hover:bg-gray-100"
                        >
                            <Image
                                src={googleLogo}
                                width={30}
                                height={30}
                                alt="google logo"
                            />
                            <div className="text-white">
                                {language == "en"
                                    ? "Sign up with Google"
                                    : "Зарегистрироваться с Google"}
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Register;
