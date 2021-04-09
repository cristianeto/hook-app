import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";

describe("Testing in useFetch.js", () => {
  test("Should return the initial state by default", async () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test("Should return a data, loading in false, error in false when call fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    await waitForNextUpdate({ timeout: 2000 });

    const { data, loading, error } = result.current;

    expect(data.length).toBe(1);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test("Should return an message error when call fetch", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://reqres.in/apaai/users?pagess=2")
    );
    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe("No se pudo cargar la info.");
  });
});
