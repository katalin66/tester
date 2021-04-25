import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      //regex for empty string or string with only spaces
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    // console.log(todo, ...todos);
  };

  const upDateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      //regex for empty string or string with only spaces
      return;
    }
    setTodos(prev => prev.map(item => 
      (item.id === todoId ? newValue : item
    )));
  }

  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} upDateTodo={upDateTodo}/>
    </div>
  );
}

export default TodoList;