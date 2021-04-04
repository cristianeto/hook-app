import React, { useCallback, useEffect, useState } from "react";
import "../05-useLayoutEffect/layout.css";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (arg) => {
      setCounter((c) => c + arg);
    },
    [setCounter]
  );

  useEffect(() => {
    //???
  }, [increment]);

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHook;
