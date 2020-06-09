import React, { Component } from 'react';
import { Row, Container } from 'react-bootstrap';
import './App.css';

import Header from './Header'
import Card from './Card'
import NewCard from './NewCard'



function App() {

  function Checkbox() {
    const [checked, setChecked] = React.useState(true);

    return (
      <label>
        <input type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
      </label>
    );
  }


  return (
    <div className="App">

      <Container className="main-container">
        <Row>
          <Header headerText="Header" > </Header>
        </Row>
        <Row className="cardWrapper">
          <Card headerText="Caption" >Text...</Card>
        </Row>

        <Row className="cardWrapper">
          <NewCard headerText="New Caption" >New Text...</NewCard>
        </Row>
      </Container>

    </div>
  );
}

export default App;