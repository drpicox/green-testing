import { codeReducer } from "./codeReducer";

export * from "./getCode";

export default ({ reduce, decorateAction, afterAction }) => {
  reduce("code", codeReducer);
};
