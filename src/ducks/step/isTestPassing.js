import { getTestResult } from "./getTestResult";

export function isTestPassing(state) {
  return getTestResult(state) === null;
}
