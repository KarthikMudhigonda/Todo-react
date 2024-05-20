import React, { useState } from "react";

const EditTodoForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task);//("") => allows only one line of text || ([]) => array of data
  const handleSubmit = e =>{
    e.preventDefault(); //prevents from reloading the page
    console.log(value);
    editTodo(value, task.id);
    setValue("") //clear the input
  }
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)} //setting the final value after change
      />
      <button className="todo-btn" type="submit">
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
