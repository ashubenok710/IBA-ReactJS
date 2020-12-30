import React from "react";
import { Row, Container } from "react-bootstrap";
import "./App.css";
import StatelessCheckbox from "./StatelessCheckbox";

import Header from "./Header";
import Card from "./Card";

import CardList from "./CardList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setReadOnly = this.setReadOnly.bind(this);
    this.setCard = this.setCard.bind(this);
  }

  state = {
    readOnly: false,
    cards: [
      { id: 1, headerText: "Caption_1", text: "Text1", checked: false },
      { id: 2, headerText: "Caption_2", text: "Text2", checked: false },
      { id: 3, headerText: "Caption_3", text: "Text3", checked: false },
      { id: 4, headerText: "Caption_4", text: "Text4", checked: false },
      { id: 5, headerText: "Caption_5", text: "Text5", checked: false },
      { id: 6, headerText: "Caption_6", text: "Text6", checked: false },
      { id: 7, headerText: "Caption_7", text: "Text7", checked: false },
    ],
  };

  setReadOnly() {
    this.setState({
      readOnly: !this.state.readOnly,
    });
  }

  setCard = (index, header, text, checked) => {
    let tmp = this.state.cards;
    tmp[index].headerText = header;
    tmp[index].text = text;
    tmp[index].checked = checked;
    this.setState({ cards: tmp });
  };

  render() {
    const { readOnly, cards } = this.state;

    return (
      <div className="App">
        <Container className="main-container">
          <Row>
            <Header headerText="Header"></Header>
          </Row>
          <Row className="checkBoxWrapper">
            <StatelessCheckbox
              label="Read Only"
              checked={readOnly}
              onChange={this.setReadOnly}
            />
          </Row>

          <Row className="cardWrapper">
            <CardList
              readOnly={readOnly}
              onCardChange={this.setCard}
              cards={cards}
            />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
