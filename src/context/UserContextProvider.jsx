import React, { useState } from 'react'
import TodoContext from './TodoContexts'
import { useEffect } from 'react'

const UserContextProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem("todos")
        return localTodos ? JSON.parse(localTodos) : []
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((element, i) => i !== id))
    }
    return (
        <TodoContext.Provider value={{ todos, setTodos, addTodo, removeTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default UserContextProvider
