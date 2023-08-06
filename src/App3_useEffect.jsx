// App3_useEffect.jsx
import { useState, useEffect } from "react";          // destructuring
import ReactDOM from "react-dom/client";

export function App() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 2000);
        return () => clearTimeout(timer)   // Effect Cleanup

    // }); // Render todas las veces
    // }, []); // Render solo una vez 
    }, [count]); // Render cada vez que cambia una dependencia

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
    

    console.log("valor: ", count);
    return (
        <>
            <h1>I've rendered {count} times!</h1>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    )
}



