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
        <form>
            <input type='text' placeholder='Add a task...' value={input}
                    onChange={(e)=>setInput(e.target.value)}/>
            <button onClick={hadleButtonClick} >Add</button>
        </form>
    </>
  )
}

export default Input