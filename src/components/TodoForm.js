import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");//("") => allows only one line of text || ([]) => array of data
  const handleSubmit = e =>{
    e.preventDefault(); //prevents from reloading the page
    console.log(value);
    addTodo(value);
    setValue("") //clear the input
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Enter things todo"
        value={value}
        onChange={(e) => setValue(e.target.value)} //setting the final value after change
      />
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
