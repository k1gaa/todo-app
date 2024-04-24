import styles from "./TodoItem.module.css";

export function TodoItem({ name, done }) {
  return (
    <li className={styles.list}>
      {name} {done}
    </li>
  );
}
