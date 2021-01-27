import React, {useState, useEffect} from 'react';
import './index.css';
import styled from 'styled-components';

 export default function Numbers ({number, maxNumber}) {
     const [box1, setBox1] = useState(number);
     const [box2, setBox2] = useState(box1);
     const [box3, setBox3] = useState(box1);
     const [box4, setBox4] = useState(box1);
     const [size, setSize] = useState(180);
     const [weather, setWeather] = useState(false);

     useEffect(() => {
         setBox2(number > 0 ? number-1 : maxNumber)
         setSize(prev => prev - 180)

         if (weather) {
             setBox1(number)
             setBox3(number > 0 ? number-1 : maxNumber)
             setBox4(number)
             setWeather(prev => !prev)
         }
         if (!weather) {
             setBox1(number)
             setBox3(number)
             setBox4(number > 0 ? number-1 : maxNumber)
             setWeather(prev => !prev)
         }
     }, [number, maxNumber])


    return (
            <Wrapper>
                <div className="line"/>
                <Box1>
                    {box1}
                </Box1>
                <Box2>
                    {box2}
                </Box2>

                <Box3 deg={size} weather={weather}>
                    {box3}
                </Box3>
                <Box4  deg={size}>
                    {box4}
                </Box4>
            </Wrapper>
    )
}

const Wrapper = styled.div`
  transform-style: preserve-3d;`

const Box1 = styled.div.attrs(props => ({
    style: {
        visibility: props.visibility ? 'hidden' : 'visible',
    },
}))`
  z-index: 2;
  position: absolute;
  text-align: center;
  width: 100px;
  height: 70px;
  font-size: 120px;
  overflow: hidden;
  color: white;
  background-color: #232323;
  border-radius: 10px 10px 0 0;
  margin: 1px;

`


const Box2 = styled.div`
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 140px;
  font-size: 120px;
  text-align: center;
  color: white;
  background-color: #232323;
  border-radius: 10px;
  border: #949494 1px solid;
  box-shadow: 1px 1px 2px 3px rgba(0,0,0,1);

`

const Box3 = styled.div.attrs(props => ({
    style: {
        transform: `rotateX(${props.deg}deg`,
        background: !props.weather ? `black`:`#232323`
    },
}))`
  position: absolute;
  z-index: 4;
  width: 100px;
  height: 140px;
  font-size: 120px;
  text-align: center;
  transition: .7s;
  backface-visibility: hidden;
  color: white;
  border-radius: 10px;
  border: #949494 1px solid;

`
const Box4 = styled.div.attrs(props => ({
    style: {
        transform: `rotateX(${props.deg-180}deg`,
    },
}))`
  z-index: 3;
  position: absolute; 
  width: 100px;
  height: 140px;
  font-size: 120px;
  text-align: center;
  transition: .7s;
  backface-visibility: visible;
  color: white;
  background-color: #232323;
  border-radius: 10px;
  border: #949494 1px solid;

`

