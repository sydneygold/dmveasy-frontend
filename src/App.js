import './assets/output.css';
import { useState } from 'react';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Signup from './components/Signup';
import GetStarted from './components/GetStarted';
import Uploads from './components/uploads/Uploads';
import RenewalForm from './components/RenewalForm';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import Faq from './components/Faq'
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
    fetch('https://us-central1-dmveasy-a82ea.cloudfunctions.net/signUp', {
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
    fetch('https://us-central1-dmveasy-a82ea.cloudfunctions.net/signIn', {
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
          if(result.token){
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
          return <MainPage logout={logout} {...routerProps}/> 
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
        <Route path='/faq' render={(routerProps) => {
          return <Faq logout={logout} userId={userId} {...routerProps}/> 
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
      <Footer/>
    </div>
  );
}
export default App;