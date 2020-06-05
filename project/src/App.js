import React from 'react';
import Container from 'react-bootstrap/Container'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';


import './App.css';
import Header from './Header/Header'
import Card from './Card/Card'

function App() {
  return (
    <div className="App">

      <Container className="main-container">
        <Row>
          <Header headerText="Header" />
        </Row>
        <Row>
          <Card headerText="Caption" text="Text..." />
        </Row>
      </Container>

    </div>
  );
}

export default App;
