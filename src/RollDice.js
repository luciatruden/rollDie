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
    const [isRolling, setIsRolling] = useState(false);

    function rollButton() {
        setIsRolling(true);
        setDie1(rollDie());
        setDie2(rollDie());

        setTimeout(()=> setIsRolling(false), 1000);
    }
    const buttonLabel = isRolling? 'Rolling...' : 'Roll dice';

    const buttonElement = <button className='RollDice-button' onClick={ rollButton } disabled={isRolling}> { buttonLabel }</button>;
    const winMsg = <h2 className="RollDice-win">You win!</h2>;


    return(
        <div className="RollDice">
            <div className='RollDice-die'>
                <Dice roll={die1} isRolling={isRolling} />
                <Dice roll={die2} isRolling={isRolling} />
            </div>
            { die1 === die2? winMsg : buttonElement}
        </div>
        
    );

}

export default RollButton;