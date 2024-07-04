import Image from "next/image";

const Card = ({ imageSrc, title, text }) => {
    return (
        <div
      className={`relative flex flex-col border-[0.5px] mb-10 border-gray-500 w-[85%] sm:w-[35%] lg:w-[100%] lg:h-[130px] lg:justify-center lg:bg-[#212022] sm:h-[232px] md:h-[252px]  justify-start items-center px-6 lg:px-0 text-[#2A2A2A] rounded-3xl ${
        imageSrc=='/images/rocket.svg' ? "" : ""
      }` }
    >
            <Image
                src={imageSrc}
                height={222}
                width={242}
                alt="Why ArtDrive"
                className={
                    imageSrc == "/images/rocket.svg"
                        ? `absolute right-[-90px] top-[-20px] w-[190px] scale-x-[-1] sm:scale-x-[1] sm:w-[150px] sm:left-[-50px] sm:top-[-30px] lg:scale-x-[-1] lg:w-[180px] lg:left-[510px]  lg:top-[-50px]`
                        : imageSrc == "/images/diamond.svg"
                        ? `absolute right-[-100px] top-30 rotate-45 w-[180px] sm:w-[120px] sm:left-[-50px] sm:rotate-0 sm:bottom-0 lg:rotate-45 lg:left-3 lg:top-[-25px]`
                        : imageSrc == "/images/money.svg"
                        ? `absolute right-[-90px] w-[180px] top-[-20px] sm:w-[130px] sm:right-[-50px] sm:top-[-50px] lg:left-0 lg:top-[-30px] lg:w-[150px]`
                        : imageSrc == "/images/trophy.svg"
                        ? `absolute right-[-100px] top-[-50px] w-[200px] sm:w-[150px] sm:right-[-50px] sm:top-[-50px] lg:w-[180px] lg:right-[0px] lg:top-[-60px]`
                        : `absolute right-[-100px]`
                }
            />

            <div
                className={imageSrc==`/images/diamond.svg`?`text-pretty lg:w-[100%] flex flex-col sm:text-right sm:items-end lg:pr-8 pt-4 pb-4 lg:pb-0 lg:pt-0`
                    : imageSrc==`/images/rocket.svg` ?`text-pretty flex lg:w-[100%] flex-col sm:text-right sm:items-end lg:items-start lg:text-left pt-4 lg:pt-0 pb-2 lg:pb-0 lg:pl-8`
                    : imageSrc==`/images/money.svg` ? `text-pretty lg:w-[100%] flex flex-col lg:items-end lg:text-right pt-4 lg:pt-0 lg:pr-8 pb-2 lg:pb-0`
                    :`text-pretty flex flex-col justify-start lg:w-[100%] pt-4 lg:pt-0 pb-5 lg:pb-0 lg:pl-8`}
            >
                <h2
                    className={`font-montserrat text-2xl lg:text-3xl sm:text-2xl mb-4 font-semibold  why-text-gradient w-[85%] leading-8 `}
                >
                    {title}
                </h2>
                <p
                    className={`text-xl md:text-xl lg:text-[20px] font-montserrat sm:text-base text-[#CAC9CB] text-pretty w-[85%] lg:w-[75%] `}
                >
                    {text}
                </p>
            </div>
        </div>
    );
};

export default Card;
