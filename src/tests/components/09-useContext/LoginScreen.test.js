import { mount } from "enzyme";
import LoginScreen from "../../../components/09-useContext/LoginScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Testing for <LoginScreen/> component", () => {
  //const setUser = { id: "1234", name: "Cristian Guamán" };

  const setUser = jest.fn();

  const wrapper = mount(
    <UserContext.Provider value={{ setUser }}>
      <LoginScreen />
    </UserContext.Provider>
  );

  test("should render the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should execute the setUser with the waited result", () => {
    wrapper.find("button").prop("onClick")();
    expect(setUser).toHaveBeenCalledWith({
      id: "1234",
      name: "Cristian Guamán",
    });
  });
});
