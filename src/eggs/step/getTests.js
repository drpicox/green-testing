import { createSelector } from "reselect";
import exampleData from "../../example-data";
import { getIndex } from "./getIndex";

export const getTests = createSelector(getIndex, index =>
  exampleData.steps.slice(0, index + 1).map(s => s.test)
);
