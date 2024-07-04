import Card from "@/components/Card";

const WhyArtDrive = () => {
    const cardData = [
        {
            imageSrc: "/images/trophy.svg",
            title: "Rise to the Top",
            text: "Showcase your best work, compete globally, and win amazing prizes!",
        },
        {
            imageSrc: "/images/money.svg",
            title: "Win BIG",
            text: "No cap on Prize pools. The bigger the tournament, the bigger the prize fund!",
        },
    ];
    const cardData2 = [
        {
            imageSrc: "/images/rocket.svg",
            title: "Explode your audience",
            text: "Supercharge your social media growth and find your true fans!",
        },
        {
            imageSrc: "/images/diamond.svg",
            title: "Find true art gems",
            text: "Become a Judge and uncover hidden art gems while earning rewards!",
        },
    ];
    return (
        <div
            className={`text-[#2A2A2A] w-full sm:pb-8 flex flex-col items-center md:px-0 lg:px-[15%] bg-bg-about bg-cover overflow-hidden`}
        >
            <h1
                className={`bold text-5xl font-italiana mb-20 mt-20 sm:mt-12 sm:text-4xl lg:text-5xl text-white`}
            >
                Why ArtDrive?
            </h1>
            <div className="card-list w-full flex flex-col items-center">
                <div className="flex flex-wrap lg:flex-col sm:space-x-10 lg:space-x-[160px] justify-center lg:w-[700px] lg:ml-[-120px] ">
                    {cardData.map((card, index) => (
                        <Card
                            key={index + 3}
                            imageSrc={card.imageSrc}
                            title={card.title}
                            text={card.text}
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
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyArtDrive;
