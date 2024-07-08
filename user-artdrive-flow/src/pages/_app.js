// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import "../app/globals.css";
// import { SessionProvider } from "next-auth/react";

// function MyApp({ Component, pageProps: { session, ...pageProps } }) {
//     const router = useRouter();

//     useEffect(() => {
//         const language = router.pathname.startsWith("/ru") ? "ru" : "en";
//         localStorage.setItem("language", language);
//     }, [router.pathname]);

//     return (
//         <SessionProvider session={session}>
//             <Component {...pageProps} />
//         </SessionProvider>
//     );
// }

// export default MyApp;
import { useEffect } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const language = router.pathname.startsWith("/ru") ? "ru" : "en";
        localStorage.setItem("language", language);
    }, [router.pathname]);

    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
