import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const NavBar = () => (
  <Styles>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Euro-Vision</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/teams">Teams</Nav.Link>
      </Nav>
    </Navbar>
  </Styles>
);

export default NavBar;
