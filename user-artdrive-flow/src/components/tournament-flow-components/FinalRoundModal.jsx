import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import finalRound from "../../../public/images/image-buttons/finalRound.png";

const FinalRoundModal = ({ show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 4000); // Close modal after 4 seconds
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center text-white"
            >
                <Image
                    src={finalRound}
                    alt="finalRound"
                    width={700}
                    height={400}
                    className="w-[250px] h-auto"
                />
            </motion.div>
        </div>
    );
};

export default FinalRoundModal;
