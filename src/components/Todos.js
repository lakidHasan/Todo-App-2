import React from "react";

import Todo from "./Todo";
import Style from "./Todos.module.css";

function Todos(props) {
  return (
    <section className={Style.todos}>
      {props.todos.map((todo) => (
        <Todo
          todo={todo.todo}
          key={todo.id}
          id={todo.id}
          onRemoveItem={props.onRemoveTodo}
        />
      ))}
    </section>
  );
}

export default Todos;
