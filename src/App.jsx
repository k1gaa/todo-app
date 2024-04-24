import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Todo app</h1>
          <h2 className={styles.subheading__text}>2 tasks left</h2>
        </div>
        <button className={styles.show__input__btn}>+</button>
      </div>
      <form className={styles.form}>
        <input type="text" className={styles.input} />
        <button className={styles.add__btn}>Add</button>
      </form>
    </div>
  );
}

export default App;
