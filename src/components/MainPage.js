import React from 'react'
import logo from '../images/colorado-logo.png';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login'

export default function MainPage() {

  return (
    <>
      <header className="mainpage-header flex justify-between">
        <div className="pl-12 pt-8 pb-8 pr-12">
          <img 
            src={logo} 
            alt="Colorado logo"
            className="h-24"
          />
          <h1 className="font-serif Georgia font-black text-3xl">DMVEASY</h1>
          <p className="font-sans Roboto font-normal text-sm italic">
            Making going to the DMV easier since 2021
          </p>
        </div>
        <div className="flex items-center pl-12 pt-8 pb-8 pr-12">
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
        </div>
      </header>
      <section>
        <div className="bg-blue-700 h-full">
          <img src="https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/exp-background/2019-11/de9cba61-3eb7-40e0-a4a0-3aa523961e41.jpeg?itok=3Yf7hyME" 
          alt="City of Denver"
          className="object-cover h-80 w-full"
          />
        </div>
      </section>
      <section className="flex justify-between m-8 h-48 divide-x divide-gray-300">
        <div className="flex justify-center items-center h-full w-2/4">
          <Link to='/getstarted'>
            <button 
              className="m-4 pt-2 pb-2 pl-4 pr-4 text-white bg-blue-700 font-sans Roboto font-semibold rounded-lg">
              Get Started
            </button>
          </Link>
          <button className="m-4 pt-1 pb-1 pl-10 pr-10 text-green-700 border-4 border-solid border-green-700 font-sans Roboto font-semibold rounded-lg">
            FAQ
          </button>
        </div>
        <div className="flex justify-left flex-col pl-10 w-2/4">
        <h2 className="font-sans Roboto font-semibold">
          About Us
        </h2>
        <p className="font-sans Roboto pr-10">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.
        </p>
        </div>
      </section>
    </>
  )
}
