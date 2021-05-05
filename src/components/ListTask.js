import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function TodoList({todos}) {
    

    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <Task key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TodoList
