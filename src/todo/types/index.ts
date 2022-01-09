import { Todo, TodoState } from "../interfaces/index";

export type TodoAction =
  | { type: "todo/add"; payload: Todo }
  | { type: "todo/toggle"; payload: { id: string } };

export type TodoContextProps = {
  todoState: TodoState;
};
