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

  const TableHeader = ({ children }) => (
    <th className="color-table__header">
      <span>{children}</span>
    </th>
  );
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
        Sample
        {/* {selectedColor.name} */}
      </div>
      <table className="color-table">
        <tbody>
          <tr>
            <TableHeader>Name</TableHeader>
            <TableCellCopy>{selectedColor.name}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>CSS Var</TableHeader>
            <TableCellCopy>{selectedColor.cssVar}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>CSS Var</TableHeader>
            <TableCellCopy>var({selectedColor.cssVar})</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>Hex</TableHeader>
            <TableCellCopy>{hex}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>hsla</TableHeader>
            <TableCellCopy>{cssHsla}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>Hue</TableHeader>
            <TableCellCopy>{selectedColor.values.h}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>Saturation</TableHeader>
            <TableCellCopy>{selectedColor.values.s}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>Lightness</TableHeader>
            <TableCellCopy>{selectedColor.values.l}</TableCellCopy>
          </tr>
          <tr>
            <TableHeader>Alpha</TableHeader>
            <TableCellCopy>{selectedColor.values.a}</TableCellCopy>
          </tr>
        </tbody>
      </table>
      Double click color dot to copy X to clipboard
    </div>
  );
};

export default ContextualSide;
