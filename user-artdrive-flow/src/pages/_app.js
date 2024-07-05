import { useEffect } from 'react';
import { useRouter } from 'next/router';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const language = router.pathname.startsWith('/ru') ? 'ru' : 'en';
    localStorage.setItem('language', language);
  }, [router.pathname]);

  return <Component {...pageProps} />;
}

export default MyApp;
