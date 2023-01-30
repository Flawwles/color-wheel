import React from "react";

const Toggle = ({ name, defaultValue, onChange }) => {
  return (
    <>
      <label>
        <input
          onChange={onChange}
          type="checkbox"
          checked={defaultValue}
          id="1"
        />{" "}
        {name}
      </label>
    </>
  );
};

export default Toggle;
