import React from "react";
import { Provider, useSelector } from "react-redux";
import { createAppStore, getStep } from "./eggs";
import "./App.css";
import { Arena, Welcome } from "./components";
import { start, next } from "./eggs";

const store = createAppStore();
store.dispatch(start());
if (false) store.dispatch(next());

// ⛳🏌🕳🚩🏌️‍♂️🏌️‍♀️

function ImplApp() {
  const step = useSelector(getStep);

  if (!step) return <Welcome />;
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
