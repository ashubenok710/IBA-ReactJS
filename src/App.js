import React from "react";
import { Row, Container } from "react-bootstrap";
import "./App.css";

import Header from "./Header";
import Card from "./Card";

class App extends React.Component {
  state = {
    header: "Caption",
    text: "Text...",
  };

  setCard = (header, text) => {
    this.setState({ header, text });
  };

  render() {
    const { header, text } = this.state;

    return (
      <div className="App">
        <Container className="main-container">
          <Row>
            <Header headerText="Header"></Header>
          </Row>
          <Row className="cardWrapper">
            <Card headerText={header} onSetCard={this.setCard}>
              {text}
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
