import './App.css';
import Board from './components/Board';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([])

  return (
    <div className='px-12'>
      <div className='flex flex-col items-center my-5 py-5 px-5'>
        <h1 className='text-3xl font-bold text-purple-700 py-5'>ToDo Board</h1>
        <Input toDoList={toDoList} setToDoList={setToDoList} />
      </div>
      <div className='flex flex-col gap-4 sm:grid sm:grid-cols-3 px-4 sm:px-8 md:px-10 ml-5 lg:px-4 items-center justify-center'>
        {toDoList.map((element, i) =>
          <Board key={i} element={element} index={i} toDoList={toDoList} setToDoList={setToDoList}/>
        )}
      </div>
    </div>
  );
}

export default App;
