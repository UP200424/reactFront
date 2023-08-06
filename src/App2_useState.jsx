// App2_useState.jsx

import { useState } from "react";          // destructuring
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

//export function App() {
export const App = () => {    
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

    return (
        <>
            {/* <Todos todos={todos} addTodo={addTodo}/> */}
            <Todos todos={todos}/>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

