import React from "react";
import { Provider, useSelector } from "react-redux";
import { createAppStore, getStep, isPastLastStep, changeCode } from "./eggs";
import "./App.css";
import { Arena, Score, Welcome } from "./components";
import { start, next } from "./eggs";

const store = createAppStore();
if (false) store.dispatch(start());
if (false) store.dispatch(next());
if (false) store.dispatch(changeCode("aaa"));

// ⛳🏌🕳🚩🏌️‍♂️🏌️‍♀️

function ImplApp() {
  const step = useSelector(getStep);
  const pastLastStep = useSelector(isPastLastStep);

  if (!step) return <Welcome />;
  if (pastLastStep) return <Score />;
  return <Arena step={step} />;
}
function App() {
  return (
    <Provider store={store}>
      <ImplApp />
    </Provider>
  );
}

export default App;
