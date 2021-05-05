import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTask, updateTodo } from '../redux/actions';

function TodoItem({ todo }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();
    

    const handleClick = () => {
        dispatch(toggleTask(todo.id));
      };

    return (
        <div>
            <div className="row mx-2 align-items-center">
                <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4 style={{ background: todo.isDone ? "#00FF00" : "none"}}>{todo.name}</h4>}
                </div>
                <button  className="btn btn-primary m-2" onClick={handleClick}>
            {todo.isDone ? "Done" : "Undone"}</button>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
