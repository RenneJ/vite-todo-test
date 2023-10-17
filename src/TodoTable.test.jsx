import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest"
import TodoTable from "./TodoTable";

test("renders TodoTable component", () => {
    const row = [
        {desc: "Test ToDo", date: "23.10.2023"}
    ];
    render(<TodoTable todos = { row }/>);
    const table = screen.getByRole("table");
    expect(table).toHaveTextContent(/test todo/i);
})