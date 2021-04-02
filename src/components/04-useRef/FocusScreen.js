import React, { useRef } from "react";

import "./focus.css";

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div>
      <h1> FocusScreen</h1>
      <hr />
      <input
        className="form-control"
        placeholder="nombre"
        autoFocus
        ref={inputRef}
      />

      <button className="btn btn-outline-primary mt-4" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
