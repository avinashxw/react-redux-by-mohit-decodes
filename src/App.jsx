import './App.css'
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {

  return (
    <>
    <Provider stpre={store}>
        <div>
          <h1>Learning Redux!</h1>
        </div>
    </Provider>
    </>
  )
}

export default App;
