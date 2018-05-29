import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';

import App from "./components/app";

const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(rootReducer, middleware);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector("#app")
);
