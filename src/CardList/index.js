import React, { Component } from "react";

import Card from "../Card/Card";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards, readOnly, onCardChange } = this.props;

    console.log("CardList props:", this.props);

    return (
      <div>
        {cards.map((card, index) => (
          <Card
            key={card.id}
            number={index}
            checked={card.checked}
            headerText={card.headerText}
            readOnly={readOnly}
            onSetCard={onCardChange}
          >
            {card.text}
          </Card>
        ))}
      </div>
    );
  }
}

export default CardList;
