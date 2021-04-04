export const heavyProcess = (iteraciones) => {
  for (let i = 0; i < iteraciones; i++) {
    console.log("Here we go!");
  }
  return `${iteraciones} iteraciones realizadas.`;
};
