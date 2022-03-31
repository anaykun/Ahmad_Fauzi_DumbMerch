import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Frame from "../assets/Frame.svg";

export const NavStore = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand className="text-light" href="#home">
          <img
            src={Frame}
            alt=""
            style={{ width: "70px", height: "68.22px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/register" className="text-light">
              Complain
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="text-light">
              Profil
            </Nav.Link>
            <Nav.Link as={Link} to="/register" className="text-light">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
