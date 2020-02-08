import exampleData from "../../example-data";
import { getIndex } from "./getIndex";

export function isLastStep(state) {
  const index = getIndex(state);
  return index === exampleData.steps.length - 1;
}
