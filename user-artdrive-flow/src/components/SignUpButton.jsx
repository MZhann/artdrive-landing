// src/components/SignUpButton.jsx
'use client';

import { useRouter } from "next/router";

const SignUpButton = () => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push("/register");
    };

    return (
        <button onClick={navigateToRegister} className="w-[90px] h-[25px] rounded-3xl bg-[#A8FF35] text-black text-center text-[12px] p-1 font-montserrat font-semibold hover:w-[95px] hover:h-[35px] duration-200 transition-all">
            Sign Up
        </button>
    );
};

export default SignUpButton;
