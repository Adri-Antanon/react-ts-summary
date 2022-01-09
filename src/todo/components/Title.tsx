import { useTodos } from "../hooks/useTodos";
const Title = () => {
  const { pendingTodos } = useTodos();
  return <h1>Todo: {pendingTodos.length}</h1>;
};

export default Title;
