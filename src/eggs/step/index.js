import { stepReducer } from "./stepReducer";

export * from "./changeCode";
export * from "./getCode";
export * from "./getStep";
export * from "./getTests";
export * from "./getTestsResult";
export * from "./areTestsPassing";
export * from "./next";
export * from "./start";

export default ({ reduce }) => reduce("step", stepReducer);
