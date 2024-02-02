import React, { useState, useEffect } from 'react'
import style from './counter.module.css';

const Clock_counter = () => {
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

    const handleIncrease = (unit) => {
        setTime((prevTime) => {
            const increment = unit === 'hours' ? 3600000 : unit === 'minutes' ? 60000 : 1000;
            return prevTime + increment;
        });
    };

    const handleDecrease = (unit) => {
        setTime((prevTime) => {
            const decrement = unit === 'hours' ? 3600000 : unit === 'minutes' ? 60000 : 1000;
            return Math.max(prevTime - decrement, 0);
        });
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

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <section className={style.clock_counter}>
            <div className={`${style.m_clock} px-5 text-center`}>
                <h1 className='text-light'>Manuall Clock Counter</h1>
                <p className='fs-3 text-light'>{formatTime(time)}</p>
                <div>
                    <button className={`${style.b_left} btn btn-secondary btn-lg`} onClick={() => handleIncrease('hours')}>Increase Hours</button>
                    <button className={`${style.b_right} btn btn-secondary btn-lg`} onClick={() => handleDecrease('hours')}>Decrease Hours</button>
                </div>
                <div>
                    <button className={`${style.b_left} btn btn-secondary btn-lg`} onClick={() => handleIncrease('minutes')}>Increase Minutes</button>
                    <button className={`${style.b_right} btn btn-secondary btn-lg`} onClick={() => handleDecrease('minutes')}>Decrease Minutes</button>
                </div>
                <div>
                    <button className={`${style.b_left} btn btn-secondary btn-lg`} onClick={() => handleIncrease('seconds')}>Increase Seconds</button>
                    <button className={`${style.b_right} btn btn-secondary btn-lg`} onClick={() => handleDecrease('seconds')}>Decrease Seconds</button>
                </div>
                <div>
                    <button className='btn btn-secondary btn-lg w-100' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </section>
    );
};

export default Clock_counter
