import './App.css';
import Counter from './features/counter/Counter';
import AuthDisplay from './components/auth/AuthDisplay';
import AuthControl from './components/auth/AuthControl';

const App = () => {
  return (
    <>
      <Counter />
      <AuthDisplay />
      <AuthControl />
    </>
  );
}

export default App;