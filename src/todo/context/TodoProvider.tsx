import { useReducer } from "react";
import TodoContext, { initialTodoState } from "./TodoContext";
import { todoReducer } from "./TodoReducer";

export const TodoProvider: React.FC = ({ children }) => {
  const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);
  return (
    <TodoContext.Provider value={{ todoState }}>
      {children}
    </TodoContext.Provider>
  );
};
