import React, { useEffect } from "react";

function Message(props) {
  useEffect(() => {
    console.log("componente montado");
    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <div>
      <h3>Genial!</h3>
    </div>
  );
}

export default Message;
