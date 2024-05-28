import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Product({ prod }) {
  return (
    <Card className="p-3 my-3 rounded">
      <Link to={`/product/${prod._id}`}>
        <Card.Img src={prod.image} alt={prod.name} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${prod._id}`}>
          <Card.Title>
            <strong>{prod.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">${prod.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
