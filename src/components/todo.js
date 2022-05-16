import { React, useState } from "react";
import ListTodos from "./list";
import "../App.css";

const Todo = (props) => {
  let [todos, setTodos] = useState([]);

  let [title, setTitle] = useState();

  const onClickHandler = () => {
    let temp = [...todos];
    temp.push(title);
    setTodos(temp);
  };

  const onChngeHandler = (event) => {
    let title = event.target.value;
    setTitle({ title: title });
  };

  const todoManager = (string) => {
    let findNRemove = { title: string };
    todos.splice(
      todos.findIndex((e) => e.title === findNRemove.title),
      1
    );
  };
  return (
    <div className="search">
      <input
        type="text"
        name="title"
        placeholder="what's your next todo"
        onChange={(e) => onChngeHandler(e)}
        className="search"
      ></input>
      <button onClick={() => onClickHandler()} className="button">
        Add New
      </button>
      <div>
        {!!todos.length && (
          <ListTodos todos={todos} todoManager={todoManager} />
        )}
      </div>
    </div>
  );
};

export default Todo;
