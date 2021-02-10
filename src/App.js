import './assets/output.css';
import MainPage from './components/MainPage';
import Login from './components/Login';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={MainPage} />
        <Route path='/login' component={Login} />
        {/* <Route path='/' component={MainPage} /> */}
      </Switch>
    </div>
  );
}

export default App;
