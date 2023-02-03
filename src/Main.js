import React from "react";

import SideContext from "./Components/SideContext/SideContext/SideContext";
import ColorWheels from "./Components/ColorWheel/ColorWheels";
import { useSelector } from "react-redux";

const Main = () => {
  const theme = useSelector((state) => state.theme);

  return (
    <div className={`App ax-theme--${theme}`}>
      <SideContext />
      <ColorWheels />
    </div>
  );
};

export default Main;
