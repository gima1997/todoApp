import { useState } from "react";
import TodoStats from "./TodoStats";
import TodoList from "./TodoList";
import Form from "./Form";
import Notification from "./Notification";
import SearchBar from "./SearchBar";
import styles from "./Todo.module.css";

export default function Todo({ search, setSearch }) {
  // todos: [{ text: string, completed: boolean }]
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState({
    message: "",
    type: "info",
  });

  function handleClear() {
    setTodos([]);
    setNotification({ message: "All tasks cleared!", type: "info" });
  }

  function toggleComplete(index) {
    setTodos((prev) =>
      prev.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(index) {
    const taskText = todos[index]?.text;
    if (window.confirm(`Do you want to delete: "${taskText}"?`)) {
      setTodos((prev) => prev.filter((_, i) => i !== index));
      setNotification({ message: `Task deleted!`, type: "error" });
    }
  }

  // Filter todos by search
  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );

  // Handler for task creation notification
  function handleTaskCreated() {
    setNotification({ message: "Task created!", type: "success" });
  }

  return (
    <div className={styles.container}>
      <Notification
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ message: "", type: "info" })}
      />
      <div className={styles.card + " " + styles.formCard}>
        <Form
          setTodos={setTodos}
          handleClear={handleClear}
          onTaskCreated={handleTaskCreated}
        />
      </div>
      <div className={styles.todoListCard}>
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      </div>
      <div className={styles.statsCardWrap}>
        <TodoStats
          total={todos.length}
          completed={todos.filter((t) => t.completed).length}
        />
      </div>
    </div>
  );
}
