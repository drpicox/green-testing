import { createSelector } from "reselect";
import { getCode } from "./getCode";
import { getTest } from "./getTest";
import { parseAndRunTests } from "../../test";

export const getTestResult = createSelector(getCode, getTest, (code, test) => {
  const result = parseAndRunTests(code, test);
  console.log(result);
  return result;
});
