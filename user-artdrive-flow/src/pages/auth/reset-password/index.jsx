import React, { useState } from "react";
import { useRouter } from "next/router";
import "../../../app/globals.css";
import Image from "next/image";
import loadingGif from '../../../../public/loading.gif';

const ResetPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [step, setStep] = useState(1); // Step to handle the UI flow
    const [error, setError] = useState(""); // Add state for error message
    const [loading, setLoading] = useState(false); // Add state for loading

    const handleEmailChange = (e) => setEmail(e.target.value);
    const handleCodeChange = (e) => setCode(e.target.value);
    const handleNewPasswordChange = (e) => setNewPassword(e.target.value);

    const goBack = () => {
        router.push("/auth/login");
    };

    const handleResetRequest = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("https://artdrivebackend-production.up.railway.app/api/v1/password-reset/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setStep(2);
            } else {
                const data = await response.json();
                setError(data.detail || "Failed to send reset email");
            }
        } catch (error) {
            setError("An error occurred during the request");
        } finally {
            setLoading(false);
        }
    };

    const handleResetConfirm = async () => {
        setLoading(true);
        setError("");
        try {
            const response = await fetch("https://artdrivebackend-production.up.railway.app/api/v1/password-reset-confirm/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: code, new_password: newPassword }),
            });

            if (response.ok) {
                router.push("/auth/login");
            } else {
                const data = await response.json();
                setError(data.detail || "Failed to reset password");
            }
        } catch (error) {
            setError("An error occurred during the request");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full flex h-screen justify-center items-center dark-purple-gradient bg-cover">
            <div className="w-[500px] mx-3 font-montserrat p-6 rounded-3xl bg-white bg-opacity-10 mt-[-150px]">
                <button
                    onClick={goBack}
                    className="text-start flex items-center p-2 hover:underline rounded mb-5"
                >
                    <div className="z-50 text-white">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="white"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a1 1 0 01-.707-.293l-7-7a1 1 0 010-1.414l7-7a1 1 0 011.414 1.414L4.414 9H17a1 1 0 110 2H4.414l6.293 6.293A1 1 0 0110 18z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                    <div className="text-white pl-2 hover:underline">Back</div>
                </button>
                {step === 1 && (
                    <div className="flex flex-col items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                            className="p-2 mb-4 rounded-lg w-full"
                        />
                        <button
                            onClick={handleResetRequest}
                            className="bg-purple-800 text-white px-4 py-2 rounded-lg w-full flex justify-center items-center"
                            disabled={loading}
                        >
                            {loading ? <Image src={loadingGif} alt="Loading" width={30} height={30} /> : "Reset"}
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                )}
                {step === 2 && (
                    <div className="flex flex-col items-center">
                        <p className="text-white mb-4 text-xs">We have sent you a code to change your password to the specified email, enter it in the field below</p>
                        <input
                            type="text"
                            placeholder="Enter the code from email"
                            value={code}
                            onChange={handleCodeChange}
                            className="p-2 mb-4 rounded-lg w-full"
                        />
                        <input
                            type="password"
                            placeholder="Enter your new password"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            className="p-2 mb-4 rounded-lg w-full"
                        />
                        <button
                            onClick={handleResetConfirm}
                            className="bg-purple-800 text-white px-4 py-2 rounded-lg w-full flex justify-center items-center"
                            disabled={loading}
                        >
                            {loading ? <Image src={loadingGif} alt="Loading" width={30} height={30} /> : "Submit"}
                        </button>
                        {error && <p className="text-red-500 mt-2">{error}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResetPassword;
