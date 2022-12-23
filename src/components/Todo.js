import React from "react";

import Style from "./Todo.module.css";

function Todo(props) {
  const { title, desc } = props.todo;
  const { id } = props;

  const handleClick = (id) => {
    props.onRemoveItem(id);
  };
  return (
    <article className={Style.todo}>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div>
        <button className={Style.btn}>
          <i
            className="fa fa-trash fa-2x"
            onClick={() => {
              handleClick(id);
            }}
          ></i>
        </button>
      </div>
    </article>
  );
}

export default Todo;
