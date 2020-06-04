import React from 'react';

import './Card.css';

const Card = ({ text, headerText }) =>
    <div className="card">
        <div className="card-header">Caption</div>
        <div>{text}</div>
    </div>

export default Card;