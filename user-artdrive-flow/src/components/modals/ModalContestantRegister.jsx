import { useState } from "react";
import Image from "next/image";
import uploadIcon from "../../../public/images/upload.svg";
import loadingGif from "../../../public/loading.gif"; // Add your loading gif here

const ModalContestantRegister = ({ show, onClose, onSubmit }) => {
    const [workDescription, setWorkDescription] = useState("");
    const [cryptoWallet, setCryptoWallet] = useState("");
    const [aiContribution, setAiContribution] = useState(0);
    const [artType, setArtType] = useState("human");
    const [socialMedia, setSocialMedia] = useState("");
    const [isCheater, setIsCheater] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [errors, setErrors] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        setIsLoading(true);
        e.preventDefault();

        let validationErrors = {};
        if (!isCheater) {
            validationErrors.isCheater =
                "You must confirm you are not a cheater.";
        }
        if (!selectedFile) {
            validationErrors.file = "You must upload a file.";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);
        formData.append("description", workDescription);
        formData.append("crypto_wallet", 'awdasdawdasdawda');
        formData.append("paid_entry", true);
        onSubmit(formData);
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black text-white bg-opacity-80 backdrop-blur-md flex justify-center items-center font-montserrat z-50 overflow-y-auto custom-scroll">
            <div className="p-6 rounded-lg w-[90%] md:w-[600px] shadow-lg max-h-full overflow-y-visible">
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={onClose}
                        className="text-white mt-8 mb-[-30px] text-2xl"
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
                <div></div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                        <label className="block mb-2 pl-1">
                            Submit your work{" "}
                            <span className="text-red-600 font-bold text-lg">
                                *
                            </span>
                        </label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            required
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center bg-white bg-opacity-5 justify-between border border-[#a9a8a9] rounded-2xl p-2 pt-2 pl-3 pb-2">
                            <span>
                                {selectedFile
                                    ? selectedFile.name
                                    : "No file chosen"}
                            </span>
                            <Image
                                src={uploadIcon}
                                alt="Upload"
                                width={24}
                                height={24}
                            />
                        </div>
                        {errors.file && (
                            <p className="text-red-500 text-sm">
                                {errors.file}
                            </p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 pl-1">
                            Describe your work
                        </label>
                        <textarea
                            className="w-full p-2 border bg-white bg-opacity-5 border-[#a9a8a9] rounded-2xl"
                            value={workDescription}
                            onChange={(e) => setWorkDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <div className="flex flex-col space-y-5">
                            <label className="flex items-center space-x-2 custom-radio">
                                <input
                                    type="radio"
                                    value="human"
                                    checked={artType === "human"}
                                    onChange={(e) => setArtType(e.target.value)}
                                    className="hidden"
                                />
                                <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center relative">
                                    <span className="w-3 h-3 rounded-full bg-white hidden"></span>
                                </span>
                                <span className="text-white font-thin">
                                    ART made by human
                                </span>
                            </label>
                            <label className="flex items-center space-x-2 custom-radio">
                                <input
                                    type="radio"
                                    value="ai"
                                    checked={artType === "ai"}
                                    onChange={(e) => setArtType(e.target.value)}
                                    className="hidden"
                                />
                                <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center relative">
                                    <span className="w-3 h-3 rounded-full bg-white hidden"></span>
                                </span>
                                <span className="text-white font-thin">
                                    ART made by AI
                                </span>
                            </label>
                            <label className="flex items-center space-x-2 custom-radio">
                                <input
                                    type="radio"
                                    value="human_ai"
                                    checked={artType === "human_ai"}
                                    onChange={(e) => setArtType(e.target.value)}
                                    className="hidden"
                                />
                                <span className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center relative">
                                    <span className="w-3 h-3 rounded-full bg-white hidden"></span>
                                </span>
                                <span className="text-white w-full font-thin">
                                    Human/AI<br></br>{" "}
                                    {/* <span className="text-xs">
                                        (specify % how much AI contributed)
                                    </span> */}
                                </span>
                            </label>
                        </div>
                    </div>
                    {/* <div className="mb-4 mt-5">
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
                    </div> */}

                    <div className="mt-8 space-y-5 mb-8">
                        <div className="mb-4">
                            <label className="flex items-center space-x-2">
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
                            {errors.isCheater && (
                                <p className="text-red-500 text-sm">
                                    {errors.isCheater}
                                </p>
                            )}
                        </div>
                        <div className="mb-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    required
                                    className="w-6 h-6 text-white bg-gray-300 rounded focus:ring-0 border-gray-300 checked:bg-white checked:border-transparent"
                                />
                                <span className="underline text-blue-500">
                                    Terms And Conditions
                                </span>
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-center mb-20">
                        <button
                            type="submit"
                            className="purple-gradient text-white py-3 rounded-xl px-6 mb-20 "
                        >
                            {isLoading ? (
                                <div className="w-[250px] flex justify-center items-center">
                                    <Image
                                        src={loadingGif}
                                        alt="loading gif"
                                        width={30}
                                        height={10}
                                    />
                                </div>
                            ) : (
                                <div>Submit and pay a buy-in</div>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalContestantRegister;
