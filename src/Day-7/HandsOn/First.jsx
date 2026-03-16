import { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish React Components" },
    { id: 2, text: "Check API documentation" },
    { id: 3, text: "Update login form validation" },
  ]);

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>My Tasks</h2>

      {tasks.length === 0 ? (
        <p>No Tasks Left! </p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderBottom: "1px solid #ddd",
              }}
            >
              <span>{task.text}</span>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  backgroundColor: "#ff4d4d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete 
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
