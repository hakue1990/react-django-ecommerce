import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingCart,
  faUser,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' collapseOnSelect expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <span style={{ color: '#657ED4 ' }}>Phyton</span> WSB
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <LinkContainer to='/login'>
                <Nav.Link className='py-3'>
                  <FontAwesomeIcon icon={faUser} />
                  Login
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products'>
                <Nav.Link className='py-3'>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Karta
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to='/code'>
                <Nav.Link className='py-3'>
                  <FontAwesomeIcon icon={faCode} />
                  Kod cezara
                </Nav.Link>
              </LinkContainer> */}
              <LinkContainer to='/contact'>
                <Nav.Link className='py-3'>
                  <FontAwesomeIcon icon={faEnvelope} />
                  kontakt
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
