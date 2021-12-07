import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { ContactUs } from '../components/ContactUs';

const Div = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactScreen = () => (
  <>
    <Div>
      <ContactUs />
    </Div>
  </>
);

export default ContactScreen;
