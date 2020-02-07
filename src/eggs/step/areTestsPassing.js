import { getTestsResult } from "./getTestsResult";

export function areTestsPassing(state) {
  return getTestsResult(state).every(r => r === null);
}
