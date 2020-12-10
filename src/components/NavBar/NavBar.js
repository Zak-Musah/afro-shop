import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Badge, Button } from "react-bootstrap";
import { BiCartAlt } from "react-icons/bi";
import afrofashion from "../images/afrofashion.png";
const NavBar = ({ allItems }) => {
  const location = useLocation();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={afrofashion}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          <Link to="/"> Netina Corner</Link>
        </Navbar.Brand>
        {location.pathname === "/" && (
          <Navbar.Brand style={{ float: "right" }}>
            <Link to="/cart">Cart</Link>
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
