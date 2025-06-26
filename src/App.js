
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="todo-container">
        <h1>📝 My To-Do List</h1>

        <form class="input-group" action="#">
          <input type="text" placeholder="Add a new task..." name="task" required />
          <button type="submit">Add</button>
        </form>

        <ul class="task-list">
          <li>
            <label class="task">
              <input type="checkbox" />
              <span class="custom-checkbox"></span>
              <span class="task-text">Buy groceries</span>
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
          <li>
            <label class="task">
              <input type="checkbox" />
              <span class="custom-checkbox"></span>
              <span class="task-text line-through">Finish homework</span>
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
          <li>
            <label class="task">
              <input type="checkbox" />
              <span class="custom-checkbox"></span>
              <span class="task-text">Read a book</span>
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
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
        </div>

      </div>


    </div>
  );
}

export default App;

