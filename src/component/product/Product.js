import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  const { name, price, seller, img, stock, ratings } = props.product;
  const element = <FontAwesomeIcon icon={faShoppingCart} />;

  return (
    <div className="product-container">
      <div className="image-container">
        <img src={img} alt="" />
      </div>
      <div className="product-detail">
        <h3>{name}</h3>
        <p>price: ${price}</p>
        <p> by: {seller}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <Rating
          readonly
          initialRating={ratings}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
        />
        <br />
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="regular-btn"
        >
          {element}Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
