import { TodoState } from "../interfaces";
import { TodoAction } from "../types";
import { TODO_ADD, TODO_TOGGLE } from "../config/constants";

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TODO_ADD:
      return { ...state, todos: [...state.todos, action.payload] };
    case TODO_TOGGLE:
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
