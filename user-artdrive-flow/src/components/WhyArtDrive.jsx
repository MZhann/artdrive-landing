import Card from "@/components/Card";
import { useState, useEffect } from "react";

const WhyArtDrive = () => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    const cardData = [
        {
            imageSrc: "/images/trophy.png",
            title: "Rise to the Top",
            text: "Showcase your best work, compete globally, and win amazing prizes",
        },
        {
            imageSrc: "/images/money.png",
            title: "Win BIG",
            text: "No cap on Prize pools. The bigger the tournament, the bigger the prize fund",
        },
    ];
    const cardData2 = [
        {
            imageSrc: "/images/rocket.png",
            title: "Explode your audience",
            text: "Supercharge your social media growth and find your true fans",
        },
        {
            imageSrc: "/images/diamond.png",
            title: "Find true art gems",
            text: "Become a contest Judge to earn rewards and uncover hidden art gems",
        },
    ];
    return (
        <div
            className={`text-[#2A2A2A] w-full sm:pb-8 flex flex-col items-center md:px-0 lg:px-[15%] bg-bg-about bg-cover overflow-hidden`}
        >
            <h1
                className={`${language == 'en' ? 'font-italiana text-5xl' : 'font-particiana text-4xl text-center'} bold   mb-20 mt-20 sm:mt-12 sm:text-5xl lg:text-5xl text-white`}
            >
                {language == 'en' ? 'Why ArtDrive' : 'Почему ArtDrive?'}
                
            </h1>
            <div className="card-list w-full flex flex-col items-center">
                <div className="flex flex-wrap lg:flex-col sm:space-x-10 lg:space-x-[160px] justify-center lg:w-[700px] lg:ml-[-120px] ">
                    {cardData.map((card, index) => (
                        <Card
                            key={index + 3}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            text={card.text}
                            lang={language}
                        />
                    ))}
                </div>
                <div className="flex flex-wrap lg:flex-col sm:space-x-10 lg:space-x-[160px] justify-center lg:w-[700px] lg:ml-[-120px]">
                    {cardData2.map((card, index) => (
                        <Card
                            key={index}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            text={card.text}
                            lang={language}

                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyArtDrive;
