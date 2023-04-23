import React from "react";
import { Button, Card } from "react-bootstrap";
import Rating from "./Rating";
import "../css/Products.css";
import { CartState } from "../context/Context";

const ProductCard = ({ prod }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card>
        <Card.Img variant="top" src={prod.image} alt={prod.productName} />
        <Card.Body>
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span> {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast delivery</div>
            ) : (
              <div>4 Days delivery</div>
            )}
            <Rating rating={prod.rating} />
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? ( //check reducers variable for existance in the cart
            <Button
              variant="outline-danger"
              onClick={() => {
                dispatch({ type: "REMOVE_FROM_CART", payload: prod });
              }}
            >
              Remove from cart
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({ type: "ADD_TO_CART", payload: prod });
              }}
            >
              {!prod.inStock ? "Out of stock" : "Add to cart"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
