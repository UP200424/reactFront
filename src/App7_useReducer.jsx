// App7_useReducer.jsx
// useReducer(<reducer>, <initialstate>). It's similar to the useState Hook.
//    Permite una lógica de state personalizada.
//    Si te encuentras realizando un seguimiento de múltiples piezas de state 
//       que dependen de la lógica compleja, useReducer puede ser útil.

import { useReducer } from "react";
import ReactDOM from "react-dom/client";

const initialTodos = [
    { id: 1, title: "Todo 1", complete: false, },
    { id: 2, title: "Todo 2", complete: false, },
    { id: 3, title: "Todo 3", complete: false, },
];

// state  -> "todos" antes de modificar
// action -> {type: 'COMPLETE', id: 2}  registro a modificar 
const reducer = (state, action) => {
    let a = 0
    switch (action.type) {
        case "COMPLETE":
            return state.map((todo) => {    // Ejecuta todos los renglones del arreglo json
                a+=1
                console.log(a)
                if (todo.id === action.id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            });
        default:
            console.log("No pasa por aqui")
            return state;
    }
};

export function App() {
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });   // action
    };

    console.log("render")
    return (
        <>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <input type="checkbox" checked={todo.complete}
                        onChange={() => handleComplete(todo)}
                    /> {todo.title}
                </div>
            ))}
        </>
    );
}    
