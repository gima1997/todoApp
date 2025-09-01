import styles from "./TodoStats.module.css";

export default function TodoStats({ total, completed }) {
  return (
    <div className={styles.statsCard}>
      <div className={styles.statsRow}>
        <span className={styles.label}>Total Todos:</span>
        <span className={styles.value}>{total}</span>
      </div>
      <div className={styles.statsRow}>
        <span className={styles.label}>Completed:</span>
        <span className={styles.value}>{completed}</span>
      </div>
    </div>
  );
}
