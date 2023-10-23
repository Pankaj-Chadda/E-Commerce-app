import React, { useContext } from "react";
import { HomeContext } from "../../context/home-context";
export const CheckoutItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const {
    checkoutItems,
    addToCheckout,
    removeFromCheckout,
    updateCheckoutItemCount,
  } = useContext(HomeContext);
  return (
    <div className="checkoutItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCheckout(id)}>-</button>
          <input
            value={checkoutItems[id]}
            onChange={(e) =>
              updateCheckoutItemCount(Number(e.target.value), id)
            }
          ></input>
          <button onClick={() => addToCheckout(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
