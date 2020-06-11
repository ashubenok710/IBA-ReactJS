import React from "react";
import { Row, Container } from "react-bootstrap";
import "./App.css";

import Header from "./Header";
import Card from "./Card";

class App extends React.Component {
  state = {
    firstCard: {
      header: "Caption",
      text: "Text...",
    },
  };

  headerChange = (e) => {
    this.setState({
      firstCard: {
        header: e.target.value,
        text: this.state.firstCard.text,
      },
    });
  };

  render() {
    const {
      firstCard: { header, text },
    } = this.state;

    return (
      <div className="App">
        <Container className="main-container">
          <Row>
            <Header headerText="Header"></Header>
          </Row>
          <Row className="cardWrapper">
            <Card headerText={header} onHeaderChange={this.headerChange}>
              {text}
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
