// App8_useCallback.jsx
// The useCallback and useMemo Hooks are similar.
// The main difference is that useMemo      returns a memoized value and 
//                             useCallback  returns a memoized function.
// useCallback: Think of memoization as caching a value so that it does not need to be recalculated.
//            * Only runs when one of its dependencies update.
// Una razón para usar useCallback es evitar que un componente se vuelva a renderizar a menos que sus props hayan cambiado.

// se podría pensar que el componente Todos no se volverá a renderizar a menos que cambien los todos
import { useState, useCallback } from "react";
import ReactDOM from "react-dom/client";
import Todos from "./Todos";

//export function App() {
export const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodoA = () => {
        setTodos((t) => [...t, "New Todo"]);
    };

    const addTodoB = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodoB} />
            <hr />
            <div>
                Count: {count} <span></span>
                <button onClick={increment}> + </button>
            </div>
        </>
    );
}
