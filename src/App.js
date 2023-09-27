import './App.css';
import Input from './Input';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([])

  return (
    <>
      <h1>ToDo Board</h1>
      <Input toDoList={toDoList} setToDoList={setToDoList} />
      <div>
        {toDoList.map((e, i) =>
          <li key={i}>{e}</li>
        )}
      </div>
    </>
  );
}

export default App;
