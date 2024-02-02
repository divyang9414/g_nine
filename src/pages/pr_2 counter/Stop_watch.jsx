import React, { useState, useEffect } from 'react'
import style from './counter.module.css';

const Stop_watch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleToggle = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };

    const formatTime = (milliseconds) => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const hours = Math.floor(totalSeconds / 3600) % 12;
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const remainingMilliseconds = milliseconds % 1000;

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(remainingMilliseconds).padStart(3, '0')}`;
    };

    return (
        <section className={style.stopwatch}>
            <div className={`${style.m_clock} px-5 text-center`}>
                <h1 className='text-light'>Stopwatch</h1>
                <p className='fs-3 text-light'>{formatTime(time)}</p>
                <button className={`${style.b_left} btn btn-secondary btn-lg`} onClick={handleToggle}>{isRunning ? 'Stop' : 'Start'}</button>
                <button className={`${style.b_right} btn btn-secondary btn-lg`} onClick={handleReset}>Reset</button>
            </div>
        </section>
    );
};

export default Stop_watch
