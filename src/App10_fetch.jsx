// App10_fetch.jsx
// https://jsonplaceholder.typicode.com/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

export const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    return (
        <>
            {data &&
                data.map((item) => {
                    return <p key={item.id}>{item.id} {item.name}</p>;
                })}
        </>
    );
};