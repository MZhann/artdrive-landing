import Image from "next/image";

const Card = ({ imageSrc, title, text, lang }) => {
    const translations = {
        "Rise to the Top":
            "Продемонстрируй свои лучшие работы, соревнуйся и выигрывай потрясающие призы!",
        "Win BIG":
            "Призовые фонды не ограничены. Чем крупнее турнир, тем больше призовой фонд!",
        "Explode your audience":
            "Увеличь рост в социальных сетях и найди своих настоящих поклонников!",
        "Find true art gems":
            "Стань судьей и раскрой скрытые сокровища искусства, зарабатывая при этом награды!",
    };

    const translatedTitle =
        lang === "en"
            ? title
            : title === "Rise to the Top"
            ? "Поднимись на Вершину"
            : title === "Win BIG"
            ? "Выигрывай По-Крупному"
            : title == "Explode your audience"
            ? "Взорви свою аудиторию"
            : title == "Find true art gems"
            ? "Находи жемчужины искусства"
            : title;

    const translatedText = lang === "en" ? text : translations[title] || title;

    return (
        <div
            className={`relative flex flex-col border-[0.5px] mb-10 border-gray-500 w-[85%] sm:w-[35%] lg:w-[100%] lg:h-[130px] lg:justify-center lg:bg-[#212022]   justify-start items-center px-6 lg:px-0 text-[#2A2A2A] rounded-3xl ${
                lang == "en" ? "sm:h-[232px] md:h-[252px]" : "sm:h-[290px] md:h-[320px]"
            }`}
        >
            <Image
                src={imageSrc}
                height={222}
                width={202}
                alt="Why ArtDrive"
                className={
                    imageSrc == "/images/rocket.png"
                        ? `absolute right-[-60px] top-[-20px] w-[180px] scale-x-[-1] sm:scale-x-[-1] sm:w-[150px] sm:left-[-50px] sm:top-[-30px] lg:scale-x-[1] lg:w-[180px] lg:left-[510px]  lg:top-[-50px]`
                        : imageSrc == "/images/diamond.png"
                        ? `absolute right-[-100px] top-30 w-[180px] sm:w-[120px] sm:left-[-50px] sm:bottom-0 lg:scale-x-[-1] lg:left-3 lg:top-[-25px]`
                        : imageSrc == "/images/money.png"
                        ? `absolute right-[-90px] w-[180px] top-[-20px] sm:w-[130px] sm:right-[-50px] sm:top-[-50px] lg:left-0 lg:top-[-30px] lg:w-[150px]`
                        : imageSrc == "/images/trophy.png"
                        ? `absolute right-[-100px] top-[-50px] w-[200px] sm:w-[150px] sm:right-[-50px] sm:top-[-50px] lg:w-[180px] lg:right-[0px] lg:top-[-60px]`
                        : `absolute right-[-100px]`
                }
            />

            <div
                className={
                    imageSrc == `/images/diamond.png`
                        ? `text-pretty lg:w-[100%] flex flex-col sm:text-right sm:items-end lg:pr-8 pt-4 pb-4 lg:pb-0 lg:pt-0`
                        : imageSrc == `/images/rocket.png`
                        ? `text-pretty flex lg:w-[100%] flex-col sm:text-right sm:items-end lg:items-start lg:text-left pt-4 lg:pt-0 pb-2 lg:pb-0 lg:pl-8`
                        : imageSrc == `/images/money.png`
                        ? `text-pretty lg:w-[100%] flex flex-col lg:items-end lg:text-right pt-4 lg:pt-0 lg:pr-8 pb-2 lg:pb-0`
                        : `text-pretty flex flex-col justify-start lg:w-[100%] pt-4 lg:pt-0 pb-5 lg:pb-0 lg:pl-8`
                }
            >
                <h2
                    className={`font-montserrat text-2xl lg:text-3xl sm:text-2xl mb-4 font-semibold  why-text-gradient w-[85%] leading-8 `}
                >
                    {translatedTitle}
                </h2>
                <p
                    className={`text-xl md:text-xl lg:text-[20px] font-montserrat sm:text-base text-[#CAC9CB] text-pretty w-[85%] lg:w-[75%] `}
                >
                    {translatedText}
                </p>
            </div>
        </div>
    );
};

export default Card;
