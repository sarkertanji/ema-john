import React from "react";

const ReviewItem = (props) => {
  const { name, price, quantity, id } = props.product;
  const { handelRemove } = props;
  return (
    <div className="product-container">
      <div className="product-detail">
        <h3>{name}</h3>
        <p>price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={() => handelRemove(id)} className="regular-btn">
          remove
        </button>
      </div>
    </div>
  );
};

export default ReviewItem;
