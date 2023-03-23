import React from "react";

const TodoList = ({ todos, handleDelete, handleEdit, toggleComplete }) => {
  return (
    <ul className="allTodos">
      {todos.map((t) => (
        <li className="singleTodo">
          <span className="todoText" key={t.id}>
            {t.todo}
          </span>
          <button onClick={() => handleEdit(t.id)}>Edit</button>
          <button onClick={() => handleDelete(t.id)}>Delete</button>
          <button type="checkbox" checked = {t.completed } onChange={()=> toggleComplete(t.id)}></button>
          
          
          
        </li>
      ))}
    </ul>
  );
};

export default TodoList;