import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Badge, Button } from "react-bootstrap";
import { BiCartAlt } from "react-icons/bi";

const NavBar = ({ allItems }) => {
  const location = useLocation();
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
          <Link to="/"> Latifa's Corner</Link>
        </Navbar.Brand>
        {location.pathname === "/" && (
          <Navbar.Brand style={{ float: "right" }}>
            <Link to="/cart">Go to cart</Link>
            <Button variant="link">
              <BiCartAlt />
              <Badge variant="secondary">{allItems}</Badge>
            </Button>
          </Navbar.Brand>
        )}
      </Navbar>
    </>
  );
};

export default NavBar;
