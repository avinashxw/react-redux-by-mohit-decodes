import './Counter.css';
import { useSelector } from 'react-redux';

function CounterDisplay() {
    
  const count = useSelector((state) => state.counter.count);

  return (
    <>
        <div>
          <h2 className="counter">Current Counter: {count}</h2>
        </div>
    </>
  )
}

export default CounterDisplay;
