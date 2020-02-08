import exampleData from "../../example-data";
import { getIndex } from "./getIndex";

export function isPastLastStep(state) {
  const index = getIndex(state);
  return index >= exampleData.steps.length;
}
