import React from 'react';
import logo from '../images/colorado-logo.png';
import mountainImage from '../images/paperAirplaneAndMountains.jpg';
import { Link } from 'react-router-dom'

const GetStarted = ({logout}) => {

  const currentToken = localStorage.getItem('token')

  return (
      <div className='h-screen flex flex-col w-full'>
        <div className='h-1/6 flex justify-between'>
          <div className="pl-12 pt-8 pr-12">
            <img 
              src={logo} 
              alt="Colorado logo"
              className="h-3/4"
            />
            <h1 className="font-serif Georgia font-black text-3xl">DMVEASY</h1>
          <p className="font-sans Roboto font-normal text-sm italic">
            Making going to the DMV easier since 2021
          </p>
          </div>
          <div className="flex flex-col md:flex-row items-center pl-12 pt-2 pr-12">
            <Link to='/'>
              <button 
                className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
              >
                Home
              </button>
            </Link>
            {
              !currentToken
              ? <Link to='/login'>
                  <button 
                  className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
                  >
                  Login
                  </button>
                </Link>
              : <button 
                  onClick={logout} 
                  className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg"
                  >
                  Logout
                </button>
            }
          </div>
        </div>
        <div className='h-4/6 w-full flex flex-col md:flex-row items-center mt-2 mb-4 pt-12'>
          <img 
            src={mountainImage}
            className='object-cover h-full w-3/4'
          />
          <div className='h-full w-1/4 flex flex-col divide-y divide-gray-300 mx-4'>
            <div className="h-full w-full my-6 md:my-0 flex flex-col justify-center">
              <div className='flex justify-center'>
                <Link to='/renewalform'>
                  <button 
                    className="w-full  pt-2 pb-2 pl-16 pr-16 text-white bg-blue-700 font-sans Roboto font-semibold rounded-lg"
                    >
                    Renewal Form
                  </button>
                </Link>
              </div>
              <div className="mt-2 bg-mountain-planes ">
                <p className='pl-8 pt-8 pr-8 text-center'>
                  Fill out your Renewal form by clicking above.
                </p>
              </div>
            </div>
            <div className="h-full flex flex-col w-full justify-center py-6 md:py-0">
              <div className='w-full flex justify-center'>
                <Link to='/uploads'>
                  <button 
                    className=" pt-2 pb-2 pl-4 pr-4 text-white bg-green-700 font-sans Roboto font-semibold rounded-lg"
                    >
                    Upload Required Documents
                  </button>
                </Link>
              </div>
              <div className="mt-2">
                <p className='pl-8 pt-8 pr-8 text-center'>
                  Click above it you need to download any information to send to the DMV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default GetStarted;