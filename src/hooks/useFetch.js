import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setState({
          data,
          loading: false,
          error: null,
        });
      });
  }, [url]); // Quiero q el componente se cargue cuando la " url" cambie

  return state;
};
