import React from "react";
import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from "../../../hooks/useFetch";
import { useCounter } from "../../../hooks/useCounter";
jest.mock("../../../hooks/useFetch");
jest.mock("../../../hooks/useCounter");

describe("Testing in MultipleCustomHooks.js", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 10,
      increment: () => {},
    });
  });

  test("Should be return a component correctly", () => {
    //? mockRetunrValue > Esto me devuelve un resultado que yo espero sin importar como este implementado el metodo
    useFetch.mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should return the information about author", () => {
    useFetch.mockReturnValue({
      data: [
        {
          author: "Cris",
          quote: "Hola mundo",
        },
      ],
      loading: false,
      error: null,
    });
    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper.find(".alert").exists()).toBe(false);
    expect(wrapper.find(".mb-2").text().trim()).toBe("Hola mundo");
    expect(wrapper.find("footer").text().trim()).toBe("Cris");
  });
});
