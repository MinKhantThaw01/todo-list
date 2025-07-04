import { useState } from "react"


const TodoForm = ({ addTodo }) => {

    const [todo, setTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        //add todo
        let newTodo = {
            id: Math.random().toString(),
            title: todo,
            completed: false
        }
        addTodo(newTodo)
        setTodo('');
    }


    return (
        <form className="input-group" action="#" onSubmit={handleSubmit}>
            <input type="text" placeholder="Add a new task..." value={todo} onChange={(e) => setTodo(e.target.value)} name="task" required />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm
