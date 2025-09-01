import styles from "./Todo.module.css";

export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search tasks..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className={styles.input + " " + styles.searchBar}
    />
  );
}
