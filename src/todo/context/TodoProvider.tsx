import { useReducer } from "react";
import TodoContext, { initialTodoState } from "./TodoContext";
import { todoReducer } from "./TodoReducer";
import { TODO_TOGGLE } from "../config/constants";

export const TodoProvider: React.FC = ({ children }) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);

  const toggleTodo = (id: string) => {
    dispatch({ type: TODO_TOGGLE, payload: { id } });
  };
  return (
    <TodoContext.Provider value={{ todoState, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
