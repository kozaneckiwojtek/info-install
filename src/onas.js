import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/style_onas.css'


const Onas = () => {
  return (
    <>
      <Container className='onas'>
        <Row>
          <Col className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
          <div class="container">
            {/* <p id="pointer-aboutUs"></p> */}
            <h2 id='odnosnik_onas'>O nas</h2>
            <p>Od ponad 13 lat jesteśmy wodzącą firmą w naszym regionie, świadcząc usługi elektryczne najwyższej jakości. Nasze doświadczenie, profesjonalizm i zadowolenie klientów stanowią fundamenty naszego sukcesu. Specjalizujemy się w szerokim zakresie usług, obejmujących instalacje elektryczne, modernizacje, naprawy i konserwacje. Działamy zarówno na rynku prywatnym, jak i komercyjnym, zapewniając kompleksowe rozwiązania dostosowane do indywidualnych potrzeb naszych klientów. Nasza kadra składa się z wykwalifikowanych i doświadczonych elektryków, którzy są przygotowani do radzenia sobie z najbardziej wymagającymi projektami. Nasze usługi charakteryzuje nie tylko najwyższa jakość wykonania, ale także dbałość o terminowość i pełne zadowolenie klientów. Nasz priorytet to zapewnienie bezpiecznego i niezawodnego środowiska elektrycznego dla naszych klientów.</p>
                
            <p>Jesteśmy dumni z naszego długotrwałego sukcesu i rozwoju, które zawdzięczamy naszej lojalnej bazie klientów. Dziękujemy za zaufanie, które nam udzieliliście i jesteśmy gotowi kontynuować naszą misję dostarczania wysokiej jakości usług elektrycznych.</p>
                
            <p><b>Zapraszamy do skorzystania z naszych usług i dołączenia do grona zadowolonych klientów. Skontaktuj się z nami, aby omówić swoje potrzeby i otrzymać indywidualne rozwiązanie, które sprosta Twoim oczekiwaniom.</b></p>
        </div>
          </Col>
        </Row>
      </Container>


      
    </>
  );
}

export default Onas;