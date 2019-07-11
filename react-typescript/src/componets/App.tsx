import React, {Fragment, useState } from 'react';
//styles
import './App.module.css';

type FormElement = React.FormEvent<HTMLFormElement>

export default function App(): JSX.Element{
  const [value, setValue] = useState<string>('')
  
  
  const handleSubmit = (e: FormElement):void => {
    e.preventDefault();
    setValue('')
  }

  return (
    <Fragment>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={e => setValue(e.target.value)}required></input>
        <button type="submit">Add ToDo</button>
      </form>
    </Fragment>
  );
}


