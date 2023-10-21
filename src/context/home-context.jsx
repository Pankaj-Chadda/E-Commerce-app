import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";
export const HomeContext = createContext(null);
const getDefaultCheckout = () => {
  let checkout = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    checkout[i] = 0;
  }
  return checkout;
};
export const HomeContextProvider = (props) => {
  const [checkoutItems, setCheckoutItems] = useState(getDefaultCheckout());
  const addToCheckout = (itemId) => {
    setCheckoutItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCheckout = (itemId) => {
    setCheckoutItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { checkoutItems, addToCheckout, removeFromCheckout };
  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
