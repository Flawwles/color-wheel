import React from "react";
import "./reset.css";
import "./styles.css";
import {
  themeColors,
  attentionColors,
  productColors1,
  productColors2,
} from "./colors/colors";

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

const ColorWheelDot = ({ total, index, name, value }) => {
  const count = index + 1;
  const rotate = (360 / total) * count;
  return (
    <>
      <div
        className="color-wheel--dot--wrapper"
        style={{
          transform: `rotate(${rotate}deg)`,
          "--dotBackground": `${value}`,
        }}
      >
        <div className="color-wheel--dot" title={name} />
      </div>
    </>
  );
};

const ColorWheel = ({ data, dotSize, size }) => {
  const segmentSize = size / 2;
  const segmentOffset = segmentSize - dotSize / 2;
  const styles = {
    "--size": `${size}px`,
    "--dotSize": `${dotSize}px`,
    "--segmentSize": `${segmentSize}px`,
    "--segmentOffset": `${segmentOffset}px`,
  };

  const dots = data.map((value, index) => (
    <ColorWheelDot
      total={data.length}
      key={index}
      index={index}
      name={data[index].name}
      value={data[index].value}
    />
  ));

  return (
    <div className="color-wheel" style={styles}>
      {dots}
    </div>
  );
};
