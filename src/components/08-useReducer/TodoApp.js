import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

import "./styles.css";
import { useForm } from "../../hooks/useForm";

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

  //? usnado el hook personalizado llamado useForm

  //const [formValues, handleInputCange] = useForm({
  const [{ description }, handleInputCange, reset] = useForm({
    description: "",
  });

  console.log(description);

  console.log(todos);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;
    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };
    const action = {
      type: "add",
      payload: newTodo,
    };
    dispatch(action);
    reset();
  };

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); ///Rl rfrcto esta viendo que los todos cambiaron, cada cambio en el reducer de todos, se dispara el useEFfect

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos.map((todo, index) => (
              <li key={todo.id} className="list-group-item">
                <p
                  className={`${todo.done && "complete"}`}
                  onClick={() => handleDone(todo.id)}
                >
                  {index + 1}. {todo.desc}
                </p>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.id)}
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              className="form-control"
              name="description"
              onChange={handleInputCange}
              placeholder="description"
              type="text"
              value={description}
            />
            <button
              type="submit"
              className="btn btn-outline-primary mt-1 btn-block"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
