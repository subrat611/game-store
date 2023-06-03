import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./context/User";
import { CartProvider } from "./context/Cart";

import { store } from "./store/store";
import { Provider } from "react-redux";

import App from "./App";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <UserProvider> */}
          <CartProvider>
            <App />
          </CartProvider>
        {/* </UserProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
