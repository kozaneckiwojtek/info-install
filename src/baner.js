import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './css/style_baner.css';
import baner from './img/Info-Install-logos_white.png';

const Baner = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Container fluid className='baner'>
        <Row>
          <Col className='logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <a id="logotop" href=""><img src={baner} alt="logo" /></a>
          </Col>
          <Col className='navi col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            <Navbar expand="lg" expanded={expanded} onToggle={handleNavToggle}>
              <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-hamburger" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link className='baner_elemen' href="#Nasza_oferta">Nasza Oferta</Nav.Link>
                  <Nav.Link className='baner_elemen' href="#Nasze_realizacje">Nasze realizacje</Nav.Link>
                  <Nav.Link className='baner_elemen' href="#O_nas">O nas</Nav.Link>
                  <Nav.Link className='baner_elemen' href="#Kontakt">Kontakt</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>

        <Row>
          <Col className='hero col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <div className='image-container'>
              <img src={baner} alt="Background" />
              <div className="content">
                <p>Rozwiązania elektryczne na miarę Twoich potrzeb</p>
                <a href="#Kontakt" id="open-button" className="cta-button">Skontaktuj się z nami</a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Baner;
