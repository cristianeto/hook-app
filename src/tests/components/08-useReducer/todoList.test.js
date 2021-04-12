import TodoList from "../../../components/08-useReducer/TodoList";
import { shallow } from "enzyme";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Testing in <TodoList/>", () => {
  const handleDelete = jest.fn();
  const handleDone = jest.fn();
  const wrapper = shallow(
    <TodoList todos={demoTodos} onDelete={handleDelete} onDone={handleDone} />
  );

  test("should return the <TodoList/> componente correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should show 2 item of <TodoListItem/>", () => {
    //console.log(wrapper.find("TodoListItem").length);
    //console.log(wrapper.find("TodoListItem").at(0).props());//? encuentra el TodoListItem de la position y muestra todas las props

    expect(wrapper.find("TodoListItem").length).toBe(demoTodos.length);

    expect(wrapper.find("TodoListItem").at(0).prop("onDelete")).toEqual(
      expect.any(Function) //?espera que sea una funcion
    );
  });
});
