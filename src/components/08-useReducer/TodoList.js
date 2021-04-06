import React from "react";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onDelete, onDone }) => {
  return (
    <ul className="list-group list-group-flush">
      {todos.map((todo, index) => (
        <TodoListItem
          index={index}
          key={todo.id}
          onDelete={onDelete}
          onDone={onDone}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
