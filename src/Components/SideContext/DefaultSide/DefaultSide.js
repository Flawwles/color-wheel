import React, { useState } from "react";
import { invertColor } from "./../../Utils/index";
import useEyeDropper from "use-eye-dropper";

import { useDispatch } from "react-redux";
import Slider from "./Controls/Slider";

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

  const updateWheelStyles = (data) => {
    dispatch({
      type: "updateWheelStyles",
      payload: data,
    });
  };

  const dotBorderRadiusChange = (e) => {
    const dotBorderRadius = e.target.value + "%";
    updateWheelStyles({ "--dotBorderRadius": dotBorderRadius });
  };

  const dotSizeChange = (e) => {
    const dotSize = e.target.value + "px";
    updateWheelStyles({ "--dotSize": dotSize });
  };

  return (
    <div>
      <span className="badge--alpha">ALPHA</span>
      <h1>Color Wheel</h1>
      <p>
        View the axiom color design values in a wheel and additional tools to
        make working with the colors easier.
      </p>
      <hr />

      <h2>Wheel controls</h2>
      <Slider
        name="Dot radius"
        min="0"
        max="50"
        onChange={(e) => dotBorderRadiusChange(e)}
      />

      <Slider
        name="Dot size"
        min="8"
        max="100"
        onChange={(e) => dotSizeChange(e)}
      />
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
