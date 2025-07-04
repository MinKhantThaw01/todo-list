import Todo from "./Todo.js"
const TodoLists = ({ todos, deleteToDo, updateTodo }) => {
    return (

        <ul className="task-list">
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} deleteToDo={deleteToDo} updateTodo={updateTodo} />
            )
            )}



        </ul >
    )
}

export default TodoLists
