import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import products from "../components/Items";
import Product from "../components/Product";
const Home = () => {
  return (
    <Container>
      <Row className="my-5">
        {products.map((prod) => (
          <Col key={prod._id} sm={12} md={6} lg={4}>
            <Product prod={prod} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
