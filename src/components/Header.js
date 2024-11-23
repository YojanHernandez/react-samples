// Header.js
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";

export default function Header({ setView }) {
  return (
    <Container className="rounded shadow-sm">
      <Navbar expand="lg" className="py-2 mt-3 mb-5">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="header__logo" alt="Logo" />
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link onClick={() => setView("login")}>Login</Nav.Link>
            <Nav.Link onClick={() => setView("register")}>Register</Nav.Link>
            <Nav.Link onClick={() => setView("catalog")}>Catalog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  );
}
