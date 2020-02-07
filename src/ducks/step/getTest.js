import exampleData from "../../example-data";
import { getStep } from "./getStep";

export function getTest(state) {
  const { index } = getStep(state);
  return exampleData.steps[index].test;
}
