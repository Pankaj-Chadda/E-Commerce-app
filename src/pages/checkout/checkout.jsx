import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../home/product";
import { HomeContext } from "../../context/home-context";
import { CheckoutItem } from "./checkout-item";
import { useNavigate } from "react-router-dom";
import "./checkout.css";
const Checkout = () => {
  const { checkoutItems, getTotalCheckoutAmount } = useContext(HomeContext);
  const totalAmount = getTotalCheckoutAmount();
  const navigate = useNavigate();
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
      {totalAmount > 0 ? (
        <div className="checkoutAmount">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>
      ) : (
        <h1>Your Checkout is Empty</h1>
      )}
    </div>
  );
};

export default Checkout;
