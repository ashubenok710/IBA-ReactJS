import React from "react";
import { Row, Container } from "react-bootstrap";
import "./App.css";

import Header from "./Header";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Container className="main-container">
        <Row>
          <Header headerText="Header"> </Header>
        </Row>
        <Row className="cardWrapper">
          <Card headerText="Caption">Text...</Card>
        </Row>
      </Container>
    </div>
  );
}

export default App;
