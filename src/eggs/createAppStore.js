import eggStep from "./step";
import { createEggStore } from "./eggine";

export function createAppStore() {
  return createEggStore(eggStep);
}
