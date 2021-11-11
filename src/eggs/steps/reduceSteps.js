import { NEXT, FINISH } from "../step";

export function reduceSteps({ reduce }) {
  reduce("steps", (state = [], action) => {
    switch (action.type) {
      case NEXT: {
        return [...state, { keystrokes: action.keystrokes }];
      }

      case FINISH: {
        return [];
      }

      default:
        return state;
    }
  });
}
