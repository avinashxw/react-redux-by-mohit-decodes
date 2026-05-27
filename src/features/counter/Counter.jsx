import CounterControl from '../../components/counter/CounterControl';
import CounterDisplay from '../../components/counter/CounterDisplay';

function Counter() {

  return (
    <>
        <div>
          <h1>Counter using Redux Toolkit!</h1>
          <CounterDisplay />
          <CounterControl />
        </div>
    </>
  )
}

export default Counter;
