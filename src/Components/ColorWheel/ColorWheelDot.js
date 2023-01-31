import React from "react";
import { useDispatch } from "react-redux";
import { TooltipPopup, useTooltip } from "@reach/tooltip";
import { Portal } from "@reach/portal";

import "@reach/tooltip/styles.css";

const ColorWheelDot = ({ total, index, data }) => {
  const count = index + 1;
  const rotate = (360 / total) * count;

  const dispatch = useDispatch();

  const updateSidebar = (e) => {
    console.log("Update sidebar");
    e.stopPropagation();
    dispatch({
      type: "updateSidebar",
    });

    console.log(data);
    dispatch({
      type: "setSelectedColor",
      payload: { selectedColor: data },
    });
  };

  const copyToClipboard = (e) => alert("COPY TO CLIPBOARD HERE", e);

  return (
    <>
      <div
        className="color-wheel--dot--wrapper"
        style={{
          transform: `rotate(${rotate}deg)`,
          "--dotBackground": `${data.value}`,
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
            onDoubleClick={(e) => copyToClipboard(e)}
          />
        </TriangleTooltip>
      </div>
    </>
  );
};

const centered = (triggerRect, tooltipRect) => {
  const triggerCenter = triggerRect.left + triggerRect.width / 2;
  const left = triggerCenter - tooltipRect.width / 2;
  const maxLeft = window.innerWidth - tooltipRect.width - 2;
  return {
    left: Math.min(Math.max(2, left), maxLeft) + window.scrollX,
    top: triggerRect.bottom + 8 + window.scrollY,
  };
};

const TriangleTooltip = ({ children, label, "aria-label": ariaLabel }) => {
  // get the props from useTooltip
  const [trigger, tooltip] = useTooltip();

  // destructure off what we need to position the triangle
  const { isVisible, triggerRect } = tooltip;

  return (
    <>
      {React.cloneElement(children, trigger)}

      {isVisible && (
        // The Triangle. We position it relative to the trigger, not the popup
        // so that collisions don't have a triangle pointing off to nowhere.
        // Using a Portal may seem a little extreme, but we can keep the
        // positioning logic simpler here instead of needing to consider
        // the popup's position relative to the trigger and collisions
        <Portal>
          <div
            style={{
              position: "absolute",
              left:
                triggerRect && triggerRect.left - 10 + triggerRect.width / 2,
              top: triggerRect && triggerRect.bottom + window.scrollY,
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "10px solid black",
            }}
          />
        </Portal>
      )}
      <TooltipPopup
        {...tooltip}
        label={label}
        aria-label={ariaLabel}
        style={{
          background: "black",
          color: "white",
          border: "none",
          borderRadius: "3px",
          padding: "0.5em 1em",
        }}
        position={centered}
      />
    </>
  );
};

export default ColorWheelDot;
