import React from "react";
import { useDispatch } from "react-redux";
import { start } from "../eggs";

export function Welcome() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <span role="img" aria-label="golf" className="App-logo">
          ⛳
        </span>
        <p>Pass the test with the minimum keystrokes.</p>
        <a className="App-link" href onClick={() => dispatch(start())}>
          Start!
        </a>
      </header>
    </div>
  );
}
