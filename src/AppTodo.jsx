import { useState, useEffect, useRef } from "react";
import "./App.css";
import { v4 } from "uuid";
import {TodoList} from "./components/TodoList.jsx"  
import { Divider } from "@mui/material";

export const App = () => {
  const [count, setCount] = useState(0);
  const [toDos, setToDos] = useState([
    {id: 1, task: "tarea 1", completed: false},{id: 2, task: "tarea 2", completed: false}
  ])
  const todoTaskRef = useRef()

  const increment = () => {
    setCount(toDos.length + 1)
  }

  const addToDo = () => {
    const task = todoTaskRef.current.value;
    if(!task || task === "") return;
    const newTodo = {id: v4(), task, completed: false}
    setToDos([...toDos,newTodo]);
    increment();
    todoTaskRef.current.value= null;
  }

  const deleteToDos = () => {
    const filteredToDos = toDos.filter((item)=>!item.completed);
    setToDos(filteredToDos);
    setCount(filteredToDos.length);
  }

  const toggleToDo = (id) => {
    let updatedToDos = toDos.map((item)=> {
      if (item.id == id) {
        return {...item, completed: !item.completed}
      }
      return item;
    })
  
    setToDos(updatedToDos);
    console.log(updatedToDos);
  }
  return (
  <>
    <TodoList todos={toDos} toggle={toggleToDo} />
    
    <input ref={todoTaskRef} type="text" placeholder="nueva tarea"/>
    <button onClick={addToDo}>+</button>
    <button onClick={deleteToDos}>-</button>
    <Divider/>
    <h4>
      Te quedan {toDos.filter((item)=> (!item.completed)).length} tareas por terminar
    </h4>
    <h5>
      Contador: {count}
    </h5>
  </>
  );
};
