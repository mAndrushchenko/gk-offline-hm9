import React, {useState, useEffect} from 'react';
import '../css/index.css';
import styled from 'styled-components'


export default function Switcher({onClick}) {
    const [frame, setFrame] = useState(24)
    const selectTimeZone = ({target}) => {
        onClick(target.name)
    }

    const switchPeriod = ({target}) => {
        onClick(target.name, frame);
        frame === 12 ? setFrame(24) : setFrame(12);
    }
    return (
        <div className="switcher">
            <div className="btn-wrapper">
                <button name="Kiev" className="btn btn-select" onClick={selectTimeZone}>Kiev</button>
            </div>
            <div className="btn-wrapper">
                <button name="NYC" className="btn btn-select" onClick={selectTimeZone}>New York City</button>
            </div>
            <div className="btn-wrapper">
                <button name="London" className="btn btn-select" onClick={selectTimeZone}>London</button>
            </div>

            <div className="btn-wrapper">
                <button name="Tokyo" className="btn btn-select" onClick={selectTimeZone}>Tokyo</button>
            </div>
            <div className="btn-wrapper">
                <button name="Moscow" className="btn btn-select" onClick={selectTimeZone}>Moscow</button>
            </div>
            <div className="btn-wrapper">
                <button name="12|24" className="btn switch-timezone" onClick={switchPeriod}>Switch to {frame}</button>
            </div>
        </div>
    )
}
