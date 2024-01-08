import React, { useEffect, useState } from "react";

export const Todo = () => {
    const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const [todo, settodo] = useState('')
    const [todos, settodos] = useState(initialTodos);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleinput = (e) => {
        
        settodo(e.target.value);
    }

    const handlesubmit = (e) => {
        
        settodos([...todos, todo])
        console.log(todos)
    }

    const setinput = (e) => {
        // setselectedtodo(e.target.textContent)
        settodo(e.target.textContent)
    }

    return (
        <div>
            <label>Add a new todo</label>
            <br />
            <input 
            type="text" 
            placeholder="add todo"
            onChange={handleinput}
            value={todo}
            />
        <br />
        <button onClick={handlesubmit}>add todo</button>
        
        {/* {todo} */}
        {console.log(todos)}
        {

            todos.map((todo, index) => {
                return (
                
                <div key={index}>
                    <h1 onClick={setinput}>{todo}</h1>
                </div>)
            })
                
        }
        
        </div>

    )
}