import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import { createStore } from "redux";
// import reducers from "./reducers";
import { Provider } from "react-redux";
import store from "./store";

//Store - global state
// const store = createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
