import React, { useState, useEffect } from 'react';

function RealTimeClock() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <div>
            <h1>현재 시간</h1>
            <p>{currentTime.toLocaleTimeString()}</p>
        </div>
    );
}

export default RealTimeClock;