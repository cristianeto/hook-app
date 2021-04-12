import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Testing in todoReducer.js", () => {
  test("should return the default state", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("should add a new TODO", () => {
    const newTodo = { id: 3, desc: "Aprender Node", done: false };

    const state = todoReducer(demoTodos, { type: "add", payload: newTodo });

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("should delete a TODO", () => {
    const payload = 2;
    const state = todoReducer(demoTodos, { type: "delete", payload: payload });

    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[0]]);
  });

  test("should do TOGGLE of the TODO", () => {
    const payload = 1;
    const state = todoReducer(demoTodos, { type: "done", payload: payload });

    expect(state[0].done).toBe(true);
    expect(state[1]).toBe(demoTodos[1]);
  });
});
