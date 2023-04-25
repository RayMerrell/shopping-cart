import React from "react";

import {
  Badge,
  Button,
  Container,
  Dropdown,
  FormControl,
  Nav,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../context/Context";
import ("../css/Header.css");

const Header = () => {
  const {
    state: { cart },
    dispatch, searchState, searchDispatch
  } = CartState();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
      <Container>
      <Navbar.Brand>
          <Link to="/home">Home page</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          <Link to="/cart">Shopping Cart</Link>
        </Navbar.Brand>
        <Navbar.Text className="search">
          <FormControl
            style={{ width: 500 }}
            placeholder={searchState.searchQuery}
            className="m-auto"
            onChange={(e)=>{
              searchDispatch({
                type:"FILTER_BY_SEARCH",
                payload:e.target.value
              })
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown align="end">
            <Dropdown.Toggle variant="success">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="inherit">{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 10 }}>
              {console.log("cart products", cart)}
              {cart.length > 0 ? (
                <>
                  {cart.map((product) => (
                    <span className="cartItem" key={product.id}>
                      <img
                        src={product.image}
                        className="cartItemImage"
                        alt={product.productName}
                      />
                      <div className="cartItemDetail">
                        <span>{product.productName}</span>
                        <span>£{product.price.split(".")[0]}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                      />
                    </span>
                  ))}
                  <Link to="/cart">
                    <Button style={{width:"95%", margin:"0 10px"}}>
                      Go to cart
                    </Button>
                  </Link>
                </>
              ) : (
                <span style={{ padding: 10 }}>Cart is empty</span>
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
