import React from "react";

const Slider = ({ name, min, max, onChange }) => {
  return (
    <>
      <label htmlFor="1">{name}</label>
      <input
        onChange={onChange}
        min={min}
        max={max}
        type="range"
        className="input-range"
        id="1"
      />
    </>
  );
};

export default Slider;
