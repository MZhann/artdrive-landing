import React, { useEffect } from "react";

const RoundOverModal = ({ show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
            <div className="text-white">Please, wait till the next round starts</div>
        </div>
    );
};

export default RoundOverModal;
