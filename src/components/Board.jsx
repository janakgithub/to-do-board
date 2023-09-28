import React from 'react'

const Board = ({element, index, toDoList, setToDoList}) => {
 
    const handleDelete = () =>{
        let removeIndex = toDoList.indexOf(element);
        toDoList.splice(removeIndex,1);
        setToDoList(toDoList.filter((e,i)=>index===removeIndex))
    }    
 
    return (
    <div className='max-w-lg flex flex-col items-center justify-center border rounded-xl text-lg'>
      <p className='mt-2'>{element}</p>
      <button onClick={handleDelete} className='bg-red-500 text-white rounded-lg py-1 px-2 mt-4 mb-4'>Delete</button>
    </div>
  )
}

export default Board