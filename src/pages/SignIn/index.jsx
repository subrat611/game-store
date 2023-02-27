import "./signin-page.scss";

import BgImg from "../../assets/desktop-hd-wallpaper.jpg";

export default function SignIn() {
  return (
    <div className="signin-wrapper">
      <img src={BgImg} alt="backgound img hd" className="background-img" />
      <div className="bg-overlay"></div>
      <div className="signin-container">
        <div className="input-wrapper email-input">
          <label htmlFor="emailInput">Email</label>
          <input id="emailInput" placeholder="email id" />
        </div>
        <div className="input-wrapper passwd-input">
          <label htmlFor="passwdInput">Password</label>
          <input id="passwdInput" placeholder="password" type="password" />
        </div>
        <button className="sign-in-btn">sign in</button>
      </div>
    </div>
  );
}
