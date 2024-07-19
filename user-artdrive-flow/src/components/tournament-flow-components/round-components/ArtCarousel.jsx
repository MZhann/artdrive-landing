// import React, { useState } from 'react';
// import Image from 'next/image';
// import expand from '../../../../public/images/image-buttons/expand.png'
// import profile from '../../../../public/images/image-buttons/profile.svg'
// import share from '../../../../public/images/image-buttons/share.svg'
// import star from '../../../../public/images/image-buttons/star.svg'
// import like from '../../../../public/images/image-buttons/like.svg'
// import x from '../../../../public/images/image-buttons/x.svg'

// const ArtCarousel = ({ images, onLike }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
//                 <Image
//                     src={images[currentIndex].src}
//                     alt={images[currentIndex].alt}
//                     width={600}
//                     height={800}
//                     className="rounded-lg w-[390px] object-cover h-[500px]"
//                 />
//                 <div className="absolute top-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={expand} alt='expand' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={share} alt='share' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={star} alt='star' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={profile} alt='profile' />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex justify-between space-x-16 mt-10'>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={x} alt='I dont like' />
//                 </button>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={like} alt='I like' />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ArtCarousel;

// import React, { useState } from 'react';
// import Image from 'next/image';
// import expand from '../../../../public/images/image-buttons/expand.png';
// import profile from '../../../../public/images/image-buttons/profile.svg';
// import share from '../../../../public/images/image-buttons/share.svg';
// import star from '../../../../public/images/image-buttons/star.svg';
// import like from '../../../../public/images/image-buttons/like.svg';
// import x from '../../../../public/images/image-buttons/x.svg';

// const ArtCarousel = ({ images, onLike }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
//                 {images[currentIndex] && (
//                     <Image
//                         src={images[currentIndex].src}
//                         alt={images[currentIndex].alt}
//                         width={600}
//                         height={800}
//                         className="rounded-lg w-[390px] object-cover h-[500px]"
//                     />
//                 )}
//                 <div className="absolute top-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={expand} alt='expand' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={share} alt='share' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={star} alt='star' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={profile} alt='profile' />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex justify-between space-x-16 mt-10'>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={x} alt='I dont like' />
//                 </button>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={like} alt='I like' />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ArtCarousel;

// import React, { useState } from 'react';
// import Image from 'next/image';
// import expand from '../../../../public/images/image-buttons/expand.png'
// import profile from '../../../../public/images/image-buttons/profile.svg'
// import share from '../../../../public/images/image-buttons/share.svg'
// import star from '../../../../public/images/image-buttons/star.svg'
// import like from '../../../../public/images/image-buttons/like.svg'
// import x from '../../../../public/images/image-buttons/x.svg'

// const ArtCarousel = ({ images, onLike, onDislike }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
//                 <Image
//                     src={images[currentIndex].src}
//                     alt={images[currentIndex].alt}
//                     width={600}
//                     height={800}
//                     className="rounded-lg w-[390px] object-cover h-[500px]"
//                 />
//                 <div className="absolute top-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={expand} alt='expand' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={share} alt='share' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={star} alt='star' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={profile} alt='profile' />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex justify-between space-x-16 mt-10'>
//                 <button onClick={() => { onDislike(); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={x} alt='I dont like' />
//                 </button>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={like} alt='I like' />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ArtCarousel;




// import React, { useState } from 'react';
// import Image from 'next/image';
// import expand from '../../../../public/images/image-buttons/expand.png';
// import profile from '../../../../public/images/image-buttons/profile.svg';
// import share from '../../../../public/images/image-buttons/share.svg';
// import star from '../../../../public/images/image-buttons/star.svg';
// import like from '../../../../public/images/image-buttons/like.svg';
// import x from '../../../../public/images/image-buttons/x.svg';

// const ArtCarousel = ({ images, onLike, onDislike }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
//                 <Image
//                     src={images[currentIndex].src}
//                     alt={images[currentIndex].alt}
//                     width={600}
//                     height={800}
//                     className="rounded-lg w-[390px] object-cover h-[500px]"
//                 />
//                 <div className="absolute top-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={expand} alt='expand' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={share} alt='share'/>
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={star} alt='star' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={profile} alt='profile' />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex justify-between space-x-16 mt-10'>
//                 <button onClick={() => { onDislike(); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={x} alt='I dont like' />
//                 </button>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={like} alt='I like' />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ArtCarousel;



// import React, { useState } from 'react';
// import Image from 'next/image';
// import expand from '../../../../public/images/image-buttons/expand.png';
// import profile from '../../../../public/images/image-buttons/profile.svg';
// import share from '../../../../public/images/image-buttons/share.svg';
// import star from '../../../../public/images/image-buttons/star.svg';
// import like from '../../../../public/images/image-buttons/like.svg';
// import x from '../../../../public/images/image-buttons/x.svg';

// const ArtCarousel = ({ images, onLike, onDislike }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     return (
//         <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
//             <div className="relative">
//                 <Image
//                     src={images[currentIndex].src}
//                     alt={images[currentIndex].alt}
//                     width={600}
//                     height={800}
//                     className="rounded-lg w-[390px] object-cover h-[500px]"
//                 />
//                 <div className="absolute top-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={expand} alt='expand' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={share} alt='share'/>
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={star} alt='star' />
//                     </button>
//                 </div>
//                 <div className="absolute bottom-3 right-3">
//                     <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
//                         <Image src={profile} alt='profile' />
//                     </button>
//                 </div>
//             </div>

//             <div className='flex justify-between space-x-16 mt-10'>
//                 <button onClick={() => { onDislike(); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={x} alt='I dont like' />
//                 </button>
//                 <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
//                     <Image src={like} alt='I like' />
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default ArtCarousel;



import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import expand from '../../../../public/images/image-buttons/expand.png';
import profile from '../../../../public/images/image-buttons/profile.svg';
import share from '../../../../public/images/image-buttons/share.svg';
import star from '../../../../public/images/image-buttons/star.svg';
import like from '../../../../public/images/image-buttons/like.svg';
import x from '../../../../public/images/image-buttons/x.svg';
import RoundStartModal from '../RoundStartModal'; // Ensure the correct import path

const ArtCarousel = ({ images, onLike, onDislike, totalRounds, currentRound, onNextRound }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showRoundModal, setShowRoundModal] = useState(false);

    const handleNext = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
            setShowRoundModal(true);
        }
    };

    // useEffect(() => {
    //     if (showRoundModal) {
    //         const timer = setTimeout(() => {
    //             setShowRoundModal(false);
    //             onNextRound();
    //         }, 4000);

    //         return () => clearTimeout(timer);
    //     }
    // }, [showRoundModal, onNextRound]);

    return (
        <div className="relative w-full flex flex-col items-center max-w-xl mx-auto">
            <div className="relative">
                <Image
                    src={images[currentIndex].src}
                    alt={images[currentIndex].alt}
                    width={600}
                    height={800}
                    className="rounded-lg w-[390px] object-cover h-[500px]"
                />
                <div className="absolute top-3 right-3">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-between border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={expand} alt='expand' />
                    </button>
                </div>
                <div className="absolute bottom-3 left-3">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={share} alt='share'/>
                    </button>
                </div>
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={star} alt='star' />
                    </button>
                </div>
                <div className="absolute bottom-3 right-3">
                    <button className="p-2 bg-gray-800 border-[1px] h-[35px] w-[35px] flex items-center justify-center border-gray-400 bg-opacity-50 rounded-full">
                        <Image src={profile} alt='profile' />
                    </button>
                </div>
            </div>

            <div className='flex justify-between space-x-16 mt-10'>
                <button onClick={() => { onDislike(); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
                    <Image src={x} alt='I dont like' />
                </button>
                <button onClick={() => { onLike(images[currentIndex].id); handleNext(); }} className='w-[65px] h-[60px] flex items-center justify-center bg-white bg-opacity-10 rounded-3xl border-[1px] border-gray-500'>
                    <Image src={like} alt='I like' />
                </button>
            </div>

            {showRoundModal && (
                <RoundStartModal
                    show={showRoundModal}
                    totalRounds={totalRounds}
                    currentRound={currentRound}
                    onClose={() => setShowRoundModal(false)}
                />
            )}
        </div>
    );
};

export default ArtCarousel;
