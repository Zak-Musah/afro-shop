import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = ({ cart }) => {
  console.log(cart);
  const EmptyCart = () => (
    <h3>
      You have no items in your shopping cart
      <Link to="/">Start adding some products</Link>
    </h3>
  );
  const FilledCart = () => (
    <>
      <Container fluid>
        <Row>
          {cart.line_items.map((product) => (
            <Col key={product.id} style={{ height: "25rem", margin: "2rem" }}>
              <Card style={{ width: "22rem", height: "25rem" }}>
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
                      <Col>
                        <Button type="small" variant="secondary">
                          -
                        </Button>
                        {product.quantity}
                        <Button type="small" variant="secondary">
                          +
                        </Button>
                      </Col>
                      <Col>
                        <Button variant="danger">Remove</Button>
                      </Col>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row>
          <Col>
            <h4>Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
          </Col>
          <Col>
            <Button variant="danger">Empty Cart</Button>
          </Col>
          <Col>
            <Button variant="primary">Checkout</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
  if (!cart.line_items) return "Loading...";
  return (
    <Container fluid>
      <div>
        <h3>Your Shopping Cart</h3>
      </div>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};
export default Cart;
