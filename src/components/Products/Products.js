import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import { BiCartAlt } from "react-icons/bi";

const Products = (props) => {
  const products = [
    {
      id: 1,
      name: "Brown Brim",
      imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
      price: 25,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 2,
      name: "Blue Beanie",
      imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
      price: 18,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 3,
      name: "Brown Cowboy",
      imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
      price: 35,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 4,
      name: "Grey Brim",
      imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
      price: 25,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 5,
      name: "Green Beanie",
      imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
      price: 18,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 6,
      name: "Palm Tree Cap",
      imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
      price: 14,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 7,
      name: "Red Beanie",
      imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
      price: 18,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 8,
      name: "Wolf Cap",
      imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
      price: 14,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
    {
      id: 9,
      name: "Blue Snapback",
      imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
      price: 16,
      description: ";slkfadaa;'fadk'dfka'dfadakl'dfka",
    },
  ];
  return (
    <Container fluid>
      <Row>
        {products.map((product) => (
          <Col style={{ height: "25rem", margin: "2rem" }}>
            <Card key={product.id} style={{ width: "22rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                style={{ width: "22rem", height: "18rem" }}
              />
              <Card.Body>
                <Container>
                  <Row>
                    <Col>{product.name}</Col>
                    <Col>{product.price}</Col>
                  </Row>
                  <Row>
                    <Col>{product.description}</Col>
                  </Row>
                  <Row>
                    <Col>
                      <BiCartAlt />
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
