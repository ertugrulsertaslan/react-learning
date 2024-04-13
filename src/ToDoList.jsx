import React, { useState } from "react";

function ToDoList() {
  const [tasks, setTask] = useState(["Eat Breakfast", "Take a Shower"]);
  const [newTask, setNewTask] = useState("");
  const isDisabled =
    tasks.length > 2 || tasks.includes(newTask) || newTask.trim() == "";

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    setTask((t) => [...t, newTask]);
    setNewTask("");
  }

  function deleteTask(index) {
    const updatedTask = tasks.filter((_, i) => i !== index);
    setTask(updatedTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      // swaps two elements
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }
  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      // swaps two elements
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTask(updatedTasks);
    }
  }

  return (
    <div className="text-center">
      <h2 className="font-bold text-white m-2 text-2xl">To-Do-List</h2>
      <div className="mt-2 mb-3">
        <input
          className="w-36 h-8 bg-gray-500 placeholder-white text-white"
          type="text"
          placeholder=" Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button
          disabled={isDisabled}
          className="w-14 h-8 bg-green-500 ms-3 disabled:bg-gray-400 text-white"
          onClick={addTask}
        >
          Add
        </button>
        {tasks.includes(newTask) && (
          <span className="text-yellow-200 mb-2"> Task must be unique</span>
        )}
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={task}>
            <span className="text-white w-28 inline-block">{task}</span>
            <button
              className="mb-2 ms-1 p-1 bg-red-500 text-white"
              onClick={() => deleteTask(index)}
            >
              Delete
            </button>
            <button
              className="h-8 ms-2 bg-orange-500"
              onClick={() => moveTaskUp(index)}
            >
              👆
            </button>
            <button
              className="h-8 ms-2  bg-orange-500"
              onClick={() => moveTaskDown(index)}
            >
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
