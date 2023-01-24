import "./reset.css";
import "./styles.css";
import {
  themeColors,
  attentionColors,
  productColors1,
  productColors2
} from "./colors/colors";

import useEyeDropper from "use-eye-dropper";
import { useState } from "react";

export default function App() {
  const { open, close, isSupported } = useEyeDropper();
  const [color, setColor] = useState("#fff");
  const [error, setError] = useState();

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const pickColor = () => {
    open()
      .then((color) => setColor(color.sRGBHex))
      .catch((e) => {
        console.log(e);
        // Ensures component is still mounted
        // before calling setState
        if (!e.canceled) setError(e);
      });
  };

  function invertColor(hex, bw) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);

    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }

  return (
    <div className="App">
     <div className="sidebar--wrapper">
      <div className="sidebar--inner">
        <div className="sidebar--content">
          <div className="sidebar__main">
            <button className="button" onClick={() => pickColor()}>
              Open eyedropper
           </button>
            <span style={{ background: color, color: invertColor(color) }}>
              {color}
            </span>
            <button className="button" onClick={() => setSidebarOpen(true)}>Open</button>
            {!!error && <span>{error.message}</span>}
          </div>
          sidebarOpen
          <div className={`sidebar__contextual ${sidebarOpen ? "sidebar__contextual--open" : "sidebar__contextual--closed"}`}>

            <button onClick={() => setSidebarOpen(false)}>Close</button>
          </div>
        </div>
      </div>
     </div>
      <div className="color-wheel--wrapper">
        <ColorWheel size="750" dotSize="42" data={productColors2} />
        <ColorWheel size="600" dotSize="42" data={productColors1} />
        <ColorWheel size="450" dotSize="42" data={attentionColors} />
        <ColorWheel size="300" dotSize="42" data={themeColors} />
      </div>
    </div>
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
          "--dotBackground": `${value}`
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
    "--segmentOffset": `${segmentOffset}px`
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
