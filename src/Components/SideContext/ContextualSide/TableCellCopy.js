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
      <td onDoubleClick={() => copyToClipboard(children)}>{children}</td>
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
