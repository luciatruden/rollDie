import React from "react";
import './Dice.css';

function Dice(props){

    const { roll } = props;

    let rollClassName = `fas fa-dice-${roll}`;
    
    return (
        <div className="Dice">
            <i className={rollClassName}></i>
        </div>
    );
}

export default Dice;