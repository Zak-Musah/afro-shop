import React from "react";

import { Navbar, Badge, Button } from "react-bootstrap";
import { BiCartAlt } from "react-icons/bi";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Netina Corner
        </Navbar.Brand>
        <Navbar.Brand style={{ float: "right" }}>
          <Button variant="primary">
            <BiCartAlt />
            <Badge variant="secondary">9</Badge>
          </Button>
        </Navbar.Brand>
      </Navbar>
    </>
  );
};

export default NavBar;
