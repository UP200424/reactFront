// App6_useRef_previous.jsx
// Valor previo
import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export function App() {
    const [InputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");  // para evitar renderizado

    useEffect(() => {
        console.log("-->", previousInputValue)
        previousInputValue.current = InputValue;
    }, [InputValue]);   // render cada vez que una dependencia se actualiza

    return (
        <>
            <input
                type="text"
                value={InputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {InputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}
