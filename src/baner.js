import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/style_baner.css'
import baner from './img/Info-Install-logos_white.png'

const Baner = () => {
  return (
    <>
      <Container fluid className='baner'>
        <Row>
          <Col className='logo col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <a id="logotop" href=""><img src={baner} alt="logo" /></a>
          </Col>
          <Col className='navi col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            <ul className="baner_list">
              <li className="baner_elemen"><a href="#Nasza_oferta">Nasza Oferta</a></li>
              <li className="baner_elemen"><a href="#Nasze_realizacje">Nasze realizacje</a></li>
              <li className="baner_elemen"><a href="#O_nas">O nas</a></li>
              <li className="baner_elemen"><a href="#Kontakt">Kontakt</a></li>
            </ul>
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