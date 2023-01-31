import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hslToHex } from "../../Utils";
import "./SideContext.css";
import DefaultSide from "../DefaultSide/DefaultSide";

const SideContext = () => {
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch({
      type: "closeSidebar",
    });
  };
  const sidebarContextual = useSelector((state) => state.sidebarContextual);
  const selectedColor = useSelector((state) => state.selectedColor);

  console.log("COLOR", selectedColor);

  const hsla = `${selectedColor.values.h},${selectedColor.values.s}%,${selectedColor.values.l}%,${selectedColor.values.a}`;
  const cssHsla = `hsla(${hsla})`;

  console.log(hsla);

  console.log(selectedColor.values);
  const hex = hslToHex(
    selectedColor.values.h,
    selectedColor.values.s,
    selectedColor.values.l
  );
  console.log(hex);

  return (
    <div className="sidebar--wrapper">
      <div className="sidebar--inner">
        <div className="sidebar--content">
          <div className="sidebar__main">
            <DefaultSide />

            <div
              className={`sidebar__contextual ${
                sidebarContextual
                  ? "sidebar__contextual--open"
                  : "sidebar__contextual--closed"
              }`}
            >
              <button onClick={() => closeSidebar()}>Close</button>

              <div className="color-swatch" style={{ background: cssHsla }}>
                {selectedColor.name}
              </div>
              <table className="color-table">
                <tr>
                  <td>Name</td>
                  <td>..</td>
                </tr>
                <tr>
                  <td>hsla</td>
                  <td>{cssHsla}</td>
                </tr>
                <tr>
                  <td>HEX</td>
                  <td>{hex}</td>
                </tr>
                <tr>
                  <td>Hue</td>
                  <td>{selectedColor.values.h}</td>
                </tr>
                <tr>
                  <td>Saturation</td>
                  <td>{selectedColor.values.s}</td>
                </tr>
                <tr>
                  <td>Lightness</td>
                  <td>{selectedColor.values.l}</td>
                </tr>
                <tr>
                  <td>Alpha</td>
                  <td>{selectedColor.values.a}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContext;
