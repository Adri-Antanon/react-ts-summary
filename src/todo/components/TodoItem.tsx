import { Todo } from "../interfaces";
import { useTodos } from "../hooks/useTodos";

export const TodoItem: React.FC<Todo> = ({ completed, desc, id }) => {
  const { toggleTodo } = useTodos();
  const doubleClickHandler = () => {
    toggleTodo(id);
  };

  return (
    <li
      style={{
        cursor: "pointer",
        textDecoration: completed ? "line-through" : "",
      }}
      onDoubleClick={doubleClickHandler}
    >
      {desc}
    </li>
  );
};
