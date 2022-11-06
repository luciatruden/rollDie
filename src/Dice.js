import React from "react";
import './Dice.css';

function Dice(props){

    function rollDie() {
        const rolls = ['one', 'two', 'three', 'four', 'five', 'six'];
        let index = Math.floor(Math.random()*6);
        return rolls[index];
    }

    let rollClassName = `fas fa-dice-${rollDie()}`;
    
    return (
        <div className="Dice">
            <i className={rollClassName}></i>
        </div>
    );
}

export default Dice;