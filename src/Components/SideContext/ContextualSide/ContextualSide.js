import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hslToHex, invertColor } from "../../Utils";
import "./ContextualSide.css";

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

  const TableCellCopy = ({ children }) => {
    return (
      <td onDoubleClick={() => alert("COPY TO CLIPBOARD", { children })}>
        {children}
      </td>
    );
  };
  return (
    <div>
      <button onClick={() => closeSidebar()}>Close</button>
      <div
        className="color-swatch"
        style={{ background: cssHsla, color: invertColor(hex) }}
      >
        {selectedColor.name}
      </div>
      <table className="color-table">
        <tbody>
          <tr>
            <th>Name</th>
            <TableCellCopy>{selectedColor.name}</TableCellCopy>
          </tr>
          <tr>
            <th>HEX</th>
            <TableCellCopy>{hex}</TableCellCopy>
          </tr>
          <tr>
            <th>hsla</th>
            <TableCellCopy>{cssHsla}</TableCellCopy>
          </tr>
          <tr>
            <th>Hue</th>
            <TableCellCopy>{selectedColor.values.h}</TableCellCopy>
          </tr>
          <tr>
            <th>Saturation</th>
            <TableCellCopy>{selectedColor.values.s}</TableCellCopy>
          </tr>
          <tr>
            <th>Lightness</th>
            <TableCellCopy>{selectedColor.values.l}</TableCellCopy>
          </tr>
          <tr>
            <th>Alpha</th>
            <TableCellCopy>{selectedColor.values.a}</TableCellCopy>
          </tr>
        </tbody>
      </table>
      Double click color dot to copy X to clipboard
    </div>
  );
};

export default ContextualSide;
