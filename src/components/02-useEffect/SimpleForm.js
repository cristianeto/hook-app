import React, { useEffect, useState } from "react";
import "./effects.css";

function SimpleForm(props) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  useEffect(() => {
    console.log("hello");
  }, []);

  useEffect(() => {
    console.log("formState cambió");
  }, [formState]);

  useEffect(() => {
    console.log("email cambió");
  }, [email]);

  return (
    <>
      <h1>UseEffect</h1>
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
    </>
  );
}

export default SimpleForm;
