import { getStep } from "./getStep";

export function getIndex(state) {
  return getStep(state)?.index;
}
