import React, { useState } from "react";
import { invertColor } from "./../../Utils/index";
import useEyeDropper from "use-eye-dropper";

import { useSelector } from "react-redux";

const DefaultSide = () => {
  const sidebarContextual = useSelector((state) => state.sidebarContextual);

  const { open } = useEyeDropper();
  const [color, setColor] = useState("#fff");
  const [error, setError] = useState();

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

  return (
    <div>
      <button className="button" onClick={() => pickColor()}>
        Open eyedropper
      </button>
      <span style={{ background: color, color: invertColor(color) }}>
        {color}
        {sidebarContextual ? "true" : "false"}
      </span>
      <button className="button">Open</button>
      {!!error && <span>{error.message}</span>}
    </div>
  );
};

export default DefaultSide;
