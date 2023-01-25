import React from "react";

import DefaultSide from "../DefaultSide/DefaultSide";
const SideContext = () => {
  return (
    <div className="sidebar--wrapper">
      <div className="sidebar--inner">
        <div className="sidebar--content">
          <div className="sidebar__main">
            <DefaultSide />

            {/* ${sidebarOpen ? "sidebar__contextual--open" : "sidebar__contextual--closed" */}
            <div className={`sidebar__contextual }`}>
              <button>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideContext;
