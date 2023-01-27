import React from "react";
import "./reset.css";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./Components/DataContext/context";
import SideContext from "./Components/SideContext/SideContext/SideContext";
import ColorWheels from "./Components/ColorWheel/ColorWheels";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideContext />
        <ColorWheels />
      </div>
    </Provider>
  );
}
