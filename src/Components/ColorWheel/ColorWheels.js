import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../Utils/windowsize";
import ColorWheel from "./ColorWheel";
import "./ColorWheel.css";
import {
  themeColors,
  attentionColors,
  productColors1,
  productColors2,
} from "./Data/colors";

const ColorWheels = () => {
  const dispatch = useDispatch();

  const updateSidebar = () => {
    dispatch({
      type: "closeSidebar",
    });
  };

  const wheelStyles = useSelector((state) => state.wheelStyles);

  const themeColorsChromatic = themeColors.sort(
    (a, b) => a.values.h - b.values.h
  );
  const productColors1Chromatic = productColors1.sort(
    (a, b) => a.values.h - b.values.h
  );
  const productColors2Chromatic = productColors2.sort(
    (a, b) => a.values.h - b.values.h
  );
  const attentionColorsChromatic = attentionColors.sort(
    (a, b) => a.values.h - b.values.h
  );

  let colorSet1, colorSet2, colorSet3, colorSet4;

  colorSet1 = productColors2Chromatic;
  colorSet2 = productColors1Chromatic;
  colorSet3 = attentionColorsChromatic;
  colorSet4 = themeColorsChromatic;

  if (wheelStyles.coreColors) {
    const set1 = productColors2Chromatic.filter(
      (color) => !color.name.includes("Active") && !color.name.includes("Hover")
    );
    const set2 = productColors1Chromatic.filter(
      (color) => !color.name.includes("Active") && !color.name.includes("Hover")
    );
    const set3 = attentionColorsChromatic.filter(
      (color) => !color.name.includes("Active") && !color.name.includes("Hover")
    );
    colorSet1 = [];
    colorSet2 = [];
    colorSet3 = [...set1, ...set2, ...set3].sort(
      (a, b) => a.values.h - b.values.h
    );
    colorSet4;
  }

  const { height, width } = useWindowDimensions();
  const minSize = Math.min(height, width - 367);
  //367 = sidebar width
  const step = wheelStyles.wheelStep;
  const createSizes = (n) =>
    Array.from({ length: n }, (n, index) => minSize - (index + 1) * step);
  const sizes = createSizes(4);

  return (
    <div
      data-min={minSize}
      className="color-wheel--wrapper"
      onClick={() => updateSidebar()}
    >
      <ColorWheel size={sizes[0]} data={colorSet1} />
      <ColorWheel size={sizes[1]} data={colorSet2} />
      <ColorWheel size={sizes[2]} data={colorSet3} />
      <ColorWheel size={sizes[3]} data={colorSet4} />
    </div>
  );
};

export default ColorWheels;
