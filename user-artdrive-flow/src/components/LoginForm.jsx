// import { doSocialLogin } from "@/app/actions";

import Image from "next/image";
import googleLogo from "../../public/images/google.svg";

const LoginForm = ({language}) => {
    return (
        <form >
            <button
                type="submit"
                name="action"
                value="google"
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
        </form>
    );
};
export default LoginForm;
