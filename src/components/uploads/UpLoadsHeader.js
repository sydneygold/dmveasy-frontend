import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/colorado-logo.png'

export default function UpLoadsHeader() {
    return (
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
        <Link to='/'>
          <button 
            className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
          >
            Home
          </button>
        </Link>
        </div>
      </header>
    )
}
