import { CounterReducerState } from "../interfaces";
import { CounterAction } from "../actions";

export const INITIAL_COUNTER_STATE: CounterReducerState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const counterReducer = (
  state: CounterReducerState,
  action: CounterAction
): CounterReducerState => {
  switch (action.type) {
    case "counter/increaseBy":
      return {
        changes: state.changes + 1,
        counter: action.payload.value + state.counter,
        previous: state.counter,
      };
    case "counter/reset":
      return { changes: 0, counter: 0, previous: 0 };
    default:
      return state;
  }
};
