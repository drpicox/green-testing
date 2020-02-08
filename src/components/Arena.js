import React, { useEffect } from "react";
import prettier from "prettier/standalone";
import parser_babylon from "prettier/parser-babylon";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { useSelector, useDispatch } from "react-redux";
import {
  getCode,
  changeCode,
  areTestsPassing,
  next,
  isLastStep
} from "../eggs";
import { Counter } from "./Counter";
import { Tests } from "./Tests";

export function Arena() {
  const code = useSelector(getCode);
  const success = useSelector(areTestsPassing);
  const lastStep = useSelector(isLastStep);
  const dispatch = useDispatch();

  useEffect(() => {
    if (success)
      dispatch(
        changeCode(
          prettier
            .format(code, {
              parser: "babylon",
              plugins: [parser_babylon]
            })
            .replace(/\n$/, "")
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success]);

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
      {!success && (
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
            {lastStep ? "Finish" : "Next"} »
          </span>
        </div>
      )}
      <br />
      <Tests />
    </div>
  );
}
