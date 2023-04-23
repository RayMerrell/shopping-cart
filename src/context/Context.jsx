import { React, createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, searchReducer } from "./Reducers";

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    productName: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.fashion(640, 480, true),
    inStock: faker.helpers.arrayElement([0,3,5,7,8,9]),
    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1,2,3,4,5])
  }));
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
  const [searchState, searchDispatch]= useReducer(searchReducer, {
    byStock:false,
    byFastDelivery:false,
    byRating:0,
    searchQuery:"",
  })
  return <Cart.Provider value={{ state, dispatch, searchState, searchDispatch }}>{children}</Cart.Provider>;
};
export default Context;
export const CartState = () => {
  return useContext(Cart);
};
