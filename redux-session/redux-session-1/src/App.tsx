import { useState } from 'react'
import './App.css'
import { Button } from "@/components/ui/button"
import Questions from './home/Questions'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Questions></Questions>
      <Button>Click me</Button>
    </div>
    </>
  )
}

export default App
