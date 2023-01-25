import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultSide from "../DefaultSide/DefaultSide";
const SideContext = () => {
  const dispatch = useDispatch();
  const updateSidebarMode = () => {
    dispatch({
      type: "updateSidebarMode",
    });
  };
  const sidebarContextual = useSelector((state) => state.sidebarContextual);
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
              <button onClick={() => updateSidebarMode()}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContext;
