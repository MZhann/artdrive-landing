"use client";

import React, { useContext } from "react";
import Image from "next/image";
import ArtDriveLogo from "../../public/images/ArtDriveLogo.svg";
import lang from "../../public/images/language.svg";
import dayIcon from "../../public/images/day.png";
import nightIcon from "../../public/images/night.png";
import SignUpButton from "./SignUpButton";
import { useRouter } from "next/router";
import { ThemeContext } from "@/context/ThemeContext";

const Navbar = () => {
    const router = useRouter();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigateToRegister = () => {
        router.push("/register");
    };

    return (
        <header
            id="navbar"
            className={`fixed w-full h-[66px] flex justify-between items-center border-b-[1px] min-w-full border-black pl-4 pr-4 z-40 lg:px-[15%] lg:justify-center ${
                theme === "light" ? "bg-white" : "bg-gray-800"
            }`}
        >
            <div className="flex items-center justify-between w-full lg:w-[1000px]">
                <Image
                    src={ArtDriveLogo}
                    width={51}
                    height={56}
                    alt="logo"
                    className="lg:w-[65px]"
                />
                <div className="flex space-x-3">
                    <button
                        className="p-1 text-white bg-indigo-400 rounded-2xl"
                        onClick={toggleTheme}
                    >
                        <Image
                            src={theme === "light" ? nightIcon : dayIcon}
                            width={24}
                            height={24}
                            alt="mode"
                        />
                    </button>
                    <Image src={lang} alt="language changer"/>
                    <div className="flex justify-center items-center w-[95px] mr-[-5px]">
                        <SignUpButton />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
