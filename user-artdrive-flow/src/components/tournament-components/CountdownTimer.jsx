import { useState, useEffect } from "react";

const CountdownTimer = ({ startDate, startTime }) => {
    const calculateTimeLeft = () => {
        const startDateTime = new Date(`${startDate}T${startTime}`);
        const difference = startDateTime - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [startDate, startTime]);

    return (
        <div className="flex flex-col font-dinround items-center text-white mt-7">
            <p className="text-lg mb-2 font-montserrat">tournament will start in:</p>
            <div className="flex text-2xl items-center space-x-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.days || '00'}</span>
                    <span className="text-xs">day{timeLeft.days !== 1 ? 's' : ''}</span>
                </div>
                <div className="h-[45px] w-[1px] bg-white"></div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.hours || '00'}</span>
                    <span className="text-xs">hour{timeLeft.hours !== 1 ? 's' : ''}</span>
                </div>
                <div className="h-[45px] w-[1px] bg-white"></div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.minutes || '00'}</span>
                    <span className="text-xs">minute{timeLeft.minutes !== 1 ? 's' : ''}</span>
                </div>
                <div className="h-[45px] w-[1px] bg-white"></div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.seconds || '00'}</span>
                    <span className="text-xs">second{timeLeft.seconds !== 1 ? 's' : ''}</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
