import React from "react";
import { useNavigate } from "react-router-dom";
import UseCart from "../../Hooks/UseCart";
import UseProducts from "../../Hooks/UseProducts";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const OrderReview = () => {
  const [products] = UseProducts();
  const [cart, setCart] = UseCart(products);
  const navigate = useNavigate();
  const handelRemove = (id) => {
    const newItem = cart.filter((product) => product.id !== id);
    setCart(newItem);
    deleteFromDb(id);
  };
  const handlePlaceOrder = () => {
    navigate("/placeOrder");
    setCart([]);
    clearTheCart();
  };
  return (
    <div className="shop-container">
      <div>
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handelRemove={handelRemove}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div className="carts-container">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="regular-btn">
            Place order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
