import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./NewTodo.css";

const NewTodo = ({ newtodo }) => {
  const [todos, setTodos] = useState({ id: 0, title: "", describe: "" });
  const { id, title, describe } = todos;
  const handleTodos = (e) => {
    const fieldName = e.target.name;
    if (fieldName === "title") {
      setTodos({ id, title: e.target.value, describe });
    } else if (fieldName === "describe") {
      setTodos({ id, title, describe: e.target.value });
    }
  };

  const handleFormData = (e) => {
    setTodos({ id: uuidv4(), title, describe });
    e.preventDefault();
    newtodo(todos);
    setTodos({ id: null, title: "", describe: "" });
  };

  return (
    <div className="top-todo">
      <form className="form" onSubmit={handleFormData}>
        <div className="form-input">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={handleTodos}
          />
        </div>
        <div className="form-input">
          <label htmlFor="describe">Describe: </label>
          <textarea
            name="describe"
            id="describe"
            value={describe}
            onChange={handleTodos}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <button type="submit" className="todo-btn">
          ADD TODO
        </button>
      </form>
    </div>
  );
};

export default NewTodo;
