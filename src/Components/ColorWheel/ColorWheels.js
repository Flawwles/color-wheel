import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../Utils/windowsize";
import ColorWheel from "./ColorWheel";
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

  const { height, width } = useWindowDimensions();
  const minSize = Math.min(height, width);
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
      <ColorWheel size={sizes[0]} data={productColors2Chromatic} />
      <ColorWheel size={sizes[1]} data={productColors1Chromatic} />
      <ColorWheel size={sizes[2]} data={attentionColorsChromatic} />
      <ColorWheel size={sizes[3]} data={themeColorsChromatic} />
    </div>
  );
};

export default ColorWheels;
