import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import "../css/ShoppingCart.css";
import Rating from "./Rating";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home ">
      <div className="productContainer">
        <ListGroup>
          {cart.map((prod) => (
            <ListGroup.Item key={prod.id}>
              <Row>
                <Col md={2}>
                  <Image
                    src={prod.image}
                    alt={prod.productName}
                    fluid
                    rounded
                  />
                </Col>
                <Col md={2}>
                  <span>{prod.productName}</span>
                </Col>
                <Col md={2}>
                  <span>£{prod.price}</span>
                </Col>
                <Col md={2}>
                  <Rating rating={prod.rating} onClick={()=>null}/>
                </Col>
                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[...Array(prod.inStock)].map((n, i) => (
                      <option key={i + 1}>{i + 1}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  >
                    <AiFillDelete fontSize="20px" />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
        <span className="title">Subtotal for {cart.length} item{cart.length>1?"s":""}</span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: £{total}</span>
        <Link to="/Checkout">
          <Button type="button" disabled={cart.length === 0}>
            Proceed to checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
