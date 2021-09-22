import { Todo } from "app/feature/todo";
import { useAppDispatch } from "app/hooks";
import {
  deleteTodo as deleteTodoAction,
  toggleDone as toggleDoneAction,
} from "app/feature/todo";
interface Props {
  todo: Todo;
}

const TodoComponent: React.FC<Props> = ({ todo }) => {
  const dispatch = useAppDispatch();

  const deleteTodo = () => {
    if (typeof todo.id !== "number") return;
    dispatch(deleteTodoAction(todo.id));
  };

  const toggleDone = () => {
    if (typeof todo.id !== "number") return;
    dispatch(toggleDoneAction(todo.id));
  };

  return (
    <div className="flex" style={{ justifyContent: "space-between" }}>
      <div>
        <h2>{String(todo.name)}</h2>
        <p>due: {new Date(todo.dueDate).toLocaleDateString()}</p>
        <input
          type="checkbox"
          defaultChecked={todo.done}
          onChange={toggleDone}
        />
        &nbsp;{" "}
        <span className="text-blue-800 text-opacity-60">
          {todo.done ? "DONE" : "to do"}
        </span>
      </div>
      <div>
        <button className="btn-danger" onClick={deleteTodo}>
          delete
        </button>
      </div>
    </div>
  );
};

export default TodoComponent;
