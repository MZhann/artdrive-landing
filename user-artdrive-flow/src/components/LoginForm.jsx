// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { signIn, useSession } from "next-auth/react";
// import Image from "next/image";
// import googleLogo from "../../public/images/google.svg";
// import jwt from "jsonwebtoken";

// const LoginForm = ({ language }) => {
//     const router = useRouter();
//     const { data: session, status } = useSession();

//     console.log("in login form");
//     console.log("Session status:", status);

//     useEffect(() => {

//         if (status === "authenticated" && session) {
//             // console.log("in if session");

//             const { user } = session;
//             const SECRET_KEY = process.env.SECRET_KEY || "hardcoded_secret_key";

//             if (SECRET_KEY) {
//                 // console.log("in if secretKey");

//                 try {
//                     const token = jwt.sign(
//                         {
//                             email: user.email,
//                             name: user.name,
//                             image: user.image,
//                         },
//                         SECRET_KEY,
//                         { expiresIn: "1h" }
//                     );

//                     console.log("JWT token generated");
//                     sendTokenToBackend(token);
//                     // localStorage.setItem('accessToken', token)
//                 } catch (error) {
//                     console.error("Error generating token:", error);
//                 }
//             } else {
//                 console.error("SECRET_KEY is not defined");
//             }
//         }
//     }, [session, status]);

//     const sendTokenToBackend = async (idToken) => {
//         try {
//             const response = await fetch(
//                 "https://artdrivebackend-production.up.railway.app/api/v1/google-login/",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json",
//                     },
//                     body: JSON.stringify({ id_token: idToken }),
//                 }
//             );

//             if (response.ok) {
//                 const data = await response.json();
//                 // console.log('data: ', data);
//                 // console.log('response: ', response);
//                 const { jwt: receivedJwt } = data;
//                 // console.log("Received JWT from backend:", receivedJwt);
//                 // Store the JWT or perform any further actions required
//                 router.push("/auth/congrats");
//             } else {
//                 console.error("Failed to send user info to backend");
//             }
//         } catch (error) {
//             console.error("An error occurred:", error);
//         }
//     };

//     return (
//         <button
//             onClick={() => signIn("google")}
//             className="w-full flex items-center text-white text-xs h-[50px] justify-center space-x-4 mt-4 p-5 bg-[#212022] rounded-2xl border-2 border-[#737373] "
//         >
//             <Image
//                 src={googleLogo}
//                 width={30}
//                 height={30}
//                 alt="google logo"
//                 className="mr-2"
//             />
//             {language === "en"
//                 ? "Sign up with Google"
//                 : "Зарегистрироваться с Google"}
//         </button>
//     );
// };

// export default LoginForm;

import { useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import googleLogo from "../../public/images/google.svg";
import jwt from "jsonwebtoken";

const LoginForm = ({ language }) => {
    const router = useRouter();
    const { data: session, status } = useSession();

    console.log("in login form");
    console.log("Session status:", status);

    useEffect(() => {
        if (status === "authenticated" && session) {
            const { user } = session;
            const SECRET_KEY = process.env.SECRET_KEY || "hardcoded_secret_key";

            if (SECRET_KEY) {
                try {
                    const token = jwt.sign(
                        {
                            email: user.email,
                            name: user.name,
                            image: user.image,
                        },
                        SECRET_KEY,
                        { expiresIn: "1h" }
                    );

                    console.log("JWT token generated");
                    sendTokenToBackend(token);
                } catch (error) {
                    console.error("Error generating token:", error);
                }
            } else {
                console.error("SECRET_KEY is not defined");
            }
        }
    }, [session, status]);

    const sendTokenToBackend = async (idToken) => {
        try {
            const response = await fetch(
                "https://artdrivebackend-production.up.railway.app/api/v1/google-login/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id_token: idToken }),
                }
            );

            if (response.ok) {
                const data = await response.json();
                const { access, refresh } = data;

                // Save tokens to localStorage
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);

                console.log("Tokens saved to localStorage");
                router.push("/auth/congrats-google");
            } else {
                console.error("Failed to send user info to backend");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

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
            {language === "en"
                ? "Sign up with Google"
                : "Зарегистрироваться с Google"}
        </button>
    );
};

export default LoginForm;
