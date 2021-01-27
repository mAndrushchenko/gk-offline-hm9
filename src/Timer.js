import React, {useState, useEffect} from 'react';
import './index.css';
import styled from 'styled-components'
import Numbers from "./Numbers";
import Switcher from "./Switcher";

export default function Timer () {
    const [timeZone, setTimeZone] = useState(0);
    const [timeFrame, setTimeFrame] = useState(24);

    const switchTimeZone = (zone, frame) => {
        if (zone === 'Kiev') return setTimeZone(0);
        if (zone === 'NYC') return setTimeZone(-7);
        if (zone === 'London') return setTimeZone(-2);
        if (zone === 'Tokyo') return setTimeZone(7);
        if (zone === 'Moscow') return setTimeZone(1);
        if (zone === '12|24') return setTimeFrame(frame);
        return setTimeZone(0);
    };

    const newDate = () => {
        const date = new Date();
        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() + '';
        hours = hours - 0 + timeZone;

        if (timeFrame === 12) {
            if (hours > 12) hours = hours - timeFrame;
        }

        hours < 10 ? hours = '0' + hours : hours = hours + '';

        const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() + '';
        const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() + '';
        return [
            Number(hours[0]),
            Number(hours[1]),
            Number(minutes[0]),
            Number(minutes[1]),
            Number(seconds[0]),
            Number(seconds[1]) ]
    };

    const firstTime = newDate()
    const [dozenHour, setDozenHour] = useState(firstTime[0])
    const [hour, setHour] = useState(firstTime[1])
    const [dozenMinute, setDozenMinute] = useState(firstTime[2])
    const [minute, setMinute] = useState(firstTime[3])
    const [dozenSecond, setDozenSecond] = useState(firstTime[4]);
    const [second, setSecond] = useState(firstTime[5])

    const renderTime = () => {
        const newTime = newDate()
        setDozenHour(newTime[0])
        setHour(newTime[1])
        setDozenMinute(newTime[2])
        setMinute(newTime[3])
        setDozenSecond(newTime[4])
        setSecond(newTime[5])
    }

    useEffect(renderTime, [timeZone, timeFrame])

    useEffect(()=>{
        const timer =  setInterval(renderTime, 1000);
        return ()=>{clearInterval(timer)};

    }, [dozenHour, hour,  dozenMinute, minute, dozenSecond, second])

    return (
        <div className="clock">
            <div className="wrapper-numbers">
                <div className="hours">
                    <Numbers number={dozenHour} maxNumber={2}/>
                    <Numbers number={hour} maxNumber={3}/>
                    <div className="colon-dots"><p>:</p></div>
                </div>
                <div className="minutes">
                    <Numbers number={dozenMinute} maxNumber={5}/>
                    <Numbers number={minute} maxNumber={9}/>
                    <div className="colon-dots"><p>:</p></div>
                </div>
                <div className="seconds">
                    <Numbers number={dozenSecond} maxNumber={5}/>
                    <Numbers number={second} maxNumber={9}/>
                </div>
            </div>
            <Switcher onClick={switchTimeZone}/>
        </div>
    )
};
