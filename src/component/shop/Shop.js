import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../product/Product";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchIteam, setSearchIteam] = useState([]);
  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSearchIteam(data);
      });
  }, []);
  useEffect(() => {
    if (products.length) {
      const savedCard = getStoredCart();
      const stordCard = [];
      for (const key in savedCard) {
        const addedProduct = products.find((product) => product.id === key);
        if (addedProduct) {
          const quantity = savedCard[key];
          addedProduct.quantity = quantity;
          stordCard.push(addedProduct);
        }
      }
      setCart(stordCard);
    }
  }, [products]);
  const handleAddToCart = (product) => {
    const exists = cart.find((pd) => pd.id === product.id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  // // search box
  const handleChange = (event) => {
    const SearchIteamValue = event.target.value;
    const matchedProduct = products.filter((product) =>
      product.name.toLowerCase().includes(SearchIteamValue.toLowerCase())
    );
    setSearchIteam(matchedProduct);
  };
  return (
    <div>
      <div className="search-container">
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search your Iteam"
        />
      </div>
      <div className="shop-container" id="full-container">
        <div className="products-container">
          {searchIteam.map((product) => (
            <Product
              handleAddToCart={handleAddToCart}
              key={product.id}
              product={product}
            ></Product>
          ))}
        </div>
        <div className="carts-container">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="regular-btn">Review your order</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
