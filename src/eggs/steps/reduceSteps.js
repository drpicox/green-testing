import { NEXT } from "../step/next";

export function reduceSteps({ reduce }) {
  reduce("steps", (state = [], action) => {
    switch (action.type) {
      case NEXT: {
        return [...state, { keystrokes: action.keystrokes }];
      }
      default:
        return state;
    }
  });
}
