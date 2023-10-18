import { test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import App from "./App";
import TodoTable from "./TodoTable";

test("renders App component", () => {
    render(<App />);
    const header = screen.getByText(/^my todolist$/i); //regex matching full string, ignore case
    expect(header).toBeInTheDocument();
});

test("add todo/row", () => {
    render(<App />);
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "test adding todo row" } });
    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "29.01.2023" } });
    const button = screen.getByText("Add");
    fireEvent.click(button);
    const table = screen.getByRole("table");
    expect(table).toHaveTextContent(/test adding todo row/i);
});

test("clear all", () => {
    render(<App />)
    const desc = screen.getByPlaceholderText("Description");
    fireEvent.change(desc, { target: { value: "to be deleted" } });
    const date = screen.getByPlaceholderText("Date");
    fireEvent.change(date, { target: { value: "29.01.2023" } });
    const button = screen.getByText("Clear All");
    fireEvent.click(button);
    const table = screen.getByRole("table");
    expect(table).not.toHaveTextContent(/to be deleted/i);
});