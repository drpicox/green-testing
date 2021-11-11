import exampleData from "../../example-data";
import { START } from "./start";
import { CHANGE_CODE } from "./changeCode";
import { NEXT } from "./next";
import { FINISH } from "./finish";

export function stepReducer(state = null, action) {
  switch (action.type) {
    case START: {
      return {
        index: 0,
        keystrokes: 0,
        code: exampleData.initialCode
      };
    }

    case CHANGE_CODE: {
      return {
        ...state,
        keystrokes: state.keystrokes + 1,
        code: action.code
      };
    }

    case NEXT: {
      return {
        ...state,
        index: state.index + 1,
        keystrokes: 0
      };
    }

    case FINISH: {
      return null;
    }

    default:
      return state;
  }
}
