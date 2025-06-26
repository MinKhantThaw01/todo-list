import { useEffect, useState } from 'react';
import './App.css';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import ClearCompletedBtn from './components/ClearCompletedBtn';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoLists from "./components/TodoLists"
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then(res => res.json())
      .then((todos) => setTodos(todos));
  }, [])


  const addTodo = (todo) => {
    fetch('http://localhost:3001/todos', {
      method: "POST",
      header: "application/json",
      body: JSON.stringify(todo)
    })

    setTodos((prevState) => [...prevState, todo])

  }

  return (
    <div className="App">
      <div className="todo-container">
        <h1>📝 My To-Do List</h1>

        <TodoForm addTodo={addTodo} />
        <TodoLists todos={todos} />
        <CheckAllAndRemaining />
        <div className="other-buttons-container">
          <TodoFilter />
          <ClearCompletedBtn />
        </div>

      </div>


    </div>
  );
}

export default App;

