import './assets/output.css';
import { useState } from 'react';
import MainPage from './components/MainPage';
import Login from './components/Login';
import GetStarted from './components/GetStarted';
import { Route, Switch } from 'react-router-dom';

const baseURL = `http://localhost:5001/dmveasy-a82ea/us-central1/signIn`

function App() {

  const [userId, setUserId] = useState('')

  const login = (email, password) => {
    console.log('email + password', email, password)
    fetch(baseURL, {
      method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            })
        })
      .then((response) => response.json())
      .then((result) => {
          console.log('result', result)
          if(result.token){
            console.log(result.token)
            localStorage.setItem('token', result.token)
            setUserId(result.userId)
          } else {
            return console.log('you shall not pass')
          }
      });
    }


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(routerProps) => {
          return <MainPage {...routerProps}/> 
        }} 
          />
        <Route path='/login' render={(routerProps) => {
          return <Login login={login} {...routerProps}/> 
        }} 
          />
        <Route path='/getstarted' render={(routerProps) => {
          return <GetStarted userId={userId} {...routerProps}/> 
        }} 
          />
      </Switch>
    </div>
  );
}

export default App;
