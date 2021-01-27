import React, {useState, useEffect} from 'react';
import './index.css';
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
                <button name="Kiev" className="btn" onClick={selectTimeZone}>Kiev</button>
                <button name="NYC" className="btn" onClick={selectTimeZone}>New York City</button>
                <button name="London" className="btn" onClick={selectTimeZone}>London</button>
                <button name="Tokyo" className="btn" onClick={selectTimeZone}>Tokyo</button>
                <button name="Moscow" className="btn" onClick={selectTimeZone}>Moscow</button>
                <button name="12|24" className="btn" onClick={switchPeriod}>Switch to {frame} hours</button>
        </div>
    )
}
