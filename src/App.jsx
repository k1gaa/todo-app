import { TodoItem } from "../components/TodoItem/TodoItem";
import styles from "./App.module.css";
import { useState } from "react";

const todosArray = [
  {
    name: "wash dishes",
    done: true,
    id: 1,
  },
  {
    name: "go to shop",
    done: true,
    id: 2,
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h1>Todo app</h1>
          <h2 className={styles.subheading__text}>2 tasks left</h2>
        </div>
        {!isFormShown && (
          <button
            onClick={() => setIsFormShown(true)}
            className={styles.show__input__btn}
          >
            +
          </button>
        )}
      </div>
      {isFormShown && (
        <form className={styles.form}>
          <input type="text" className={styles.input} />
          <button className={styles.add__btn}>Add</button>
        </form>
      )}
      <ul>
        {todosArray.map(({ name, done, id }) => {
          return <TodoItem name={name} done={done} key={id} />;
        })}
      </ul>
    </div>
  );
}

export default App;
