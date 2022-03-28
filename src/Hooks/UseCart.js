import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const UseCart = (products) => {
  const [cart, setCart] = useState([]);

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
  return [cart, setCart];
};
export default UseCart;
