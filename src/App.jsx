import './App.css';
import Counter from './features/counter/Counter';
import AuthDisplay from './components/auth/AuthDisplay';
import AuthControl from './components/auth/AuthControl';
import User from './components/users/User';

const App = () => {
  return (
    <>
      <Counter />
      <AuthDisplay />
      <AuthControl />
      <User />
    </>
  );
}

export default App;