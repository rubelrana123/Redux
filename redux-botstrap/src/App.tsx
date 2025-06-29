 
import Navbar from "./components/layouts/Navbar"
import { Outlet } from "react-router"

function App() {
  return (
    <>
      <Navbar/>
      <Outlet></Outlet>
  
    </>
  )
}

export default App