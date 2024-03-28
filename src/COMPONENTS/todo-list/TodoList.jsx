import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./todo-list.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    if (editTodo) {
      setInputValue(editTodo.title);
    } else {
      setInputValue("");
    }
  }, [setInputValue, editTodo]);

  // update todo
  const updateTodo = (title, id, completed) => {
    let newTodo = todoList.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    setTodoList(newTodo);
    setEditTodo(null);
  };

  // add todo
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!editTodo) {
      setTodoList([
        ...todoList,
        { id: uuidv4(), title: inputValue, completed: false },
      ]);
      setInputValue("");
    } else {
      updateTodo(inputValue, editTodo.id, editTodo.completed);
    }
  };
  // complete todo
  const handleComplete = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };
  // delete todo
  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  // edit todo
  const handleEditTodo = (id) => {
    setEditTodo(todoList.find((todo) => todo.id === id));
  };
  return (
    <div className="container">
      <div className="app-wrapper">
        <div className="header">
          <h1>Todo-List</h1>
        </div>
        <form onSubmit={handleAddTodo}>
          <input
            type="text"
            className="task-input"
            placeholder="Enter a todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          <button type="submit" className="button-add">
            {editTodo ? "Edit" : "Add"}
          </button>
        </form>
        <div>
          {todoList &&
            todoList.map((todo) => {
              return (
                <li className="list-item" key={todo.id}>
                  <input
                    type="text"
                    value={todo.title}
                    className={`list ${todo.completed ? "complete" : ""}`}
                    onChange={(e) => e.preventDefault()}
                  />
                  <div>
                    <button
                      className="button-complete task-button"
                      onClick={() => handleComplete(todo.id)}
                    >
                      <i className="fa fa-check-circle"></i>
                    </button>
                    <button
                      className="button-edit task-button"
                      onClick={() => handleEditTodo(todo.id)}
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                    <button
                      className="button-delete task-button"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </div>
                </li>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
