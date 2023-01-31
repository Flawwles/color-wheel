import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hslToHex } from "../../Utils";

const ContextualSide = () => {
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
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch({
      type: "closeSidebar",
    });
  };
  return (
    <div>
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
  );
};

export default ContextualSide;
