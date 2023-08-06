import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, toggle}) => {
  console.log("render list");
  return (
    <>
      <h2>Lista de pendientes</h2>
      <ul>
        {todos.map((toDo) => (
            <TodoItem key={toDo.id} item={toDo} toggle={toggle}/>
        ))}
      </ul>
    </>
  );
};
