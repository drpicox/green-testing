import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { getTests, getTestsResult } from "../eggs";

export function Tests() {
  const tests = useSelector(getTests);
  const results = useSelector(getTestsResult);

  return useMemo(
    () => (
      <div
        className="prism"
        style={{
          border: "lightgreen solid 7px",
          margin: "1em auto",
          maxWidth: "60em"
        }}
      >
        {tests
          .map((test, index) => {
            const pass = results[index] === null;
            return (
              <div
                style={{
                  background: pass ? "lightgreen" : "lightcoral",
                  padding: ".5em 1em"
                }}
                key={index}
              >
                {pass ? "🟢" : "🔴"} {test}
              </div>
            );
          })
          .reverse()}
      </div>
    ),
    [tests, results]
  );
}
