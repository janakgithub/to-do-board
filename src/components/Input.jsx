import React, { useState } from 'react'

const Input = ({toDoList, setToDoList}) => {

    const [input, setInput] = useState('')
    
    const hadleButtonClick = (e) =>{
        e.preventDefault();
        setToDoList([...toDoList, input])
        setInput('')
    }

  return (
    <>
        <form className='flex flex-row items-center gap-4'>
            <input  className='border rounded-lg p-2 text-2xl'
                    type='text' 
                    placeholder='Add a task...' value={input}
                    onChange={(e)=>setInput(e.target.value)}
                    />
            <button className='bg-gray-700 p-3 rounded-lg text-white hover:opacity-50'
                    onClick={hadleButtonClick} >Add</button>
        </form>
    </>
  )
}

export default Input