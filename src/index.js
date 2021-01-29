import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Timer from "./components/Timer";
import bg from './css/bg.jpg'

ReactDOM.render(
  <div className="wrapper">
      <img src={bg} alt="" className='back-ground'/>
    <Timer className=""/>
  </div>,
  document.getElementById('root')
);
