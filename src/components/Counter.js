import React from "react";
import { useSelector } from "react-redux";
import { getStep, areTestsPassing } from "../eggs";

export function Counter() {
  const { keystrokes } = useSelector(getStep);
  const success = useSelector(areTestsPassing);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <span
        style={{
          border: "solid black 5px",
          background: success ? "lightgreen" : "lightcoral",
          padding: "1rem",
          style: "inline-block"
        }}
      >
        {keystrokes}
      </span>
    </div>
  );
}
