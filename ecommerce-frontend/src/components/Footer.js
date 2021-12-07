import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import styled, { css } from 'styled-components';

export const Span = styled.span`
  color: #657ed4;
  ${({ secondary }) =>
    secondary &&
    css`
      color: #ffe74c;
    `};
`;

const A = styled.a`
  display: inline-block;
  padding: 15px;
  font-size: 35px;
  color: white;
  transition: all 0.2s ease-in;

  ${({ facebook }) =>
    facebook &&
    css`
      :hover {
        color: #4267b2;
      }
    `}
  ${({ instagram }) =>
    instagram &&
    css`
      :hover {
        color: #5b51d8;
      }
    `}
    ${({ github }) =>
    github &&
    css`
      :hover {
        color: black;
      }
    `}
:hover {
    transform: scale(1.3);
  }
`;

export const Footer = () => {
  return (
    <footer>
      <Container bg='dark'>
        <Row>
          <Col className='text-center py-3'>
            WSB
            <br />
            Zaliczenie python
            <br />
            <Span>React</Span>+<Span secondary>DJANGO</Span>
          </Col>
          <Col className='text-center py-3'>
            <A target='blank' href='https://facebook.com' facebook>
              <FontAwesomeIcon icon={faFacebook} />
            </A>
            <A target='blank' href='https://instagram.com' instagram>
              <FontAwesomeIcon icon={faInstagram} />
            </A>
            <A target='blank' href='https://github.com' github>
              <FontAwesomeIcon icon={faGithub} />
            </A>
          </Col>
          <Col className='text-center py-3 '>
            Copyright &copy;
            <Span>2001</Span>
            <br />
            Adam Hałdaś && Bartosz Korytowski
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
