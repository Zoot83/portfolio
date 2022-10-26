import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarRB from 'react-bootstrap/Navbar';
import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <NavbarRB bg="light" expand="lg">
      <Container>
        <NavbarRB.Brand href="/">Marshall Rizzuto</NavbarRB.Brand>
        <NavbarRB.Toggle aria-controls="basic-navbar-nav" />
        <NavbarRB.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => handlePageChange('Home')}>
              Home
            </Nav.Link>
            <Nav.Link
              href="#about-me"
              onClick={() => handlePageChange('About')}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={() => handlePageChange('Contact')}
            >
              Contact
            </Nav.Link>
          </Nav>
        </NavbarRB.Collapse>
      </Container>
    </NavbarRB>
  );
}

export default Navbar;
