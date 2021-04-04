import React, { useLayoutEffect, useRef, useState } from "react";

import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../03-examples/multiple.css";
import "./layout.css";

const Layout = () => {
  const { counter, increment } = useCounter(1);
  const [boxSize, setBoxSize] = useState({});

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pTag = useRef();
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote]);

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />
      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-2">
          {quote}
        </p>
      </blockquote>
      <button className="btn btn-primary" onClick={increment}>
        Siguiente quote
      </button>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
    </div>
  );
};

export default Layout;
