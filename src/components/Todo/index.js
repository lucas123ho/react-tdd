import React, { useRef, useState } from "react";

function Todo() {
  const inputRef = useRef(null);
  const [tasks, setTasks] = useState([]);
  function setInputValue(value) {
    inputRef.current.value = value;
  }
  function addNewTask(e) {
    e.preventDefault();
    const newTask = inputRef.current.value;
    setTasks([newTask, ...tasks]);
    setInputValue("");
  }
  return (
    <>
      <form>
        <input
          data-testid="input-todo"
          ref={inputRef}
          placeholder="Adicionar nova tarefa"
        />
        <button data-testid="button-todo" onClick={addNewTask}>
          Adionar
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <td>Tarefas</td>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task + Math.random()}>
              <td>{task}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todo;
