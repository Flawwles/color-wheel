import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Portal } from "@reach/portal";
import TriangleTooltip from "../Tooltip/TriangleTooltip";

const ColorWheelDot = ({ total, index, data }) => {
  const [showMessage, setShowMessage] = useState(false);
  const colorRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  useEffect(() => {
    dispatch({
      type: "updateMasterColorList",
      payload: { data, div: colorRef },
    });
  }, []);

  const count = index + 1;
  const rotate = (360 / total) * count;

  const dispatch = useDispatch();

  const updateSidebar = (e) => {
    e.stopPropagation();
    // console.log(e.target.classList.add("color-wheel--dot--active"));
    dispatch({
      type: "updateSidebar",
      payload: e,
    });

    dispatch({
      type: "setSelectedColor",
      payload: { selectedColor: data },
    });
  };

  const copyToClipboard = (data) => {
    setShowMessage(true);
    navigator.clipboard.writeText(data.name);
  };

  return (
    <>
      <div
        ref={colorRef}
        className="color-wheel--dot--wrapper"
        style={{
          transform: `rotate(${rotate}deg)`,
          "--dotBackground": `var(${data.cssVar}, ${data.value})`,
        }}
      >
        <TriangleTooltip
          label={data.name}
          style={{
            background: "hsla(0, 0%, 0%, 0.75)",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "0.5em 1em",
          }}
        >
          <div
            className="color-wheel--dot"
            onClick={(e) => updateSidebar(e, data.value)}
            onDoubleClick={() => copyToClipboard(data)}
          />
        </TriangleTooltip>
      </div>
      {showMessage ? (
        <Portal>
          <div className="notification--wrapper">
            <div className="notification">Copied {data.name} to clipboard</div>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

export default ColorWheelDot;
