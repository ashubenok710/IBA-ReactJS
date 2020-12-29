import React, { Component } from "react";

import Card from "../Card/Card";

class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { cards, readOnly, onCardChange } = this.props;

    return (
      <div>
        {cards.map((d, index) => (
          <Card
            key={d.id}
            number={index}
            headerText={d.headerText}
            readOnly={readOnly}
            onSetCard={onCardChange}
          >
            {d.text}
          </Card>
        ))}
      </div>
    );
  }
}

export default CardList;
