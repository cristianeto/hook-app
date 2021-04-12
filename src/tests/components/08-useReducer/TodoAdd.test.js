import { shallow } from "enzyme";
import TodoAdd from "../../../components/08-useReducer/TodoAdd";

describe("Testing for <TodoAdd/>", () => {
  const handleAddTodo = jest.fn();
  const wrapper = shallow(<TodoAdd onAddTodo={handleAddTodo} />);

  test("should return <TodoAdd/> component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should not allow submit when is empty input", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");
    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("should call onAddTodo function once", () => {
    /**Arrange */
    const value = "Aprender React";
    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });
    const formSubmit = wrapper.find("form").prop("onSubmit");
    /** ? Act*/
    formSubmit({ preventDefault() {} });
    /* Assert ? llamada a la function onAddTodo 1 vez*/
    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe(""); //?se llamo a la funcion reset, se comprueba q se vació o limpió el input
  });
});
