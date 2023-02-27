import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
          <Link to="/">
            <span className="logo">Game Store</span>
          </Link>
          <ul className="nav-lists">
            <Link to="/cart">
              <li className="nav-list">
                <CartIcon className="nav-cart-icon" />
              </li>
            </Link>
            <Link to="/signin">
              <li className="nav-list">sign in</li>
            </Link>
            <Link to="/signup">
              <li className="nav-list btn-signup">sign up</li>
            </Link>
          </ul>
          <div className="hambar-menu">
            <MenuIcon className="mob-nav-menu-icon" onClick={toggleMenu} />
            <ul className={toggleNav ? "mob-nav-lists show" : "mob-nav-lists"}>
              <Link to="/cart" onClick={toggleMenu}>
                <li className="mob-nav-list">
                  <CartIcon className="nav-cart-icon" />
                </li>
              </Link>
              <Link to="/signin" onClick={toggleMenu}>
                <li className="mob-nav-list">sign in</li>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <li className="mob-nav-list btn-signup">sign up</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
