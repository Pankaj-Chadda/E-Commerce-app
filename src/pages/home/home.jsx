import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./home.css";
const Home = () => {
  return (
    <div class="home">
      <div className="home-title">
        <h1>GoBuy</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
