import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../../hooks/useCounter";

describe("Testing to useCounter.js", () => {
  test("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    console.log(result);
  });
});
