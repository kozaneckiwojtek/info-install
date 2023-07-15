import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/style_form.css'

const Form = () => {
    return (
      <>
        <Container className='form'>
          <Row>
            <Col className='col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <h2>Kontakt</h2>
  
              <form id="form" name="kontakt" action="/kontakt" method="post" acceptCharset="UTF-8">
                  <input type="hidden" name="form-name" value="contact" />
                  
                  <input type="text" placeholder="Imię i nazwisko" name="imie_i_nazwisko" required/>
                  <input type="email" placeholder="Adres e-mail" name="email" required/>
                  <textarea placeholder="Wiadomość" name="wiadomosc" required></textarea>
                  <button type="submit" id="sub_button" class="bnt_sub">Wyślij</button>
              </form>
  
            </Col>
          </Row>
        </Container>      
      </>
    );
  }
  
  export default Form;