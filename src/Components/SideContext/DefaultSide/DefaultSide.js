import React, { useState } from "react";
import { invertColor } from "./../../Utils/index";
import useEyeDropper from "use-eye-dropper";

import { useDispatch, useSelector } from "react-redux";
import Slider from "./Controls/Slider";
import Toggle from "./Controls/Toggle";

const DefaultSide = () => {
  const { open } = useEyeDropper();
  const [color, setColor] = useState();
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

  const updateSidebar = () => {
    dispatch({
      type: "updateSidebar",
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

  const wheelStepChange = (e) => {
    const wheelStep = e.target.value;
    updateWheelStyles({ wheelStep: wheelStep });
  };

  const dotOutlineChange = (e) => {
    let value;
    value = e.target.checked;
    if (value === undefined) {
      value = e.target.input.checked;
    }
    const nextValue = value ? true : false;
    const dotStyle = nextValue ? "2px solid #efefef" : "none";
    console.log(nextValue);
    updateWheelStyles({
      dotOutline: nextValue,
      "--dotOutlineStyle": dotStyle,
    });
  };

  const wheelStyles = useSelector((state) => state.wheelStyles);

  return (
    <div>
      <span className="badge--alpha">ALPHA</span>
      <h1>Color Wheel</h1>
      <p>
        View the axiom color design values in a wheel and additional tools to
        make working with the colors easier.
      </p>
      <hr />

      <h3>Wheel controls</h3>
      <section className="controls">
        <Slider
          name="Dot radius"
          min="0"
          max="50"
          unit="%"
          defaultValue={wheelStyles["--dotBorderRadius"]}
          onChange={(e) => dotBorderRadiusChange(e)}
        />

        <Slider
          name="Dot size"
          min="8"
          max="200"
          unit="px"
          defaultValue={wheelStyles["--dotSize"]}
          onChange={(e) => dotSizeChange(e)}
        />

        <Slider
          name="Wheel step"
          min="-150"
          max="200"
          unit=""
          defaultValue={wheelStyles["wheelStep"]}
          onChange={(e) => wheelStepChange(e)}
        />

        <Toggle
          name="Dot outline"
          defaultValue={wheelStyles["dotOutline"]}
          onChange={(e) => dotOutlineChange(e)}
        />
      </section>

      <hr />
      <button className="button" onClick={() => pickColor()}>
        Open eyedropper
      </button>
      {color ? (
        <span style={{ background: color, color: invertColor(color) }}>
          {color}
        </span>
      ) : (
        ""
      )}

      <button className="button" onClick={() => updateSidebar()}>
        Open
      </button>
      {!!error && <span>{error.message}</span>}
    </div>
  );
};

export default DefaultSide;
