import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Timer from "./Timer";
import bg from './bg.jpg'

ReactDOM.render(
  <div className="wrapper">
      <img src={bg} alt="" className='back-ground'/>
    <Timer className=""/>
  </div>,
  document.getElementById('root')
);
