import React from "react";
import './RollDice';
import Dice from './Dice';


function RollButton(props){

    return(
        <div className="RollDice">
            <div className='App-die'>
                <Dice />
                <Dice />
            </div>
            <button className="RollDice-button">Roll dice</button>
        </div>
        
    );

}

export default RollButton;