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
  const getTotalCheckoutAmount = () => {
    let totalAmount = 0;
    for (const item in checkoutItems) {
      if (checkoutItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += checkoutItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };
  const addToCheckout = (itemId) => {
    setCheckoutItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCheckout = (itemId) => {
    setCheckoutItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCheckoutItemCount = (newAmount, itemId) => {
    setCheckoutItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const contextValue = {
    checkoutItems,
    addToCheckout,
    removeFromCheckout,
    updateCheckoutItemCount,
    getTotalCheckoutAmount,
  };
  return (
    <HomeContext.Provider value={contextValue}>
      {props.children}
    </HomeContext.Provider>
  );
};
