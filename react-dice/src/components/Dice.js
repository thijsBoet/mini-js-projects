import React, {useState} from 'react';
import {
  GiDiceSixFacesOne,
  GiDiceSixFacesTwo,
  GiDiceSixFacesThree,
  GiDiceSixFacesFour,
  GiDiceSixFacesFive,
  GiDiceSixFacesSix,
} from "react-icons/gi";
import { IconContext } from "react-icons";
import './Dice.css';


export default function Dice() {
  const [count, setCount] = useState(1);
  const diceFaceArray = [
    <GiDiceSixFacesOne />,
    <GiDiceSixFacesTwo />,
    <GiDiceSixFacesThree />,
    <GiDiceSixFacesFour />,
    <GiDiceSixFacesFive />,
    <GiDiceSixFacesSix />,
  ];

  const throwDice = () => {
    setCount(Math.ceil(Math.random() * 6));
  }  

  return (
    <div>
      <IconContext.Provider value={{ className: "react-icons" }}>
        <div id="diceFace" onClick={() => throwDice()}>
          {diceFaceArray[count - 1]}
        </div>
      </IconContext.Provider>
    </div>
  );
}
