import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../assets/css/cForm.css';

export default function CForm({component}) {
  return (
    <Form>
    {component}
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Nome</Form.Label>
      <Form.Control type="text" placeholder="Nome" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="La tua email" />
      <Form.Text className="text-muted">
        La tua email non verrà mai condivisa con nessuno.
      </Form.Text>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Autorizzo l'uso dei miei dati" />
    </Form.Group>
    <Button variant="primary" type="submit" className='large'>
      Iscriviti
    </Button>
  </Form>
  )
}
