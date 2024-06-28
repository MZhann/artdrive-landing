import React, { useState } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MainContainer from "@/components/MainContainer";
import googleLogo from "../../../public/images/Google-logo.svg";

const Verification = () => {
    const router = useRouter();
    const [code, setCode] = useState("");
    

    const goBack = () => {
        router.push("/register");
    };

   
    return (
        <div className="max-w-md mx-auto mt-20 p-4 font-dinroundmedium text-[#2A2A2A]">
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
            <h1 className="text-2xl uppercase mb-4 font-dinroundbold text-center mt-10">
                Check your email
            </h1>
            <p className="dinroundmedium text-center">We&apos;ve just sent a confirmation code to your email&#58;</p>
            <p className="text-center font-dinroundbold">blabla@gmail.com</p>

            <div className="h-[1px] w-full bg-black my-7"></div>

            <div className="mb-4 ">
                {/* <label className="block mb-1 ">Name</label> */}
                <input
                    placeholder="Confirmation Code"
                    type="text"
                    value={code}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-5 border-2 border-[#888888] rounded-lg"
                />
               
            </div>
            
            <button
                className="w-full p-5 mt-5 bg-blue-500 text-white rounded-xl border-b-blue-800 border-4 hover:bg-blue-600"
            >
                Continue
            </button>
            
        </div>
    );
};

export default Verification;
