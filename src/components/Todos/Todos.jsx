import "./Todos.css";

const Todos = ({ todo, handleDelete }) => {
  return (
    <div className="todos-container">
      <div className="todo-text">
        <h3>{todo.title}</h3>
        <p>{todo.describe}</p>
      </div>
      <div className="delete-shape" onClick={() => handleDelete(todo.id)}>
        <p>X</p>
      </div>
    </div>
  );
};

export default Todos;
