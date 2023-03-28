import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import '../assets/css/cCard.css';

export default function CCard({cardName, cardImg, cardText, buttonLink}) {
    return (
        <Card>
            <Card.Img variant="top" src={cardImg} />
            <Card.Body>
                <Card.Title>{cardName}</Card.Title>
                <Card.Text>
                    {cardText}
                </Card.Text>
                <Button variant="primary">{buttonLink}</Button>
            </Card.Body>
        </Card>
    )
}
