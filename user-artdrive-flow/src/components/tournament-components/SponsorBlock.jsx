import React from 'react';
import Link from 'next/link';

const SponsorBlock = ({ bonus_prizes }) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const breakRegex = /<br\s*\/?>/gi;

    const createTextElements = (text) => {
        // Split the text by URLs first
        const parts = text.split(urlRegex);

        return parts.map((part, index) => {
            if (urlRegex.test(part)) {
                return (
                    <Link key={index} href={part} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
                        {part}
                    </Link>
                );
            }
            return part;
        });
    };

    // Handle both newlines and <br> tags
    const prizeLines = typeof bonus_prizes === 'string' ? bonus_prizes.split(/\n|<br\s*\/?>/) : [];

    return (
        <div className="w-[90%] flex flex-col mt-5">
            <div className="flex flex-col items-center font-bold text-black h-[63px] w-[76px] bg-white rounded-tl-3xl rounded-tr-3xl ml-[1px] mb-[-40px]">HOT</div>
            <div className="flex flex-col justify-between py-5 px-5 bg-black rounded-3xl border-[1px] border-[#8D8D8D]">
                <div className="text-lg font-bold uppercase text-white">
                    {prizeLines.map((line, index) => (
                        <p key={index} className="whitespace-pre-line">
                            {createTextElements(line)}
                        </p>
                    ))}
                </div>
                <p className="text-sm text-[#F5F5F5] font-thin">sponsor gift</p>
            </div>
        </div>
    );
};

export default SponsorBlock;
