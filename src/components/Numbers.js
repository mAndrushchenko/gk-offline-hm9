import React, { useState, useEffect } from 'react'
import '../css/index.css'

const Numbers = ({ number, maxNumber }) => {
    const [box1, setBox1] = useState(number)
    const [box2, setBox2] = useState(box1)
    const [box3, setBox3] = useState(box1)
    const [box4, setBox4] = useState(box1)
    const [size, setSize] = useState(180)
    const [weather, setWeather] = useState(false)


    useEffect(() => {
        setBox2(number > 0 ? number - 1 : maxNumber)
        setSize(prev => prev - 180)
        if (weather) {
            setBox1(number)
            setBox3(number > 0 ? number - 1 : maxNumber)
            setBox4(number)
        } else {
            setBox1(number)
            setBox3(number)
            setBox4(number > 0 ? number - 1 : maxNumber)
        }
        setWeather(prev => !prev)
    }, [number, maxNumber])     // eslint-disable-line react-hooks/exhaustive-deps
                                     // adding weather to dependency makes infinity render

    return (
        <div className="number-wrapper">
            <div className="line"/>
            <div className="box box1">
                {box1}
            </div>
            <div className="box box2">
                {box2}
            </div>
            <div
                className="box box3"
                style={{
                    transform: `rotateX(${size}deg`,
                    background: !weather ? `black` : `#232323`
                }}
            >
                {box3}
            </div>
            <div
                className="box box4"
                style={{
                    transform: `rotateX(${size - 180}deg`,
                }}
            >
                {box4}
            </div>
        </div>
    )
}

export default Numbers