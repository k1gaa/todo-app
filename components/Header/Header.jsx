import styles from "./Header.module.css";

export function Header({ isFormShown, onButtonClick }) {
  return (
    <div className={styles.header}>
      <div>
        <h1>Todo app</h1>
        <h2 className={styles.subheading__text}>2 tasks left</h2>
      </div>
      {!isFormShown && (
        <button onClick={onButtonClick} className={styles.show__input__btn}>
          +
        </button>
      )}
    </div>
  );
}
