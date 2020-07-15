import React from "react";
import { Row, Container } from "react-bootstrap";
import "./App.css";

import Header from "./Header";
import Card from "./Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.setCard = this.setCard.bind(this);
  }

  state = {
    header: "Caption",
    text: "Text...",
  };

  setCard = (header, text) => {
    this.setState({ header, text });
  };

  render() {
    const { header, text } = this.state;

    const data = [
      { id: 1, headerText: "Caption1", text: "Text1" },
      { id: 2, headerText: "Caption2", text: "Text2" },
      { id: 3, headerText: "Caption3", text: "Text3" },
      { id: 4, headerText: "Caption4", text: "Text4" },
      { id: 5, headerText: "Caption5", text: "Text5" },
      { id: 6, headerText: "Caption6", text: "Text6" },
      { id: 7, headerText: "Caption7", text: "Text7" },
    ];
    //const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

    const listItems = data.map((d) => (
      <Row className="cardWrapper">
        <Card key={d.id} headerText={d.headerText} onSetCard={this.setCard}>
          {d.text}
        </Card>
      </Row>
    ));

    return (
      <div className="App">
        <Container className="main-container">
          <Row>
            <Header headerText="Header"></Header>
          </Row>
          <Row className="cardWrapper">{listItems}</Row>
        </Container>
      </div>
    );
  }
}

export default App;
