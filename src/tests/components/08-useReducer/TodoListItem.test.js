import { shallow } from "enzyme";
import TodoListItem from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react-hooks";

describe("Testing in <TodoListItem/>", () => {
  const handleDelete = jest.fn();
  const handleDone = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      index={0}
      onDelete={handleDelete}
      onDone={handleDone}
    />
  );

  test("should return the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should call handleDelete function", () => {
    wrapper.find("button").simulate("click");
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should call handleToogle function", () => {
    wrapper.find("p").simulate("click");
    expect(handleDone).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("should show the text of my item correctly", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(`1. ${demoTodos[0].desc}`);
  });

  test("should have className complete when the TODO is done", () => {
    const todo = demoTodos[0];
    todo.done = true;
    const wrapper = shallow(<TodoListItem todo={todo} />);

    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
