import React from "react";
import './RollDice.css';
import Dice from './Dice';


function RollButton(props){

    function rollDie() {
        const rolls = ['one', 'two', 'three', 'four', 'five', 'six'];
        let index = Math.floor(Math.random()*6);
        return rolls[index];
    }

    return(
        <div className="RollDice">
            <div className='RollDice-die'>
                <Dice roll={rollDie()} />
                <Dice roll={rollDie()}/>
            </div>
            <button className="RollDice-button">Roll dice</button>
        </div>
        
    );

}

export default RollButton;