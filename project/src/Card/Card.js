import React from 'react';

import './Card.css';

const Card = ({ text, headerText }) =>
    <div className="card">
        <div className="card-header">{headerText}</div>
        <div>{text}</div>
    </div>

export default Card;