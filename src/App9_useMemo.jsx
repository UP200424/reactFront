// App9_useMemo.jsx
// useMemo: Think of memoization as caching a value so that it does not need to be recalculated.
//          Only runs when one of its dependencies update.
//          Returns a memoized value

import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const expensiveCalculation = (num) => {
    console.log("Calculating");
    for (let i = 0; i < 10; i++) {
        num += 1;
        console.log("Calculating...", num);        
    }
    return num;
};

export const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    // const calculation = expensiveCalculation(count);
    const calculation= useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

