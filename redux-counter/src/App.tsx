 
import { useState } from "react";
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
 
import { useAppDispatch, useAppSelector } from "./redux/hooks";

 

function App() {
  const dispatch = useAppDispatch();
  const {count} = useAppSelector((state) => state.counter );
   const [amount, setAmount] = useState(0);
 

  return (
    <>
      <h1>Redux Counter</h1>
      <div className="card">
        <button  onClick={() => dispatch(increment(amount))}>Increment by + 1</button>
        <h1>  count is {count}</h1>
     <button  onClick={() => dispatch(decrement(amount))}>Decrement by + 1</button>
     <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        placeholder="Enter amount"
      />{' '}
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Increment by Amount
      </button>
      </div>
      
    </>
  )
}

export default App
