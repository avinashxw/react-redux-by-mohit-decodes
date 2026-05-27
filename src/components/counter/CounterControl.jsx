import './Counter.css'
import { useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../../features/counter/counterSlice';

function CounterControl() {

  const dispatch = useDispatch();

  return (
    <>
        <div>
          <div className="btn-group">
            <button onClick={()=>dispatch(increment())} className="increment-btn">Increment</button>
            <button onClick={()=>dispatch(decrement())} className="decrement-btn">Decrement</button>
            <button onClick={()=>dispatch(reset())} className="reset-btn">Reset</button>
          </div>
        </div>
    </>
  )
}

export default CounterControl;
