import { createContext, useState, useReducer } from "react";

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
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const CART_ACTION_TYPE = {};

const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartProvider = ({ children }) => {
  // const [cartItems, setCartItems] = useState([]);
  const [{ cartItems }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItemReducer = (newCartItems) => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    dispatch({
      type: "SET_CART_ITEMS",
      payload: { cartItems: newCartItems, cartCount: newCartCount },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFromCart = (productId) => {
    const newCartItems = clearCartItem(cartItems, productId);
    updateCartItemReducer(newCartItems);
  };

  const value = {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
