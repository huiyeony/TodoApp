import { TodosContext } from "../App";
import "./TodoItem.css";
import { useContext } from "react";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodosContext);
  const onUpdateCheckbox = () => {
    onUpdate(id);
  };
  const onDeleteTodo = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input onChange={onUpdateCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date_time">{`${
        new Date(date).getMonth() + 1
      }월 ${new Date(date).getDate()}일`}</div>
      <div className="button" onClick={onDeleteTodo}>
        -
      </div>
    </div>
  );
};
export default TodoItem;
