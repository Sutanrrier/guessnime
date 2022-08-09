import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import store from "./store/store";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>
  </Provider>
);
