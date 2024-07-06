// import { doSocialLogin } from "@/app/actions";

import Image from "next/image";
import googleLogo from "../../public/images/google.svg";
import {signIn, useSession} from "next-auth/react";
import {useEffect} from "react";
import {useRouter} from "next/router";

const LoginForm = ({language}) => {
    const router = useRouter();
    const {data: session} = useSession();

    useEffect(() => {
        if (session) {
            router.push("/congrats")
        }
    }, [session])

    return (
        <button
            onClick={() => signIn("google")}
            className="w-full flex items-center text-white text-xs h-[50px] justify-center space-x-4 mt-4 p-5 bg-[#212022] rounded-2xl border-2 border-[#737373] "
        >
            <Image
                src={googleLogo}
                width={30}
                height={30}
                alt="google logo"
                className="mr-2"
            />
            {language == "en"
                ? "Sign up with Google"
                : "Зарегистрироваться с Google"}
        </button>
    );
};
export default LoginForm;
