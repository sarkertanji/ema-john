import React from "react";

import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;

  // console.log(cart);
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  let totalBeforTax = 0;
  let tax = 0;
  let grandTotal = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
    totalBeforTax = total + shipping;
    tax = totalBeforTax * 0.02;
    grandTotal = totalBeforTax + tax;
  }
  return (
    <div className="cart-container" id="stakey">
      <div className="order-container">
        <h1>Order Summary</h1>
        <h3>Items ordered: {quantity}</h3>
      </div>
      <div className="price-container">
        <div>
          <h5>Items:</h5>
          <h5>Shipping and Handling: </h5>
          <h5>Total before tax: </h5>
          <h5>Estimated Tax: </h5>
        </div>
        <div>
          <h5>${total.toFixed(2)}</h5>
          <h5>${shipping.toFixed(2)}</h5>
          <h5>${totalBeforTax.toFixed(2)}</h5>
          <h5>${tax.toFixed(2)}</h5>
        </div>
      </div>
      <div className="price-container">
        <h2>Order Total:</h2>
        <h2> ${grandTotal.toFixed(2)}</h2>
      </div>
      {props.children}
    </div>
  );
};

export default Cart;
