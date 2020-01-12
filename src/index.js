import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import combineReducers from "./reducers";
import { Provider } from "react-redux";

//Store - global state
const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
