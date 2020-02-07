import { combineReducers, createStore, applyMiddleware } from "redux";

export function createEggStore(...eggs) {
  eggs = eggs.flat(Number.MAX_SAFE_INTEGER);

  const reducers = {};
  const middlewareList = [];

  const protocol = {
    reduce(name, reducer) {
      reducers[name] = reducer;
    },

    appendMiddleware(oneMiddleware) {
      middlewareList.push(oneMiddleware);
    }
  };

  eggs.forEach(egg => egg(protocol));
  return createStore(
    combineReducers(reducers),
    applyMiddleware(...middlewareList)
  );
}
