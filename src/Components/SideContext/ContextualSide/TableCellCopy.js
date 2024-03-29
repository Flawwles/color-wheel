import { AlertCard } from "@brandwatch/axiom-components";
import { Portal } from "@reach/portal";
import React, { useEffect, useState } from "react";

const TableCellCopy = ({ children }) => {
  const copyToClipboard = (children) => {
    navigator.clipboard.writeText(children);
    setShowMessage(true);
  };
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  return (
    <>
      <div
        className="table-cell-copy"
        onDoubleClick={() => copyToClipboard(children)}
      >
        {children === "var(--missing)" || children === "--missing" ? (
          <WarningMessage />
        ) : (
          children
        )}
      </div>
      {showMessage ? (
        <Portal>
          <div className="notification--wrapper">
            <div className="notification">Copied {children} clipboard</div>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

const WarningMessage = () => (
  <div>
    <AlertCard size="small" type="error" shade="shade-4">
      Not in current version of axiom
    </AlertCard>
  </div>
);
export default TableCellCopy;
