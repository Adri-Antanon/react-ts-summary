import { type } from "os";
export const initialState = {
  counter: 0,
};
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const CUSTOM = "CUSTOM";

type ActionType =
  | {
      type: "INCREMENT";
    }
  | { type: "DECREMENT" }
  | { type: "CUSTOM"; payload: number };

const counterReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };
    case CUSTOM:
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

export default counterReducer;
