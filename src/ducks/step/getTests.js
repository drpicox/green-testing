import { createSelector } from "reselect";
import exampleData from "../../example-data";
import { getStep } from "./getStep";

const getIndex = state => getStep(state).index;

export const getTests = createSelector(getIndex, index =>
  exampleData.steps.slice(0, index + 1).map(s => s.test)
);
