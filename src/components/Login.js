import React from 'react'
import logo from '../images/colorado-logo.png';

export default function Login() {
    return (
        <div className='container max-w-md mx-auto md:max-w-2xl'>
            <div className='flex justify-center logo-login'>
                <img 
                    className="h-24"
                    src={logo}
                />
            </div>
            <form 
                className='flex flex-col items-center shadow-md' 
                id='login-form'>
                <h1>Login</h1>
                <input 
                    className='w-1/2 m-5 border-b'
                    type='text'
                    placeholder='email'
                />
                <input 
                    className='w-1/2 m-5 border-b'
                    type='password'
                    placeholder='password'
                />
                <input 
                    className='rounded-full py-3 px-6 m-5'
                    type='submit'
                    value='submit'
                />
            </form>
        </div>
    )
}
