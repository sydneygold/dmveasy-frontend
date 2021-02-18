import './assets/output.css';
import { useState } from 'react';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from './components/Signup';
import GetStarted from './components/GetStarted';
import Uploads from './components/Uploads';
import RenewalForm from './components/RenewalForm';
import { Route, Switch } from 'react-router-dom';

const baseURL = `http://localhost:5001/dmveasy-a82ea/us-central1/signIn`

function App() {

  const [userId, setUserId] = useState('')

  let keysToRemove = ['token', 'userId']

  const logout = () => {
    keysToRemove.forEach( key => {
      localStorage.removeItem(key);
    })
  }

  const signup = (email, password) => {
    console.log(email, password)
    fetch('http://localhost:5001/dmveasy-a82ea/us-central1/signUp', {
      method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
    })
    .then((response) => {
      console.log('signup response', response);
      return response.json();
    })
    .then((result) => {
        if(result.token){
          localStorage.setItem('token', result.token)
          setUserId(result.userId);
          localStorage.setItem('userId', result.userId);
        } else {
          return console.log('no signup for you')
        }
    });
  }
  
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
            localStorage.setItem('userId', result.userId)
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
        <Route path='/signup' render={(routerProps) => {
          return <Signup signup={signup} {...routerProps}/> 
        }} 
          />
        <Route path='/getstarted' render={(routerProps) => {
          return <GetStarted logout={logout} userId={userId} {...routerProps}/> 
        }} 
          />
        <Route path='/uploads' render={(routerProps) => {
          return <Uploads userId={userId} {...routerProps}/> 
        }} 
          />
        <Route path='/renewalform' render={(routerProps) => {
          return <RenewalForm userId={userId} {...routerProps}/> 
        }} 
          />
      </Switch>
    </div>
  );
}

export default App;
