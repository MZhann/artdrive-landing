"use client";

import React, { useState, useRef, useEffect } from "react";

const faqData = [
    {
        question: "HOW DOES IT WORK?",
        answer: "1. Find a contest on the tournaments page.\n2. Fill out a simple form and submit your artwork. \n3. Pay the buy-in fee. \n4. Track your progress and vote on other contestants works. \n5. Win audience acclaim and earn amazing prizes.",
    },
    {
        question: "HOW DOES THE TOURNAMENT WORK?",
        answer: "- The tournament has at least 9 rounds, each lasting around 10 minutes.\n- Audience votes by swiping right (like) or left (pass) on 2-10 artworks per round.\n- Top 50% advance each round. the rest are eliminated until only one winner remains.",
    },
    {
        question: "WHO CAN JOIN?",
        answer: "- All creators are welcome! no specific skills or experience required. \n- Both human, AI, and hybrid artwork can participate unless otherwise specified.",
    },
    {
        question: "WHAT TOURNAMENT CATEGORIES ARE THERE?",
        answer: "- Each tournament has a main theme like nature, cyberpunk, universe, animals, or anime characters. \n- The theme is provided in the tournament description.",
    },
    {
        question: "HOW DOES THE VOTING WORK?",
        answer: "- Anyone can register as a judge and vote. \n- Voting is live and anonymous to ensure fairness.",
    },
    {
        question: "WHAT ARE THE PRIZES FOR CONTESTANTS?",
        answer: "Distribution: \n- 85% of the prize pool is for contestants.\n- Top 10-15% of creators receive cash prizes in USDT.\nExample:\n- A tournament with 10,000 entrants and a $10 buy-in has a $100,000 prize pool.\n- Contestants prize pool: $85,000.\n- Winner typically receives $20,000-$25,000.\nPrize Categories:\n1. Main prizes: Cash prizes in USDT. \n2. Special nominations: Most liked or most shared content. \n3. Sponsored prizes: Special rewards from sponsors. \n4. Platform bonuses: Tickets for future tournaments, special deals, etc.",
    },
    {
        question: "WHO ARE THE JUDGES?",
        answer: "- Audience members act as judges by voting on content.\n- Anyone can register for free and participate in voting.\n- Active judges receive financial rewards, bonuses, and recognition.",
    },
    {
        question: "WHAT ARE THE PRIZES FOR JUDGES?",
        answer: "Distribution:\n- 10% of the prize pool is for rewarding judges.\n- 100 total prizes evenly divided between categories.\nExample:\n- A tournament with 10,000 entrants and a $10 buy-in has a $100,000 prize pool.\n- Judges prize pool: $10,000.\nPrize Categories:\n1. Cheerleader: Most active social media promoters.\n2. Oracle: Spot future winners in the first round.\n3. Random draw: Lucky participants.",
    },
    {
        question: "HOW MUCH DOES IT COST?",
        answer: `- Contestants ent entry fee, which varies by contest.\n- Judges participate for free.\n- Platform collects a 5% fee from the prize pool for operational and marketing expenses.`,
    },

    // Add more questions and answers as needed
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className="mb-4">
            <button
                className="w-full text-left p-1 rounded-lg focus:outline-none font-dinroundbold text-xl text-[#2A2A2A] flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-dinroundmedium">{question}</div>
                <div
                    className={`transition-transform duration-300 ease font-dinround text-5xl ${
            isOpen ? 'rotate-45' : 'rotate-0'
          }`}
                >
                    +
                </div>
            </button>
            <hr></hr>
            <div
                ref={contentRef}
                className={`overflow-hidden transition-height duration-300 ease opacity-0 ${isOpen ? 'opacity-100' : 'opacity-0'}
                }`}
                style={{
                    height: isOpen ? contentRef.current.scrollHeight : "0px",
                }}
            >
                <div className="p-4 bg-white border-l-4 border-blue-500" style={{ whiteSpace: 'pre-line' }}>
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <div className="w-full flex flex-col items-center mb-20">
            <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[1000px]">
                <h2 className="text-3xl font-bold mb-6 font-dinroundmedium">
                    Frequently Asked Questions
                </h2>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                    />
                ))}
            </div>
            
        </div>
    );
};

export default FAQ;
