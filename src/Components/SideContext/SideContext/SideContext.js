import convert from "color-convert";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import DefaultSide from "../DefaultSide/DefaultSide";
const SideContext = () => {
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch({
      type: "closeSidebar",
    });
  };
  const sidebarContextual = useSelector((state) => state.sidebarContextual);
  const { name, value } = useSelector((state) => state.selectedColor);

  const hexValue = convert.rgb.hex("rgb(64,21,64)");

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

              <div className="color-swatch" style={{ background: value }}>
                {name}
              </div>
              <table>
                <tr>
                  <td>Name</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Var</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>hsla</td>
                  <td>{value}</td>
                </tr>
                <tr>
                  <td>HEX</td>
                  <td>{hexValue}</td>
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
