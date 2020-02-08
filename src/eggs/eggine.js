import { combineReducers, createStore, applyMiddleware, compose } from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function runActionCbs(cbs, action, opts) {
  cbs
    .filter(([type]) => type === action.type)
    .forEach(([, cb]) => cb(action, opts));
}

function eggMiddleware(protocol) {
  const decorators = [];
  const afters = [];

  protocol.decorateAction = (actionType, cb) =>
    void decorators.push([actionType, cb]);
  protocol.afterAction = (actionType, cb) => void afters.push([actionType, cb]);

  protocol.appendMiddleware(store => next => action => {
    runActionCbs(decorators, action, { state: store.getState() });
    next(action);
    runActionCbs(afters, action, { state: store.getState() });
  });
}

export function hatchStore(...eggs) {
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

  eggMiddleware(protocol);
  eggs.forEach(egg => egg(protocol));
  return createStore(
    combineReducers(reducers),
    composeEnhancers(applyMiddleware(...middlewareList))
  );
}
