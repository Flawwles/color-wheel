import React from "react";

import { useDispatch, useSelector } from "react-redux";
import Slider from "./Controls/Slider";
import ToggleControl from "./Controls/ToggleControl";
import { Button, ButtonIcon, Separator } from "@brandwatch/axiom-components";
import EyeDropper from "./EyeDropper/EyeDropper";

const DefaultSide = () => {
  const theme = useSelector((state) => state.theme);
  const nextTheme = theme === "day" ? "night" : "day";
  const iconTheme = theme === "day" ? "moon" : "sun";

  const dispatch = useDispatch();

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

  const toggleTheme = () => {
    dispatch({
      type: "toggleTheme",
    });
  };

  const dotOutlineChange = (e) => {
    let value;
    value = e.target.checked;
    if (value === undefined) {
      value = e.target.input.checked;
    }
    const nextValue = value ? true : false;
    const dotStyle = nextValue ? "2px solid #efefef" : "none";
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

      <Separator borderStyle="dotted" />

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

        <ToggleControl
          name="Dot outline"
          help="Words with large dots only"
          defaultValue={wheelStyles["dotOutline"]}
          onChange={(e) => dotOutlineChange(e)}
        />
      </section>

      <Separator borderStyle="dotted" />
      <h3>Theme settings</h3>
      <Button
        variant="secondary"
        className="button"
        onClick={() => toggleTheme()}
      >
        <ButtonIcon name={iconTheme} size="16" /> {nextTheme} theme
      </Button>
      <br />
      <br />
      <Separator borderStyle="dotted" />
      <h3>Find color from anywhere...</h3>
      <EyeDropper />
    </div>
  );
};

export default DefaultSide;
