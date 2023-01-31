import React from "react";
import { useSelector } from "react-redux";
import ColorWheelDot from "./ColorWheelDot";

const ColorWheel = ({ data, size }) => {
  const wheelStyles = useSelector((state) => state.wheelStyles);

  const dotSize = parseInt(wheelStyles["--dotSize"].replace(/px/g, ""));
  const segmentSize = size / 2 + dotSize / 2;
  const segmentOffset = segmentSize - dotSize / 10;

  const wheelSize = size + dotSize;
  const styles = {
    "--size": `${wheelSize}px`,
    "--dotSize": `${dotSize}px`,
    "--segmentSize": `${segmentSize}px`,
    "--segmentOffset": `${segmentOffset}px`,
  };

  const stylesGlobal = { ...styles, ...wheelStyles };

  const dots = data.map((color, index) => (
    <ColorWheelDot total={data.length} key={index} index={index} data={color} />
  ));

  return (
    <div className="color-wheel" style={stylesGlobal}>
      {dots}
    </div>
  );
};

export default ColorWheel;
