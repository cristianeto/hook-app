import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

import "./effects.css";

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  useEffect(() => {
    console.log("email changing");
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="name"
          onChange={handleInputChange}
          placeholder="Tu nombre"
          type="text"
          value={name}
        />
      </div>
      <br></br>
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="email"
          onChange={handleInputChange}
          placeholder="name@example.com"
          type="text"
          value={email}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          autoComplete="off"
          className="form-control"
          name="password"
          onChange={handleInputChange}
          placeholder="password"
          type="password"
          value={password}
        />
      </div>
      <br />
      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default FormWithCustomHook;
