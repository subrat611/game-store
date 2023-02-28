import { useState } from "react";

import "./signup.scss";

import BgImg from "../../assets/desktop-hd-wallpaper.jpg";
import { createUserWithEmail } from "../../utils/firebase/firebase";

const formFiledData = {
  displayName: "",
  emailId: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const [formFields, setFormFields] = useState(formFiledData);

  const handleFormField = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
  };

  const resetFields = () => {
    setFormFields({
      displayName: "",
      emailId: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formFields.password === formFields.confirmPassword) {
        const { user } = await createUserWithEmail(
          formFields.emailId,
          formFields.password
        );
        resetFields();
        console.log(user);
      } else {
        console.log("password does not match");
      }
    } catch (err) {
      console.log(`sign up error: ${err}`);
    }
  };

  return (
    <div className="signup-wrapper">
      <img src={BgImg} alt="backgound img hd" className="background-img" />
      <div className="bg-overlay"></div>
      <form
        className="signup-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="input-wrapper name-input">
          <label htmlFor="nameInput">Name</label>
          <input
            id="nameInput"
            type="text"
            placeholder="enter your name"
            name="displayName"
            value={formFields.displayName}
            onChange={(e) => handleFormField(e)}
          />
        </div>
        <div className="input-wrapper email-input">
          <label htmlFor="emailInput">Email Id</label>
          <input
            required
            id="emailInput"
            type="email"
            placeholder="enter your email id"
            name="emailId"
            value={formFields.emailId}
            onChange={(e) => handleFormField(e)}
          />
        </div>
        <div className="input-wrapper password-input">
          <label htmlFor="passwdInput">Password</label>
          <input
            required
            id="passwdInput"
            type="password"
            placeholder="password"
            name="password"
            value={formFields.password}
            onChange={(e) => handleFormField(e)}
          />
        </div>
        <div className="input-wrapper confirm-password-input">
          <label htmlFor="confirmPasswdInput">Confirm password</label>
          <input
            required
            id="confirmPasswdInput"
            type="password"
            placeholder="confirm password"
            name="confirmPassword"
            value={formFields.confirmPassword}
            onChange={(e) => handleFormField(e)}
          />
        </div>
        <button type="submit" className="sign-up-btn">
          sign up
        </button>
      </form>
    </div>
  );
}
