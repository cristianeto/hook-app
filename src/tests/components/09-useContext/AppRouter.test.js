import React from "react";
import { mount } from "enzyme";
import { UserContext } from "../../../components/09-useContext/UserContext";
import AppRouter from "../../../components/09-useContext/AppRouter";

describe("Testing in <AppRouter /> component", () => {
  const user = {
    id: 1,
    name: "Cris",
  };
  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <AppRouter />
    </UserContext.Provider>
  );

  test("should show the component correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
