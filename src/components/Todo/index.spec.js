import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Todo from "./index";

describe("Test for todo component", () => {
  it("Should add new task", async () => {
    const { getByTestId, getByText } = render(<Todo />);
    const textInputTodo = "New task";
    // Digitando nova tarefa
    const inputTodo = getByTestId("input-todo");
    fireEvent.change(inputTodo, { target: { value: textInputTodo} });
    expect(inputTodo.value).toEqual(textInputTodo);
    // Apertando botão para adicionar nova tarefa
    const buttonTodo = getByTestId("button-todo");
    fireEvent.click(buttonTodo);
    // Buscando nova tarefa adicionada na tabela de tarefas
    const newTaskAdded = getByText(textInputTodo);
    expect(newTaskAdded).toBeDefined();
    // Verificando se o valor do input foi zerado
    expect(inputTodo.value).toEqual("");
  });
});
