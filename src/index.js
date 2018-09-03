import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from "./components/app";
import "./styles/main.css";

import "./icons/android-icon-36x36.png";
import "./icons/android-icon-48x48.png";
import "./icons/android-icon-72x72.png";
import "./icons/android-icon-96x96.png";
import "./icons/android-icon-144x144.png";
import "./icons/android-icon-192x192.png";
import "./icons/favicon-32x32.png";
import "./icons/favicon-96x96.png";
import "./icons/favicon-16x16.png";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#app")
);
