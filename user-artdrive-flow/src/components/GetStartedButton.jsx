"use client";
import { useRouter } from "next/router";
const SignUpButton = ({ lang, h  }) => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push("/auth/register");
    };

    return (
        <button
            onClick={navigateToRegister}
            className={`${
                lang == "en"
                    ? "p-1 w-[124px] hover:w-[220px]"
                    : "text-nowrap w-[140px]  flex items-center hover:w-[200px] justify-center"
            } h-[32px] text-[14px] p-1  rounded-3xl bg-[#A8FF35] text-black text-center mb-10 font-montserrat  font-semibold hover:h-[35px] duration-200 transition-all ${
                h
                    ? "w-[124px] h-[32px] rounded-3xl bg-[#A8FF35] text-black text-center text-[14px] p-1 font-montserrat font-semibold hover:w-[220px] hover:h-[48px] mb-10 duration-200 transition-all"
                    : "w-[204px] h-[42px] rounded-3xl bg-[#A8FF35] text-black text-center text-[18px] p-1 font-montserrat font-semibold hover:w-[220px] hover:h-[48px] mb-10 duration-200 transition-all"
            }`}
        >
            {lang == "en" ? "Start Now" : "Начни сейчас"}
        </button>
    );
};

export default SignUpButton;
