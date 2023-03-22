import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
 

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  const toggleComplete = (id) => {
    const updatedTodos = [...todos].map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo
    })

     setTodos(updatedTodos)
  };

  return (
    <div className="App">
      <div className="container">
        <h1><u><i><b>Todo List</b></i></u></h1>
        <TodoForm
          handleSubmit={handleSubmit}
          todo={todo}
          editId={editId}
          setTodo={setTodo}
        />
        
        <TodoList
          todos={todos}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          
        />
        <div className="btns">
        <input 
        type="checkbox"
         onChange={() => toggleComplete(todo.id)}
         checked = {todo.completed }
         />
         </div>
      </div>
      </div>
      
    );
  
};

export default App;