import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const shoot = (dato) => {
  const mensaje = dato ? "Hola" : "Adios"
  alert(mensaje);
}

function App(props) {
  const isGoal = true

  return (
    <>
      <h1>Hola Mundo Cruel {props.color}</h1>
      <button onClick={() => shoot(isGoal)}> Take the shot!</button>
    </>
  )
}

export default App
