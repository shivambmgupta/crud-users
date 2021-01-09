import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import PersistedStore from './store/store';
import "antd/dist/antd.css";

function App() {
  return (
    <Provider store={PersistedStore.getDefaultStore().store}>
    <Router>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
    </Router>
    </Provider>
  );
}

export default App;
