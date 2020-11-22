import React, { useReducer } from "react";
import { reducer, initialState } from "./reducers/reducer";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";


function App() {
  // (3) Using the `reducer` hook, set up state in your component.
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  // Build a function that will dispatch an action to add a new todo
  const addTodo = (input) => {
    const newTodo = {
      todo: input,
      completed: false,
      id: 4,
    };
    dispatch({ type: "Add Todo", payload: newTodo });
  };

  // Build a function that will dispatch an action to toggle a todo's completed field

  const handleComplete = (id) => {
    dispatch({ type: "Mark Todo Completed", payload: id });
  };
// Build a function that will dispatch an action to filter out any completed todos

  const clearCompleted = () => {
    dispatch({ type: "Clear Completed Todo" });
  };

  return (
    // Now render your list of todos from your reducer in your app
    <div className="App">
      <h1>To Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList state={state} handleComplete={handleComplete} />

      {/* Invoke clearCompleted function when you click on a "Clear Completed" button */}

      <button onClick={(e) => {
          e.preventDefault();
          clearCompleted();
        }}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default App;

  