import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const LoginScreen = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>LoginScreen</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() => setUser({ id: "1234", name: "Cristian Guamán" })}
      >
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
