import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import Nav from 'react-bootstrap/Nav'

const Navigation = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">CarShare</Navbar.Brand>
      <Nav>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
