"use client";
import React from "react";
import Router, { useRouter } from "next/router";

const GetStartedButton = ({ bgColor, width, height, gradient }) => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push("/register");
    } 
    
    return (
        <button
            className={gradient ? 'bg-gradient-button text-white font-dinround text-lg text-center rounded-[15px] justify-center items-center w-[164px] h-[50px] hover:bg-opacity-100 transition-all duration-200 hover:w-[175px] hover:h-[60px] hover:border-4 hover:text-xl hover:border-indigo-500' : '' + `text-white font-dinround text-lg text-center rounded-[15px] justify-center items-center w-[164px] h-[50px] ${
                bgColor ? `bg-[${bgColor}]` : "bg-black bg-opacity-50 backdrop-blur-[50px]"
            } hover:bg-opacity-100 bg-indigo-500 transition-all duration-200 border-indigo-400 border-4 hover:w-[175px] hover:h-[60px] hover:border-4 hover:border-indigo-700 ` }
            style={{
                backgroundColor: bgColor ? bgColor : "",
            }}
            onClick={navigateToRegister}
           
        >
            Get started
        </button>
    );
};

export default GetStartedButton;
