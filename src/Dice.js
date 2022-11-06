import React from "react";
import './Dice.css';

function Dice(props){

    const { roll, isRolling } = props;

    let rollClassName = `fas fa-dice-${roll}`;
    
    console.log(isRolling? "Dice-Rolling":"Dice");

    return (
            <i className={`Dice ${rollClassName} ${isRolling? "Dice-shaking":""}`}></i>
    );
}

export default Dice;