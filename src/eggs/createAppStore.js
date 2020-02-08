import code from "./code";
import step from "./step";
import steps from "./steps";
import { hatchStore } from "./eggine";

export function createAppStore() {
  return hatchStore(code, step, steps);
}
