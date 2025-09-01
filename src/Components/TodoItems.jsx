import styles from "./TodoItems.module.css";

export default function TodoItems({ index, todo, onToggle, onDelete }) {
  return (
    <li
      className={styles.item + (todo.completed ? " " + styles.completed : "")}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span
        onClick={onToggle}
        style={{ cursor: "pointer", userSelect: "none", flex: 1 }}
        title="Click to toggle completed"
      >
        {todo.text}
      </span>
      <button
        className={styles.deleteBtn}
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        title="Delete task"
      >
        &#10005;
      </button>
    </li>
  );
}
