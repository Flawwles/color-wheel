import React from "react";
import ColorWheelDot from "./ColorWheelDot";

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

export default ColorWheel;
