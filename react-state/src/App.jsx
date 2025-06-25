import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
      setCount( count  + 1)
  }
const asyncincrement = () => {
  setTimeout(() => {
      setCount((prevCount) => prevCount + 1)
     
  },3000)
}
  return (
    <>
 
      <div className="card">
        <p>Count: {count}</p>
        <button onClick={increment}>
        Increment 
        </button>
                <button onClick={asyncincrement}>
       Asunc  Increment 
        </button>
        
      </div>
 
    </>
  )
}

export default App
