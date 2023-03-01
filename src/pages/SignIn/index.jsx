import { useState } from "react";

import {
  createUserWithEmail,
  signInUserWithEmail,
} from "../../utils/firebase/firebase";

import BgImg from "../../assets/desktop-hd-wallpaper.jpg";

import "./signin-page.scss";

export default function SignIn() {
  const [formFields, setFormFields] = useState({
    emailId: "",
    passwd: "",
  });

  const handleFormField = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const resetFields = () => {
    setFormFields({
      emailId: "",
      passwd: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInUserWithEmail(
        formFields.emailId,
        formFields.passwd
      );

      resetFields();
      console.log(user);
    } catch (err) {
      switch (err.code) {
        case "auth/user-not-found":
          alert("user not found");
          break;

        case "auth/wrong-password":
          alert("password does not match");
          break;

        default:
          console.log(`unknown error try again: ${err}`);
      }
    }
  };

  return (
    <div className="signin-wrapper">
      <img src={BgImg} alt="backgound img hd" className="background-img" />
      <div className="bg-overlay"></div>
      <form
        className="signin-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-wrapper email-input">
          <label htmlFor="emailInput">Email</label>
          <input
            id="emailInput"
            placeholder="email id"
            type="email"
            value={formFields.emailId}
            onChange={(e) => handleFormField(e)}
            name="emailId"
            required
          />
        </div>
        <div className="input-wrapper passwd-input">
          <label htmlFor="passwdInput">Password</label>
          <input
            id="passwdInput"
            placeholder="password"
            type="password"
            value={formFields.passwd}
            onChange={(e) => handleFormField(e)}
            name="passwd"
            required
          />
        </div>
        <button type="submit" className="sign-in-btn">
          sign in
        </button>
      </form>
    </div>
  );
}
