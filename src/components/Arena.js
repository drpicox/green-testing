import React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { useSelector, useDispatch } from "react-redux";
import { getCode, changeCode, areTestsPassing, next } from "../ducks";
import { Counter } from "./Counter";
import { Tests } from "./Tests";

export function Arena() {
  const code = useSelector(getCode);
  const dispatch = useDispatch();

  const success = useSelector(areTestsPassing);

  return (
    <div>
      <Counter />
      <Editor
        className="prism"
        value={code}
        onValueChange={code => dispatch(changeCode(code))}
        highlight={code => highlight(code, languages.js)}
        padding={10}
      />
      {success && (
        <div style={{ textAlign: "center" }}>
          <br />
          <span
            style={{
              color: "yellow",
              fontWeight: "bolder",
              textDecoration: "underline",
              cursor: "pointer"
            }}
            onClick={() => dispatch(next())}
          >
            Next »
          </span>
        </div>
      )}
      <br />
      <Tests />
    </div>
  );
}
