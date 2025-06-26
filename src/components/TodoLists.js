const TodoLists = ({ todos }) => {
    return (

        <ul className="task-list">
            {todos.map((todo) => (
                <li>
                    <label className="task">
                        <input type="checkbox" />
                        <span className="custom-checkbox"></span>
                        <span className={`task-text ${todo.completed ? "line-through" : ""}`}> {todo.title}</span>
                        <button className="x-button">
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
                </li>
            )
            )}



        </ul >
    )
}

export default TodoLists
