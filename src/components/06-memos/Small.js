import React from "react";

const Small = React.memo(({ value }) => {
  console.log("llamando :(");
  return <small>{value}</small>;
});

export default Small;
