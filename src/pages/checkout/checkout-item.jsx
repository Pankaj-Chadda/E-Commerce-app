import React from "react";

export const CheckoutItem = (props) => {
  const { id, productName, price, productImage } = props.data;

  return (
    <div className="checkoutItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};
