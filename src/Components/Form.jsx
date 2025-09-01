import { useState } from "react";
import styles from "./Todo.module.css";

export default function Form({ setTodos, handleClear, onTaskCreated }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (task !== "") {
      setTodos((prev) => [...prev, { text: task, completed: false }]);
      setTask("");
      if (onTaskCreated) onTaskCreated();
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className={styles.input}
      />
      <button type="submit" className={styles.addBtn}>
        Add
      </button>
      <button type="button" onClick={handleClear} className={styles.clearBtn}>
        Clear
      </button>
    </form>
  );
}
