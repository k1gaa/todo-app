import styles from "./Form.module.css";

export function Form() {
  return (
    <form className={styles.form}>
      <input type="text" className={styles.input} />
      <button
        onClick={(e) => {
          e.preventDefault();
        }}
        className={styles.add__btn}
      >
        Add
      </button>
    </form>
  );
}
