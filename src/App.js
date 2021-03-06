import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
// import { connect } from "react-redux";

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

// const mapStateToProps = state => {
//   return {
//     number: state.counter
//   };
// };

export default App;
// export default connect(mapStateToProps)(App);
