import { ReactComponent as DeleteIcon } from "../../assets/trash-outline.svg";

import "./cartitems.scss";

export default function CartItems({
  cartItem,
  removeItemHandler,
  incrementHandler,
  decrementHandler,
}) {
  const { id, thumbnail, title, quantity } = cartItem;
  return (
    <div className="cart-item-wrapper">
      <div className="cart-content">
        <img src={thumbnail} alt="thumbnail" className="cart-item-thumbnail" />
        <div>
          <h2 className="cart-item-title">{title}</h2>
          <div className="cart-qty">
            <div
              className="cart-qty-plus"
              onClick={() => incrementHandler({ id, title, thumbnail })}
            >
              &#43;
            </div>
            <span className="cart-item-qty">{quantity}</span>
            <div
              className="cart-qty-minus"
              onClick={() => decrementHandler({ id, title, thumbnail })}
            >
              &#8722;
            </div>
          </div>
        </div>
      </div>
      <DeleteIcon
        className="delete-icon"
        onClick={() => removeItemHandler(id)}
      />
    </div>
  );
}
