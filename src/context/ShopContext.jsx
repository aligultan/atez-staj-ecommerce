import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://127.0.0.1:3001/cart/list', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const items = response.data;
          let newCartItems = getDefaultCart();
          items.forEach(item => {
            newCartItems[item.product_id] = (newCartItems[item.product_id] || 0) + 1;
          });
          setCartItems(newCartItems);
        } catch (error) {
          console.error("Error fetching cart items", error);
        }
      }
    };

    fetchCart();
  }, []);

  const addToCart = async (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://127.0.0.1:3001/cart/add', { productId: itemId }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
    const token = localStorage.getItem('token');
    try {
      await axios.delete('http://127.0.0.1:3001/cart/delete', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        data: { productId: itemId }
      });
    } catch (error) {
      console.error("Error removing item from cart", error);
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
