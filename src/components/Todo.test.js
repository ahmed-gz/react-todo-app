import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import Todo from "./Todo";

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

it("Todo renders in view mode with todo data", () => {
  const fakeTodo = {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: false
  };

  const onToggle = () => {
    console.log("toggled");
  };

  act(() => {
    render(<Todo {...fakeTodo} onToggle={onToggle} />, container);
  });

  expect(container.querySelector("form")).toBeNull();
  expect(container.querySelector('[data-testid="title"]').textContent).toBe(
    fakeTodo.title
  );
  expect(container.querySelector('[data-testid="title"]').className).toContain(
    fakeTodo.completed ? "completed" : "active"
  );

  expect(container.querySelector('[data-testid="completed"]').checked).toBe(
    fakeTodo.completed
  );
});

it("Todo renders in edit mode with data after clicking on Edit button", () => {
  const fakeTodo = {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  };

  const onToggle = () => {
    console.log("toggled");
  };

  act(() => {
    render(<Todo {...fakeTodo} onToggle={onToggle} />, container);
  });

  const editButton = container.querySelector('[data-testid="edit"]');

  Simulate.click(editButton);

  expect(container.querySelector("form")).not.toBeNull();
  expect(container.querySelector('[data-testid="title"]').tagName).toBe(
    "INPUT"
  );
  expect(container.querySelector('[data-testid="title"]').value).toBe(
    fakeTodo.title
  );

  expect(container.querySelector('[data-testid="completed"]').checked).toBe(
    fakeTodo.completed
  );
  expect(container.querySelector('[data-testid="submit"]')).not.toBeNull();
  expect(container.querySelector('[data-testid="cancel"]')).not.toBeNull();
});
