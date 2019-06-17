import React, { useEffect } from "react";

let renderCount = 0;
function Child(props) {
  useEffect(() => {
    renderCount++;
  });
  return <span> Render Count: {renderCount}</span>;
}

export default Child;
