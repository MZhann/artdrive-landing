import { useEffect, useState } from "react";
import Image from "next/image";
import phone from "../../public/images/screenshot.png";

const PhoneBlock = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const sections = document.querySelectorAll(".scroll-section");
        const scrollPosition = window.scrollY + window.innerHeight / 1.85;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionTop + sectionHeight
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
        <div className="flex flex-col bg-black items-start pt-10 lg:pt-20 pb-4 mb-[-5px] px-4 sm:px-20 lg:px-[5%] lg:items-center">
            <div className="flex justify-center w-full lg:w-[90%] xl:w-[1100px]">
                <div className="flex flex-col items-center justify-center md:flex-row md:space-x-10 w-[90%]">
                    <div className="text-center md:hidden scroll-section text-4xl mb-10 text-white">
                        {/* <div className={`scroll-section mb-5 ${textStyles(0)}`}> */}
                        Convert{" "}
                        <span className="text-gradient font-bold">Likes</span>{" "}
                        into <br className="md:hidden"></br>Dollars $
                        {/* Convert <span className={gradientTextStyles(0)}>Likes</span> into Dollars $ */}
                    </div>
                    <div className="md:w-[440px]">
                        <Image
                            src={phone}
                            width={300}
                            height={600}
                            alt="screenshot of an app"
                            className="xl:h-[580px] h-[450px] md:h-[380px] lg:h-[450px] w-auto"
                        />
                       
                    </div>
                    <div className="flex flex-col justify-center text-[1.2rem] lg:text-2xl xl:text-3xl leading-relaxed lg:leading-relaxed xl:leading-relaxed max-w-[400px] sm:max-w-[400px] md:max-w-[550px] md:text-[1.3rem] text-center md:text-left mt-10 font-bold font-montserrat  tracking-tight leading-relaxed">
                        <div className="hidden md:block scroll-section text-4xl md:text-2xl lg:text-3xl xl:text-4xl  mb-5 text-white">
                            {/* <div className={`scroll-section mb-5 ${textStyles(0)}`}> */}
                            Convert <span className="text-gradient">Likes</span>{" "}
                            into Dollars $
                            {/* Convert <span className={gradientTextStyles(0)}>Likes</span> into Dollars $ */}
                        </div>
                        <div className={`scroll-section ${textStyles(1)}`}>
                            <span className={gradientTextStyles(1)}>
                                Get noticed Fast.
                            </span>{" "}
                            Share your <br className="hidden" /> content and
                            gain instant exposure.
                        </div>
                        <div className={`scroll-section ${textStyles(2)}`}>
                            Earn what you Deserve.{" "}
                            <span className={gradientTextStyles(2)}>
                                Monetize
                            </span>{" "}
                            <br className="hidden" /> your art in{" "}
                            <span className={gradientTextStyles(2)}>
                                under 2 Hours
                            </span>
                            .
                        </div>
                        <div className={`scroll-section ${textStyles(3)}`}>
                            Stay ahead of the Game. Quickly find,{" "}
                            <br className="hidden" /> test and{" "}
                            <span className={gradientTextStyles(3)}>
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
