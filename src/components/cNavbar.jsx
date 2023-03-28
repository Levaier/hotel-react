import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../assets/css/cNavbar.css';

const CNavbar = () => {

  const [navBackground, setNavBackground] = useState(false);

  const navRef = useRef();

  navRef.current = navBackground;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <Navbar expand="xl" fixed="top" style={{ transition: '1s ease', backgroundColor: navBackground ? 'rgba(246, 250, 254, 0.5)' : 'rgba(246, 250, 254,1)' }}>
      <Container fluid id="navBar-container">
        <Navbar.Brand href="#home" className="brand-title">Sea Hotel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#pacchetti">I nostri pacchetti</Nav.Link>
            <Nav.Link href="#footer">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CNavbar