import { useRouter } from "next/router";

const LogOut = () => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('nextauth.message');
        localStorage.removeItem('currentRound');
        router.push('/');
        // router.reload();
    };

    return (
        <div className="text-white text-xs w-[120px] flex justify-center font-bold cursor-pointer rounded-2xl p-4" onClick={handleLogout}>
            Log Out
        </div>
    );
}

export default LogOut;
