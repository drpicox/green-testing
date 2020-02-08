import { getStep } from "./getStep";

export function getKeystrokes(state) {
  return getStep(state).keystrokes;
}
