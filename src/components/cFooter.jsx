import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { SiFacebook, SiTwitter, SiInstagram, SiTiktok } from 'react-icons/si';

import '../assets/css/cFooter.css';

export default function CFooter() {
    return (
        <Container fluid className="footer-container" id="footer">
            <Row>
                <Col sm>
                    <h4>Contatti</h4>
                    <address>
                        <p>
                            Via d'Esempio, 2023
                            <br />
                            Bari (BA) Italia, 70123
                            <br />
                            Cell. +39 380 00 00 000
                        </p>
                    </address>
                </Col>
                <Col sm>
                    <h4>Seguici sui Social</h4>
                    <div>
                        <SiFacebook className='icon'/>
                        <SiTwitter className='icon'/>
                        <SiInstagram className='icon'/>
                        <SiTiktok className='icon'/>
                    </div>
                </Col>
                <Col sm>
                        <h4>Esercizio di Ilaria Ranieri</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                
                </Col>
            </Row>
        </Container>
    )
}
