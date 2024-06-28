'use client'
import { useRouter } from "next/router";
const SignUpButton = () => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push("/register");
    };

    return (
        <button onClick={navigateToRegister} className="w-[89px] h-[31px] rounded-[10px] bg-[#2A2A2A] text-white text-center font-dinround font-semibold hover:w-[95px] hover:h-[35px] duration-200 transition-all hover:bg-indigo-900">            
                Sign Up
        </button>
    );
};

export default SignUpButton;
