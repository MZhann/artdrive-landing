import { useEffect, useState } from "react";
import LogOut from "@/components/profile-components/LogOut";
import Image from "next/image";
import loading from "../../../public/loading.gif";
import ProfileInfo from "@/components/profile-components/ProfileInfo";
import ProfileGallery from "@/components/profile-components/ProfileGallery";
import ProfileTournaments from "@/components/profile-components/ProfileTournaments";
import { getUserData } from "@/pages/api/profile";
import Link from "next/link";

const ProfileTabs = () => {
    const [userData, setUserData] = useState(null);
    const [selectedTab, setSelectedTab] = useState("profile"); // Default tab is 'gallery'
    const [isAuthorized, setIsAuthorized] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const accessToken = localStorage.getItem("accessToken");
            if (!accessToken) {
                setIsAuthorized(false);
            }
            try {
                const data = await getUserData();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const renderContent = () => {
        switch (selectedTab) {
            case "gallery":
                return <ProfileGallery />;
            case "tournaments":
                return <ProfileTournaments />;
            case "profile":
                return userData ? <ProfileInfo userData={userData} /> : <div className="ml-3">Loading...</div>;
            default:
                return <div>Some error occured at ProfileTabs component</div>;
        }
    };

    return (
        <div className="w-full">
            {isAuthorized ? (
                <div className="w-full flex justify-between bg-bg-image text-white pt-32 pb-32 space-x-4 pl-6 pr-6 lg:space-x-14 lg:pl-10 lg:pr-10">
                    <div className="w-full md:w-[25%] lg:w-[20%] flex flex-col font-montserrat justify-between h-auto min-h-[500px] border-gray-400 border-[1px] rounded-3xl bg-white bg-opacity-[0.03]">
                        <div className="text-white flex flex-col relative">
                            <div className="flex items-center absolute top-[-30px] left-[-10px]">
                                {userData ? (
                                    <>
                                        <img
                                            src={userData.avatar}
                                            alt="User Avatar"
                                            className="w-[70px] h-[70px] object-cover border-2 border-gray-700 rounded-full mr-2 bg-white bg-opacity-5"
                                        />
                                        <div className="mt-[-55px]">
                                            <div className="text-xs">
                                                welcome back
                                            </div>
                                            <h1 className="uppercase font-bold text-xl">
                                                {userData.username}
                                            </h1>
                                        </div>
                                    </>
                                ) : (
                                    <div className="mt-[-20px]">
                                        <Image
                                            src={loading}
                                            alt="loading"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="flex justify-evenly md:flex-col md:items-start md:pl-10 pt-12 space-x-4 md:space-x-0 md:pt-28 text-xs md:space-y-4 ">
                                <button
                                    className={
                                        selectedTab == "gallery"
                                            ? `border-2 border-gray-400 rounded-2xl p-2 bg-white bg-opacity-5`
                                            : " p-2"
                                    }
                                    onClick={() => setSelectedTab("gallery")}
                                >
                                    My gallery
                                </button>
                                <button
                                    className={
                                        selectedTab == "tournaments"
                                            ? `border-2 border-gray-400 rounded-2xl p-2 bg-white bg-opacity-5`
                                            : "p-2"
                                    }
                                    onClick={() =>
                                        setSelectedTab("tournaments")
                                    }
                                >
                                    My tournaments
                                </button>
                                <button
                                    className={
                                        selectedTab == "profile"
                                            ? `border-2 border-gray-400 rounded-2xl p-2 bg-white bg-opacity-5`
                                            : "p-2"
                                    }
                                    onClick={() => setSelectedTab("profile")}
                                >
                                    Profile Info
                                </button>
                            </div>
                            <div className="md:hidden">
                                <div className="mt-10 w-full h-full">
                                    {renderContent()}
                                </div>
                            </div>
                        </div>

                        <div className="text-white">
                            <LogOut />
                        </div>
                    </div>
                    <div className="hidden md:flex md:w-[50%] lg:w-[60%] relative h-auto min-h-[500px] border-gray-400 border-[1px] rounded-3xl md:flex-col md:p-4 bg-white bg-opacity-[0.03]">
                        <div className="absolute left-[40%] lg:left-[44%] -top-10">
                            {selectedTab === "gallery" && "My gallery"}
                            {selectedTab === "tournaments" && "My tournaments"}
                            {selectedTab === "profile" && "Profile Info"}
                        </div>
                        <div className="mt-10 w-full">{renderContent()}</div>
                    </div>
                    <div className="hidden md:flex md:w-[25%] lg:w-[20%] h-auto min-h-[500px] border-gray-400 border-[1px] rounded-3xl bg-white bg-opacity-[0.03]"></div>
                </div>
            ) : (
                <div className="w-full flex justify-center h-[100vh] bg-bg-image text-white pt-32 pb-32 space-x-2">
                    <div>You are not authorized, Please </div>
                    <Link className="text-blue-600 underline font-bold" href='/auth/login'>Log In</Link>
                </div>
            )}
        </div>
    );
};

export default ProfileTabs;
