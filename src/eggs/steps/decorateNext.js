import { getIndex, getKeystrokes } from "../step";
import { NEXT } from "../step/next";

export function decorateNext({ decorateAction }) {
  decorateAction(NEXT, (action, { state }) => {
    action.keystrokes = getKeystrokes(state);
    action.index = getIndex(state);
  });
}
