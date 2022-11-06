import React, { useState } from "react";
import './RollDice.css';
import Dice from './Dice';


function RollButton(props){

    function rollDie() {
        const rolls = ['one', 'two', 'three', 'four', 'five', 'six'];
        let index = Math.floor(Math.random()*6);
        return rolls[index];
    }

    const [die1, setDie1] = useState(rollDie());
    const [die2, setDie2] = useState(rollDie());

    
    return(
        <div className="RollDice">
            <div className='RollDice-die'>
                <Dice roll={die1} />
                <Dice roll={die2}/>
            </div>
            <button className="RollDice-button">Roll dice</button>
        </div>
        
    );

}

export default RollButton;