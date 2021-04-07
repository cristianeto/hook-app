import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("Testing to useForm.js", () => {
  const initialForm = {
    name: "cris",
    email: "cris@gmail.com",
  };

  test("Should return a default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;
    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });

  test("Should change value of form (change name)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Mathew" } });
    });
    const [formValues] = result.current;
    expect(formValues).toEqual({ ...initialForm, name: "Mathew" });
  });

  test("Should reset form with RESET", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: "name", value: "Mathew" } });
      reset();
    });
    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);
  });
});
