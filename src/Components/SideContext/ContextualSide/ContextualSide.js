import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  ButtonIcon,
  Table,
  TableBody,
  TableHeader,
  TableHeaderLabel,
  TableRow,
  TableCell,
  AlertCard,
} from "@brandwatch/axiom-components";

// import useTimeout from "../../Timeout/Timeout";
import { hslToHex, invertColor } from "../../Utils";
import "./ContextualSide.css";
import TableCellCopy from "./TableCellCopy";

const ContextualSide = () => {
  const selectedColor = useSelector((state) => state.selectedColor);
  const hsla = `${selectedColor.values.h}, ${selectedColor.values.s}%, ${selectedColor.values.l}%, ${selectedColor.values.a}`;
  const cssHsla = `hsla(${hsla})`;
  const hex = hslToHex(
    selectedColor.values.h,
    selectedColor.values.s,
    selectedColor.values.l
  );
  const hexOpacityBase = Math.round(selectedColor.values.a * 255);
  const hexOpacity = (hexOpacityBase + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase();
  const hex8 = selectedColor.values.a == 1 ? hex : hex + hexOpacity;
  const dispatch = useDispatch();
  const closeSidebar = () => {
    dispatch({
      type: "closeSidebar",
    });
  };

  // const TableHeader = ({ children }) => (
  //   <th className="color-table__header">
  //     <span>{children}</span>
  //   </th>
  // );

  return (
    <div>
      <div className="header-wrapper">
        <div>
          <h5>COLOR WHEEL</h5>
          <h2>Details</h2>
        </div>
        <Button
          shape="circle"
          variant="secondary"
          aria-label="close"
          onClick={() => closeSidebar()}
        >
          <ButtonIcon name="cross" />
        </Button>
      </div>
      <div
        className="color-swatch"
        style={{ background: cssHsla, color: invertColor(hex) }}
      >
        Sample
        {/* {selectedColor.name} */}
      </div>
      <Table>
        <TableHeader>
          <TableHeaderLabel sortDirection="ascending" sortable>
            Type
          </TableHeaderLabel>
          <TableHeaderLabel>Value</TableHeaderLabel>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>
              <TableCellCopy>{selectedColor.name}</TableCellCopy>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>CSS Var</TableCell>
            <TableCell>
              <TableCellCopy>{selectedColor.cssVar}</TableCellCopy>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell>CSS Var</TableCell>
            <TableCell>
              <TableCellCopy>{`var(${selectedColor.cssVar})`}</TableCellCopy>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hex</TableCell>
            <TableCell>
              <TableCellCopy>{hex8}</TableCellCopy>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>hsla</TableCell>
            <TableCell>
              <TableCellCopy>{cssHsla}</TableCellCopy>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Hue</TableCell>
            <TableCell>
              <TableCellCopy>{selectedColor.values.h}</TableCellCopy>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Saturation</TableCell>
            <TableCell>
              <TableCellCopy>{selectedColor.values.s}</TableCellCopy>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Lightness</TableCell>
            <TableCell>
              <TableCellCopy>{selectedColor.values.l}</TableCellCopy>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Alplha</TableCell>
            <TableCell>
              <TableCellCopy>{selectedColor.values.a}</TableCellCopy>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <AlertCard shade="shade-3" className="alert-card">
        Double click values to copy
      </AlertCard>
    </div>
  );
};

export default ContextualSide;
