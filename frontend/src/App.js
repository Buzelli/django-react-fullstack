import AppBar from './components/AppBar';
import Home from './screens/Home'
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppBar />
        <Home />
      </div>
    </Provider>
    
  );
}

export default App;
