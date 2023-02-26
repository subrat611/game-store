import { useState } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

import "./navbar.scss";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  function toggleMenu() {
    setToggleNav((prev) => !prev);
  }

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="container">
          <span className="logo">Game Store</span>
          <ul className="nav-lists">
            <li className="nav-list">
              <CartIcon className="nav-cart-icon" />
            </li>
            <li className="nav-list">sign in</li>
            <li className="nav-list btn-signup">sign up</li>
          </ul>
          <div className="hambar-menu">
            <MenuIcon className="mob-nav-menu-icon" onClick={toggleMenu} />
            <ul className={toggleNav ? "mob-nav-lists show" : "mob-nav-lists"}>
              <li className="mob-nav-list">
                <CartIcon className="nav-cart-icon" />
              </li>
              <li className="mob-nav-list">sign in</li>
              <li className="mob-nav-list btn-signup">sign up</li>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
