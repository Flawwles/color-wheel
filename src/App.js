import React from "react";
import "./reset.css";
import "./styles.css";
import {
  themeColors,
  attentionColors,
  productColors1,
  productColors2,
} from "./Components/ColorWheel/Data/colors";

import ColorWheel from "./Components/ColorWheel/ColorWheel";
import { Provider } from "react-redux";
import store from "./Components/DataContext/context";
import SideContext from "./Components/SideContext/SideContext/SideContext";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SideContext />
        <div className="color-wheel--wrapper">
          <ColorWheel size="750" dotSize="42" data={productColors2} />
          <ColorWheel size="600" dotSize="42" data={productColors1} />
          <ColorWheel size="450" dotSize="42" data={attentionColors} />
          <ColorWheel size="300" dotSize="42" data={themeColors} />
        </div>
      </div>
    </Provider>
  );
}
