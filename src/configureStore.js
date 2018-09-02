import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/index";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

const configureStore = () => {
  const middlewares = [promiseMiddleware()];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares)
  );
  
  return store;
};
export default configureStore;
