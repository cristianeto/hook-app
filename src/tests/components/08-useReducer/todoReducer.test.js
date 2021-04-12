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

    expect(state).toEqual([...demoTodos, newTodo]);
    expect(state.length).toBe(3);
  });
});
