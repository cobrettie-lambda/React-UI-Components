import React from 'react';
import './Button.css';

const NumberBtn = props => {
    return (
        <button className={props.buttonStyle}>{props.number}</button>
    );
}

export default NumberBtn;