import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
let [counter, setCounter] = useState(10)

  const addValue = () => {
 counter=counter + 1
 console.log("clicked", counter)
setCounter(counter)
    
  }
  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log(setCounter)
  }

  return (
    <>
    <h1>ki re sohom</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <button onClick={removeValue}>remove value</button>

    </>
  )
}

export default App
