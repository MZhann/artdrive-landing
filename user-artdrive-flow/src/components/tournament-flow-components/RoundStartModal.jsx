import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const RoundStartModal = ({ show, totalRounds, currentRound, onClose }) => {
    const [lineWidth, setLineWidth] = useState(0);
    const [trianglePosition, setTrianglePosition] = useState(0);

    useEffect(() => {
        if (show) {
            const previousRound = currentRound - 1;
            setLineWidth((previousRound - 1) * 48);
            setTrianglePosition((previousRound - 1) * 96);

            const timer = setTimeout(() => {
                onClose();
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [show, currentRound, onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center text-white"
            >
                <h1 className="text-3xl mb-8">Round {currentRound}</h1>
                <div className="relative flex items-center justify-center space-x-3">
                    {[...Array(totalRounds-1).keys()].map((_, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && index < currentRound && (
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: "8px" }}
                                    transition={{ duration: 0.5, delay: index * 0.5 }}
                                    className="h-1 bg-white"
                                />
                            )}
                            <div className="relative">
                                <div
                                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                                        index + 1 <= currentRound
                                            ? "border-green-400"
                                            : "border-white"
                                    }`}
                                >
                                    {index + 1}
                                </div>
                                {index + 1 === currentRound && (
                                    <motion.div
                                        initial={{ top: "-10px" }}
                                        animate={{ top: "-20px" }}
                                        transition={{ duration: 0.5, delay: index * 0.5 }}
                                        className="absolute left-1/2 transform -translate-x-1/2 text-2xl"
                                    >
                                        ▼
                                    </motion.div>
                                )}
                            </div>
                        </React.Fragment>
                    ))}
                </div>
                <motion.div
                    className="absolute text-2xl"
                    initial={{ left: `${48 * (currentRound - 1)}px` }}
                    animate={{ left: `${trianglePosition}px` }}
                    transition={{ duration: 0.5 }}
                    style={{ top: "-20px" }}
                >
                    ▼
                </motion.div>
            </motion.div>
        </div>
    );
};

export default RoundStartModal;
