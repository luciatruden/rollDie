import React from "react";
import './RollDice.css';
import Dice from './Dice';


function RollButton(props){

    return(
        <div className="RollDice">
            <div className='RollDice-die'>
                <Dice />
                <Dice />
            </div>
            <button className="RollDice-button">Roll dice</button>
        </div>
        
    );

}

export default RollButton;