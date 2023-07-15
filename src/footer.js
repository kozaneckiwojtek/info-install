import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/style_footer.css';
import fot from './img/footer.png';

const Footer = () => {
  return (
    // <footer className="footer">
    //   <Container fluid className='f'>
    //     <Row>
    //     <Col className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
    //         <div className="footer-logo">
    //           <img src={fot} alt="footer" />
    //         </div>
    //         <p>&copy; 2023 Info-Install. Wszelkie prawa zastrzeżone.</p>
    //       </Col>
            
    //     </Row>
    //   </Container>

      
    // </footer>
<footer>
            <div class="footer-logo">
                <img src={fot} alt="footer"/>
                </div>
            <p>&copy; 2023 Info-Install. Wszelkie prawa zastrzeżone.</p>
    </footer>
    
  );
};

export default Footer;
