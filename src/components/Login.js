import React from 'react'
import logo from '../images/colorado-logo.png';

export default function Login() {
    return (
        <div className='main-login'>
            <div className='logo-login'>
                <img 
                    src={logo}
                />
            </div>
            <form id='login-form'>
                <input 
                    type='text'
                    placeholder='email'
                />
                <input 
                    type='password'
                    placeholder='password'
                />
                <input 
                    type='submit'
                    value='submit'
                />
            </form>
        </div>
    )
}
