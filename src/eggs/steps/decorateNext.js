import { getIndex, getKeystrokes } from "../step";

export function decorateNext(action, { state }) {
  action.keystrokes = getKeystrokes(state);
  action.index = getIndex(state);
}
