import './Counter.css'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <>
        <div>
          <h1>Redux Toolkit!</h1>
          <h2 className="counter">Current Counter: {count}</h2>
          <div className="btn-group">
            <button onClick={()=>dispatch(increment())} className="increment-btn">Increment</button>
            <button onClick={()=>dispatch(decrement())} className="decrement-btn">Decrement</button>
          </div>
        </div>
    </>
  )
}

export default Counter;
