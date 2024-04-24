import { TodoItem } from "../components/TodoItem/TodoItem";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [todosArray, setTodosArray] = useState([
    {
      name: "wash dishes",
      done: true,
      id: 1,
    },
    {
      name: "go to shop",
      done: false,
      id: 2,
    },
  ]);

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
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            className={styles.add__btn}
          >
            Add
          </button>
        </form>
      )}
      <ul>
        {todosArray.map(({ name, done, id }) => {
          return (
            <TodoItem
              name={name}
              done={done}
              key={id}
              onDoneSubmit={() => {
                setTodosArray((prevTodos) =>
                  prevTodos.map((todo) => {
                    if (todo.id !== id) {
                      return todo;
                    }
                    return {
                      ...todo,
                      done: true,
                    };
                  })
                );
              }}
              onRemoveSubmit={() => {
                setTodosArray((prevTodos) =>
                  prevTodos.filter((todo) => todo.id !== id)
                );
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
