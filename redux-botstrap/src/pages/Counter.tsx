import { Button } from '@/components/ui/button'
import { decrement, increment } from '@/redux/features/Counter/counter.slice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Counter() {
  // The `state` arg is correctly typed as `RootState` already
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
        <h1>Counter Application</h1>

         <Button onClick={() => dispatch(increment())}>incremnt by +1 </Button>
         <h1>Value Here {count}</h1>
         <Button onClick={() => dispatch(decrement())}>decremnt by -1  </Button>

    </div>
  )
}
