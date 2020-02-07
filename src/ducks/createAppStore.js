import { createStore, combineReducers } from "redux";
import { stepReducer } from "./step";

export function createAppStore() {
  return createStore(combineReducers({ step: stepReducer }));
}
