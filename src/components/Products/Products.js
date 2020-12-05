import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

import { BiCartAlt } from "react-icons/bi";

const Products = ({ products }) => {
  return (
    <Container fluid>
      <Row>
        {products.map((product) => (
          <Col style={{ height: "25rem", margin: "2rem" }}>
            <Card key={product.id} style={{ width: "22rem", height: "25rem" }}>
              <Card.Img
                variant="top"
                src={product.media.source}
                style={{ width: "22rem", height: "18rem" }}
              />
              <Card.Body>
                <Container>
                  <Row>
                    <Col>{product.name}</Col>
                    <Col>{product.price.formatted_with_symbol}</Col>
                  </Row>
                  <Row>
                    <Col
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    />
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
