import { Form } from "../components/Form/Form";
import { Header } from "../components/Header/Header";
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
      <Header
        arrayLength={todosArray.length}
        isFormShown={isFormShown}
        onButtonClick={() => setIsFormShown(true)}
      />
      {isFormShown && (
        <Form
          onFormSubmit={(inputValue) => {
            setTodosArray((todos) => [
              ...todos,
              {
                name: inputValue,
                done: false,
                id: Math.random(),
              },
            ]);
          }}
        />
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
