import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartitems contains productToAdd
  const existingCartItem = cartItems.find(
    (item) => item.id === productToAdd.id
  );

  // if found, increase quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modified cartItems/new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find if cartitems contains productToAdd
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cart items with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, productId) => {
  // find if product is exits
  // if exits then remove the product
  return cartItems.filter((item) => item.id !== productId);
};

export const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (productId) => {
    setCartItems(clearCartItem(cartItems, productId));
  };

  const value = { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
