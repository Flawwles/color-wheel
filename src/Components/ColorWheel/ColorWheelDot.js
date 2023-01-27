import React from "react";
import { useDispatch } from "react-redux";

const ColorWheelDot = ({ total, index, name, value }) => {
  const count = index + 1;
  const rotate = (360 / total) * count;

  const dispatch = useDispatch();

  const updateSidebar = (e, value) => {
    console.log("click");
    e.stopPropagation();
    dispatch({
      type: "updateSidebar",
    });

    dispatch({
      type: "setSelectedColor",
      payload: { selectedColor: { value, name } },
    });
  };

  return (
    <>
      <div
        className="color-wheel--dot--wrapper"
        style={{
          transform: `rotate(${rotate}deg)`,
          "--dotBackground": `${value}`,
        }}
      >
        <div
          className="color-wheel--dot"
          title={name}
          onClick={(e) => updateSidebar(e, value)}
        />
      </div>
    </>
  );
};

export default ColorWheelDot;
