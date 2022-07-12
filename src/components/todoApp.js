import { useState } from "react";
import Todo from "./todo";
import "./todoApp.css";
import todoImg from "../assets/todo.png";

export default function TodoApp() {
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setTitle("");
  }

  function handleChange(e) {
    const value = e.target.value;
    setTitle(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };

    const temp = [...todo];
    temp.unshift(newTodo);

    setTodo(temp);

    setTitle("");
  }

  function handleUpdate(id, value) {
    const temp = [...todo];
    const item = temp.find((item) => item.id === id);
    item.title = value;
    setTodo(temp);
  }

  function handleDelete(id) {
    const temp = todo.filter((item) => item.id !== id);
    setTodo(temp);
  }

  return (
    <div className="todoContainer">
      <h1 className="title">
        TO DO LIST
        <span className="checkboxImg">
          <img src={todoImg} alt="check box"  />
        </span>
      </h1>
      <form className="todoCreateForm" onSubmit={handleSubmit}>
        <input className="todoInput" value={title} onChange={handleChange} />
        <input
          type="submit"
          value="Create to do"
          className="btnCreate"
          onClick={handleSubmit}
        />
      </form>
      <div className="todosContainer">
        {todo.map((item) => (
          <Todo
            key={item.id}
            item={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}