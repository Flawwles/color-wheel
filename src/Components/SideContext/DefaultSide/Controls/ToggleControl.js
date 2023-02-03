import { Toggle } from "@brandwatch/axiom-components";
import React from "react";

import { Small } from "@brandwatch/axiom-components";

const ToggleControl = ({ name, defaultValue, onChange, help }) => {
  return (
    <div style={{ alignSelf: "start" }}>
      <Toggle onToggle={onChange} toggled={defaultValue}>
        {name} <br /> <Small textColor="subtle">{help}</Small>
      </Toggle>
    </div>
  );
};

export default ToggleControl;
