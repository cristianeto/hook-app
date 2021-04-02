import React from "react";

import "./multiple.css";
import { useFetch } from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
  //const url = "https://www.breakingbadapi.com/api/quotes/1";
  const data = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  console.log(data);
  return (
    <div>
      <h1>Custom Hooks !!!</h1>
    </div>
  );
};

export default MultipleCustomHooks;
