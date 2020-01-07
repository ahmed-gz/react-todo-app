import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TodoFilter from "./TodoFilter";

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("TodoFilter renders with 3 filters", () => {
  act(() => {
    render(<TodoFilter />, container);
  });

  expect(container.querySelectorAll("button")).toHaveLength(3);
});
