import { act } from "@testing-library/react";
import { mount, shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Testing in <TodoApp/> component", () => {
  const wrapper = shallow(<TodoApp />);
  Storage.prototype.setItem = jest.fn(() => {});

  test("should return the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should add a new todo", () => {
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find("TodoAdd").prop("onAddTodo")(demoTodos[0]);
      wrapper.find("TodoAdd").prop("onAddTodo")(demoTodos[1]);
    });

    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (2)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });

  test("should delete a TODO", () => {
    wrapper.find("TodoAdd").prop("onAddTodo")(demoTodos[0]);
    wrapper.find("TodoList").prop("onDelete")(demoTodos[0].id);
    expect(wrapper.find("h1").text().trim()).toBe("TodoApp (0)");
  });
});
