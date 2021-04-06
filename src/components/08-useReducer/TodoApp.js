import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

import "./styles.css";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
  // return [
  //   {
  //     id: new Date().getTime(),
  //     desc: "Aprender React",
  //     done: false,
  //   },
  // ];
};

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const handleDelete = (idTodo) => {
    const action = {
      type: "delete",
      payload: idTodo,
    };
    dispatch(action);
  };

  const handleDone = (idTodo) => {
    dispatch({ type: "done", payload: idTodo });
  };

  const handleAddTodo = (newTodo) => {
    dispatch({ type: "add", payload: newTodo });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); ///Rl rfrcto esta viendo que los todos cambiaron, cada cambio en el reducer de todos, se dispara el useEFfect

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList todos={todos} onDelete={handleDelete} onDone={handleDone} />
        </div>
        <div className="col-5">
          <TodoAdd onAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
