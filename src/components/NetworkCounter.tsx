import { useReducer } from "react";

import counterReducer, {
  INCREMENT,
  DECREMENT,
  CUSTOM,
  initialState,
} from "../reducers/NetworkCounterReducer";

const NetworkCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <>
      <h2>Counter: {state.counter}</h2>
      <button
        onClick={() => dispatch({ type: INCREMENT })}
        className="btn btn-outline-info"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: DECREMENT })}
        className="btn btn-outline-info"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: CUSTOM, payload: 100 })}
        className="btn btn-outline-danger"
      >
        Custom
      </button>
    </>
  );
};

export default NetworkCounter;
