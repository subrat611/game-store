import { useContext } from "react";

import { CartContext } from "../../context/Cart";

import CartItems from "../../components/CartItems";

import "./cartpage.scss";

export default function CartPage() {
  const { cartItems, clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  const removeItemFromCartHandler = (productId) => {
    clearItemFromCart(productId);
  };

  const incrementItemHandler = ({ id, title, thumbnail }) => {
    addItemToCart({ id, title, thumbnail });
  };

  const decrementItemHandler = ({ id, title, thumbnail }) => {
    removeItemFromCart({ id, title, thumbnail });
  };

  return (
    <div className="cart-items-wrapper">
      {cartItems.map((item) => (
        <CartItems
          key={item.id}
          cartItem={item}
          removeItemHandler={removeItemFromCartHandler}
          incrementHandler={incrementItemHandler}
          decrementHandler={decrementItemHandler}
        />
      ))}
    </div>
  );
}
