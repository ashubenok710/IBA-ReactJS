import React from 'react';
import './Card.css';

const Card = (props) =>
    <div className="card">
        <div className="card-header">{props.headerText}</div>
        <div>{props.children}</div>
    </div>

export default Card;