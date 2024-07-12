import { useState } from "react";

const ModalJudgeRegistration = ({ show, onClose, onSubmit }) => {
    const [cryptoWallet, setCryptoWallet] = useState("");
    const [socialMedia, setSocialMedia] = useState("");
    const [isCheater, setIsCheater] = useState(false);
    const [isJudge, setIsJudge] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            crypto_wallet: cryptoWallet,
            social_media: socialMedia,
            is_cheater: isCheater,
            is_judge: isJudge,
        };
        onSubmit(formData);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black text-white bg-opacity-80 backdrop-blur-md flex justify-center items-center font-montserrat z-50 overflow-y-auto">
            <div className="p-6 rounded-lg w-[90%] md:w-[600px] shadow-lg max-h-full overflow-y-auto">
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white text-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="white"
                            className="w-6 h-6"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.525 12l4.714 4.715a.75.75 0 11-1.06 1.06L12 14.475l-4.715 4.714a.75.75 0 11-1.06-1.06L10.475 12 5.76 7.285a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <h2 className="text-2xl mb-4 text-center font-bold">
                    Register Form
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-5">
                        <label className="block mb-2 pl-1">
                            Your USDT wallet address (trc 20)
                            <span className="text-red-500 text-xl pl-1 pt-2 font-bold">
                                *
                            </span>
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 h-[45px] border bg-white bg-opacity-5 border-[#a9a8a9] rounded-2xl"
                            value={cryptoWallet}
                            onChange={(e) => setCryptoWallet(e.target.value)}
                            required
                        />
                        <p className="text-[#a9a8a9] text-xs mt-2 pl-1 mb-5">
                            this address will be used for reward payments
                        </p>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 pl-1">
                            Link to your social media
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 h-[45px] border bg-white bg-opacity-5 border-[#a9a8a9] rounded-2xl"
                            value={socialMedia}
                            onChange={(e) => setSocialMedia(e.target.value)}
                        />
                    </div>
                    <div className="mt-8 space-y-5 mb-8">
                        <div className="mb-4">
                            <label className="flex items-center space-x-2 w-full">
                                <input
                                    type="checkbox"
                                    checked={isJudge}
                                    onChange={() => setIsJudge(!isJudge)}
                                    className="w-[24px] h-[24px] text-white bg-gray-300 rounded focus:ring-0 border-gray-300 checked:bg-white checked:border-transparent"
                                />
                                <span className="text-white font-thin max-w-[290px]">
                                    I hereby swear to be an important judge in
                                    pursuit of true beauty
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center space-x-2 w-full">
                                <input
                                    type="checkbox"
                                    checked={isCheater}
                                    onChange={() => setIsCheater(!isCheater)}
                                    className="w-6 h-6 text-white bg-gray-300 rounded focus:ring-0 border-gray-300 checked:bg-white checked:border-transparent"
                                />
                                <span className="text-white font-thin">
                                    I am not a cheater
                                </span>
                            </label>
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    required
                                    className="w-6 h-6 text-white bg-gray-300 rounded focus:ring-0 border-gray-300 checked:bg-white checked:border-transparent"
                                />
                                <span className="underline font-normal text-blue-500">
                                    Terms And Conditions
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center mb-20">
                        <button
                            type="submit"
                            className="purple-gradient text-white py-3 rounded-xl px-6"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalJudgeRegistration;
