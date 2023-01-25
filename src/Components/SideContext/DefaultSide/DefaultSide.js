import React, { useState } from "react";
import { invertColor } from "./../../Utils/index";
import useEyeDropper from "use-eye-dropper";

import { useDispatch } from "react-redux";

const DefaultSide = () => {
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

  const dispatch = useDispatch();
  const updateSidebarMode = () => {
    dispatch({
      type: "updateSidebarMode",
    });
  };

  return (
    <div>
      <button className="button" onClick={() => pickColor()}>
        Open eyedropper
      </button>
      <span style={{ background: color, color: invertColor(color) }}>
        {color}
      </span>
      <button className="button" onClick={() => updateSidebarMode()}>
        Open
      </button>
      {!!error && <span>{error.message}</span>}
    </div>
  );
};

export default DefaultSide;
