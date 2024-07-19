import "../../../app/globals.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import xLogo from "../../../../public/images/x.svg"; 
import discordLogo from "../../../../public/images/discord.svg";
import {signOut, useSession} from "next-auth/react";

const Congrats = () => {
    const router = useRouter();
    const { name } = router.query;
    const [userName, setUserName] = useState("");
    const [language, setLanguage] = useState("en");
    const {data: session} = useSession()
    const back = () => {
        router.push("/");
    };

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        if (name) {
            setUserName(name);
        }
        if (session) {
            setUserName(session.user?.name);
        }
    }, [name, session]);

    return (
        <div className="w-full h-[100vh] flex items-center justify-center dark-purple-gradient bg-cover">
            <div className="w-[500px] mx-3 flex flex-col items-center font-montserrat p-6 mt-[-40px] rounded-3xl">
                <h1 className="text-xl mb-10 uppercase font-semibold mt-[-150px] text-white font-montserrat text-center">
                    {language == "en" ? "Congratulations," : "Поздравляем,"}{" "}
                    <br></br>
                    {userName}!
                </h1>
                <div className="w-full flex flex-col items-center">
                    <p className="text-sm mb-2 text-[#DADADA] font-montserrat text-center flex justify-center w-[230px] text-nowrap">
                        {language == "en"
                            ? "You are now part of ArtDrive beta."
                            : "Теперь вы часть ArtDrive beta."}{" "}
                    </p>
                    <p className="text-sm mb-2 text-[#DADADA] font-montserrat text-center flex justify-center w-[220px]">
                        {language == "en"
                            ? "Subscribe to follow updates:"
                            : "Подпишитесь, чтобы следить за обновлениями"}{" "}
                    </p>
                </div>

                <div className="flex space-x-5 mt-5 items-center">
                    <Link href={'https://x.com/ArtDrive_io'}>
                        <Image
                            src={xLogo}
                            width={300}
                            height={300}
                            className="w-8 h-8"
                            alt="x/twitter logo"
                        />
                    </Link>
                    <Link href={'https://discord.gg/byq8huwJ'}>
                        <Image
                            src={discordLogo}
                            width={300}
                            height={300}
                            className="w-9 h-9"
                            alt="discord logo"
                        />
                    </Link>
                </div>

                <button
                    className="w-full p-5 mt-10 h-[50px] flex items-center justify-center text-white text-lg rounded-xl purple-gradient"
                    onClick={() => {
                        signOut().then(() => {
                            console.log("back")
                            window.location.href = "/"
                        })
                    }}
                >
                    {language == "en"
                        ? "Back to landing"
                        : "Вернуться на главную"}
                </button>

            </div>
        </div>
    );
};

export default Congrats;
