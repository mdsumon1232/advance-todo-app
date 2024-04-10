import { useState } from "react";
import "./App.css";
import NewTodo from "./components/NewTodo/NewTodo";
import Todos from "./components/Todos/Todos";

const durmyTodo = [];

function App() {
  const [allTodos, setAllTodos] = useState(durmyTodo);

  const addNewTodo = (newTodo) => {
    setAllTodos([...allTodos, newTodo]);
  };

  const handleDelete = (id) => {
    const newone = allTodos.filter((afterDelete) => afterDelete.id !== id);
    setAllTodos(newone);
  };

  return (
    <>
      <div className="todo-container">
        <h1>Todo App</h1>
        <NewTodo newtodo={addNewTodo} />
        <div className="bottom-todo">
          {allTodos.map((todo) => (
            <Todos key={todo.id} todo={todo} handleDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
