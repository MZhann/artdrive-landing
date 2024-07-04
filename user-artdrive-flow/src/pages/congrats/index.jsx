import React, { useState } from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";

const Congrats = () => {
    const router = useRouter();

    const goBack = () => {
        router.push("/");
    };

    return (
        <div className="w-full flex justify-center items-center  h-[100vh] bg-bg-image bg-cover">
            <div className="max-w-md mt-[-100px] text-center mx-auto p-4 font-dinroundmedium text-[#2A2A2A]">
                <h1 className="text-2xl uppercase mb-4 font-dinroundbold text-center mt-10 text-white">
                    Congratulations, (Name)! <br></br> You now joined the
                    Waitlist.
                </h1>
                <h3 className="text-xl uppercase mb-4 font-dinroundsemibold text-center mt-10"></h3>
                <p className="dinroundmedium text-gray-300 text-xl">
                    When ArtDrive is launched, we will notify you via email {" "}
                    <span className="font-bold text-white">thousand@gmail.com</span>
                </p>

                <div className="h-[1px] w-full bg-gray-600 my-7"></div>

                <button
                    onClick={goBack}
                    className="w-full p-5 mt-5 bg-blue-500 text-white rounded-xl text-xl border-b-blue-800 border-4 hover:bg-blue-600"
                >
                    Back to main page
                </button>
            </div>
        </div>
    );
};

export default Congrats;
