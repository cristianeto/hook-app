import React from "react";

const TodoListItem = ({ todo, index, onDelete, onDone }) => {
  return (
    <li className="list-group-item">
      <p
        className={`${todo.done && "complete"}`}
        onClick={() => onDone(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => onDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoListItem;
