// App5_useRef.jsx   vs   useState
// useRef: Se puede utilizar para almacenar un valor mutable que no cause 
//            un re-renderizado cuando se actualice.
//         Se puede utilizar para acceder a un elemento DOM directamente.

//         useRef() only returns one item. It returns an Object called current.

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export function App() {
    const [inputValue, setInputValue] = useState("");
    //const [count, setCount] = useState(0);
    const count = useRef(0);

    const increment = () => {
        setCount((c) => c + 1);
    };

    useEffect(() => {
        //setCount((count) => count + 1)
        count.current = count.current + 1   //  We can access the count by using count.current.
    });   // todas, una, dependencia

    console.log("valor: ", count);
    return (
        <>
            <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value) }} />
            {/* <input type="text" value={inputValue} onChange={(e) => { setInputValue(e.target.value), increment() }} /> */}

            {/* <h1>Render Count: {count}</h1> */}
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

