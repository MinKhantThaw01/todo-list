

const TodoForm = () => {
    return (
        <form className="input-group" action="#">
            <input type="text" placeholder="Add a new task..." name="task" required />
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm
