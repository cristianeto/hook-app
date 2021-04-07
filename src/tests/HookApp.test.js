import React from "react";
import { shallow } from "enzyme";

import HookApp from "../HookApp";

describe("Testing to HookApp.js", () => {
  test("should be return the HookApp component", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
