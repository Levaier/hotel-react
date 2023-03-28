import { Col, Container, Row } from 'react-bootstrap';
import '../assets/css/cCardsGroup.css';
import CCard from './cCard';

import CTitleSeparator from './cTitleSeparator';

export default function CCardsGroup({component}) {

  const card_01 = require('../assets/images/card_01.jpg');
  const card_02 = require('../assets/images/card_02.jpg');
  const card_03 = require('../assets/images/card_03.jpg');


  return (
    <Container fluid className='cgroupcards-container' id="pacchetti">
      {component}
      <Row>
        <Col lg>
          <CCard 
            cardName={"La meraviglia dell'Oceano"} 
            cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
            cardImg={card_01}
            buttonLink={"Leggi"}
          />
        </Col>
        <Col lg>
        <CCard 
            cardName={"Il piacere del Relax"} 
            cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
            cardImg={card_02}
            buttonLink={"Leggi"}
          />
        </Col>
        <Col lg>
        <CCard 
            cardName={"Viaggio attraverso i sapori"} 
            cardText={"Lorem ipsum, dolor sit amet consectetur adipisicing elit."}
            cardImg={card_03}
            buttonLink={"Leggi"}
          />
        </Col>
      </Row>
    </Container>
  );
}