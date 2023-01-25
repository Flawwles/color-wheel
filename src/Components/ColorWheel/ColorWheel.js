import React from "react";
import { useSelector } from "react-redux";
import ColorWheelDot from "./ColorWheelDot";

const ColorWheel = ({ data, size }) => {
  const wheelStyles = useSelector((state) => state.wheelStyles);

  const dotSize = wheelStyles["--dotSize"].replace(/px/g, "");
  const segmentSize = size / 2;
  const segmentOffset = segmentSize - dotSize / 2;
  const styles = {
    "--size": `${size}px`,
    "--dotSize": `${dotSize}px`,
    "--segmentSize": `${segmentSize}px`,
    "--segmentOffset": `${segmentOffset}px`,
  };

  const stylesGlobal = { ...styles, ...wheelStyles };

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
    <div className="color-wheel" style={stylesGlobal}>
      {dots}
    </div>
  );
};

export default ColorWheel;
