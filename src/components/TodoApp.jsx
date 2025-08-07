import { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Add a new task
  const handleAdd = () => {
    if (task.trim() === "") return;
    const newTask = {
      id: Date.now(),
      text: task,
      completed: false,
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

  // Toggle completed status
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete task
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>📝 To-Do List</h2>
      <div style={styles.inputSection}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAdd} style={styles.addBtn}>Add</button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                ...styles.taskText,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "gray" : "black",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)} style={styles.delBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Basic styling
const styles = {
  container: {
    maxWidth: "400px",
    margin: "30px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  inputSection: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "16px",
    marginRight: "10px",
  },
  addBtn: {
    padding: "8px 16px",
    fontSize: "16px",
    cursor: "pointer",
  },
  list: {
    listStyleType: "none",
    padding: 0,
  },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  taskText: {
    cursor: "pointer",
    fontSize: "18px",
  },
  delBtn: {
    backgroundColor: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
};
