import { ReactComponent as DeleteIcon } from "../../assets/trash-outline.svg";

import "./cartitems.scss";

export default function CartItems({ cartItem }) {
  const { thumbnail, title, quantity } = cartItem;
  return (
    <div className="cart-item-wrapper">
      <div className="cart-content">
        <img src={thumbnail} alt="thumbnail" className="cart-item-thumbnail" />
        <div>
          <h2 className="cart-item-title">{title}</h2>
          <span className="cart-item-qty">{quantity}</span>
        </div>
      </div>
      <DeleteIcon className="delete-icon" />
    </div>
  );
}
