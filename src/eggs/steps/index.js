import { decorateNext } from "./decorateNext";
import { NEXT } from "../step/next";
import { reduceSteps } from "./reduceSteps";

export * from "./getSteps";

export default ({ decorateAction, reduce }) => {
  decorateAction(NEXT, decorateNext);
  reduce("steps", reduceSteps);
};
