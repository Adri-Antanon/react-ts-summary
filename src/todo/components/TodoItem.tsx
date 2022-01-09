import { Todo } from "../interfaces";

export const TodoItem: React.FC<Todo> = ({ completed, desc, id }) => {
  const doubleClickHandler = () => {
    console.log("handleDBClick", desc);
  };

  return <li onDoubleClick={doubleClickHandler}>{desc}</li>;
};
