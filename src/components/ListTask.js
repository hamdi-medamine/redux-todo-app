import React from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'

function TodoList() {
    let todos = useSelector(state=>state);

    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <Task key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TodoList
