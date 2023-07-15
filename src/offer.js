import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/style_offer.css';
import rightarrow from './img/right-arrow.png';
import location from './img/location.png';
import phone from './img/phone.png';
import email from './img/email.png';
import MapComponent from './MapComponent';

const Offer = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <>
      
      <Container id='offer_kontakt'>
      <h1 id='naglowek'>Nasza Oferta</h1>
        <Row>
          <Col className='offer col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8'>
            <h2>Montaż i pomiary instalacji elektrycznych i sieciowych</h2>
            <p>Nasza firma specjalizuje się w profesjonalnym montażu oraz dokonywaniu pomiarów instalacji elektrycznych i sieciowych. Nasi wysoko wykwalifikowani elektrycy zapewniają fachowe podejście i dbałość o każdy szczegół, aby zapewnić niezawodne i bezpieczne rozwiązania elektryczne.</p>
            <h2>Montaż i konfiguracja monitoringu</h2>
            <p>Oferujemy kompleksowe usługi montażu i konfiguracji systemów monitoringu. Nasi doświadczeni technicy zapewnią profesjonalne zainstalowanie kamer monitoringu oraz skonfigurują system tak, aby spełnił wszystkie Państwa wymagania. Umożliwi to pełną kontrolę i ochronę swojego domu lub biura.</p>
            <h2>Montaż i konfiguracja urządzeń sieciowych</h2>
            <p>Nasi eksperci zapewnią skuteczny montaż i profesjonalną konfigurację urządzeń sieciowych. Niezależnie od tego, czy potrzebujesz skonfigurować sieć w domu czy w firmie, zapewnimy Ci stabilne i bezpieczne połączenie internetowe oraz zoptymalizujemy ustawienia, aby zapewnić wysoką wydajność sieci.</p>
            <h2>Inne drobne naprawy elektryczne</h2>
            <p>Nasza firma oferuje szeroki zakres drobnych napraw elektrycznych. Bez względu na to, czy potrzebujesz wymienić gniazdko, naprawić oświetlenie czy rozwiązać inne problemy elektryczne, nasi elektrycy są gotowi służyć pomocą. Gwarantujemy skuteczne i solidne rozwiązania, aby zapewnić Ci bezpieczeństwo i wygodę w Twoim domu lub miejscu pracy.</p>
          </Col>

          <Col className='kontakt col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4'>
            <h2>Dane kontaktowe</h2>
            <p><img src={rightarrow} alt="arrow" />P.H.U. Info-Install Paweł Nawrocki</p>
            <p><img src={location} alt="location" />Adres: ul. Walecznych 19, 09-409 Płock</p>
            <p><img src={phone} alt="phone" />Kom.: +48 791 813 991</p>
            <p id="lastP"><img src={email} alt="email" />E-mail: nawrocki10@wp.pl</p>
            <div id="mapa">
            <MapComponent mapLoaded={mapLoaded} setMapLoaded={setMapLoaded} />
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Offer;
