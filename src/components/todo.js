import { useState } from "react";

export default function Todo({ item, onUpdate, onDelete}) {
  const [isEdit, setIsEdit] = useState(false);

  function FormEdit() {
    const [newValue, setNewValue] = useState(item.title);

    function handleSubmit(e) {
      e.preventDefault();
    }

    function handleChange(e) {
      const value = e.target.value;
      setNewValue(value);
    }

    function handleClickUpdateToDo(e) {
        onUpdate(item.id, newValue);
        setIsEdit(false);
    };

    return (
      <form className="todoUpdateForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todoInput"
          onChange={handleChange}
          value={newValue}
        />
        <button className="btn" onClick={handleClickUpdateToDo}> update </button>
      </form>
    );
  }

  function TodoElement() {
    return (
      <div className="todoInfo">
        <span className="todoTitle"> {item.title}</span>
        <button className="btn btn-primary" onClick={() => setIsEdit(true)}> Edit </button>
        <button  className="btnDelete" onClick={(e) => onDelete(item.id)}> Delete</button>
      </div>
    );
  }

  return <div className="todo">{isEdit ? <FormEdit /> : <TodoElement />}</div>;
}