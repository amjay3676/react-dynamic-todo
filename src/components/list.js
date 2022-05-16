import React, { useState } from "react";
import "../App.css";

const ListTodos = (props) => {
  let { todos, todoManager } = props;

  let [remove, setRemove] = useState([]);
  const checkTodos = (event) => {
    let title = event.target.value;
    let temp = [...remove];
    temp.push(title);
    setRemove(temp);
    !!title && todoManager(title);
  };

  return (
    <div className="listTodo">
      <p className="para">Please check if your task got completed!</p>

      {!!todos.length &&
        todos.map((e) => {
          return (
            <form action="">
              <input
                type="checkbox"
                id={e.title}
                name={e.title}
                value={e.title}
                onChange={(e) => checkTodos(e)}
                checked=""
              />
              <label for={e.title}>{e.title}</label>
              <br />
            </form>
          );
        })}
    </div>
  );
};

export default ListTodos;
