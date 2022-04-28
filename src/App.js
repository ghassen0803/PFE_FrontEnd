import React from 'react';
import './App.css';
import Formation from './components/card';
import Details from './components/details';
import Menu from './components/menu';
import { Container, Row, Col } from 'react-grid-system';
function App() {
  const PersDetail = Details.map(item => <Formation Persprop={item}></Formation>)
  return (

 <div>
  <Menu></Menu>

<Container fluid>
  <Row debug>
    <Col  >
    {PersDetail[0]}
    </Col>
    <Col >
    {PersDetail[1]}
    </Col>
    </Row></Container>
    <Container fluid>
    <Row debug>
    <Col >
    {PersDetail[2]}
    </Col>
    <Col >{PersDetail[3]}</Col>
  </Row>
</Container>
 </div>

  );
}

export default App;
