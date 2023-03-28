import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

import '../assets/css/cBlock.css';

export default function CBlockTextImage({ component, image, alt, buttonDescription, reverse, hidden }) {

    return (
        <React.Fragment>
            <Container  fluid id='block-container'>
                <Row g={2}>
                    <Col g={6} md={reverse} className='block-text' >
                        <div class="d-flex justify-content-center">
                            {component}
                        </div>
                        <Button hidden={hidden}>{buttonDescription}</Button>
                    </Col>
                    <Col g={6} className="d-none d-sm-block d-flex justify-content-center block-image">
                        <img src={image} alt={alt} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}
