import { createSelector } from "reselect";
import { getCode } from "../code/getCode";
import { getTests } from "./getTests";
import { parseAndRunTests } from "../../test";

export const getTestsResult = createSelector(getCode, getTests, (code, tests) =>
  tests.map(test => parseAndRunTests(code, test))
);
