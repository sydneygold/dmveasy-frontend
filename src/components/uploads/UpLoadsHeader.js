import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../images/DMVeasybannerlogo.png'

export default function UpLoadsHeader() {
    return (
        <header className="mainpage-header flex justify-between">
        <div className="pl-12 pt-8 pb-8 pr-12">
          <img 
            src={logo} 
            alt="Colorado logo"
            className="h-36"
          />
        </div>
        <div className="flex items-center pl-12 pt-8 pb-8 pr-12">
        <Link to='/getstarted'>
          <button 
            className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
          >
            Back
          </button>
        </Link>
        </div>
      </header>
    )
}
