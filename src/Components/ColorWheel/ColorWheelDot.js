import React from "react";

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

export default ColorWheelDot;
