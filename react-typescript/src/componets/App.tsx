import React, { useState } from 'react';
//styles
import styles from './App.module.css';

type FormElement = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

export default function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: FormElement): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Add a new ToDo!</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
          placeholder="Add new Todo"
        />
        <button className={styles.button} type="submit">
          Add ToDo
        </button>
      </form>
      <ul className={styles.ul}>
        {todos.map((todo: ITodo, index: number) => (
          <li
            className={styles.li}
            key={index}
            style={{ textDecoration: todo.complete ? 'line-through' : '' }}
          >
            {todo.text}
            <div className={styles.buttons}>
              <button
                className={styles.complete}
                type="button"
                onClick={() => completeTodo(index)}
              >
                {todo.complete ? 'Incomplete' : 'Complete'}
              </button>
              <button
                className={styles.remove}
                type="button"
                onClick={() => removeTodo(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
