import React from "react";
import ReactDOM, { render } from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js");
  });
}
