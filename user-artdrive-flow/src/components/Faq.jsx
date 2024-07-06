"use client";

import React, { useState, useRef, useEffect } from "react";

const faqData = [
    {
        question: "HOW DOES IT WORK?",
        questionRu: "КАК ЭТО РАБОТАЕТ?",
        answer: "1. Find a contest on the tournaments page.\n2. Fill out a simple form and submit your artwork. \n3. Pay the buy-in fee. \n4. Track your progress and vote on other contestants works. \n5. Win audience acclaim and earn amazing prizes.",
        answerRu:
            "1. Найдите конкурс на странице турниров.\n2. Заполните простую форму и отправьте свои работы. \n3. Оплатите вступительный взнос. \n4. Следите за своим прогрессом и голосуйте за работы других участников. \n5. Завоевывайте признание зрителей и получайте потрясающие призы.",
    },
    {
        question: "HOW DOES THE TOURNAMENT WORK?",
        questionRu: "КАК ПРОХОДИТ ТУРНИР",
        answer: "- The tournament has at least 9 rounds, each lasting around 10 minutes.\n- Audience votes by swiping right (like) or left (pass) on 2-10 artworks per round.\n- The tournament uses a play-off system, whereby each round 50% of best contestants advance to the next stage, while the rest are eliminated until only one winner remains.",
        answerRu: '- Зрители голосуют, свайпом вправо ("нравится") или свайпом влево ("не нравится") оценивая по 10-20 работ за раунд.\n- Розыгрыш проводится по системе плей-офф. В каждом раунде 50% лучших работ проходят в следующий круг, а остальные выбывают до тех пор, пока не определится победитель.',
    },
    {
        question: "WHO CAN JOIN?",
        questionRu: "КТО МОЖЕТ УЧАСТВОВАТЬ?",
        answer: "- All creators are welcome! no specific skills or experience required. \n- Both human, AI, and hybrid artwork can participate unless otherwise specified.",
        answerRu:
            "- Приглашаются все авторы! специальных навыков или опыта не требуется. \n- В конкурсе могут участвовать как люди, так и искусственный интеллект и гибридные работы, если не указано иное.",
    },
    {
        question: "WHAT TOURNAMENT CATEGORIES ARE THERE?",
        questionRu: "КАКИЕ СУЩЕСТВУЮТ КАТЕГОРИИ ТУРНИРОВ?",
        answer: "- Each tournament has a main theme like nature, cyberpunk, anime characters, etc. \n- The theme is provided in the tournament description.",
        answerRu: "- У каждого турнира есть основная тема, например: природа, киберпанк, персонажи аниме и т.п.\n- Тема будет указана в описании турнира.",
    },
    {
        question: "HOW DOES THE VOTING WORK?",
        questionRu: "КАК ПРОХОДИТ ОЦЕНИВАНИЕ?",
        answer: "- Anyone can register as a contest judge.\n- Voting is conducted in Live during the tournament and kept anonymous to ensure fairness.",
        answerRu: "- Любой желающий может зарегистрироваться в качестве судьи и проголосовать. \n- Голосование проводится во время турнира, в режиме реального времени и анонимно для все участников.",
    },
    {
        question: "WHAT ARE THE PRIZES FOR CONTESTANTS?",
        questionRu: "КАКИЕ ПРИЗЫ ЖДУТ УЧАСТНИКОВ?",
        answer: "Distribution: \n- 85% of the prize pool is for contestants.\n- Top 10-15% of creators receive cash prizes in USDT.\nExample:\n- A tournament with 10,000 entrants and a $10 buy-in has a $100,000 prize pool.\n- Contestants prize pool: $85,000.\n- Winner typically receives $20,000-$25,000.\nPrize Categories:\n1. Main prizes: Cash prizes in USDT. \n2. Special nominations: Most liked or most shared content. \n3. Sponsored prizes: Special rewards from sponsors. \n4. Platform bonuses: Tickets for future tournaments, special deals, etc.",
        answerRu:
            "Распределение: \n- 85% призового фонда предназначено для участников.\n- 10-15% лучших создателей получают денежные призы в долларах США.Следующий пример:\n- Призовой фонд турнира с участием 10 000 участников и бай-ином в 10 долларов составляет 100 000 долларов.\n- Призовой фонд участников: $85,000.\n- Победитель обычно получает $20,000-$25,000.Категории призов: 1. Главные призы: Денежные призы в долларах США. 2. Специальные номинации: Контент, который больше всего понравился или которым больше всего поделились. 3. Спонсорские призы: Специальные награды от спонсоров. 4. Бонусы платформы: Билеты на будущие турниры, специальные предложения и т.д.",
    },
    {
        question: "WHO ARE THE JUDGES?",
        questionRu: "КТО ТАКИЕ СУДЬИ?",
        answer: "- Audience members act as judges by voting on content.\n- Anyone can register for free and participate in voting.\n- Active judges receive financial rewards, bonuses, and recognition.",
        answerRu:
            "- Зрители выступают в роли судей, голосуя за контент.\n- Любой желающий может бесплатно зарегистрироваться и принять участие в голосовании.\n- Активные судьи получают финансовое вознаграждение, бонусы и признание.",
    },
    {
        question: "WHAT ARE THE PRIZES FOR JUDGES?",
        questionRu: "КАКИЕ ПРИЗЫ ПОЛАГАЮТСЯ СУДЬЯМ?",
        answer: "Distribution:\n- 10% of the prize pool is for rewarding judges.\n- 100 total prizes evenly divided between categories.\nExample:\n- A tournament with 10,000 entrants and a $10 buy-in has a $100,000 prize pool.\n- Judges prize pool: $10,000.\nPrize Categories:\n1. Cheerleader: Most active social media promoters.\n2. Oracle: Spot future winners in the first round.\n3. Random draw: Lucky participants.",
        answerRu:
            "Распределение:\n- 10% призового фонда предназначено для награждения судей.\n - всего 100 призов равномерно распределены между категориями.Следующий пример:\n- Турнир с участием 10 000 участников и бай-ином в 10 долларов имеет призовой фонд в 100 000 долларов.\n - Призовой фонд судей: 10 000 долларов.Категории призов:1. Чирлидер: Самый активный промоутер в социальных сетях.2. Предсказатель: Определит будущих победителей в первом раунде.3. Случайный розыгрыш: Удачливые участники.",
    },
    {
        question: "HOW MUCH DOES IT COST?",
        questionRu: "СКОЛЬКО ЭТО СТОИТ?",
        answer: `- Contestants pay an entry fee, which varies by contest.\n- Judges participate for free.\n- Platform collects a 5% fee from the prize pool for operational and marketing expenses.`,
        answerRu:
            "- Участники платят вступительный взнос, который варьируется в зависимости от конкурса.\n- Судьи участвуют бесплатно.\n- Платформа взимает комиссию в размере 5% от призового фонда на операционные и маркетинговые расходы.",
    },
];

const FAQItem = ({ question, answer, questionRu, answerRu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const contentRef = useRef(null);
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight("0px");
        }
    }, [isOpen]);

    return (
        <div className="mb-4 bg-black">
            <button
                className="w-full text-left p-1 rounded-lg focus:outline-none font-dinroundbold text-xl text-[#2A2A2A] flex items-center justify-between"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-montserrat sm:text-lg text-[#CAC9CB]">
                    {language === "en" ? question : questionRu}
                </div>

                <div
                    className={`transition-transform duration-300 ease font-dinround text-[#CAC9CB] text-5xl ${
                        isOpen ? "rotate-45" : "rotate-0"
                    }`}
                >
                    +
                </div>
            </button>
            <hr />
            <div
                ref={contentRef}
                className={`overflow-hidden transition-height duration-300 ease opacity-0 ${
                    isOpen ? "opacity-100" : "opacity-0"
                }`}
                style={{
                    height: isOpen ? contentRef.current.scrollHeight : "0px",
                }}
            >
                <div
                    className="p-4 bg-black border-l-4 border-[#B326F5] font-montserrat text-[#CAC9CB]"
                    style={{ whiteSpace: "pre-line" }}
                >
                    {language === "en" ? answer : answerRu}
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [lang, setLanguage] = useState("en");

    useEffect(() => {
        const storedLanguage = localStorage.getItem("language");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        }
    }, []);
    return (
        <div className="w-full flex pb-10 flex-col items-center bg-black">
            <div className="w-[85%] sm:w-[70%] md:w-[60%] lg:w-[1000px]">
                <h2 className="text-3xl sm:text-2xl font-semibold mb-6 font-montserrat text-white">
                    {lang == "en"
                        ? "Frequently Asked Questions"
                        : "Часто Задаваемые Вопросы"}
                </h2>
                {faqData.map((item, index) => (
                    <FAQItem
                        key={index}
                        question={item.question}
                        answer={item.answer}
                        questionRu={item.questionRu}
                        answerRu={item.answerRu}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQ;
