import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../home/product";
import { HomeContext } from "../../context/home-context";
import { CheckoutItem } from "./checkout-item";
import "./checkout.css";
const Checkout = () => {
  const { checkoutItems } = useContext(HomeContext);
  return (
    <div className="checkout">
      <div>
        <h1>Your Checkout Items</h1>
      </div>
      <div className="checkoutItems">
        {PRODUCTS.map((product) => {
          if (checkoutItems[product.id] !== 0) {
            return <CheckoutItem data={product} />;
          }
        })}
      </div>
    </div>
  );
};

export default Checkout;
