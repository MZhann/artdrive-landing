// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Lottie from "lottie-react";
// import finalRound from "../../../public/images/image-buttons/finalRound.png";
// import fireworksAnimation from "../../../public/fireworks.json";

// const FinalRoundModal = ({ show, onClose }) => {
//     useEffect(() => {
//         if (show) {
//             const timer = setTimeout(onClose, 4000);
//             return () => clearTimeout(timer);
//         }
//     }, [show, onClose]);

//     if (!show) return null;

//     return (
//         <div className="fixed w-full inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
//             <motion.div
//                 initial={{ scale: 0.5, opacity: 0, y: 200 }}
//                 animate={{ scale: 1, opacity: 1, y: 0 }}
//                 exit={{ scale: 0.5, opacity: 0, y: 200 }}
//                 transition={{ duration: 0.5 }}
//                 className="text-center text-white relative w-full flex justify-center"
//             >
//                 <Image
//                     src={finalRound}
//                     alt="finalRound"
//                     width={700}
//                     height={400}
//                     className="w-[250px] h-auto"
//                 />
//                 <div className="absolute inset-0 flex justify-center items-center">
//                     <Lottie
//                         animationData={fireworksAnimation}
//                         className="w-[450px] h-[450px]"
//                     />
//                 </div>
//             </motion.div>
//         </div>
//     );
// };

// export default FinalRoundModal;

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import finalRound from "../../../public/images/image-buttons/finalRound.png";
import fireworksAnimation from "../../../public/fireworks.json"; // Ensure correct path

// Dynamically import Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const FinalRoundModal = ({ show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 4000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) return null;

    return (
        <div className="fixed w-full inset-0 bg-black bg-opacity-80 backdrop-blur-md flex justify-center items-center z-50">
            <motion.div
                initial={{ scale: 0.5, opacity: 0, y: 200 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.5, opacity: 0, y: 200 }}
                transition={{ duration: 0.5 }}
                className="text-center text-white relative w-full flex justify-center"
            >
                <Image
                    src={finalRound}
                    alt="finalRound"
                    width={700}
                    height={400}
                    className="w-[250px] h-auto"
                />
                <div className="absolute inset-0 flex justify-center items-center">
                    <Lottie
                        animationData={fireworksAnimation}
                        className="w-[450px] h-[450px]"
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default FinalRoundModal;
