import "../../../app/globals.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import loadingMachine from "../../../../public/loadingGame.gif";

const Congrats = () => {
    return (
        <div className="w-full h-[100vh] flex items-center justify-center dark-purple-gradient bg-cover font-montserrat">
            <div className="w-[500px] mx-3 flex flex-col items-center font-montserrat p-6 mt-[-40px] rounded-3xl">
                <Link href={'/auth/login'} className="text-white absolute top-10 left-10 mr-[100px] flex items-center space-x-1">
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
                    <p>back</p>
                </Link>
                <div className="text-white text-center">
                    Google authorization is in progress, please wait
                </div>
                <Image
                    src={loadingMachine}
                    alt="loading"
                    width={200}
                    height={200}
                    className="mt-3"
                />
            </div>
        </div>
    );
};

export default Congrats;
