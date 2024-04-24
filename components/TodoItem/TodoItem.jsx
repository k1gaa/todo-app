import styles from "./TodoItem.module.css";

export function TodoItem({ name, done, onDoneSubmit, onRemoveSubmit }) {
  return (
    <li className={styles.list}>
      <p className={`${done && styles["done-list"]}`}>{name}</p>
      <div className={styles.container}>
        {!done && (
          <button onClick={onDoneSubmit} className={styles.done__btn}>
            Done
          </button>
        )}
        <button onClick={onRemoveSubmit} className={styles.remove__btn}>
          Remove
        </button>
      </div>
    </li>
  );
}
