import React, { useCallback } from 'react'
import { timeZonesArray, citiesArray } from '../services/time-zones'
import '../css/index.css'

const Switcher = ({ onClick, timeFrame }) => {

    const switchTime = useCallback(({ target }) => {
        onClick(target.name)
    }, [onClick])

    return (
        <div className="switcher">
            {timeZonesArray.map((zone, index) => {
                return (
                    <div className="btn-wrapper" key={zone}>
                        {citiesArray[index] &&
                        <button
                            name={zone}
                            className="btn btn-select"
                            onClick={switchTime}>
                            {citiesArray[index]}
                        </button>}
                        {!citiesArray[index] &&
                        <button
                            name={zone}
                            className="btn btn-select"
                            onClick={switchTime}>
                            {timeFrame}-hour
                        </button>}
                    </div>)
            })}
        </div>
    )
}

export default Switcher