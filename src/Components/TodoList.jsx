import TodoItems from "./TodoItems";
import styles from "./Todo.module.css";

export default function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      <h1 className={styles.title}>Todo List</h1>
      <ul className={styles.list}>
        {todos.map((todo, index) => (
          <TodoItems
            key={index}
            todo={todo}
            index={index}
            onToggle={() => toggleComplete(index)}
            onDelete={() => deleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
}
