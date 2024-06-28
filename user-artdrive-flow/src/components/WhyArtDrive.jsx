import React, { useContext } from 'react';
import Card from "@/components/Card";
import { ThemeContext } from "@/context/ThemeContext";

const WhyArtDrive = () => {
    const { theme } = useContext(ThemeContext);
    const cardData = [
        {
            imageSrc: "/images/art1.png",
            title: "Become the Best Creator 🏆",
            text: "Showcase your Best content and win by competing against creators from around the world.",
        },
        {
            imageSrc: "/images/art2.png",
            title: "Win BIG 💰",
            text: "Get paid to create! The bigger the tournament, the bigger the prize fund!",
        },
        {
            imageSrc: "/images/art3.png",
            title: "Explode your audience 🚀",
            text: "Supercharge your social media growth and find your true fans!",
        },
        {
            imageSrc: "/images/art4.png",
            title: "Help us find the Best Content 🔎",
            text: "Become a Judge and help the world discover true art gems",
        },
    ];
    return (
        <div className={`text-[#2A2A2A] w-full flex flex-col items-center md:px-0 lg:px-[15%] ${theme === 'light' ? 'bg-white' : 'bg-[#2a2a2a]'}`}>
            <h1 className={`bold text-[32px] font-dinroundbold mb-6 mt-8 sm:text-3xl md:text-4xl md:mt-12 md:mb-20 ${theme === 'light' ? 'text-[#2B2B2B]' : 'text-white'} `}>
                Why ArtDrive?
            </h1>
            <div className="card-list w-full flex flex-col items-center">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        imageSrc={card.imageSrc}
                        title={card.title}
                        text={card.text}
                    />
                ))}
            </div>
        </div>
    );
};

export default WhyArtDrive;
