import styles from "./Notification.module.css";

export default function Notification({ message, type, onClose }) {
  if (!message) return null;
  return (
    <div className={styles.notification + " " + styles[type]}>
      <span>{message}</span>
      <button className={styles.closeBtn} onClick={onClose}>
        &times;
      </button>
    </div>
  );
}
