import { useEffect, useState } from "react";
import "./App.css";
import initialTasks from "../../tasks.json";
import Form from "../Form/Form";
import Filter from "../Filter/Filter";
import TaskList from "../TaskList/TaskList";

//!============================
export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedData = localStorage.getItem("tasks");

    return savedData !== null ? JSON.parse(savedData) : initialTasks;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}
