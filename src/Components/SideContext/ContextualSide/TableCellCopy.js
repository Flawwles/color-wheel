import React, { useEffect, useState } from "react";

function copyToClipboard(setMessage, children) {
  setMessage("✅ Copied to clipboard");
  navigator.clipboard.writeText(children);
}

const TableCellCopy = ({ children }) => {
  const [message, setMessage] = useState(children);

  useEffect(() => {
    const timer = setTimeout(() => setMessage(children), 3000);
    return () => clearTimeout(timer);
  }, [message]);

  return (
    <td onDoubleClick={() => copyToClipboard(setMessage, children)}>
      {message}
    </td>
  );
};

export default TableCellCopy;
