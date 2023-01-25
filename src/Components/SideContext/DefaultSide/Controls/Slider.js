import React from "react";
import "./Slider.css";

const Slider = ({ name, min, max, onChange, defaultValue, unit }) => {
  const regex = new RegExp(unit, "g");
  const defaultValueNoUnit = defaultValue.replace(regex, "");

  function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
    return (
      ((maxAllowed - minAllowed) * (unscaledNum - min)) / (max - min) +
      minAllowed
    );
  }
  const scaledValue = scaleBetween(defaultValueNoUnit, 0, 100, min, max);

  return (
    <div className="slider" style={{ "--value": scaledValue + "%" }}>
      <div>
        <label htmlFor="1">{name}</label>
        <input
          onChange={onChange}
          min={min}
          max={max}
          type="range"
          className="input-range"
          id="1"
          // defaultValue={defaultValue}
          value={defaultValueNoUnit}
        />
      </div>

      <div className="slider-second-row">
        <div className="slider-second-row--direct-input">
          <input type="number" value={defaultValueNoUnit} onChange={onChange} />
        </div>
        <div className="slider-second-row--unit-type">{unit}</div>
      </div>
    </div>
  );
};

export default Slider;
