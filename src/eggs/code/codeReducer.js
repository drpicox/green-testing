import exampleData from "../../example-data";
import { START, CHANGE_CODE } from "../step";

export function codeReducer(state = null, action) {
  switch (action.type) {
    case START:
      return exampleData.initialCode;

    case CHANGE_CODE:
      return action.code;

    default:
      return state;
  }
}
