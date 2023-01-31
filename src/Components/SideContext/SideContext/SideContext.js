import React from "react";
import { useSelector } from "react-redux";

import "./SideContext.css";
import DefaultSide from "../DefaultSide/DefaultSide";
import ContextualSide from "../ContextualSide/ContextualSide";

const SideContext = () => {
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
              <ContextualSide />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContext;
