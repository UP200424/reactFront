// App4_useContext.jsx
// React Context is a way to manage state globally.

import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UsuarioContext = createContext()

export function App() {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UsuarioContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <Component2 />
      </UsuarioContext.Provider>
    );
}

function Component2() {
    return (
      <>
        <h1>Component 2</h1>
        <Component3 />
      </>
    );
  }
  
  function Component3() {
    return (
      <>
        <h1>Component 3</h1>
        <Component4 />
      </>
    );
  }
  
  function Component4() {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 />
      </>
    );
  }
  
  function Component5() {
    const usuario = useContext(UsuarioContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${usuario} again!`}</h2>
      </>
    );
  }