import React from "react";
import { CartState } from "../context/Context";
import "../css/Home.css";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

const Home = () => {
  const {
    state: { products },
    searchState: { byStock, byFastDelivery, sort, byRating, searchQuery },
  } = CartState();
  const sortProductList = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "LOW_TO_HIGH" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => prod.rating >= byRating);
    }
    if (searchQuery){
      sortedProducts = sortedProducts.filter((prod) => prod.productName.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {sortProductList().map((prod) => {
          return <ProductCard prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
