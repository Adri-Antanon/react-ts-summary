import { useContext } from "react";

import TodoContext from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todoState } = useContext(TodoContext);

  return (
    <ul>
      {todoState.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          desc={todo.desc}
          completed={todo.completed}
        />
      ))}
    </ul>
  );
};
