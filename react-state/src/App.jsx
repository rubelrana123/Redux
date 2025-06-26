 
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/features/counter/counterSlice';

export default function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter)
    const handleIncrement = (value) => {
        dispatch(increment(value))
    }
    const handleDecrement = () => {
        dispatch(decrement()); 
    }
  return (
    <div>
        <h1>Counter With Redux</h1>
        <div>
         <button onClick={() => handleIncrement(5)}>Increment + 5</button>
         <button onClick={() => handleIncrement(1)}>Increment + 1</button>

        <h1>{counter.count}</h1>
        <button onClick={handleDecrement}>Increment</button>
        </div>


    </div>
  )
}
