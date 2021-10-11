import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deletHandler = () => {
    setTodos(todos.filter((ele) => ele.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className={`fas ${todo.completed ? "fa-times" : "fa-check"}`}></i>
      </button>
      <button onClick={deletHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;