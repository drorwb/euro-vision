import React from "react";
import "../NavBar/NavBar.css";
// import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const navBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Euro 2020 Precition</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/teams">Teams</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default navBar;
