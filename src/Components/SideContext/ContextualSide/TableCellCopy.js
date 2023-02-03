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
        {children}
      </div>
      {showMessage ? (
        <Portal>
          <div className="notification--wrapper">
            <div className="notification">Copied to clipboard</div>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

export default TableCellCopy;
