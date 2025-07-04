import { useEffect, useState } from 'react';
import './App.css';
import CheckAllAndRemaining from './components/CheckAllAndRemaining';
import ClearCompletedBtn from './components/ClearCompletedBtn';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoForm';
import TodoLists from "./components/TodoLists"
function App() {
  const [todos, setTodos] = useState([]);
  const [filterTodo, setFilterTodo] = useState(todos);

  useEffect(() => {
    fetch('http://localhost:4000/todos')
      .then(res => res.json())
      .then((todos) => {
        setTodos(todos);
        setFilterTodo(todos);
      })
      ;
  }, [])

  console.log(todos);


  const addTodo = (todo) => {
    fetch('http://localhost:4000/todos', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    })

    setTodos((prevState) => [...prevState, todo])
  }

  const deleteToDo = (todoId) => {

    //server
    fetch(`http://localhost:4000/todos/${todoId}`, {
      method: "DELETE"
    })


    //client

    setTodos(prevState => prevState.filter(todo => todo.id !== todoId))
  }


  let updateTodo = (todo) => {

    //server
    fetch(`http://localhost:4000/todos/${todo.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo)
    })




    // client
    setTodos(prevState => prevState.map(t => {

      if (t.id === todo.id) {
        return todo;
      }
      return t;
    }))

  }

  let checkAll = () => {

    todos.forEach(t => {
      t.completed = true;
      updateTodo(t);
    });

    setTodos(prevState => prevState.map(t => ({ ...t, completed: true })))
  }

  let remainingcount = todos.filter(t => !t.completed).length;

  let clearCompltedBtn = () => {

    todos.map((t) => {
      if (t.completed) {
        deleteToDo(t.id);
      }
    })
  }

  let filterBy = (filter) => {
    if (filter === 'all') {
      setFilterTodo(todos);
    }
    if (filter === 'active') {
      setFilterTodo(todos.filter((t) => !t.completed))

    }
    if (filter === 'completed') {
      setFilterTodo(todos.filter((t) => t.completed))

    }
  }


  return (
    <div className="App">
      <div className="todo-container">
        <h1>📝 My To-Do List</h1>

        <TodoForm addTodo={addTodo} />
        <TodoLists todos={filterTodo} deleteToDo={deleteToDo} updateTodo={updateTodo} />
        <CheckAllAndRemaining remainingcount={remainingcount} checkAll={checkAll} />
        <div className="other-buttons-container">
          <TodoFilter filterBy={filterBy} />
          <ClearCompletedBtn clearCompltedBtn={clearCompltedBtn} />
        </div>

      </div>


    </div>
  );
}



export default App;

