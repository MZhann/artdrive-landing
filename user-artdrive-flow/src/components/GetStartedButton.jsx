'use client'
import { useRouter } from "next/router";
const SignUpButton = ({h}) => {
    const router = useRouter();

    const navigateToRegister = () => {
        router.push("/register");
    };

    return (
        <button onClick={navigateToRegister} className={h ? `w-[124px] h-[32px] rounded-3xl bg-[#A8FF35] text-black text-center text-[14px] p-1 font-montserrat font-semibold hover:w-[220px] hover:h-[48px] mb-10 duration-200 transition-all`
            : `w-[204px] h-[42px] rounded-3xl bg-[#A8FF35] text-black text-center text-[18px] p-1 font-montserrat font-semibold hover:w-[220px] hover:h-[48px] mb-10 duration-200 transition-all`
        }>            
                Start now
        </button>
    );
};

export default SignUpButton;
