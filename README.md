# React Redux Practice - Counter (+/-5)

- React Redux practice following a YouTube tutorial.

---

### Tutorial I followed:

- ##### Video: [Redux For Beginners | React Redux Tutorial - Dev Ed](https://www.youtube.com/watch?v=CVpUuw9XSjY)

- **Ellie's note**: A very easy to understand React-Redux toturial, explaining the basic Redux & React Redux concepts clearly. The only thing I didn't like was that the author seemed to mutate the state directly in his video.

---

### Steps:

1. src\reducers\counter.js

```javascript
export default (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    //   return state + action.payload; //added later
    case "DECREMENT":
      return state - 1;
    //   return state - action.payload; //added later
    default:
      return state;
  }
};
```

2. src\reducers\index.js

```javascript
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";
```

3. src\index.js

```javascript
import { createStore } from "redux";
import combineReducers from "./reducers";
import { Provider } from "react-redux";
```

4. src\actions\index.js

```javascript
export const increment = number => {
  return {
    type: "INCREMENT"
    // payload: number //added later
  };
};

export const decrement = number => {
  return {
    type: "DECREMENT"
    // payload: number //added later
  };
};
```

5. src\App.js

```javascript
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
}
```

---

### Dependencies:

- This project is created with 'create-react-app'.
- Redux
- React Redux
