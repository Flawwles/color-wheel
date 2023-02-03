import React from "react";
import "./reset.css";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./Components/DataContext/context";
import Main from "./Main";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
