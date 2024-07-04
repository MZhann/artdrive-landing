// src/components/Navbar.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import ArtDriveLogo from "../../public/images/ArtDriveWhiteLogo.svg";
import beta from "../../public/images/beta.svg";
import lang from "../../public/images/lang.svg";
import SignUpButton from "./SignUpButton";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();

    const changeLanguage = () => {
    };

    return (
        <header
            id="navbar"
            className="fixed w-full h-[65px] flex justify-between items-center min-w-full pl-4 pr-4 z-40 lg:px-[5%] lg:justify-center"
        >
            <div className="flex items-center justify-between w-full lg:w-[2000px]">
                <Link href="/" className="flex space-x-2 items-end">
                    <Image
                        src={ArtDriveLogo}
                        width={51}
                        height={56}
                        alt="logo"
                        priority
                        className="w-[90px]"
                    />
                    <Image
                        src={beta}
                        width={25}
                        height={10}
                        alt="beta"
                        priority
                        className="w-[30px]"
                    />
                </Link>
                <div className="flex space-x-3">
                    <button
                        onClick={changeLanguage}
                        className="flex items-center justify-center w-[30px]"
                    >
                        <Image
                            src={lang}
                            className="w-[25px] hover:w-[30px]"
                            alt="language changer"
                            priority
                        />
                    </button>
                    <div className="flex justify-center items-center w-[95px] h-[65px] mr-[-5px]">
                        <SignUpButton />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

