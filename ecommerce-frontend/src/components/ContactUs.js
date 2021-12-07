import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const Form = styled.form`
  height: 600px;
  width: 400px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3), 0 0 50px rgba(0, 0, 0, 0.3);
  position: relative;
  padding: 10px;
`;
const InputData = styled.div`
  height: 2rem;
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ContactInput = styled.input`
  position: absolute;
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid silver;
  width: 85%;
  bottom: 0.6rem;

  :focus ~ label {
    transform: translateY(-25px);
    font-size: 11px;
    color: #084c61;
  }
  :valid ~ label {
    transform: translateY(-25px);
    font-size: 11px;
  }
  :focus ~ div::before {
    transform: scaleX(100%);
  }
  :valid ~ div::before {
    transform: scaleX(100%);
  }
`;

const UnderLine = styled.div`
  ::before {
    content: '';
    position: absolute;
    width: 85%;
    height: 2px;
    background-color: #084c61;
    bottom: 10px;
    left: 30px;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
`;
const ContactTeaxtArea = styled.textarea`
  outline: none;
  border: none;
  background: none;
  border-bottom: 2px solid silver;
  width: 85%;
  bottom: 0.6rem;
  height: 120px;
  :focus ~ label {
    opacity: 0;
  }
  :valid ~ label {
    opacity: 0;
  }
`;

const ContactLabel = styled.label`
  position: absolute;
  left: 30px;
  bottom: 10px;
  width: 100%;
  pointer-events: none;
  transition: all 0.3s ease;
`;

const ContactTitle = styled.h4`
  text-align: center;
  padding: 2rem;
  color: #084c61;
`;

const SubmitButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  border-radius: 20px;
  border: none;
  padding: 5px 15px;
  background-color: #084c61;

  :hover {
    background-color: black;
  }
`;

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_6bc61g1',
        'template_d0d97q9',
        e.target,
        'user_NdKIjOTJG11UTuJIbID06'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <ContactTitle>Napisz do nas!</ContactTitle>
      <InputData>
        <ContactInput type='text' name='subject' required />
        <UnderLine />
        <ContactLabel for='subject'>Temat</ContactLabel>
      </InputData>
      <InputData>
        <ContactInput type='text' name='name' required />
        <UnderLine />

        <ContactLabel for='subject'>Imie</ContactLabel>
      </InputData>
      <InputData>
        <ContactInput type='text' name='email' required />
        <UnderLine />

        <ContactLabel for='subject'>Email</ContactLabel>
      </InputData>
      <InputData>
        <ContactTeaxtArea type='text' name='message' required />

        <ContactLabel for='subject'>Tekst...</ContactLabel>
      </InputData>
      <SubmitButton type='submit'>wyślij</SubmitButton>
    </Form>
  );
};
