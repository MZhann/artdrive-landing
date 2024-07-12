import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token, user }) {
            return session; // Return session object to be used in the frontend
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token; // Return token object to be used in the session callback
        },
    },
});
