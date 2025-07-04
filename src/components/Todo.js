

import React, { useState } from 'react'

export default function Todo({ todo, deleteToDo, updateTodo, checkedTodo }) {


    let [isEdit, setIsEdit] = useState(false);
    let [updateTitle, setUpdateTitle] = useState(todo.title);
    let updateHandler = (e) => {
        e.preventDefault();

        let updatedTodo = {
            id: todo.id,
            title: updateTitle,
            completed: todo.completed
        }
        updateTodo(updatedTodo);
        setIsEdit(false);
    }

    let handleCheckBox = () => {
        let updatedTodo = {
            id: todo.id,
            title: updateTitle,
            completed: !todo.completed
        }
        updateTodo(updatedTodo);
    }
    return (
        <li >
            <label className="task">
                <input type="checkbox" checked={todo.completed} onChange={handleCheckBox} />
                <span className="custom-checkbox"></span>
                {!isEdit && <span onDoubleClick={() => setIsEdit(true)} className={`task-text ${todo.completed ? "line-through" : ""}`}> {todo.title}</span>
                }
                <form onSubmit={updateHandler}>
                    {isEdit && <input type="text" onChange={(e) => setUpdateTitle(e.target.value)} value={updateTitle} className='edit-form' />}
                </form>
                <button className="x-button" onClick={() => deleteToDo(todo.id)}>
                    <svg
                        className="x-button-icon"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </label>
        </li >
    )
}
