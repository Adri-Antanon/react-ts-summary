import { createContext } from "react";

import { TodoState } from "../interfaces";
import { TodoContextProps } from "../types";

export const initialTodoState: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "Recolectar las gemas del infinito",
      completed: false,
    },
    {
      id: "2",
      desc: "Conseguir la gema del alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);

export default TodoContext;
