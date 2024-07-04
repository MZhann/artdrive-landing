'use client'

import { useState } from "react";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import left from "../../public/images/left.svg";
import right from "../../public/images/right.svg";

const Carousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    console.log("touched");
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getClassName = (index) => {
    const totalItems = items.length;
    if (index === activeIndex) {
      return "z-20 w-[250px]  h-[420px] sm:w-[180px] sm:h-[250px] md:w-[220px] md:h-[300px] lg:w-[280px] lg:h-[340px] xl:w-[320px] xl:h-[355px] transform translate-x-0";
    } else if (index === (activeIndex + 1) % totalItems) {
      return "z-10 w-[182px]  h-[350px] sm:w-[110px] sm:h-[200px] md:w-[160px] md:h-[250px] lg:w-[220px] lg:h-[300px] xl:w-[280px] xl:h-[305px] transform translate-x-1/2";
    } else if (index === (activeIndex - 1 + totalItems) % totalItems) {
      return "z-10 w-[182px]  h-[350px] sm:w-[110px] sm:h-[200px] md:w-[160px] md:h-[250px] lg:w-[220px] lg:h-[300px] xl:w-[280px] xl:h-[305px] transform -translate-x-1/2";
    } else {
      return "hidden";
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative flex items-center justify-center w-[95%] xl:w-full md:w-full sm:w-full h-full overflow-hidden lg:mr-[-70px]"
    >
      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute transition-all duration-500 ease-in-out sm:mt-[-120px] ${getClassName(
            index
          )}`}
          onClick={() => {
            if (index === (activeIndex + 1) % items.length) {
              handleNext();
            } else if (
              index ===
              (activeIndex - 1 + items.length) % items.length
            ) {
              handlePrev();
            }
          }}
        >
          <div className="relative w-full h-full bg-gray-300 rounded-2xl shadow-lg cursor-pointer">
            <Image
              src={item.src}
              alt={"picture"}
              priority
              width={500}
              height={1000}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-2xl object-cover object-center"
            />
            <div className="absolute inset-0 flex items-end justify-start p-4 text-2xl text-gray-800 rounded-2xl">
              <div className="w-[100px] h-[40px] font-semibold font-montserrat text-center flex flex-col pt-1 items-center bg-black text-white text-xs rounded-2xl">
                this art won
                <br />
                <span className="font-bold text-sm ">
                  {(index + 50) * 100}$
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="text-white text-3xl hidden sm:flex mt-[180px] md:mt-[230px] lg:mt-[280px] space-x-7">
        <button onClick={handlePrev}>
          <Image src={left} width={20} height={20} alt="left" />
        </button>
        <button onClick={handleNext}>
          <Image src={right} width={20} height={20} alt="right" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;

