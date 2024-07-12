import { useState, useEffect } from "react";

const CountdownTimer = ({ startDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(startDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
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
    }, [startDate]);

    return (
        <div className="flex flex-col font-dinround items-center text-white mt-7">
            <p className="text-lg mb-2 font-montserrat">register until:</p>
            <div className="flex text-2xl items-center space-x-4">
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.hours || '00'}</span>
                    <span className="text-xs">hour</span>
                </div>
                <div className="h-[45px] w-[1px] bg-white"></div>
                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.minutes || '00'}</span>
                    <span className="text-xs">min</span>
                </div>
                <div className="h-[45px] w-[1px] bg-white"></div>

                <div className="flex flex-col items-center">
                    <span className="text-3xl">{timeLeft.seconds || '00'}</span>
                    <span className="text-xs">sec</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
