import { useState } from "react";
import { updateProfile } from "@/pages/api/profile";
// import axios from "axios";
import loading from "../../../public/loading.gif";
import Image from "next/image";
import Link from "next/link";
import Router, { useRouter } from "next/router";

const ProfileInfo = ({ userData }) => {
    const router = useRouter();
    const [editMode, setEditMode] = useState(false);
    const [avatarFile, setAvatarFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: userData?.username || "",
        email: userData?.email || "",
        avatar: userData?.avatar || "",
        socialLinks: Object.entries(userData?.social_links || {}),
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSocialLinkChange = (index, key, value) => {
        const updatedLinks = [...formData.socialLinks];
        updatedLinks[index] = [key, value];
        setFormData((prevData) => ({ ...prevData, socialLinks: updatedLinks }));
    };

    const addSocialLink = () => {
        setFormData((prevData) => ({
            ...prevData,
            socialLinks: [...prevData.socialLinks, ["", ""]],
        }));
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatarFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({
                    ...prevData,
                    avatar: reader.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async () => {
        try {
            const profileFormData = new FormData();
            profileFormData.append("username", formData.username);
            profileFormData.append("country", "default, not yet");
            profileFormData.append("wallet_address", "default, not yet");
            profileFormData.append("avatar", avatarFile);
            profileFormData.append(
                "social_links",
                JSON.stringify(Object.fromEntries(formData.socialLinks))
            );
            profileFormData.append("new_email", formData.email);
            setIsLoading(true);
            await updateProfile(profileFormData);


            // Reload user data or handle success
            setIsLoading(false);
            setEditMode(false);
            router.reload();
        } catch (error) {
            setIsLoading(false);
            console.error("Error updating profile:", error);
        }
    };

    if (!userData) {
        return (
            <div className="mt-[-20px]">
                <Image src={loading} alt="loading" width={40} height={40} />
            </div>
        );
    }

    return (
        <div className="flex space-x-2 w-full pl-2 pr-2 md:pl-0 md:pr-0">
            <div className="w-1/2 bg-white border-[1px] border-gray-400 p-4 rounded-xl bg-opacity-5 ">
                {editMode ? (
                    <div className="text-xs">
                        <p className="mb-1">name</p>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            className="w-full p-2 mb-2 rounded-md bg-opacity-10 bg-white border-[1px] border-gray-400"
                        />
                        <p className="mb-1">email</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Your email"
                            className="w-full p-2 mb-2 rounded-md bg-opacity-10 bg-white border-[1px] border-gray-400"
                        />
                        
                        <button
                            onClick={handleSubmit}
                            className="mt-4 bg-green-500 bg-opacity-20 border-white border-[1px] text-xs mr-4 text-white py-2 px-4 rounded-md"
                        >
                            {isLoading ? (
                                <Image
                                    src={loading}
                                    alt="loading"
                                    width={30}
                                    height={30}
                                />
                            ) : (
                                "Confirm"
                            )}
                        </button>
                        <button
                            onClick={() => {
                                setEditMode(false);
                            }}
                            className="mt-4 bg-purple-500 bg-opacity-40 border-white border-[1px] text-xs text-white py-2 px-4 rounded-md"
                        >
                            Back
                        </button>
                    </div>
                ) : (
                    <div className="w-full">
                        <p className="text-xs mb-3">
                            <strong>Name:</strong> {userData.username}
                        </p>
                        <p className="text-xs mb-3 truncate">
                            <strong>Email:</strong> {userData.email}
                        </p>
                        <p className="text-xs truncate">
                            <strong>Social Media Links:</strong>
                            
                            {Object.entries(userData.social_links).map(
                                ([key, value], index) => (
                                    <div className="truncate mt-1">
                                        <Link
                                            target="_blank"
                                            href={`${value}`}
                                            className="truncate"
                                            key={index}
                                        >
                                            {key}: {value}
                                        </Link>
                                        <br />
                                    </div>
                                )
                            )}
                        </p>
                        <button
                            onClick={() => setEditMode(true)}
                            className="mt-4 bg-purple-500 bg-opacity-40 border-white border-[1px] text-xs text-white py-2 px-4 rounded-md"
                        >
                            Edit
                        </button>
                    </div>
                )}
            </div>
            <div className="w-1/2 bg-white bg-opacity-5 border-[1px] border-gray-500 p-4 rounded-xl">
                <div className="flex items-center">
                    <p className="text-xs">
                        <img
                            src={
                                avatarFile
                                    ? URL.createObjectURL(avatarFile)
                                    : userData.avatar
                            }
                            alt="Avatar"
                            className="w-16 object-cover h-16 rounded-full cursor-pointer"
                            onClick={() =>
                                document.getElementById("avatarUpload").click()
                            }
                        />
                    </p>
                    <p
                        className="text-[10px] w-[30px] ml-3 text-center cursor-pointer"
                        onClick={() =>
                            document.getElementById("avatarUpload").click()
                        }
                    >
                        Change Avatar
                    </p>
                    <input
                        type="file"
                        id="avatarUpload"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={handleAvatarChange}
                    />
                </div>

                {formData.socialLinks.map(([key, value], index) => (
                    <div key={index} className="flex text-[8px] mt-2 mb-2">
                        <input
                            type="text"
                            value={key}
                            onChange={(e) =>
                                handleSocialLinkChange(
                                    index,
                                    e.target.value,
                                    value
                                )
                            }
                            placeholder="Platform"
                            className="w-1/2 bg-opacity-10 bg-white border-[1px] border-gray-400 text-white p-2 mr-2 rounded-md"
                        />
                        <input
                            type="text"
                            value={value}
                            onChange={(e) =>
                                handleSocialLinkChange(
                                    index,
                                    key,
                                    e.target.value
                                )
                            }
                            placeholder="Link"
                            className="w-1/2 bg-opacity-10 bg-white border-[1px] border-gray-400 p-2 rounded-md text-white"
                        />
                    </div>
                ))}
                <button
                    onClick={addSocialLink}
                    className="mb-2 bg-purple-500 bg-opacity-5 border-[1px] border-gray-200 text-xs mt-2 text-white py-2 px-4 rounded-md"
                >
                    Add Social Link
                </button>
            </div>
        </div>
    );
};

export default ProfileInfo;
