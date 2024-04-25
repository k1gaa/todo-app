import { tasksCount } from "../../utils/tasksCount";
import styles from "./Header.module.css";

export function Header({ isFormShown, onButtonClick, arrayLength }) {
  return (
    <div className={styles.header}>
      <div>
        <h1>Todo app</h1>
        <h2 className={styles.subheading__text}>{tasksCount(arrayLength)}</h2>
      </div>
      {!isFormShown && (
        <button onClick={onButtonClick} className={styles.show__input__btn}>
          +
        </button>
      )}
    </div>
  );
}
