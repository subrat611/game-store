import { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../context/User";

import { signOutUser } from "../../utils/firebase/firebase";

import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu-icon.svg";

import "./navbar.scss";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  const { currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    // setCurrentUser(null); no longer need because of observer
  };

  function toggleMenu() {
    setToggleNav((prev) => !prev);
  }

  return (
    <div>
      <div className="navbar-wrapper">
        <div className="container">
          <Link to="/" onClick={() => (toggleNav ? toggleMenu() : null)}>
            <span className="logo">Game Store</span>
          </Link>
          <ul className="nav-lists">
            <Link to="/cart">
              <li className="nav-list">
                <CartIcon className="nav-cart-icon" />
              </li>
            </Link>
            {currentUser && (
              <li className="nav-list sign-out" onClick={signOutHandler}>
                sign out
              </li>
            )}
            {!currentUser && (
              <Link to="/sign-in">
                <li className="nav-list">sign in</li>
              </Link>
            )}
            {!currentUser && (
              <Link to="/sign-up">
                <li className="nav-list btn-signup">sign up</li>
              </Link>
            )}
          </ul>
          <div className="hambar-menu">
            <MenuIcon className="mob-nav-menu-icon" onClick={toggleMenu} />
            <ul className={toggleNav ? "mob-nav-lists show" : "mob-nav-lists"}>
              <Link to="/cart" onClick={toggleMenu}>
                <li className="mob-nav-list">
                  <CartIcon className="nav-cart-icon" />
                </li>
              </Link>
              <Link to="/sign-in" onClick={toggleMenu}>
                <li className="mob-nav-list">sign in</li>
              </Link>
              <Link to="/sign-up" onClick={toggleMenu}>
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
