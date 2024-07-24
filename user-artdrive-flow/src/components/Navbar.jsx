"use client";

import Image from "next/image";
import Link from "next/link";
import ArtDriveLogo from "../../public/images/ArtDriveWhiteLogo.png";
import beta from "../../public/images/beta.svg";
import tournaments from "../../public/images/tournaments.png"
// import langImage from "../../public/images/lang.svg";
import SignUpButton from "./SignUpButton";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = () => {
    const router = useRouter();
    const routeLanguage = router.pathname.startsWith("/ru") ? "ru" : "en";
    const [language, setLanguage] = useState(routeLanguage);

    useEffect(() => {
        setLanguage(routeLanguage);

        if(window){
            localStorage.setItem('language', language);
            // console.log('storedLanguage: ' + storedLanguage);

        }
    }, []);

    // const toggleLanguage = () => {
       
    //     let toggledLang = language == 'ru' ? 'en' : 'ru';
    //     const newPath = toggledLang === "en" ? "/" : "/ru";
    //     console.log('pushed to: ', newPath);
    //     router.push(newPath);
    // };
   

    return (
        <header
            id="navbar"
            className="fixed w-full h-[65px] flex justify-between items-center min-w-full pl-4 pr-4 z-40 lg:px-[5%] lg:justify-center"
        >
            <div className="flex items-center justify-between w-full lg:w-[2000px]">
                <Link href="/" className="flex space-x-2 items-end">
                    {ArtDriveLogo && <Image
                        src={ArtDriveLogo}
                        width={300}
                        height={300}
                        alt="logo"
                        className="w-[90px]"
                    />}
                    {beta && <Image
                        src={beta}
                        width={25}
                        height={10}
                        alt="beta"
                        className="w-[30px]"
                    />}
                </Link>
                <div className="flex space-x-3">
                    <Link href={"/tournaments"} className="flex items-center justify-center">
                        {tournaments && <Image src={tournaments} alt="tournaments page" width={100} height={100} className="w-[30px] h-[30px] mr-[-5px]" />}
                    </Link>

                    {/* <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center space-x-2 w-[50px]"
                    >
                        <Image
                            src={langImage}
                            className="w-[25px] hover:w-[30px]"
                            alt="language changer"
                        />
                    </button> */}

                    <div className="flex justify-center items-center w-[95px] h-[65px] mr-[-5px]">
                        <SignUpButton lang={language} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
