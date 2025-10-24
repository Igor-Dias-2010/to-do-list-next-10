"use client"

import { useState } from 'react'

export default function List() {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")

    const handleInputChange = e => setInput(e.target.value)
    const handleEnterToAdd = e => { if (e.key === 'Enter') add() }

    function add() {
        if (input.trim() === "") return
        setTasks([...tasks, input])
        setInput("")
    }
    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }
    return (
        <div>
            <h1>To-do list</h1>
            <input type="text" value={input} onChange={handleInputChange} onKeyDown={handleEnterToAdd} />
            <button onClick={add}>Add</button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task} <button onClick={() => deleteTask(index)}>Delete</button></li>
                ))}
            </ul>
        </div>
    )
}