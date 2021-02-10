import './assets/output.css';
import MainPage from './components/MainPage';
import Login from './components/Login';
import GetStarted from './components/GetStarted';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(routerProps) => {
          return <MainPage {...routerProps}/> 
        }} 
          />
        <Route path='/login' render={(routerProps) => {
          return <Login {...routerProps}/> 
        }} 
          />
        <Route path='/getstarted' render={(routerProps) => {
          return <GetStarted {...routerProps}/> 
        }} 
          />
      </Switch>
    </div>
  );
}

export default App;
