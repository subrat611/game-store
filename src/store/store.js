import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// we need root-reducer (combination of multiple reducer)
// root-reducer
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

// rootreducer, <optional-default>, middlewares
export const store = createStore(rootReducer, undefined, composedEnhancers);
