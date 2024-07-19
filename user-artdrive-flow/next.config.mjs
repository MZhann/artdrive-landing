

// import 'dotenv/config';

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     env: {
//         NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
//         NEXTAUTH_URL: process.env.NEXTAUTH_URL,
//         GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
//         GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
//         SECRET_KEY: process.env.SECRET_KEY,
//     },
// };

// console.log('Loaded SECRET_KEY in next.config.mjs:', process.env.SECRET_KEY);

// export default nextConfig;
import 'dotenv/config';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        SECRET_KEY: process.env.SECRET_KEY,
    },
    images: {
        domains: ['abeu.s3.amazonaws.com'], // Add your image domains here
    },
};

console.log('Loaded SECRET_KEY in next.config.mjs:', process.env.SECRET_KEY);

export default nextConfig;
