import React, {Fragment} from 'react';
//styles
import './App.module.css';

export default function App(): JSX.Element{
  return (
    <Fragment>
      <h1>To Do List</h1>
      <form>
        <input type="text" required></input>
        <button type="submit">Add ToDo</button>
      </form>
    </Fragment>
  );
}


