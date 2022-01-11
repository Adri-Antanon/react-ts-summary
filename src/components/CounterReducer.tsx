import { useReducer } from "react";
import * as counterActions from "../actions";
import {
  counterReducer,
  INITIAL_COUNTER_STATE,
} from "../reducers/counter-reducer";

export const CounterReducer: React.FC = () => {
  const [counterState, dispatch] = useReducer(
    counterReducer,
    INITIAL_COUNTER_STATE
  );

  const { counter, previous, changes } = counterState;

  const handleClick = (value: number = 1): void => {
    dispatch(counterActions.doIncreaseBy(value));
  };

  const resetHandler = (): void => {
    dispatch(counterActions.doReset());
  };
  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <h1>Counter Previous: {previous}</h1>
      <h1>Counter Changes: {changes}</h1>
      <button onClick={() => handleClick(2)}>+2</button>
      <button onClick={() => handleClick()}>+1</button>
      <button onClick={() => resetHandler()}>reset</button>
    </>
  );
};
