import React from 'react'
import logo from '../images/colorado-logo.png';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Login'

export default function MainPage() {

  const onClick = () => {

  }

  return (
    <>
      <header class="flex justify-between ml-12 mt-8 mb-8 mr-12">
        <div>
          <img 
            src={logo} 
            alt="Colorado logo"
            class="h-24"
          />
          <h1 class="font-serif Georgia font-black text-3xl">DMVEASY</h1>
          <p class="font-sans Roboto font-normal text-sm pl-4">
            Making going to the DMV easier since 2021
          </p>
        </div>
        <div class="flex items-center">
        <Link to='/login'>
          <button 
            class="m-4 pt-1 pb-1 pl-4 pr-4 text-white bg-yellow-400 font-sans Roboto font-semibold rounded-lg"
          >
            Login
          </button>
        </Link>
          <button class="m-4 pt-1 pb-1 pl-2 pr-2 text-white bg-yellow-400 font-sans Roboto font-semibold rounded-lg">
            Sign up
          </button>
        </div>
      </header>
      <section cl>
        <img src="https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/exp-background/2019-11/de9cba61-3eb7-40e0-a4a0-3aa523961e41.jpeg?itok=3Yf7hyME" 
        alt="City of Denver"
        class="object-cover h-80 w-full"
        />
      </section>
      <section class="flex justify-between m-8 h-48 divide-x divide-gray-300">
        <div class="flex justify-center items-center h-full w-2/4">
          <Link to='/getstarted'>
            <button 
              class="m-4 pt-1 pb-1 pl-2 pr-2 text-white bg-blue-700 font-sans Roboto font-semibold rounded-lg">
              Get Started
            </button>
          </Link>
          <button class="m-4 pt-1 pb-1 pl-9 pr-9 text-white font-sans Roboto font-semibold bg-green-700 rounded-lg">
            FAQ
          </button>
        </div>
        <div class="flex justify-left flex-col pl-10 w-2/4">
        <h2 class="font-sans Roboto font-semibold">
          About Us
        </h2>
        <p class="font-sans Roboto pr-10">
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.
        </p>
        </div>
      </section>
    </>
  )
}
