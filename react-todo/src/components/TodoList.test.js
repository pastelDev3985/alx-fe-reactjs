import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList.jsx";

describe("TodoApp Component", () => {
  test("renders initial state with demo todos", () => {
    // Render the TodoApp component
    render(<TodoList />);

    // Check that the TodoApp renders the correct number of todos
    const todoItems = screen.getAllByRole("listitem");
    expect(todoItems).toHaveLength(3); // Ensure 3 demo todos are rendered

    // Check for specific text of initial todos
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Master React Hooks")).toBeInTheDocument();
  });
});
describe("TodoApp Component", () => {
  test('should add a new todo when the "Add" button is clicked', () => {
    // Render the TodoApp component
    render(<TodoList />);

    // Get the input field and the "Add" button
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate user typing a new todo into the input field
    fireEvent.change(input, { target: { value: "Learn Testing" } });

    // Simulate the form submission (clicking the "Add" button)
    fireEvent.click(addButton);

    // Check that the new todo appears in the document
    expect(screen.getByText("Learn Testing")).toBeInTheDocument();
  });
});
describe("TodoApp Component", () => {
  test("should toggle a todo item between completed and not completed", () => {
    // Render the TodoApp component
    render(<TodoList />);

    // Get the first todo text and the list item element
    const todoItem = screen.getByText("Learn React");
    const listItem = todoItem.closest("li"); // Find the <li> element containing the todo item

    // Ensure the todo is not completed initially (no line-through)
    expect(listItem).not.toHaveStyle("text-decoration: line-through");

    // Click on the todo item to toggle completion (simulate user click)
    fireEvent.click(todoItem);

    // Ensure the todo is now marked as completed (has a line-through style)
    expect(listItem).toHaveStyle("text-decoration: line-through");

    // Click on the todo item again to toggle back to not completed
    fireEvent.click(todoItem);

    // Ensure the todo is no longer completed (no line-through style)
    expect(listItem).not.toHaveStyle("text-decoration: line-through");
  });
});
describe("TodoApp Component", () => {
  test('should delete a todo item when the "Delete" button is clicked', () => {
    // Render the TodoApp component
    render(<TodoList />);

    // Get the todo text for the item to be deleted
    const todoToDelete = screen.getByText("Learn React");

    // Ensure the todo is in the document before deletion
    expect(todoToDelete).toBeInTheDocument();

    // Find the delete button next to the todo item and click it
    const deleteButton = todoToDelete.nextElementSibling; // Assuming button is directly after text
    fireEvent.click(deleteButton);

    // Ensure the todo is no longer in the document after deletion
    expect(todoToDelete).not.toBeInTheDocument();
  });
});
