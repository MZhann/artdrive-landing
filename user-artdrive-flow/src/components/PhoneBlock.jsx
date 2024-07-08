import { useEffect, useState } from "react";
import Image from "next/image";
import phone from "../../public/images/screenshot.png";

const PhoneBlock = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".scroll-section");
        const scrollPosition = window.scrollY + window.innerHeight / 7;

        sections.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
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
            ? "text-gradient font-bold transition-colors duration-500 ease-in-out"
            : "text-[#4d4d4d] transition-colors duration-500 ease-in-out";
    };

    return (
        <div className="flex flex-col bg-black justify-start items-start pt-10 lg:pt-20 pb-4 mb-[-5px] px-4 sm:px-20 lg:px-[5%] lg:items-center">
            <div className="flex justify-center items-center w-full  lg:w-[90%] xl:w-[1100px]">
                <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 w-[90%]">
                    <div className="text-center md:hidden scroll-section text-4xl mb-10 text-white">
                        Convert{" "}
                        <span className="text-gradient font-bold">Likes</span>{" "}
                        into <br className="md:hidden"></br>Dollars $
                    </div>
                    <div className="md:w-[440px]">
                        <Image
                            src={phone}
                            alt="screenshot of an app"
                            width={1000}
                            height={1500}
                            className="h-[350px] md:h-[380px] lg:h-[450px] xl:h-[580px] w-auto "
                        />
                    </div>
                    <div className="flex flex-col justify-start text-[1.2rem] lg:text-2xl xl:text-3xl px-4 md:ml-10 lg:leading-relaxed xl:leading-relaxed max-w-[400px] sm:max-w-[400px] md:max-w-[550px] md:text-[1.3rem] text-center md:text-left font-bold font-montserrat tracking-tight leading-relaxed">
                        <div className="hidden md:block text-4xl md:text-2xl lg:text-3xl xl:text-4xl lg:mb-8 text-white">
                            Convert <span className="text-gradient">Likes</span>{" "}
                            into Dollars $
                        </div>
                        <div className={`scroll-section mt-10 ${textStyles(0)}`}>
                            <span className={gradientTextStyles(0)}>
                                Get noticed Fast.
                            </span>{" "}
                            Share your <br className="hidden md:block" /> content and
                            gain instant exposure.
                        </div>
                        <div className={`scroll-section ${textStyles(1)}`}>
                            Earn what you Deserve.{" "}
                            <span className={gradientTextStyles(1)}>
                                Monetize
                            </span>{" "}
                            <br className="hidden md:block" /> your art in{" "}
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
    );
};

export default PhoneBlock;
