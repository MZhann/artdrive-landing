import { useEffect } from "react";
import { useRouter } from "next/router";
import "../app/globals.css";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        let language = router.pathname.startsWith("/ru") ? "ru" : "en";
        localStorage.setItem("language", language);
        console.log('language in _app.js is set up to ', language);
    }, []);

    return (
        <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;
