import React, { useState } from 'react'
import '../css/style.css';
function TodoList() {
    const [tasks, setTasks] = useState([])
    const [newTask, setnewTask] = useState(" ")

    const handleInputChange = (e) => {
        setnewTask(e.target.value)
    }

    const addTasks = () => {
        if (newTask.trim() !== "") {
            swal({
                title: "Good job!",
                text: "You task has been added",
                icon: "success",
                button: "Ok",
            });
            setTasks([...tasks, newTask])
            setnewTask("")
        }
    }

    const deleteTask = (index) => {
        const updateTask = tasks.filter((element, i) => i !== index)
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Your task has been deleted!", {
                icon: "success",
              });
              setTasks(updateTask)
            } else {
              swal("Your task is safe!");
            }
          });
    }

    return (
        <div className='container'>
            <div className="todo-header">
                <h1>Todo List</h1>
            </div>
            <div className="todo-input">
                <input type="text" value={newTask} onChange={(e) => handleInputChange(e)} placeholder='Enter tasks' />
                <button type='submit' onClick={addTasks} className='btn'>
                    <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                            d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill="currentColor"
                        ></path>
                    </svg>
                    <span>Add Tasks</span>
                </button>

            </div>
            <div className="todo-task">
                {tasks.map((task, index) => (
                    <div key={index} className='todo-tasks'>
                        <span>{task}</span>
                        <button onClick={() => deleteTask(index)} className='delete-btn'>Delete</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default TodoList
