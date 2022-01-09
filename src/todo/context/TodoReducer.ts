import { TodoState } from "../interfaces";
import { TodoAction } from "../types";
import { TODO_ADD } from "../config/constants";

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }
};
