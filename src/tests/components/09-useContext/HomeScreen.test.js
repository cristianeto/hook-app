import { mount, shallow } from "enzyme";
import React from "react";
import HomeScreen from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Testing in <HomeScreen/> component", () => {
  const user = {
    name: "Cris",
    email: "cris@domain.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
