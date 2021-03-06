import React from 'react'
import logo from '../images/DMVeasybannerlogo.png';
import { Link } from 'react-router-dom';

export default function MainPage({logout}) {

  const currentToken = localStorage.getItem('token')

  return (
    <div className='h-screen w-full'>
      <header className="mainpage-header h-1/4 flex justify-between">
        <div className="pl-12 pt-8 pb-8 pr-12">
          <img 
            src={logo} 
            alt="Colorado logo"
            className="h-36"
            />
        </div>
        <div className="flex items-center pl-12 pt-8 pb-8 pr-12">
        {
          !currentToken
          ? <> 
              <Link to='/login'>
                <button 
                className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
                >
                Login
                </button>
              </Link>
              <Link to='/signup'>
              <button 
                className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
                >
                Sign up
              </button>
              </Link>
            </>
          : 
          <Link>
            <button 
              onClick={logout} 
              className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
            >
              Logout
            </button>
          </Link>
        }
        </div>
      </header>
      <section>
        <div className="bg-blue-700 h-1/3">
          <img src="https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/exp-background/2019-11/de9cba61-3eb7-40e0-a4a0-3aa523961e41.jpeg?itok=3Yf7hyME" 
          alt="City of Denver"
          className="object-cover h-80 w-full"
          />
        </div>
      </section>
      <section className="flex justify-between m-8 h-1/4 divide-x mb-12 divide-gray-300">
        <div className="flex justify-center items-center h-full w-2/4">
          <Link to='/getstarted'>
            <button 
              className="m-4 pt-2 pb-2 pl-4 pr-4 text-white bg-blue-700 font-sans Roboto font-semibold rounded-lg">
              Get Started
            </button>
          </Link>
          <Link to='/faq'>
            <button className="m-4 pt-1 pb-1 pl-10 pr-10 text-green-700 border-4 border-solid border-green-700 font-sans Roboto font-semibold rounded-lg">
              FAQ
            </button>
          </Link>
        </div>
        <div className="flex justify-left flex-col pl-10 w-2/4">
        <h2 className="font-sans Roboto font-semibold">
          About Us
        </h2>
        <p className="font-sans Roboto pr-10 mb-12">
          Welcome to DMVeasy, the newest way to make your day a little easier. It’s an easy way to make sure all your paperwork is in order before heading to the DMV! All you have to do is sign up, submit photos of all your required documents and fill out one form. After you’ve uploaded all of this information a DMV employee will make sure everything is in order before approving your appointment. Never get sent home for more paperwork from the DMV again!        </p>
        </div>
      </section>
    </div>
  )
}
