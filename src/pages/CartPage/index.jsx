import { useContext } from "react";

import { CartContext } from "../../context/Cart";

import CartItems from "../../components/CartItems";

import "./cartpage.scss";

export default function CartPage() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-items-wrapper">
      {cartItems.map((item) => (
        <CartItems key={item.id} cartItem={item} />
      ))}
    </div>
  );
}
