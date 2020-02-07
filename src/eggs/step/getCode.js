import { getStep } from "./getStep";

export function getCode(state) {
  const { code } = getStep(state);
  return code;
}
