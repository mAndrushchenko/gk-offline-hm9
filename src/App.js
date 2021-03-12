import React from 'react'
import Timer from "./components/Timer"
import bg from './css/bg.jpg'
import './css/index.css'

const App = () => {
    return (
        <div className="wrapper">
            <img src={bg} alt="" className='back-ground'/>
            <Timer className=""/>
        </div>
    )
}

export default App