import React, { useState } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";
import googleLogo from "../../../public/images/Google-logo.svg";

const Register = () => {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const goBack = () => {
        router.push("/");
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        // Simple password validation rules: at least 8 characters, one uppercase letter, one lowercase letter, one number
        const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return re.test(password);
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
            // If no errors, redirect to the verification page
            router.push("/verification");
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div className="max-w-md mx-auto mt-20 p-4 font-dinroundmedium">
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
            <h1 className="text-2xl mb-4 font-dinroundbold text-center">
                Sign Up
            </h1>

            <div className="mb-4 ">
                {/* <label className="block mb-1 ">Name</label> */}
                <input
                    placeholder="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-5 border-2 border-[#888888] rounded-lg"
                />
                {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                )}
            </div>
            <div className="mb-4">
                {/* <label className="block mb-1">Email</label> */}
                <input
                    placeholder="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-5 border-2 border-[#888888] rounded-lg"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                )}
            </div>
            <div className="mb-4">
                {/* <label className="block mb-1">Password</label> */}
                <input
                    placeholder="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-5 border-2 border-[#888888] rounded-lg"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password}</p>
                )}
            </div>
            <button
                onClick={handleSubmit}
                className="w-full p-5 mt-10 bg-blue-500 text-white rounded-xl border-b-blue-800 border-4 hover:bg-blue-600"
            >
                Continue
            </button>
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
                <div>Sign up with Google</div>
            </button>
        </div>
    );
};

export default Register;
