// src/components/SignUpButton.jsx
'use client';

import { useRouter } from "next/router";

const SignUpButton = ({lang}) => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push("/register");
    };  

    return (
        <button onClick={navigateToRegister} className={`${lang == 'en' ? 'p-1 w-[90px] hover:w-[95px] text-[12px]' : 'text-[11px] text-nowrap w-[140px]  flex items-center hover:w-[95px] justify-center'} h-[25px] rounded-3xl bg-[#A8FF35] text-black text-center font-montserrat  font-semibold hover:h-[35px] duration-200 transition-all`}>
            {lang == 'en' ? 'Start Now' : 'Начни сейчас'}
        </button>
    );
};

export default SignUpButton;
