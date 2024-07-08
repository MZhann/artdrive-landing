import { useEffect, useState } from "react";
import Image from "next/image";
import phone from "../../public/images/screenshot.png";

const PhoneBlock = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".scroll-section");
        const scrollPosition = window.scrollY + window.innerHeight / 7;

        sections.forEach((section, index) => {
            const sectionTop =
                section.getBoundingClientRect().top + window.scrollY;
            const sectionHeight = section.clientHeight;
            const buffer = window.innerHeight / 4; // Add buffer to the range

            if (
                scrollPosition >= sectionTop - buffer &&
                scrollPosition < sectionTop + sectionHeight + buffer
            ) {
                setActiveIndex(index);
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const textStyles = (index) => {
        return index === activeIndex
            ? "text-white transition-colors duration-500 ease-in-out"
            : "text-[#4d4d4d] transition-colors duration-500 ease-in-out";
    };

    const gradientTextStyles = (index) => {
        return index === activeIndex
            ? "text-gradient font-semibold transition-colors duration-500 ease-in-out"
            : "text-[#4d4d4d] font-semibold transition-colors duration-500 ease-in-out";
    };

    return (
        <div className="flex flex-col bg-black justify-start items-start pt-10 pb-4 mb-[-5px] sm:px-20 lg:px-[0%] lg:items-center">
            <div className="flex justify-center items-center w-full  lg:w-[100%] xl:w-[1100px]">
                <div className="flex flex-col items-center justify-center md:flex-row w-[90%] xl:space-x-12 lg:mt-10 lg:mb-7">
                    <div>
                        <div className="text-center md:hidden font-bold font-particiana scroll-section text-4xl mb-10 text-white">
                            <span className="pr-[0.3px]">C</span>onvert{" "}
                            <span className="text-gradient">Likes</span> into{" "}
                            <br className="md:hidden"></br>
                            <span className="text-gradient">Dollars $</span>
                        </div>
                        <div className="flex justify-center md:justify-start md:w-[170px] lg:w-auto md:ml-[20px] lg:ml-[-30px]">
                            <Image
                                src={phone}
                                alt="screenshot of an app"
                                width={1000}
                                height={1500}
                                className="h-[350px]  md:h-[360px] lg:h-[450px] xl:h-[580px] w-auto "
                            />
                        </div>
                    </div>

                    <div className="flex lg:ml-[50px] flex-col justify-start  text-[1.2rem] lg:text-2xl xl:text-3xl font-semibold px-4 md:ml-10 lg:leading-relaxed xl:leading-relaxed max-w-[400px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[500px] xl:max-w-[600px] md:text-[1.3rem] text-justify md:text-left font-montserrat tracking-tight leading-relaxed">
                        <div className="hidden md:block text-4xl lg:text-nowrap font-bold font-particiana md:pt-10 lg:pt-0 md:text-[2rem] lg:text-[2.3rem] xl:text-[2.6rem] lg:mb-8 text-white">
                            Convert <span className="text-gradient">Likes</span>{" "}
                            into{" "}
                            <span className="text-gradient text-nowrap">
                                Dollars $
                            </span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div
                                className={`scroll-section mt-10 ${textStyles(
                                    0
                                )}`}
                            >
                                <span className={gradientTextStyles(0)}>
                                    Get noticed Fast.
                                </span>{" "}
                                {/* Share your <br className="hidden md:block" /> content and */}
                                Share your content and gain instant exposure.
                            </div>
                            <div className={`scroll-section ${textStyles(1)}`}>
                                Earn what you Deserve.{" "}
                                <span className={gradientTextStyles(1)}>
                                    Monetize
                                </span>{" "}
                                {/* <br className="hidden lg:block" /> your art in{" "} */}
                                your art in{" "}
                                <span className={gradientTextStyles(1)}>
                                    under 2 Hours
                                </span>
                                .
                            </div>
                            <div className={`scroll-section ${textStyles(2)}`}>
                                Stay ahead of the Game. Quickly find, test and{" "}
                                <span className={gradientTextStyles(2)}>
                                    validate your content Ideas.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneBlock;
