import { stepReducer } from "./stepReducer";

export * from "./areTestsPassing";
export * from "./changeCode";
export * from "./finish";
export * from "./getIndex";
export * from "./getKeystrokes";
export * from "./getStep";
export * from "./getTests";
export * from "./getTestsResult";
export * from "./isLastStep";
export * from "./isPastLastStep";
export * from "./next";
export * from "./start";

export default ({ reduce }) => reduce("step", stepReducer);
