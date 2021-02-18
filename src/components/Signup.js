import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/colorado-logo.png';

export default function Signup({signup, history}) {

    const [signupData, setSignupData] = useState({
        email: '',
        password: ''
    });

    const onChange = (event) => {
        setSignupData({...signupData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        signup(signupData.email, signupData.password)
        console.log('logged in')
        history.push('/getstarted')
    }

    return (
        <div 
            className='container max-w-md mx-auto md:max-w-2xl mt-16 h-screen'
        >
            <div className='flex justify-center logo-signup'>
                <img 
                    className="h-24"
                    src={logo}
                    alt=''
                />
            </div>
            <form 
                className='flex flex-col items-center md:shadow-md lg:shadow-md'
                id='signup-form'
                onSubmit={handleSubmit}
            >
                <h1 
                    className='font-serif Georgia font-black text-3xl p-8'
                >
                    Sign up!
                </h1>
                <div 
                    className='flex space-x-2 md:space-x-8 w-1/2 m-5'
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                    <input
                        className='border-b-4 border-gray-200 w-3/4 focus:outline-none focus:border-purple-400 transition duration-500 placeholder-grey-300'
                        type='text'
                        name='email'
                        value={signupData.email}
                        onChange={(event) => onChange(event)}
                        placeholder='email'
                    />
                </div>
                <div 
                    className='flex space-x-2 md:space-x-8 w-1/2 m-5'>
                    <FontAwesomeIcon icon={faLock} />
                    <input 
                        className='border-b-4 border-gray-200 w-3/4 focus:outline-none focus:border-purple-400 transition duration-500 placeholder-grey-300'
                        type='password'
                        name='password'
                        value={signupData.password}
                        onChange={(event) => onChange(event)}
                        placeholder='password'
                    />
                </div>
                <input 
                    className='rounded-lg py-3 px-6 m-8 bg-yellow-400 font-sans Roboto font-semibold'
                    type='submit'
                    value='submit'
                />
            </form>
        </div>
    )
}
