import React from "react";
import { useForm } from "../../hooks/useForm";

const TodoAdd = ({ onAddTodo }) => {
  //? usnado el hook personalizado llamado useForm
  //const [formValues, handleInputCange] = useForm({
  const [{ description }, handleInputCange, reset] = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    onAddTodo(newTodo);
    reset();
  };
  return (
    <>
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
    </>
  );
};

export default TodoAdd;
