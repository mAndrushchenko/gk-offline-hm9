import React, { useState, useEffect, useCallback, useMemo } from 'react'
import { timeZones } from "../services/time-zones"
import { newDate } from '../services/newDate'
import Switcher from "./Switcher"
import Numbers from "./Numbers"
import '../css/index.css'

const Timer = () => {
    const { KIEV, NY, LONDON, MOSCOW, TOKYO, SWITCHER } = timeZones
    const [timeZone, setTimeZone] = useState(KIEV)
    const [timeFrame, setTimeFrame] = useState(12)

    const switchTimeZone = useCallback((zone) => {
        if (zone === KIEV) return setTimeZone(zone)
        if (zone === NY) return setTimeZone(zone)
        if (zone === LONDON) return setTimeZone(zone)
        if (zone === MOSCOW) return setTimeZone(zone)
        if (zone === TOKYO) return setTimeZone(zone)
        if (zone === SWITCHER) {
            return timeFrame === 24 ? setTimeFrame(12) : setTimeFrame(24)
        }
        return setTimeZone(KIEV)
    }, [timeFrame, KIEV, NY, LONDON, MOSCOW, TOKYO, SWITCHER])

    const firstTime = useMemo(() => newDate(timeZone, timeFrame), [timeZone, timeFrame])
    const [dozenHour, setDozenHour] = useState(firstTime[0])
    const [hour, setHour] = useState(firstTime[1])
    const [dozenMinute, setDozenMinute] = useState(firstTime[2])
    const [minute, setMinute] = useState(firstTime[3])
    const [dozenSecond, setDozenSecond] = useState(firstTime[4])
    const [second, setSecond] = useState(firstTime[5])

    const renderTime = useCallback(() => {
        const newTime = newDate(timeZone, timeFrame)
        setDozenHour(newTime[0])
        setHour(newTime[1])
        setDozenMinute(newTime[2])
        setMinute(newTime[3])
        setDozenSecond(newTime[4])
        setSecond(newTime[5])
    }, [timeZone, timeFrame])

    useEffect(renderTime, [renderTime])

    useEffect(() => {
        const timer = setInterval(renderTime, 1000)
        return () => {
            clearInterval(timer)
        }
    }, [renderTime])

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
            <Switcher onClick={switchTimeZone} timeFrame={timeFrame}/>
        </div>
    )
}

export default Timer