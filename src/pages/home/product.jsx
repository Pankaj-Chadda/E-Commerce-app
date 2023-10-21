import React, { useContext } from "react";
import { HomeContext } from "../../context/home-context";
export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCheckout, checkoutItems } = useContext(HomeContext);
  const checkoutItemAmount = checkoutItems[id];
  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>
          <p>${price}</p>
        </p>
      </div>
      <button className="addToCheckout" onClick={() => addToCheckout(id)}>
        Add to Checkout{checkoutItemAmount > 0 && <>({checkoutItemAmount})</>}
      </button>
    </div>
  );
};
