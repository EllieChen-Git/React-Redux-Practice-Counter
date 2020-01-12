import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {counter}</h1>
      {isLogged ? <h3>User logged in</h3> : ""}

      <button
        onClick={() => {
          dispatch(increment(5));
        }}
      >
        +5
      </button>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -5
      </button>
    </>
  );
}

export default App;
