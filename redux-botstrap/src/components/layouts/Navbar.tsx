import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

 

export default function Navbar() {
  return (
   <div className="flex justify-center align-middle">
     <Link to= "/" className="font-extrabold text-4xl">Logo</Link>
     <nav className="flex space-x-8 items-center underline text-blue-200 font-bold ">
      <Link to="/users">User</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/counter">Counter</Link>

    </nav>
    <ModeToggle></ModeToggle>
   </div>
  );
}
