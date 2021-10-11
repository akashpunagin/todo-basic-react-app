import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilterTodos] = useState([]);

  useEffect(() => {
    const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoFromLocal = localStorage.getItem(
          "todos",
          JSON.stringify(todos)
        );
        setTodos(JSON.parse(todoFromLocal));
      }
    };

    getLocalTodos();
  }, []);

  useEffect(() => {
    const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    const filterHandler = () => {
      switch (filter) {
        case "completed":
          setFilterTodos(todos.filter((todo) => todo.completed));
          break;
        case "uncompleted":
          setFilterTodos(todos.filter((todo) => !todo.completed));
          break;
        default:
          setFilterTodos(todos);
          break;
      }
    };

    saveLocalTodos();
    filterHandler();
  }, [todos, filter]);

  return (
    <div className="App">
      <header>
        <h3>A Simple Todo Application</h3>
      </header>
      <Form
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        inputText={inputText}
        setFilter={setFilter}
      />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
