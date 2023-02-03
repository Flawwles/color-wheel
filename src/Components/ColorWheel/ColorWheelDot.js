import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { TooltipPopup, useTooltip } from "@reach/tooltip";
import { Portal } from "@reach/portal";

import "@reach/tooltip/styles.css";

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
    dispatch({
      type: "updateSidebar",
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
  const [trigger, tooltip] = useTooltip();
  const { isVisible, triggerRect } = tooltip;
  return (
    <>
      {React.cloneElement(children, trigger)}

      {isVisible && (
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
          fontSize: "1rem",
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
