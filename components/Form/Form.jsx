import styles from "./Form.module.css";
import { useState } from "react";

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <form className={styles.form}>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        className={styles.input}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          if (inputValue !== "") onFormSubmit(inputValue);
          setInputValue("");
        }}
        className={styles.add__btn}
      >
        Add
      </button>
    </form>
  );
}
